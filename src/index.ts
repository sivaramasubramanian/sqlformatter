import sqlFormatter from "@sqltools/formatter";
import * as Prism from 'prismjs';


/**
 * HTML elements
 */
let inputTextBox: HTMLInputElement;
let formatButton: HTMLButtonElement;
let formatOptions: HTMLElement;

const defaultSQLString: string = "SELECT a,b,c FROM tab1 INNER JOIN tab2 ON tab1.a = tab2.a ORDER BY b limit 15;";

document.addEventListener("DOMContentLoaded", () => {
    init();
});

/**
 * initializes the HTML elements with default values and registers the event listeners.
 */
function init() {
    inputTextBox = document.getElementById("input") as HTMLInputElement;
    formatButton = document.getElementById("formatButton") as HTMLButtonElement;
    formatOptions = document.getElementById("formatterOptionsContainer");

    inputTextBox.textContent = defaultSQLString;

    registerEventListeners();
}

/**
 * registers event listeners for the HTML elements.
 */
function registerEventListeners() {
    formatButton.addEventListener("click", () => {
        formatSQLString();
    });
}

/**
 * formats the input in the inputTextBox field.
 */
function formatSQLString() {
    let formattedString = sqlFormatter.format(inputTextBox.textContent, {
        language: "sql",
        reservedWordCase: "upper",
    });

    inputTextBox.value = formattedString;

    inputTextBox.innerHTML = "<pre>" + Prism.highlight(formattedString, Prism.languages.sql, 'sql') + "</pre>";
}
