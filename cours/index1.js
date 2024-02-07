function isPalindrom(world){
    const letters = world
    .split('')
    .reverse()
    .join('')
        
    return world.toUpperCase === reversedWord.toUpperCase;

}

//isPalindrom("Bonjour");


const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]

    },

    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]

    },

    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]

    },
    {
        name: 'Marc',
        notes: [2, 3, 14, 15, 13]

    },

    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]

    },
]
const calculMoyenneEleves = (notes) => {

    let sum = 0;
    let moyenne = 0;
    const tableauNotes = notes.length;

    for(let i= 0; i < tableauNotes; i++){
        sum += notes[i];
    }

    return moyenne = sum / tableauNotes;

}


const moyenne = (notes) => {
    let somme = 0;

    for (let note of notes){
        somme += note;
    }
    
    return somme / notes.length;
    
}

const compareStudent = (studentA, studentB) => {
    return studentB.moyenne - studentA.moyenne;
}

const calculMinNote = (...notes) => {
    return Math.min(...notes);
}

const calculMaxNote = (...notes) => {
    return Math.max(...notes);
}

for (let student of students){
    student.moyenne = moyenne(student.notes);
    student.worst = calculMinNote(...student.notes);
    student.best = calculMaxNote(...student.notes);
}

students.sort(compareStudent)

const formatSudent = (student) => {
    return `${student.name} avec une moyenne de : ${student.moyenne}, meilleur note (${student.best}, pire note ${student.worst})`;
}

console.log(`Top 3 étudiant

    1: ${formatSudent(students[0])}
    2: ${formatSudent(students[1])}
    3: ${formatSudent(students[2])}

`);



// Calculer la fréque d'un mot dans une chaine
const calculFrequenceDeMot = (mot) => {
    const frequencies = {};

    const arrayWords = splitPhrase(mot);
    
        for(let word of arrayWords ){
            if(frequencies[word]) {
                frequencies[word]++;
            } else {
                frequencies[word] = 1;
            }
    }

    console.log(frequencies);

}


/**  Attention , replace ne remplance qu'une seule fois quand on a   plusieurs chose à renplacer il faut utiliser replaceAll */

const ignoreCaractereSpeciaux = ( phrase) => {
    const ignored = [',', '?', ':', '!', '«', '»','...', '>' ];

    let cleanedPhrase =  phrase.toLowerCase();

    for (let caracter of ignored) {
        cleanedPhrase =  cleanedPhrase.replaceAll(caracter, '')
    }

    console.log(cleanedPhrase);
}

ignoreCaractereSpeciaux("bonjou : >  tout le monde ? bonjour")


const splitPhrase = (phrase) => {
    let motNetoye = "";
    motNetoye = ignoreCaractereSpeciaux(phrase)
    return motNetoye.split(" ");
}


calculFrequenceDeMot("bonjou : >  tout le monde ? bonjour");

    const calculFrenquence = (words) => {
        const frequenciesArray = [];
        const wordCounts = {}; 
    
        for (let mot of words) {
        if (!wordCounts[mot]) {
            wordCounts[mot] = 0; // Initialiser le compteur pour le mot
        }
        wordCounts[mot]++; // Incrémenter le compteur
        }
    
        // Convertir l'objet en tableau de fréquences
        for (const mot in wordCounts) {
        frequenciesArray.push({ mot, count: wordCounts[mot] });
        }
    
        return frequenciesArray;
    };

   
    

    




/** 

for ( let student of students){
    let min = 0;

    min = calculMinNotes(...student.notes);

    console.log(min);
}
**/

/**console.log(`Top 3 étudiant
     1: 
    1: ${students[1].name} avec une moyenne de : ${students[1].moyenne}
    1: ${students[2].name} avec une moyenne de : ${students[2].moyenne}

`

);

**/
