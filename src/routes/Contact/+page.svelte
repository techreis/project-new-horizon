<script lang="ts">
	import { zod } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import { contactSchema } from './schema';

	let { data }: { data: PageData } = $props();
	let hasConsented = $state(false);

	const { form, errors, enhance } = superForm(data.form, {
		validators: zod(contactSchema),
		resetForm: false,
		onUpdate({ form, result }) {
			if (result?.type === 'success') {
				if (result.data?.success) {
					alert('Form submitted successfully!');
					// Only reset the form on successful submission
				}
			}
		},
		onError({ result }) {
			console.error('Form submission error:', result.error);
			alert('Failed to submit form. Please try again.');
		}
	});
</script>

<div class="mx-auto max-w-4xl px-4 py-16">
	<h1 class="mb-6 text-center text-4xl font-bold text-indigo-900">Want to learn more?</h1>

	<p class="mx-auto mb-12 max-w-2xl text-center text-gray-600">
		Have questions or curious about how we can help? Drop us a message! Whether you're looking for
		solutions, partnerships, or just want to say hello, we'd love to hear from you. Let's explore
		how we can work together to create something amazing.
	</p>

	<form method="POST" class="grid gap-4 md:grid-cols-2" use:enhance>
		<div class="relative">
			<label for="name">
				Name
				<input
					type="text"
					name="name"
					bind:value={$form.name}
					placeholder="Name"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				/>
				{#if $errors.name}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.name}
					</span>
				{/if}
			</label>
		</div>

		<div class="relative">
			<label for="email">
				Email
				<input
					type="email"
					name="email"
					bind:value={$form.email}
					placeholder="Email"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				/>
				{#if $errors.email}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.email}
					</span>
				{/if}
			</label>
		</div>

		<div class="relative">
			<label for="contactNumber">
				Contact Number
				<input
					type="text"
					name="contactNumber"
					bind:value={$form.contactNumber}
					placeholder="Contact Number"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				/>
				{#if $errors.contactNumber}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.contactNumber}
					</span>
				{/if}
			</label>
		</div>

		<div class="relative">
			<label for="company">
				Company
				<input
					type="text"
					name="company"
					bind:value={$form.company}
					placeholder="Company *"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				/>
				{#if $errors.company}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.company}
					</span>
				{/if}
			</label>
		</div>

		<div class="relative md:col-span-2">
			<label for="subject">
				Subject
				<input
					type="text"
					name="subject"
					bind:value={$form.subject}
					placeholder="Subject *"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				/>
				{#if $errors.subject}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.subject}
					</span>
				{/if}
			</label>
		</div>

		<div class="relative md:col-span-2">
			<label for="message">
				Message
				<textarea
					bind:value={$form.message}
					name="message"
					placeholder="Comments/Questions"
					class="w-full rounded p-2 ring-1 ring-gray-500 focus-within:ring-primary focus-visible:ring-2"
				></textarea>
				{#if $errors.message}
					<span class="absolute -bottom-5 left-0 text-sm text-red-500">
						{$errors.message}
					</span>
				{/if}
			</label>
		</div>

		<div class="md:col-span-2">
			<label class="flex items-center gap-2">
				<input type="checkbox" bind:checked={hasConsented} class="rounded" />
				<span class="text-sm"> I consent to my submitted data being collected and stored </span>
			</label>
		</div>

		<button
			type="submit"
			disabled={!hasConsented}
			class="btn btn-primary rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-blue-700/50 disabled:text-white/50 md:col-span-2"
		>
			Submit
		</button>
	</form>
</div>
