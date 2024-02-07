
/**
 * Crée un élément HTML représentant un article
 * @param {{title: string, body: string}} post 
 * @return {HTMLElement}
 */
function createArticle(post){
    const article = document.createElement('article');

    article.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.body}</p>
    `
    return article;

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