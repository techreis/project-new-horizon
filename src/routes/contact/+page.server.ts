import { env } from '$env/dynamic/private';
import { fail } from '@sveltejs/kit';
import sanitizeHtml from 'sanitize-html'; // For XSS prevention
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from 'sveltekit-superforms/server';
import { contactSchema } from './schema';

export const load = async () => {
	const form = await superValidate(zod(contactSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			console.log('Validation failed:', form.errors); // Debug Log
			return fail(400, { form });
		}

		// Sanitize input
		const sanitizedData = {
			...form.data,
			comments: form.data.message ? sanitizeHtml(form.data.message) : '',
			subject: sanitizeHtml(form.data.subject)
		};

		try {
			console.log('Sanitized data:', sanitizedData); // Debug log
			fetch(`${env.CONTACT_FORM_API}`, {
				method: 'POST',
				body: JSON.stringify(sanitizedData),
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				}
			});

			return {
				form,
				success: true
			};
		} catch (error) {
			console.error('Server error:', error); // Debug log
			return fail(500, {
				form,
				error: 'Failed to submit form'
			});
		}
	}
};
