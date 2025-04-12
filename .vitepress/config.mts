/**
 * Copyright (c) 2025
 *   All rights reserved.
 *
 * @format
 */

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
			{
				text: "Eerste bezoek",
				items: [
					{ text: "Karakterkiezer", link: "/karakterkiezer" },
					{ text: "Je appartement", link: "/appartement" },
					{ text: "Startersauto", link: "/startersauto" },
				],
			},
			{
				text: "Belangrijke mechanics",
				items: [
					{ text: "Parkeren", link: "/parkeren" },
					{ text: "De bank", link: "/bank" },
					{ text: "Het depot", link: "/depot" },
					//{ text: "Tanken", link: "/tanken" },
				],
			},
			{
				text: "Werk & Vrijetijd",
				items: [
					{ text: "Casino", link: "/casino" },
					//{ text: "Geocache", link: "/geocache" },
					//{ text: "Schatzoeken", link: "/schatzoeken" },
				],
			},
			{
				text: "Hulpdiensten",
				items: [
					{ text: "Politie", link: "/politie" },
					{ text: "Ambulance", link: "/ambulance" },
					{ text: "Mechanic", link: "/mechanic" },
				],
			},
			{
				text: "Wetgeving & Regels",
				items: [
					{ text: "Wetgeving", link: "/wetboek" },
					{
						text: "Regels",
						link: "https://docs.google.com/document/d/1E5uJpI4kiDSeplWGKEwJ475EkW5C9O8tqX3W4oS1dqs/edit?usp=sharing",
					},
				],
			},
			{
				text: "Developers",
				items: [
					{
						text: "Articca",
						items: [{ text: "Vulpic", link: "/devs/articca/vulpic" }],
					},
				],
			},
		],

		sidebar: [
			{
				text: "Algemeen",
				items: [{ text: "Overzicht", link: "/overzicht" }],
			},
			{
				text: "Eerste bezoek",
				items: [
					{ text: "Karakterkiezer", link: "/karakterkiezer" },
					{ text: "Je appartement", link: "/appartement" },
					{ text: "Startersauto", link: "/startersauto" },
				],
			},
			{
				text: "Belangrijke mechanics",
				items: [
					{ text: "Parkeren", link: "/parkeren" },
					{ text: "De bank", link: "/bank" },
					{ text: "Het depot", link: "/depot" },
					//{ text: "Tanken", link: "/tanken" },
				],
			},
			{
				text: "Werk & Vrijetijd",
				items: [
					{ text: "Casino", link: "/casino" },
					//{ text: "Geocache", link: "/geocache" },
					//{ text: "Schatzoeken", link: "/schatzoeken" },
				],
			},
			{
				text: "Hulpdiensten",
				items: [
					{ text: "Politie", link: "/politie" },
					{ text: "Ambulance", link: "/ambulance" },
					{ text: "Mechanic", link: "/mechanic" },
				],
			},
			{
				text: "Wetgeving & Regels",
				items: [
					{ text: "Wetgeving", link: "/wetboek" },
					{
						text: "Regels",
						link: "https://docs.google.com/document/d/1E5uJpI4kiDSeplWGKEwJ475EkW5C9O8tqX3W4oS1dqs/edit?usp=sharing",
					},
				],
			},
			{
				text: "Developers",
				items: [
					{
						text: "Articca",
						items: [{ text: "Vulpic", link: "/devs/articca/vulpic" }],
					},
				],
			},
		],

		socialLinks: [
			{ icon: "discord", link: "https://discord.gg/4SKDnS6jKU" },
			{
				icon: "github",
				link: "https://github.com/RadiantFiveM/wiki",
			},
		],

		search: {
			provider: "local",
		},
		editLink: {
			pattern: "https://github.com/RadiantFiveM/wiki/edit/main/:path",
		},

		footer: {
			message:
				"Radiant Roleplay is niet gelieerd aan of goedgekeurd door Take-Two Interactive, Rockstar North of enige andere rechthebbende. Alle gebruikte handelsmerken zijn eigendom van hun respectievelijke eigenaren.",
			copyright: `© ${new Date().getFullYear()} Radiant Roleplay`,
		},
	},

	lastUpdated: true,

	markdown: {
		// options for @mdit-vue/plugin-toc
		// https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
		toc: { level: [2, 3, 4, 5, 6] },
	},
});
