/*
* Texte / Chaines de caractères / String
* fonctions utiles : indexOf, slice, charAt, toLowerCase
* cf. https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String
 */


var texte = "un texte";
console.log("un texte".length); // Affiche 8


var nombreDeCaracteres = "un texte";
var longueurnombreDeCaracteres = nombreDeCaracteres.length; // longueurnombreDeCaracteres contient la valeur de 8
console.log(longueurnombreDeCaracteres); // 8


var quatriemeCaractere ="un texte"; //8
console.log(quatriemeCaractere[4] ); // t


var quatriemeEtCinquiemeCaracteres = "un texte" ; // 8
console.log('quatrieme et cinquieme caractere', quatriemeEtCinquiemeCaracteres ); //  e et x
console.log(quatriemeEtCinquiemeCaracteres [4] );
console.log(quatriemeEtCinquiemeCaracteres [5] );



var minuscule = "un texte";
var motEnMinuscules = minuscule.toLowerCase();
console.log(motEnMinuscules); // Affiche "un texte"
var Majuscules = "un texte";
var motEnMajuscules = Majuscules.toUpperCase();
console.log(motEnMajuscules); // Affiche "UN TEXTE"


var premierMot = "un texte";
console.log('un');


var premierMot = "un texte";
var Majuscules = "un";
var motEnMajuscules = Majuscules.toUpperCase();
console.log(motEnMajuscules); // Affiche "UN TEXTE" // un

var prenom = prompt('Tapez votre prenom');
var prenom = "Oualid";
/*var prenom = prompt("Oualid");*/


var valeur1 = '15';
var somme = parseInt (valeur1) + 3;
console.log(' 18', somme == 18 ); // true


var age = 32;
// TODO
console.log(" j'ai 32 ans");





var mails = ["Joe@gmAil.com", "LEA@test.com", "Bob@gmAil.com"];
var nombreDeMails = '3';
console.log( nombreDeMails );

var dernierMail = "Bob@gmAil.com";
console.log('dernierMail', dernierMail );

// est ce que tout les mails sont gmail
var queDesGmails;
for( var i = 0 ; i < mails.length ; i++ )

nombreDeMails.includes(queDesGmails, mails);

console.log('tous les mails sont gmail : ', mails.includes("gmAil"));

var email = 'Joe@gmAil.com LEA@test.com Bob@gmAil.com';
email = email.replace('@', '_').replace('@','_').replace('@','_');
       console.log(email);

       var com = 'Joe@gmAil.com LEA@test.com Bob@gmAil.com'
       com = com.replace('.com', '').replace('.com','').replace('.com','')
       console.log(com)
