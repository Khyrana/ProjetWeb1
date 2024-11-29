const html_tbody = document.getElementById('tbody');

const formulaire = document.getElementById("preferences");
// console.log(formulaire);
const sectionListe = document.getElementById("sectionListe");
//console.log(sectionListe);

const sectionCarte = document.getElementById("sectionCarte");
//console.log(sectionCarte);

// Lecture du fichier JSON en local en passant par LiveServer de VSCode
/*fetch('/scripts/promo.json')
  .then(response => response.json())
  .then(data => afficherData(data));*/

  // Lecture du fichier JSON en passant par GitHub Pages
fetch('https://khyrana.github.io/ProjetWeb1/scripts/promo.json')
.then(response => response.json())
.then(data => afficherData(data));


// Fonction pour afficher les données
function afficherData(data){
  // console.log(data);
  // console.log(data.apprenants);
  // console.log(data.apprenants[0]);
  // console.log(data.apprenants[0].nom);

  // Pour éviter que les 2 modes se chevauchent avant initialisation du localStorage, liste est par défaut.
  if (document.getElementById("liste").hasAttribute('checked')) {
      listeClicked()
  } else if (document.getElementById("carte").hasAttribute('checked')){
    carteClicked()
  };
  
  // Variable pour raccourcir l'accès aux données
  let apprenant = data.apprenants
  // Boucle for pour créer autant de lignes que d'apprenants
  for(let i = 0; i < apprenant.length; i++){
  
    const html_tr = document.createElement("tr");
    // template HTML reproduit dans une constante
    const template = `<td>${apprenant[i].nom}</td>
                      <td>${apprenant[i].prenom}</td>
                      <td>${apprenant[i].ville}</td>
                      <td><a href="" class="btn">En savoir plus...</a></td>`
    // Pour le lien il faut mettre un <a> et sur l'attribut href crée le l'URL a partir des informations de la page à atteindre (modale)
  
    // Creation du tableau HTML en appelant le template
    html_tr.innerHTML = template;
    html_tbody.appendChild(html_tr);
  }
  
  // Fonction pour créer les cartes
  for(let i = 0; i < apprenant.length; i++){
  
    const html_div = document.createElement("div");
    html_div.classList.add("card");
    // template HTML reproduit dans une constante
    const template2 = `<div class="card-body">
                         <img src="images/${apprenant[i].avatar}" class="card-img-top"alt="Avatar des apprenants">
                        <h5 class="card-title">${apprenant[i].nom}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${apprenant[i].prenom}</h6>
                        <a href="#" class="btn btn-primary">Détail...</a>
                      </div>`
    // Pour le lien il faut mettre un <a> et sur l'attribut href crée le l'URL a partir des informations de la page à atteindre (modale)
    
    // Creation du tableau HTML en appelant le template2
    html_div.innerHTML = template2;      
    sectionCarte.appendChild(html_div);
  }

  // Fonction pour changer la couleur des liens du tableau et des cartes en fonction du thème choisie
  function lienColor(){
    const lien = document.getElementsByClassName('btn');
    //console.log(lien);
    
    if(localStorage.getItem('theme') === "clair"){
      for(let i = 0; i < lien.length; i++){
        lien[i].style.color = "black";
      };
    }else if(localStorage.getItem('theme') === "sombre"){
      for(let i = 0; i < lien.length; i++){
        lien[i].style.color = "wheat";
      };
    };
  }
  lienColor()
}

// Changer le format d'affichage en fonction de la sélection
formulaire.addEventListener('click', format);
function format(event){
  if(event.target.value === 'liste'){
    listeClicked()
  }else{
    carteClicked()
  }
}
// Affiche le tableau et cache les cartes
function listeClicked(){
  sectionListe.style.display = "";
  sectionCarte.style.visibility = "hidden";
}
// Affiche les cartes et cache le tableau
function carteClicked(){
    sectionListe.style.display = "none";
    sectionCarte.style.visibility = "visible";
}
// Récupère les préférences pour afficher soit le tableau, soit les cartes
// et soit le thème clair, soit le thème sombre
function utiliserPref(){
  if(localStorage.getItem('affichage') === "liste"){
    listeClicked()
    liste.setAttribute("checked","checked");
    carte.removeAttribute("checked");
  }else if(localStorage.getItem('affichage') === "carte"){
    carteClicked()
    carte.setAttribute("checked","checked");
    liste.removeAttribute("checked");
  }

  const classeTheme = document.body;

  if(localStorage.getItem('theme') === "clair"){
    classeTheme.className = "clair";
  }else if(localStorage.getItem('theme') === "sombre"){
    classeTheme.className = "sombre";
  }
}
utiliserPref();
