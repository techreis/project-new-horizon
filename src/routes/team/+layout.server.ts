// +layout.server.ts
import type { EngineerProfile } from '$lib/types';
import { readdir, readFile } from 'fs/promises';
import yaml from 'js-yaml';
import { join } from 'path';
import type { LayoutServerLoad } from './$types';

type EngineerProfileCollection = {
	[filename: string]: EngineerProfile;
};

// FIXME: This is a suggested way to load YAML data
// however I think structurally it doesn't feel great to use as arrays became named properties
// Revisit the way this is done at some point
export const load = (async ({ setHeaders }) => {
	const yamlDir = 'src/_yaml';

	setHeaders({
		'Cache-Control': 'max-age=3600, public',
		'Surrogate-Control': 'max-age=3600'
	});

	try {
		const files = await readdir(yamlDir);
		const yamlFiles = files.filter((file) => file.endsWith('.yml') || file.endsWith('.yaml'));

		const profilesData = await Promise.all(
			yamlFiles.map(async (filename) => {
				const filePath = join(yamlDir, filename);
				const content = await readFile(filePath, 'utf8');
				return {
					name: filename,
					content: yaml.load(content) as EngineerProfile
				};
			})
		);

		const profiles: EngineerProfileCollection = Object.fromEntries(
			profilesData.map(({ name, content }) => [name.replace(/\.(yml|yaml)$/, ''), content])
		);

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
