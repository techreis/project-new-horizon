import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import sanitizeHtml from 'sanitize-html';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';
import { contactSchema, type ContactSchema } from './schema';

export const load: PageServerLoad = async () => {
	// @ts-expect-error - Known zod/superforms type compatibility issue
	const form = await superValidate(zod(contactSchema));
	return { form };
};

export const actions: Actions = {
	default: async ({ request }) => {
		// @ts-expect-error - Known zod/superforms type compatibility issue
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			console.log('Validation failed:', form.errors);
			return fail(400, { form });
		}

		const data = form.data as ContactSchema;

		// Sanitize input
		const sanitizedData = {
			...data,
			comments: data.message ? sanitizeHtml(data.message) : '',
			subject: sanitizeHtml(data.subject)
		};

		try {
			console.log('Sanitized data:', sanitizedData);
			fetch(`${env.CONTACT_FORM_API}`, {
				method: 'POST',
				body: JSON.stringify(sanitizedData),
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
			});

			return message(form, 'Form submitted successfully!');
		} catch (error) {
			console.error('Server error:', error);
			return fail(500, {
				form,
				error: 'Failed to submit form'
			});
		}
	}
};
