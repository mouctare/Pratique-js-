// Je recupère la div
const wrapper = document.querySelector('#lasPosts');
//Je crée la balise p
const loader = document.createElement('p');

// j'injecte du texte dans la balise p
loader.innerText = "Chargement...";

// J'ajoute le p dans la div
wrapper.append(loader);