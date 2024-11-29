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
};
utiliserPref();


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
  let apprenant = data.apprenants

// Intégration et utilisation du Leaflet GeoJson
// setView = lat, long, zoom
  let map = L.map('map').setView([46.55, 2.5], 5);

  // Intégration des tuiles de la carte
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Modification de l'image du pin
  const customIcon = L.icon({
    iconUrl: 'https://khyrana.github.io/ProjetWeb1/images/marker.gif',
    iconSize: [40, 40],
  });

  // Intégration des markers sur la carte
    for(let i = 0; i < apprenant.length; i++){

      // Récupération des coordonnées pour le marker
      L.marker([apprenant[i].coordonnees.latitude, apprenant[i].coordonnees.longitude], {
        title: apprenant[i].prenom + " " + apprenant[i].nom,
        icon: customIcon,
      })
      // Ajout d'une popup au clic du marker
      .bindPopup(`
        <span class="popup">
          <b>${apprenant[i].prenom} ${apprenant[i].nom}</b>
        </span>`)
      // Ajout du maker sur la carte
      .addTo(map);
    };
  }
