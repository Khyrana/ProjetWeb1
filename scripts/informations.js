// Récupère les préférences pour afficher soit le thème clair, soit le thème sombre
// et changer la couleur des liens en fonctions du thème choisi
function utiliserPref(){
  const classeTheme = document.body;
  const lien = document.getElementsByClassName('lien');
  //console.log(lien);
  
  if(localStorage.getItem('theme') === "clair"){
    classeTheme.className = "clair";
    for(let i = 0; i < lien.length; i++){
      lien[i].style.color = "black";
    };
  }else if(localStorage.getItem('theme') === "sombre"){
    classeTheme.className = "sombre";
    for(let i = 0; i < lien.length; i++){
      lien[i].style.color = "wheat";
    };
  };
}
utiliserPref();