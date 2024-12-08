  const formulaire = document.getElementById('preferences');
  const selection = document.getElementById('selection');
  const bouton = document.getElementById('save');
  const liste = document.getElementById('liste');
  const carte = document.getElementById('carte');
  const clair = document.getElementById('clair');
  const sombre = document.getElementById('sombre');
  const classeTheme = document.body;

  // =========== PARTIE FORMULAIRE -> INPUT ===========
  formulaire.addEventListener('click', format);
    function format(event){
      localStorage.setItem('affichage', event.target.value);
    };

  // =========== PARTIE SELECTION ===========
  selection.addEventListener('click', theme);
    function theme(){
      localStorage.setItem('theme', selection.value);
    };

  // =========== PARTIE BOUTON DE SAVE ===========


  // ========== PARTIE QUI CHANGE LES ATTRIBUTS DES RADIOS ET DES OPTIONS EN FONCTION DU FORMAT D'AFFICHAGE CHOISI ET DU THEME CHOISI POUR QUE LA SELECTION RESTE SUR LE CHOIX ==========
  bouton.addEventListener('click', savePref);
  function savePref(){
    localStorage.getItem('affichage');
    if(localStorage.getItem('affichage') === "liste"){
      liste.setAttribute("checked","checked");
      carte.removeAttribute("checked");
    }else if(localStorage.getItem('affichage') === "carte"){
      carte.setAttribute("checked","checked");
      liste.removeAttribute("checked");
    };
    localStorage.getItem('theme');
    if(localStorage.getItem('theme') === "clair"){
      clair.setAttribute("selected","selected");
      sombre.removeAttribute("selected");
      classeTheme.className = "clair";
      classeTheme.style.backgroundColor ="wheat";
      classeTheme.style.color = "#3e3848";
    }else if(localStorage.getItem('theme') === "sombre"){
      sombre.setAttribute("selected","selected");
      clair.removeAttribute("selected");
      classeTheme.className = "sombre";
      classeTheme.style.backgroundColor ="rgb(94, 84, 107)";
      classeTheme.style.color = "rgb(247, 237, 207)";
    };
  };
  savePref();

  bouton.addEventListener('click', () => {
    const messageSave = document.createElement('p');
    messageSave.setAttribute('id', 'message');
    messageSave.innerText = "Paramètres enregistrés ";
    document.getElementById('parametres').appendChild(messageSave);
    // Ajout de l'icône "check" après le texte
    const icone = document.createElement('i');
    icone.setAttribute('class', 'fa-solid fa-check');
    icone.style.color = "black";
    document.getElementById('message').appendChild(icone);
    // Suppression du message après 6,5s (car animation de 5,5s)
    setTimeout(() => {
      messageSave.remove();
    }, 8500);
  });
  
  