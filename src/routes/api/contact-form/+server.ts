import { json } from '@sveltejs/kit';
import { contactSchema } from '../../Contact/schema';

export async function POST({ request }) {
	const formData = await request.formData();
	const rawData = Object.fromEntries(formData);
	const parsedData = contactSchema.safeParse(rawData);

	if (!parsedData.success) {
		// Return validation errors if data is invalid
		return json({ success: false, errors: parsedData.error.format() }, { status: 400 });
	}

	// Process the validated data here (e.g., save to database)
	console.log('Form data:', parsedData.data);

	return json({ success: true });
}
