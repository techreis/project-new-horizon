import type { EngineerProfile } from '$lib/types';
import { readdir, readFile } from 'node:fs/promises';
import yaml from 'js-yaml';
import { join } from 'node:path';
import type { LayoutServerLoad } from './$types';
import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { env } from '$env/dynamic/public';

type EngineerProfileCollection = {
	[filename: string]: EngineerProfile;
};

async function loadFromS3(): Promise<EngineerProfileCollection> {
	const bucketName = env.PUBLIC_S3_BUCKET_NAME;
	const region = env.PUBLIC_S3_REGION || 'us-east-1';

	if (!bucketName) {
		throw new Error('S3 bucket not configured');
	}

	const s3Client = new S3Client({ region });

	// List all YAML files in the bucket
	const listCommand = new ListObjectsV2Command({
		Bucket: bucketName
	});

	const listResponse = await s3Client.send(listCommand);
	const yamlFiles =
		listResponse.Contents?.filter(
			(obj) => obj.Key && (obj.Key.endsWith('.yml') || obj.Key.endsWith('.yaml'))
		) || [];

	// Fetch each YAML file
	const profilesData = await Promise.all(
		yamlFiles.map(async (obj) => {
			const getCommand = new GetObjectCommand({
				Bucket: bucketName,
				Key: obj.Key
			});

			const response = await s3Client.send(getCommand);
			const content = await response.Body?.transformToString();

			if (!content) {
				throw new Error(`Failed to read ${obj.Key}`);
			}

			return {
				name: obj.Key!,
				content: yaml.load(content) as EngineerProfile
			};
		})
	);

	return Object.fromEntries(
		profilesData.map(({ name, content }) => [name.replace(/\.(yml|yaml)$/, ''), content])
	);
}

async function loadFromLocalFiles(): Promise<EngineerProfileCollection> {
	const yamlDir = 'src/_yaml';

	const files = await readdir(yamlDir);
	const yamlFiles = files.filter(
		(file: string) => file.endsWith('.yml') || file.endsWith('.yaml')
	);

	const profilesData = await Promise.all(
		yamlFiles.map(async (filename: string) => {
			const filePath = join(yamlDir, filename);
			const content = await readFile(filePath, 'utf8');
			return {
				name: filename,
				content: yaml.load(content) as EngineerProfile
			};
		})
	);

	return Object.fromEntries(
		profilesData.map(({ name, content }: { name: string; content: EngineerProfile }) => [
			name.replace(/\.(yml|yaml)$/, ''),
			content
		])
	);
}

export const load = (async ({ setHeaders }) => {
	setHeaders({
		'Cache-Control': 'max-age=3600, public',
		'Surrogate-Control': 'max-age=3600'
	});

	try {
		// Try S3 first, fallback to local files
		let profiles: EngineerProfileCollection;

		if (env.PUBLIC_S3_BUCKET_NAME) {
			try {
				profiles = await loadFromS3();
			} catch (s3Error) {
				console.warn('S3 loading failed, falling back to local files:', s3Error);
				profiles = await loadFromLocalFiles();
			}
		} else {
			profiles = await loadFromLocalFiles();
		}

		return {
			profiles
		};
	} catch (error) {
		console.error('Error reading engineer profiles:', error);
		return {
			profiles: {} as EngineerProfileCollection,
			error: 'Failed to load engineer profiles'
		};
	}
}) satisfies LayoutServerLoad;

export type LayoutData = {
	profiles: EngineerProfileCollection;
	error?: string;
};
