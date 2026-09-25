// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Getting Things Done',
			description: 'A 1-month focus and productivity course. 5 minutes a day, 4 weeks.',
			sidebar: [
				{ label: 'Welcome', link: '/' },
				{ label: 'Weeks', items: [{ autogenerate: { directory: 'weeks' } }] },
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				MarkdownContent: './src/components/MarkdownContent.astro',
				Footer: './src/components/Footer.astro',
			},
		}),
	],
});
