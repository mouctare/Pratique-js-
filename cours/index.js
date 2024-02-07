// Click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");


questionContainer.addEventListener("click", () => {
    // Ici on ajoute une classe css coder dans le css directement dans le js
    questionContainer.classList.toggle('question-clicked');
})

// Si on click sur le btn1 injecte moi 
// cette classe css c'est à la bonne reponse
btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () =>{
    response.style.background = "red";
});


//--------------------------------------
 // Mouse Event
    const mousemove = document.querySelector(".mousemove");

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY +  "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";

});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
})

//--------------------------------------
// keyPress event

const keyPressContainer = document.querySelector(".keypress");

// pour ecrire du texte dans une balise il faut d'abort identifier la balise
// <span id="key"></span></h2>
const key = document.getElementById("key");

// Problématique, j'ai plein de fichier audio, au lié de code en dure 
// le chemin d'un fichier, 
// je dit que ma fonction aura un paramètre et je rècuperer le paramètre 
// lors de l'appelle de ma fonction

const ring = (key) => {
    const audio = new Audio();
    audio.src = key + ".mp3";
    audio.play();
};

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if(e.key === "j") {
        keyPressContainer.style.background = "pink";
    } else if (e.key === "h"){
        keyPressContainer.style.background = "teal";
    } else {
        keyPressContainer.style.background = "red";
    }

   // ring(e.key);
});


//---------------------
// Form Events
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");

let pseudo = "";
let language = "";


inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

// Gestion du formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (cgv.checked) {
            document.querySelector('form > div').innerHTML = `
            <h3>Pseudo : ${pseudo}</h3>
            <h4>Pseudo : ${language}</h4>
            `;
    } else {
        alert("Veuillez accepter les CGV");
    }
});

//-------------------
//const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});


