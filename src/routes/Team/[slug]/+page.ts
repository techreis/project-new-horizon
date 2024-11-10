// src/routes/Team/[slug]/+page.ts
export function load({ params }) {
	return {
		slug: params.slug
	};
}
