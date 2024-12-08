// Récupère les préférences pour afficher soit le thème clair, soit le thème sombre
function themeColor(){
  const classeTheme = document.body;
  const liensInfo = document.getElementsByClassName('lien');
  if(localStorage.getItem('theme') === "clair"){
      classeTheme.style.backgroundColor ="wheat";
      classeTheme.style.color = "#3e3848";
      for(let i =0; i < liensInfo.length; i++){
        liensInfo[i].style.color = "#3e3848";
      }

  }else if(localStorage.getItem('theme') === "sombre"){
      classeTheme.style.backgroundColor ="rgb(94, 84, 107)";
      classeTheme.style.color = "rgb(247, 237, 207)";
      for(let i =0; i < liensInfo.length; i++){
        liensInfo[i].style.color = "rgb(247, 237, 207)";
      }
  };
}
themeColor();