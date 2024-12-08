//Récupère les préférences pour afficher soit le thème clair, soit le thème sombre
function themeColor(){
  const classeTheme = document.body;
  localStorage.getItem('theme');
  if(localStorage.getItem('theme') === "clair"){
      classeTheme.style.backgroundColor ="wheat";
      classeTheme.style.color = "#3e3848";

  }else if(localStorage.getItem('theme') === "sombre"){
      classeTheme.style.backgroundColor ="rgb(94, 84, 107)";
      classeTheme.style.color = "rgb(247, 237, 207)";
  };
}
themeColor();

  // Lecture du fichier JSON en passant par GitHub Pages
fetch('https://khyrana.github.io/ProjetWeb1/scripts/promo.json')
.then(response => response.json())
.then(data => afficherData(data));

// Fonction pour afficher les données
function afficherData(data){

  let apprenant = data.apprenants

// Intégration et utilisation du Leaflet GeoJson
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
      // Ajout du marker sur la carte
      .addTo(map);
    };
  }
