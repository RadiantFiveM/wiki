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
			{ text: "Wiki", link: "/overzicht" },
		],

		sidebar: [
			{
				text: "Algemeen",
				items: [
					{ text: "Overzicht", link: "/overzicht" },
				],
			},
			{
				text: "Eerste bezoek",
				items: [
					{ text: "Karakterkiezer", link: "/karakterkiezer" },
					{ text: "Je appartement", link: "/appartement"},
					{ text: "Startersauto", link: "/startersauto"}
				]
			},
		],

		socialLinks: [
			{ icon: "discord", link: "https://discord.gg/4SKDnS6jKU" }
		],
	},
});
