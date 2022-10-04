import './style.css';
import sqlFormatter from "@sqltools/formatter";

let inputElement;
let formatButton;

const defaultSQLString = "SELECT a,b,c FROM tab1;";

document.addEventListener("DOMContentLoaded", (eve) => {
    inputElement = document.getElementById("input");
    formatButton = document.getElementById("formatButton");

    inputElement.value = defaultSQLString;
    
    formatButton.addEventListener("click", (e) =>{
        formatSQLString();
    });
});


function formatSQLString() {
    let formattedString = sqlFormatter.format(inputElement.value, {
        language: "sql",
        reservedWordCase: "upper",
    });
    inputElement.value = formattedString;
    return inputElement;
}
