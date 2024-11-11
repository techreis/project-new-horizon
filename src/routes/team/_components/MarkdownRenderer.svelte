<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	export let content: string = '';

	// Configure marked options if needed
	marked.setOptions({
		breaks: true, // Render line breaks as <br>
		gfm: true // GitHub Flavored Markdown
	});

	// Convert markdown to HTML and sanitize
	$: sanitizedHtml = DOMPurify.sanitize(marked.parse(content));
</script>

// MarkdownRenderer.svelte
<div class="markdown-content">
	{@html sanitizedHtml}
</div>

<style>
	.markdown-content :global(h1) {
		@apply mb-4 mt-6 text-3xl font-bold;
	}

	.markdown-content :global(h2) {
		@apply mb-3 mt-5 text-2xl font-bold;
	}

	.markdown-content :global(h3) {
		@apply mb-2 mt-4 text-xl font-bold;
	}

	.markdown-content :global(p) {
		@apply mb-4;
	}

	.markdown-content :global(ul) {
		@apply mb-4 list-disc pl-6;
	}

	.markdown-content :global(ol) {
		@apply mb-4 list-decimal pl-6;
	}

	.markdown-content :global(li) {
		@apply mb-1;
	}

	.markdown-content :global(a) {
		@apply text-blue-600 hover:underline;
	}

	.markdown-content :global(blockquote) {
		@apply my-4 border-l-4 border-gray-300 pl-4 italic;
	}

	.markdown-content :global(code) {
		@apply rounded bg-gray-100 px-1 py-0.5 font-mono text-sm;
	}

	.markdown-content :global(pre) {
		@apply mb-4 overflow-x-auto rounded-lg bg-gray-100 p-4;
	}

	.markdown-content :global(pre code) {
		@apply bg-transparent p-0;
	}

	.markdown-content :global(hr) {
		@apply my-6 border-t border-gray-300;
	}

	.markdown-content :global(table) {
		@apply mb-4 w-full border-collapse;
	}

	.markdown-content :global(th),
	.markdown-content :global(td) {
		@apply border border-gray-300 p-2;
	}

	.markdown-content :global(th) {
		@apply bg-gray-100;
	}
</style>
