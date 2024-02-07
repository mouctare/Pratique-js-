const personnes = [
    {firstname: 'John', lastname: 'Doe'},
    {firstname: 'Jane', lastname: 'Doe'},
    {firstname: 'Marc', lastname: 'Doe'},
    {firstname: 'Manon', lastname: 'Doe'},
]


console.log(
personnes
.map((p) => p.firstname + ' ' +  p.lastname)
.join('\n')

);

const notes = [12, 18, 19, 20];
console.log(
notes.reduce((acc, note) => acc + note, 0)
)

