var prenom = "paul";



var prenom = "paul";
console.log('prenom avec premiere lettre en majuscule',
 prenom.charAt(0).toUpperCase() + prenom.substring(1).toLowerCase());


var users = ["joe", "lea", "bob", "ann"];

     for(var i = 0 ; i < users.length; i++){
       users[i] = users[i].charAt(0).toUpperCase() + users[i].substring(1).toLowerCase();
     }
       console.log('Prenoms avec premiere lettre en majuscule', users);  //Joe, Lea, Bob, Ann


var users = ["joe", "lea", "bob", "ann"];
                  var voyelle = ["a","e","i","o","u","y"];
        // TODO : liste des prenoms qui commencent par une voyelle
              for (var i = 0 ; i < users.length ; i++) {
              if (voyelle.indexOf(users[i].charAt(0)) !== -1 ) {
              console.log("voyelle : " + users[i]);
  }
}

var users = ["joe", "lea", "bob", "ann"];
             var consonne = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    // TODO : liste des prenoms qui commencent par une consonne
          for (var i = 0 ; i < users.length ; i++) {
          if (consonne.indexOf(users[i].charAt(0)) !== -1 ) {
          console.log("voyelle : " + users[i]);
  }
}

var notes = [10, 12, 13, 4, 8];
           // TODO : calcul de la somme
          function somme() {
               var note = 0;
               for (var i = 0 , j = notes.length ; i < j ; i++) {
                   note += notes[i];
               }
               return note;
           }
           console.log('somme des notes', somme());

function moyenne() {
               var note = 0;
               for (var i = 0 , j = notes.length ; i < j ; i++) {
                   note += notes[i];
               }
               return note / notes.length;
           }
           console.log('moyenne', moyenne());

           var nouvelleNote = 12;
           var  nouvelleNote = notes.push(12);

           console.log('nouvelle Notes', notes);

 var notes = [10, 12, 13, 4, 8,12];
          // TODO : calcul de la somme
         function somme() {
            var note = 0;
            for (var i = 0 , j = notes.length ; i < j ; i++) {
            note += notes[i];
              }
            return note;
              }
            console.log('somme des notes', somme());

 function moyenne() {
           var note = 0;
           for (var i = 0 , j = notes.length ; i < j ; i++) {
          note += notes[i];
           }
          return note / notes.length;
          }
          console.log('moyenne', moyenne());

 function plusHauteNote(notes) {
                          return Math.max.apply(null , notes);
                      }
                      // TODO : trouvez la note la plus haute
                      console.log('meilleure note', plusHauteNote(notes));

// TODO : trouvez la note la plus haute
console.log('plus mauvaise note', /* ? */);


// TODO : passage en fonctions
function calculSomme( tableauDeNotes ){
    var somme = 0;

    /*
    ?
     */

    return somme;
}

function calculMoyenne( tableauDeNotes ){
    var moyenne;

    /*
    ?
     */

    return moyenne;
}
