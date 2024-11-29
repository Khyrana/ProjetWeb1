// =========== PARTIE FORMULAIRE -> INPUT ===========
const formulaire = document.getElementById("preferences");
// console.log(formulaire);

formulaire.addEventListener('click', format);
  function format(event){
    // console.log(event.target.value);
    localStorage.setItem('affichage', event.target.value);
  }

// =========== PARTIE SELECTION ===========
const selection = document.getElementById('selection');
//console.log(selection);

selection.addEventListener('click', theme);
  function theme(){
    // console.log(selection.value);
    localStorage.setItem('theme', selection.value);
  }

// =========== PARTIE BOUTON DE SAVE ===========
const bouton = document.getElementById('save');
// console.log(bouton);
const liste = document.getElementById('liste');
const carte = document.getElementById('carte');
const clair = document.getElementById('clair');
const sombre = document.getElementById('sombre');
const classeTheme = document.body;
console.log(classeTheme);


bouton.addEventListener('click', saveParam);
  function saveParam(){
    localStorage.getItem('theme');
    localStorage.getItem('affichage');
    if(localStorage.getItem('theme') === "clair"){
      classeTheme.className = "clair";
    }else if(localStorage.getItem('theme') === "sombre"){
      classeTheme.className = "sombre";
    }
  }

// ========== PARTIE QUI CHANGE LES ATTRIBUTS DES RADIOS ET DES OPTIONS EN FONCTION DU FORMAT D'AFFICHAGE CHOISI ET DU THEME CHOISI POUR QUE LA SELECTION RESTE SUR LE CHOIX ==========
function checked(){
  if(localStorage.getItem('affichage') === "liste"){
    liste.setAttribute("checked","checked");
    carte.removeAttribute("checked");
  }else if(localStorage.getItem('affichage') === "carte"){
    carte.setAttribute("checked","checked");
    liste.removeAttribute("checked");
  }

  if(localStorage.getItem('theme') === "clair"){
    clair.setAttribute("selected","selected");
    sombre.removeAttribute("selected");
    classeTheme.className = "clair";
  }else if(localStorage.getItem('theme') === "sombre"){
    sombre.setAttribute("selected","selected");
    clair.removeAttribute("selected");
    classeTheme.className = "sombre";
  }
}
checked();