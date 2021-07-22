// //



// function chanceAuDe(numeroATrouver, pari) {
//     var dede = 0;
//     var count = 0;
//     do {

//         count += 1;
//         dede = Math.floor(Math.random() * 6) + 1
//       console.log;(`La valeur du de est ${dede}`);
//         if (numeroATrouver === pari) {
//             return 'bravo';
//           }  
//           else
//         {
//             return "no no no";
//         };

//     }
//  while (dede !== numeroATrouver);
// }
// var numeroATrouver = Number(prompt("What is the number?"));
// var pari = Number(prompt("In how many attempts will the number " + numeroATrouver + " be?"));
// console.log(chanceAuDe(numeroATrouver, pari));

function chanceAuDe() {
  var dede = 0;
  var count = 0;
  var flagChoix = false

  while (flagChoix === false) {
      var choix = Number(prompt("Veuillez choisir une valeur entre 1 et 6"))
      if (isNaN(choix) || choix < 1 || choix > 6) {
          alert("NON!!")
      } else {
          flagChoix = true
      }

  }

  var flagEssai = false

  while (flagEssai === false) {
      var essai = Number(prompt("En combien de fois voulez vous essayer?(max 1000)"))
      if (isNaN(essai) || essai < 1 || essai > 1000) {
          alert("NON!!")
      } else {
          flagEssai = true
      }

  }


while(count< essai){
  count += 1;
  dede = Math.floor(Math.random() * 6) + 1
  console.log(`essai numero:${count} - La valeur du de est ${dede}`);
  if (choix === dede && count === essai) {
      return alert("bravissimo🥇🏆🥇🏆🥇🏆🎖 " //+ //choix 
      )
  }
  
  }

  alert("ah tu a perdu hien")
return alert("looser😈😈😈") 


}
// while (dede !== numeroATrouver && count < 1000);
// }
// var numeroATrouver = Number(prompt("What is the number?"));
// var pari = Number(prompt(`In how many attempts will the number ${numeroATrouver} be?`));

// chanceAuDe();