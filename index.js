//################################

const container = document.querySelector(".container");
const buttons = document.querySelectorAll(".button");
const teteEcran = document.querySelector(".tete-ecran");
const ecran = document.querySelector(".ecran");
const unDiv = document.querySelector(".un-div");
const deuxDiv = document.querySelector(".deux-div");
const troisDiv = document.querySelector(".trois-div");
const checkedTheme = document.querySelector(".checked-theme");
const unDeuxTrois = document.querySelector(".un-deux-trois");
const touches = document.querySelector(".touches");
const reset = document.querySelector(".reset");
const egale = document.querySelector(".egale");
const del = document.querySelector(".del");
const boutonDel = document.getElementById("bouton-del");
const titreCalculatrice = document.querySelector(".titre-calculatrice");
const theme = document.querySelector(".theme");

//faire disparaitre les deux button div 2 et 3

/* unDiv.style.background="hsl(223, 31%, 20%)" */
deuxDiv.style.background = "hsl(223, 31%, 20%)";
troisDiv.style.background = "hsl(223, 31%, 20%)";
// unDiv  evenement click
unDiv.addEventListener("click", () => {
  unDiv.style.background = "hsl(13, 80%, 52%)";
  deuxDiv.style.background = "hsl(223, 31%, 20%)";
  troisDiv.style.background = "hsl(223, 31%, 20%)";
  //=================================
  container.style.background = "hsl(222, 26%, 31%)";
  ecran.style.background = "hsl(224, 36%, 15%)";
  ecran.style.color = "white";
  touches.style.background = "hsl(223, 31%, 20%)";
  theme.style.color = "white";
  titreCalculatrice.style.color = "white";
  unDeuxTrois.style.color = "white";
  checkedTheme.style.background = "hsl(223, 31%, 20%)";

  buttons.forEach((button) => {
    button.style.background = "hsl(0, 0%, 100%)"; // Copier ça
    button.style.boxShadow = "0px 3px 2px hsl(224, 28%, 35%)";
    button.style.color = "hsl(60, 10%, 19%)";
  });
  reset.style.background = "hsl(185, 42%, 37%)";
  reset.style.boxShadow = "0px 2px 2px hsl(224, 28%, 35%)";
  reset.style.color = "white";
  egale.style.background = "hsl(25, 98%, 40%)";
  egale.style.color = "white";
  del.style.background = "hsl(185, 42%, 37%)";
  del.style.boxShadow = "0px 2px 2px hsl(224, 28%, 35%)";
  del.style.color = "white";
});
// deuxDiv evenement click
deuxDiv.addEventListener("click", () => {
  //faire disparaitre les deux button div 1 et 3
  unDiv.style.background = "hsl(30, 2%, 87%)";
  deuxDiv.style.background = "hsl(25, 98%, 40%)";
  troisDiv.style.background = "hsl(30, 2%, 87%)";
  //=================================
  container.style.background = "hsl(0, 0%, 93%)";
  ecran.style.background = "hsl(0, 0%, 100%)";
  ecran.style.color = "hsl(60, 10%, 19%)";
  touches.style.background = "hsl(30, 2%, 87%)";
  theme.style.color = "hsl(60, 10%, 19%)";
  titreCalculatrice.style.color = "hsl(60, 10%, 19%)";
  unDeuxTrois.style.color = "hsl(60, 10%, 19%)";
  checkedTheme.style.background = "hsl(30, 2%, 87%)";

  buttons.forEach((button) => {
    button.style.background = "hsl(45, 7%, 95%)"; //
    button.style.boxShadow = "0px 3px 2px  hsl(185, 42%, 37%)"; //
    button.style.color = "hsl(60, 10%, 19%)";
  });
  reset.style.background = "hsl(185, 58%, 25%)";
  reset.style.boxShadow = "0px 2px 2px hsl(224, 28%, 35%)";
  reset.style.color = "white";
  egale.style.background = "hsl(25, 98%, 40%)";
  egale.style.boxShadow = "hsl(25, 99%, 27%)";
  egale.style.color = "white";
  del.style.background = "hsl(185, 58%, 25%)";
  del.style.boxShadow = "0px 2px 2px hsl(224, 28%, 35%)";
  del.style.color = "white";
});

