const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numberEl = document.getElementById("number-el");
const password01El = document.getElementById("password01-el");
const password02El = document.getElementById("password02-el");

function generatePassword(){

    function randomIndex(){
        return Math.floor(Math.random() * characters.length);
    }

    let pass01 = "";
    let pass02 = "";
    const num = numberEl.valueAsNumber;

    if (isNaN(num)) return;

    for(let i = 0; i < num; i++){
        pass01 += characters[randomIndex()];
        pass02 += characters[randomIndex()];
    }

    password01El.textContent = pass01;
    password02El.textContent = pass02;
}