//Utilisation de la syntaxe de décomposition pour extraire les valeurs d'un objet 
const person = {
  prenom: 'Hawa',
  classe: 'licence',
  age: 20,
};
//Syntaxe de decomposition
const { prenom, classe, age } = person;
//Affichage dans la console.
console.log(
  `je m'appelle ${prenom} , etudiante en ${classe} 1 , j'ai ${20}`
);

//Utilisation des fonctions fléchées pour créer une fonction qui ajoute deux nombres 
const ajouter = (a, b) => a + b;
//Affichage du résultat dans la console
console.log(ajouter(8, 5));
