---
layout: doc

title: Vulpic
description: De Taal van de Slimme Vossen
---

<!-- @format -->

<script setup>
	import VulpicConverter from './VulpicConverter.vue'
</script>

# Vulpic: De Taal van de Slimme Vossen

Vulpic is het schriftelijke en numerieke systeem dat is ontwikkeld door een oude soort van hoogintelligente, vosachtige wezens. Deze wezens, bekend om hun scherpe geest, aanpassingsvermogen en probleemoplossend vermogen, creëerden een schrift dat hun vloeiende, behendige bewegingen en natuurlijke sluwheid weerspiegelt.

[[toc]]

---

## Schrijfsysteem

Vulpic is een uniek, fonetisch schrift dat bestaat uit **gebogen, vloeiende letters** die de snelheid van de beweging van een vos nabootsen. Het is **onderscheidend van menselijke alfabetten**, waarbij rigide geometrische vormen worden vermeden ten gunste van natuurlijke, organische streken. Elk teken vertegenwoordigt een enkel geluid, waardoor het gemakkelijk is om efficiënt te lezen en te schrijven.

-   **Schrijfrichting:** Van links naar rechts, zoals veel menselijke schriften.
-   **Spatiëring:** Woorden worden gescheiden door een kleine **gebogen markering** (`⟃`).
-   **Interpunctie:** Zinnen eindigen met een kleine **zwevende punt** (`·`).

---

## Alfabet Mapping

| Engels | Vulpic Letter |
| ------ | ------------- |
| A      | 𐑨             |
| B      | 𐑚             |
| C      | 𐑒             |
| D      | 𐑢             |
| E      | 𐑧             |
| F      | 𐑸             |
| G      | 𐑦             |
| H      | 𐑤             |
| I      | 𐑩             |
| J      | 𐑠             |
| K      | 𐑘             |
| L      | 𐑣             |
| M      | 𐑛             |
| N      | 𐑝             |
| O      | 𐑪             |
| P      | 𐑟             |
| Q      | 𐑖             |
| R      | 𐑗             |
| S      | 𐑕             |
| T      | 𐑔             |
| U      | 𐑮             |
| V      | 𐑑             |
| W      | 𐑡             |
| X      | 𐑥             |
| Y      | 𐑙             |
| Z      | 𐑞             |

---

## Numeriek Systeem (Basis-9)

Vulpic gebruikt een **basis-9** tel systeem, beïnvloed door het geloof dat de intelligentie van een vos groeit met de leeftijd en ervaring, waarbij het getal negen het symbolische hoogtepunt van wijsheid is.

| Nummer | Vulpic Symbool | Betekenis                                 |
| ------ | -------------- | ----------------------------------------- |
| 0      | ◌̥              | Het Leegte van de Bedrieger (niet geteld) |
| 1      | 𐑁              | Eerste pootafdruk                         |
| 2      | 𐑂              | Twee klauwafdrukken                       |
| 3      | 𐑃              | Drie staarten                             |
| 4      | 𐑄              | Vier snorharen                            |
| 5      | 𐑅              | Vijf-vacht veeg                           |
| 6      | 𐑆              | Zes staarten die draaien                  |
| 7      | 𐑇              | Zeven lagen van gedachten                 |
| 8      | 𐑈              | Zonsverduistering van wijsheid            |

---

## Speciale Teken Mapping

Om volledig te functioneren als een schrijfsysteem, bevat Vulpic interpunctie- en opmaaktekens:

| Symbool | Vulpic Equivalent | Betekenis         |
| ------- | ----------------- | ----------------- |
| .       | `·`               | Zinsafsluiting    |
| ,       | `،`               | Korte Pauze       |
| :       | `꞉`               | Uitgebreide Pauze |
| ;       | `⁏`               | Lijstscheiding    |
| ?       | `⸮`               | Vraagteken        |
| !       | `ǃ`               | Uitroepteken      |
| " "     | `« »`             | Aanhalingstekens  |
| '       | `ˈ`               | Zachte Emfase     |
| ( )     | `〔 〕`           | Haakjes           |
| -       | `⸗`               | Koppelteken       |
| …       | `⋯`               | Ellipsen          |
| Spatie  | `⟃`               | Woordseparator    |

---

## Culturele Betekenis

Vulpic werd ontwikkeld als een **hulpmiddel voor het vastleggen van kennis, het in kaart brengen van terrein en het doorgeven van strategieën**, eerder dan voor decoratieve of mystieke doeleinden. Het weerspiegelt de **logische maar aanpassingsvermogen van de vossen**, waardoor duidelijke communicatie mogelijk is zonder onnodige complexiteit.

Het schrift wordt vaak **geëtst in schors, in steen gekerfd of in de aarde geschreven**, aangezien de vossen de voorkeur geven aan natuurlijke materialen boven kunstmatige. Hun aantekeningen bevatten meestal **jachttechnieken, strategische plannen en observaties van de wereld om hen heen**.

---

## Voorbeeldzin

**"Een wijze vos ziet altijd meer dan hij spreekt."**

```
𐑧 𐑧 𐑝 ⟃ 𐑡 𐑩 𐑠 𐑞 𐑧 ⟃ 𐑑 𐑪 𐑕 ⟃ 𐑞 𐑩 𐑧 𐑔 ⟃ 𐑨 𐑣 𐑔 𐑩 𐑠 𐑢 ⟃ 𐑛 𐑧 𐑧 𐑗 ⟃ 𐑢 𐑨 𐑝 ⟃ 𐑤 𐑩 𐑠 ⟃ 𐑕 𐑟 𐑗 𐑧 𐑧 𐑘 𐑔 ·
```

Dit document biedt alle noodzakelijke componenten om Vulpic als een volledig functionerend schrijfsysteem te gebruiken.

---

## Vulpic Vertaler

::: warning LET OP
De Vulpic vertaler is een experimentele functie en kan fouten bevatten.<br />
Een bekende fout is dat kommagetalen niet correct worden vertaald.
:::

<VulpicConverter />
