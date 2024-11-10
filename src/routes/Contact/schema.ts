// schema.ts
import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	email: z.string().email('Invalid email address'),
	contactNumber: z
		.string()
		.regex(/^\+?(\(?\d{1,3}\)?[\s-]?)?(\(?\d+\)?[\s-]?)+$/, 'Invalid phone number'),
	company: z.string().min(1, 'Company is required'),
	subject: z.string().min(5, 'Subject must be at least 5 characters'),
	message: z.string().min(1, 'Message is required')
});

export type ContactSchema = typeof contactSchema._type;
