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

    reset.addEventListener("click", () => {
      ecran.textContent = "0";
    });
   
    
    egale.addEventListener("click", () => {
      try {
        const resultat = eval(ecran.textContent);
        if (isNaN(resultat)) {
          throw new Error("Erreur de calcul");
        }
        ecran.textContent = resultat;
      } catch (erreur) {
        ecran.textContent = "ERROR"; 
      }
    });
    
    boutonDel.addEventListener("click", () => {
      const contenuEcran = ecran.textContent;
      ecran.textContent = contenuEcran.slice(0, -1);
    
      if (ecran.textContent === "") {
        ecran.textContent = "0";

      }else if (ecran.textContent === "ERROR") {
        ecran.textContent = "";
      }
    });
    let number = document.querySelectorAll('.number');
    number.forEach((number) => {
      number.addEventListener("click", () => {
        const valeurDuBouton = number.innerText;
        if (ecran.textContent === "0") {
          ecran.textContent = valeurDuBouton;
        } else {
          ecran.textContent += valeurDuBouton;
        }
      });
    });
    
  

   
    
   





