let chiffre = prompt("Rentrer un nom");

if(chiffre <= 0 || chiffre > 10){
    console.log("Le nombre doit etre entre 1 et 10");

} else{
    while(chiffre > 0){
        chiffre--;
        console.log(chiffre);
    }
}


let guess = 10;
let number = 0;

while(number !== guess){
    number = prompt("Rentrer un chiffre") * 1;

    if(number < guess){
        console.log("Plus");
    } else if (number > guess){
        console.log("Moins");
    } 
}

console.log("Bravo ! vous avez diviné");


// function findBouksByTitle(title){
// return books.filter((book) => book.title[0].toLowerCase() === title.toLowerCase());
// }