const getRandomInt = (max) => {
    return Math.floor(Math.random() * (max + 1));
}

const solution = getRandomInt(2);
console.log(solution);



function isRight(n){
    return solution === n;
}

function guess(){
    const number = prompt('Entrer un chiffre');
    return isRight(number)
}

for (i = 0; i < 3; i++){
    if(guess){
        console.log('Bravo');
        break;
    } else if (i === 2) {
        console.log('Vous avez perdu');
    }
}

function isPremier(nombre){
    if(nombre < 2){
        return false;
    }
    
    for (let i = nombre - 1; i > 1; i--){
            if(nombre % i === 0) {
                return false;
            } 
                
            }
            return true;
    }


console.log(isPremier(12));
