async function main () {

// Je recupère la div
const wrapper = document.querySelector('#lasPosts');

//Je crée la balise p
const loader = document.createElement('p');

// j'injecte du texte dans la balise p
loader.innerText = "Chargement...";

// J'ajoute le p dans la div
wrapper.append(loader);

const response = await fetch("https://jsonplaceholder.typicode.com/todo?_limit=5", {

headers: {
    Accept: 'application/json'
}

})

if(!response.ok){
    loader.innerText = "Impossible de charge les articles";
    loader.style = 'red';
    return;

}

}