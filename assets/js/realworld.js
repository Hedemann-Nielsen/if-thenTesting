
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


const myAnsverInput = document.getElementById('answerOne'); // input 1
const myAnsverButton = document.getElementById('answerButton'); //svar knap
const myAnsverFeedbackElement = document.getElementById('answerFeedback'); //feedback h4

// //click event for svar knap
// myAnsverButton.addEventListener('click', (myButton) => {
// myButton.preventDefault();
// gatherInputAnswer();
// });

// //Ondsaml hvad som er valgt i dropdown listen
// function gatherInputAnswer() {
// if (myAnsverInput.value === 'true') { //Hvis valuen er true køres funktionen her under
 
//   showTrueResult();
//   console.log('korrekte svar');
// } else {    //Hvis valuen er false køres funktionen her under

//   showFalseResult();
//   console.log('forkert svar');
// }

// }
// //true funktion = korrekt svar
// function showTrueResult() {
//   const TrueResult = document.getElementById('answerFeedback');
//   TrueResult.innerHTML = 'Korrekt svar';

// };
// //false funktion = forkert svar
// function showFalseResult() {
//   const FalseResult = document.getElementById('answerFeedback');
//   FalseResult.innerHTML = 'Forkert svar';
// }

    
/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/


//click event for svar knap
myAnsverButton.addEventListener('click', (myButton) => {
  myButton.preventDefault();
  gatherInputAnswer();
});

//false = ja
//true = nej
//true2 = ja, i disney film

//Indsaml hvad som er valgt i dropdown listen
function gatherInputAnswer() {
  if (myAnsverInput.value === 'true') { //Hvis valuen er true køres funktionen her under
  showTrueResult();
  console.log('svar nej');

  } else if (myAnsverInput.value === 'true2') {    //Hvis valuen er true2 køres funktionen her under
  showTrue2Result();
  console.log('svar ja, i disney film');

  } else {    //Hvis valuen er false køres funktionen her under
  showFalseResult();
  console.log('svar ja');
  }

}
//true funktion = korrekt svar
function showTrueResult() {
   const TrueResult = document.getElementById('answerFeedback');
   TrueResult.innerHTML = 'Korrekt svar';

 };
 //True funtion korret svar i disney film
 function showTrue2Result() {
  const True2Result = document.getElementById('answerFeedback');
  True2Result.innerHTML = 'Korrekt svar, de findes kun i disney film';

};
 //false funktion = forkert svar
 function showFalseResult() {
   const FalseResult = document.getElementById('answerFeedback');
   FalseResult.innerHTML = 'Forkert svar';
 }


/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/








/* helper functions*/
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
