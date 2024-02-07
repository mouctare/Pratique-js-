
/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @return {HTMLElement}
 
function createArticle(post){
    const article = document.createElement('article');

    article.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.completed}</p>
    `
    return article;

}

*/

function createArticle(post){
    const article = document.createElement('article');

        article.append(createElementWithText('h2', post.title))
    return article;

}


function createElementWithText(tagName, content){
    const element = document.createElement(tagName);
    element.innerText = content;

    return element;
}

async function main () {

// Je recupère la div
const wrapper = document.querySelector('#lasPosts');

//Je crée la balise p
const loader = document.createElement('p');

// j'injecte du texte dans la balise p
loader.innerText = "Chargement...";

// J'ajoute le p dans la div
wrapper.append(loader);

try {
const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {

headers: {
    Accept: 'application/json'
}

})

if(!response.ok){
    throw new Error('Erreur serveur')
}

const posts = await response.json();

loader.remove();
for (let post of posts){
    wrapper.append(createArticle(post));
    
}

} catch(e){
    loader.innerText = "Impossible de charge les articles";
    loader.style.color = 'red';
    return;

}

}

main();