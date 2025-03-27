<!-- @format -->

/* * Copyright (c) 2025 Foxxite | Articca * All rights reserved. */

<template>
	<div class="vulpic-converter">
		<div>
			<label for="inputText">Input Tekst</label>
			<textarea v-model="inputText" id="inputText" rows="4" cols="50"></textarea>
		</div>
		<div class="buttons">
			<button @click="convertToVulpic">Vertaal naar Vulpic</button>
			<button @click="convertToEnglish">Vertaal naar Nederlands</button>
		</div>
		<div>
			<label for="outputText">Vertaalde Tekst</label>
			<textarea v-model="outputText" id="outputText" rows="4" cols="50" readonly></textarea>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            inputText: "",
            outputText: "",
            // Move vulpicAlphabet to the data section
            vulpicAlphabet: {
                "𐑨": "a",
                "𐑚": "b",
                "𐑒": "c",
                "𐑢": "d",
                "𐑧": "e",
                "𐑸": "f",
                "𐑦": "g",
                "𐑤": "h",
                "𐑩": "i",
                "𐑠": "j",
                "𐑘": "k",
                "𐑣": "l",
                "𐑛": "m",
                "𐑝": "n",
                "𐑪": "o",
                "𐑟": "p",
                "𐑖": "q",
                "𐑗": "r",
                "𐑕": "s",
                "𐑔": "t",
                "𐑮": "u",
                "𐑑": "v",
                "𐑡": "w",
                "𐑥": "x",
                "𐑙": "y",
                "𐑞": "z",
                "◌̥": "0",
                "𐑁": "1",
                "𐑂": "2",
                "𐑃": "3",
                "𐑄": "4",
                "𐑅": "5",
                "𐑆": "6",
                "𐑇": "7",
                "𐑈": "8",
                "·": ".",
                "，": ",",
                "꞉": ":",
                "⁏": ";",
                "⸮": "?",
                "ǃ": "!",
                "« »": '"',
                ˈ: "'",
                "〔": "(",
                "〕": ")",
                "⸗": "-",
                "⋯": "...",
                "⟃": " ",
            },
        };
    },
    methods: {
        // Vulpic to English conversion
        vulpicToEnglish(vulpicText) {
            let englishText = vulpicText
                .split("⟃")
                .map((word) => {
                    let result = "";
                    for (let char of word) {
                        if (this.vulpicAlphabet[char]) {
                            result += this.vulpicAlphabet[char];
                        }
                    }
                    return result;
                })
                .join(" ");

            englishText = englishText.replace(/([.!?])\s*(\w)/g, (match, p1, p2) => p1 + " " + p2.toUpperCase());
            englishText = englishText.charAt(0).toUpperCase() + englishText.slice(1);

            englishText = englishText.replace(/\b[0-8]+\.\d*\b/g, (match) => {
                return parseFloat(match, 9).toString(10);
            });

            return englishText;
        },

        // English to Vulpic conversion
        englishToVulpic(englishText) {
            let vulpicText = englishText.replace(/\b\d+\.\d*\b/g, (match) => {
                return parseFloat(match).toString(9);
            });

            vulpicText = vulpicText
                .split(" ")
                .map((word) => {
                    let result = "";
                    for (let char of word.toLowerCase()) {
                        let vulpicChar = Object.keys(this.vulpicAlphabet).find((key) => this.vulpicAlphabet[key] === char);
                        if (vulpicChar) {
                            result += vulpicChar + " ";
                        } else {
                            result += char;
                        }
                    }
                    return result.trim();
                })
                .join(" ⟃ ");

            return vulpicText;
        },

        // Method to convert input text to English
        convertToEnglish() {
            this.outputText = this.vulpicToEnglish(this.inputText);
        },

        // Method to convert input text to Vulpic
        convertToVulpic() {
            this.outputText = this.englishToVulpic(this.inputText);
        },
    },
};
</script>

<style scoped>
.vulpic-converter {
	max-width: 100%;
	text-align: left;
}

label {
	font-weight: bolder;
	font-size: 1.2rem;
}

textarea {
	width: 100%;
	padding: 8px;
	font-size: 1em;
	margin-top: 10px;

	border: thin solid black;
}

.buttons {
	margin-top: 20px;
	margin-bottom: 20px;

	display: flex;
	gap: 1rem;
	justify-content: space-between;
}

button {
	flex: 1;

	padding: 10px 20px;
	font-size: 1em;
	cursor: pointer;

	border: thin solid var(--vp-button-brand-border);

	background-color: var(--vp-button-brand-bg);
	color: var(--vp-button-brand-text);
}

button:hover {
	color: var(--vp-button-brand-hover-text);
	background-color: var(--vp-button-brand-hover-bg);
}
</style>