// troisDiv evenement click
troisDiv.addEventListener("click", () => {
  //faire disparaitre les deux button div 1 et 2
  deuxDiv.style.background = "hsl(268, 71%, 12%)";
  unDiv.style.background = "hsl(268, 71%, 12%)";
  troisDiv.style.background = "hsl(177, 92%, 70%)";
  //=================================
  container.style.background = "hsl(268, 75%, 9%)";
  ecran.style.background = "hsl(268, 71%, 12%)";
  ecran.style.color = "hsl(52, 100%, 62%)";
  touches.style.background = "hsl(268, 71%, 12%)";
  theme.style.color = "hsl(52, 100%, 62%)";
  titreCalculatrice.style.color = "hsl(52, 100%, 62%)";
  unDeuxTrois.style.color = "hsl(52, 100%, 62%)";
  checkedTheme.style.background = "hsl(268, 71%, 12%)";

  buttons.forEach((button) => {
    button.style.background = "hsl(281, 89%, 26%)"; // Sa reste pour le troisième
    button.style.boxShadow = "hsl(290, 70%, 48%)"; //
    button.style.color = "hsl(52, 100%, 62%)";
  });
  reset.style.background = "hsl(268, 47%, 21%)";
  reset.style.color = "white";
  reset.style.boxShadow = "hsl(290, 70%, 48%)";
  del.style.boxShadow = "hsl(290, 70%, 48%)";
  del.style.background = "hsl(268, 47%, 21%)";
  del.style.color = "white";
  egale.style.background = "hsl(176, 100%, 44%)";
  egale.style.boxShadow = "hsl(177, 92%, 70%)";
  egale.style.color = "white";
});

//Fin des Themes======================================================

  let numbersFirst = "";
  let operateurs = "";
  let numbersSecond = "";
  let resultat = 0;
  let SecondInfinity = "";


  const numbers = document.querySelectorAll(".number");
  numbers.forEach(number => {
    number.addEventListener('click', function(){
      if (! operateurs) {
         numbersFirst += number.textContent;
         ecran.textContent = numbersFirst;
         console.log("numbersFirst " + numbersFirst);
      }
      else{
        numbersSecond += number.textContent;
        ecran.textContent = numbersSecond;
        console.log("numbersSecond " + numbersSecond);
      }
    })
  });

  const operators = document.querySelectorAll(".operateur");
  operators.forEach(operateur => {
    operateur.addEventListener('click', function(){
      if (operateurs && numbersSecond) {
        switch (operateurs) {
           // Opération sur l'addition
          case "+":
            resultat = resultat ? resultat + Number(numbersSecond) :  Number(numbersFirst) + Number(numbersSecond);
         ecran.textContent = resultat;
         numbersFirst =""
         numbersSecond =""
          console.log(resultat);
            break;
            // Opération sur la soustraction
            case "-":
              resultat = resultat ? resultat - Number(numbersSecond) :  Number(numbersFirst) - Number(numbersSecond);
           ecran.textContent = resultat;
           numbersFirst =""
           numbersSecond =""
            console.log(resultat);
              break;
                  // Opération sur le produit
              case "*":
                resultat = resultat ? resultat * Number(numbersSecond) :  Number(numbersFirst) * Number(numbersSecond);
             ecran.textContent = resultat;
             numbersFirst =""
             numbersSecond =""
              console.log(resultat);
                break;
                    // Opération sur la division
              case "/":
                resultat = resultat ? resultat / Number(numbersSecond) :  Number(numbersFirst) / Number(numbersSecond);
             ecran.textContent = resultat;
             SecondInfinity = numbersSecond;
             numbersFirst =""
             numbersSecond =""
              console.log(resultat);
                break;
               // Opération sur le égale
        case "=":
          ecran.textContent = resultat;
          break;
          default:
            break;
        }
      }
      else{
        operateurs = operateur.textContent;
        console.log(operateurs);
      }
    })
  });
  
  egale.addEventListener("click", ()=>{
    if (operateurs === "/" && SecondInfinity === "0") {
      ecran.textContent = "ERROR";
      numbersFirst = "";
      operateurs = "";
      numbersSecond = "";
      resultat = 0;
    }
  })
     const point = document.querySelector(".point");
     point.addEventListener('click', () =>{
      if (! numbersFirst) {
        numbersFirst = "0.";
        
        ecran.textContent = numbersFirst;
      } else if(numbersFirst && ! numbersFirst.includes(".") && ! operateurs){
        numbersFirst = numbersFirst + ".";
        ecran.textContent = numbersFirst;
      }else if(! numbersSecond && operateurs){
        numbersSecond = "0.";
        ecran.textContent = numbersSecond;
       } else if(numbersSecond && ! numbersSecond.includes(".") ){
        numbersSecond = numbersSecond + ".";
        ecran.textContent = numbersSecond;
       } 
       
     })

     reset.addEventListener("click", ()=>{
      numbersFirst = "";
      operateurs = "";
      numbersSecond = "";
      resultat = 0;
      SecondInfinity = "";
      ecran.textContent = "0";
    })
    del.addEventListener("click", ()=>{
 if (numbersFirst && !operateurs) {
numbersFirst = numbersFirst.slice(0, -1);
 ecran.textContent = numbersFirst;
 }else if(numbersSecond && operateurs){
  numbersSecond = numbersSecond.slice(0, -1);
  ecran.textContent = numbersSecond;
 }else if(resultat){
  resultat = resultat.toString().slice(0, -1);
  ecran.textContent = resultat;
 }
  }

)
    
   





