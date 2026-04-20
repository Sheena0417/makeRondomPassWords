const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numberEl = document.getElementById("number-el");
const password01El = document.getElementById("password01-el");
const password02El = document.getElementById("password02-el");
const toggleEl01 = document.getElementById("toggle-el_01");
const toggleEl02 = document.getElementById("toggle-el_02");

function generatePassword(){

    function randomIndex(array){
        return Math.floor(Math.random() * array.length);
    }

    let pass01 = "";
    let pass02 = "";
    const num = numberEl.valueAsNumber;

    if (isNaN(num)) return;

    let selectedCharacters;

    if (toggleEl01.checked && toggleEl02.checked) {
        selectedCharacters = characters;
    } else if (toggleEl01.checked) {
        selectedCharacters = characters.filter(char => /[a-zA-Z0-9]/.test(char));
    } else if (toggleEl02.checked) {
        selectedCharacters = characters.filter(char => /[^0-9]/.test(char));
    } else {
        selectedCharacters = characters.filter(char => /[a-zA-Z]/.test(char));
    }

    for(let i = 0; i < num; i++){
        pass01 += selectedCharacters[randomIndex(selectedCharacters)];
        pass02 += selectedCharacters[randomIndex(selectedCharacters)];
    }

    password01El.textContent = pass01;
    password02El.textContent = pass02;
}