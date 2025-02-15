/** @format */

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	head: [
		["link", { rel: "icon", href: "/flames.svg", type: "image/svg+xml" }],
		["meta", { name: "description", content: "De casual maar diepgaande RP server" }],
	],

	title: "RadiantRP Wiki",
	description: "De casual maar diepgaande RP server",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Wiki", link: "/wiki-src/w-welkom" },
		],

		sidebar: [
			{
				text: "Algemeen",
				items: [
					{ text: "Overzicht", link: "/wiki-src/w-welkom" },
				],
			},
			{
				text: "Eerste bezoek",
				items: [
					{ text: "Karakterkiezer", link: "/wiki-src/w-karakterkiezer" },
				]
			},
		],

		socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
	},
});
