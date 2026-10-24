/* =========================================================
   VOYANCE PROMÉTHÉE
   SCRIPT.JS
   Version avec lecture approfondie globale
========================================================= */


/* =========================================================
   VARIABLES GÉNÉRALES
========================================================= */

let dernierNombreCartes = 1;

let cartesDuTirage = [];

let nombreCartesRetournees = 0;


/* =========================================================
   INFORMATIONS DES 60 CARTES

   motCle et famille servent uniquement à construire
   la lecture approfondie.

   Le lecteur voit seulement la phrase individuelle.
========================================================= */

const infosCartes = {

  "V-01": {
    motCle: "Orientation",
    famille: "Mouvements",
    texte: "Une direction se dessine. Cette carte invite à choisir un cap ou à retrouver celui qui te convient vraiment."
  },

  "V-02": {
    motCle: "Énergie",
    famille: "Mouvements",
    texte: "Une impulsion arrive et peut accélérer la situation. Quelque chose se met en mouvement rapidement."
  },

  "V-03": {
    motCle: "Inspiration",
    famille: "Forces",
    texte: "Une idée, une envie ou une vision nouvelle peut devenir une véritable force pour avancer."
  },

  "V-04": {
    motCle: "Attachement",
    famille: "Liens",
    texte: "Un lien important influence la situation. Il peut unir, retenir ou rappeler ce qui compte vraiment."
  },

  "V-05": {
    motCle: "Passage",
    famille: "Mouvements",
    texte: "Une transition est en cours. Quelque chose peut être laissé derrière pour entrer dans une nouvelle étape."
  },

  "V-06": {
    motCle: "Bouleversement",
    famille: "Mouvements",
    texte: "Un changement puissant peut modifier rapidement l’équilibre actuel et ouvrir une direction inattendue."
  },

  "V-07": {
    motCle: "Hésitation",
    famille: "Ombres",
    texte: "La situation manque de clarté et plusieurs directions peuvent compliquer ou ralentir la décision."
  },

  "V-08": {
    motCle: "Amitié",
    famille: "Liens",
    texte: "Un lien sincère, une présence amicale ou un soutien proche peut jouer un rôle important."
  },

  "V-09": {
    motCle: "Révélation",
    famille: "Signes",
    texte: "Une information ou une vérité peut apparaître et éclairer ce qui était jusque-là difficile à comprendre."
  },

  "V-10": {
    motCle: "Mouvement",
    famille: "Forces",
    texte: "Une énergie dynamique pousse la situation à évoluer. L’immobilité n’est plus vraiment possible."
  },

  "V-11": {
    motCle: "Soutien",
    famille: "Liens",
    texte: "Une personne, un lien ou une présence fiable peut apporter protection, aide ou stabilité."
  },

  "V-12": {
    motCle: "Synchronicité",
    famille: "Signes",
    texte: "Une coïncidence ou un détail inattendu peut avoir du sens et orienter subtilement la suite."
  },

  "V-13": {
    motCle: "Mystère",
    famille: "Forces",
    texte: "Tout n’a pas besoin d’être compris immédiatement. Une part d’inconnu peut contenir un potentiel encore caché."
  },

  "V-14": {
    motCle: "Clarté",
    famille: "Signes",
    texte: "Un signe ou une compréhension nouvelle permet de voir la situation avec davantage de précision."
  },

  "V-15": {
    motCle: "Rétrospection",
    famille: "Mouvements",
    texte: "Un retour sur le passé peut être nécessaire pour comprendre ce qui doit maintenant évoluer."
  },

  "V-16": {
    motCle: "Pressentiment",
    famille: "Signes",
    texte: "Ton intuition capte quelque chose avant que les faits soient complètement visibles."
  },

  "V-17": {
    motCle: "Confirmation",
    famille: "Signes",
    texte: "Un événement, une parole ou un détail vient confirmer une impression déjà présente."
  },

  "V-18": {
    motCle: "Élévation",
    famille: "Mouvements",
    texte: "La situation peut progresser vers un niveau supérieur, à condition d’accepter l’effort ou l’évolution nécessaire."
  },

  "V-19": {
    motCle: "Rapprochement",
    famille: "Liens",
    texte: "Une distance peut diminuer et un lien peut se reconstruire, se renforcer ou devenir plus fluide."
  },

  "V-20": {
    motCle: "Amour",
    famille: "Liens",
    texte: "Les sentiments, l’affection ou un lien émotionnel fort occupent une place centrale dans la situation."
  },

  "V-21": {
    motCle: "Changement",
    famille: "Mouvements",
    texte: "Une évolution arrive. Il peut être plus utile d’accompagner le mouvement que de chercher à le retenir."
  },

  "V-22": {
    motCle: "Message",
    famille: "Signes",
    texte: "Une parole, une information ou un détail peut contenir une indication importante pour la suite."
  },

  "V-23": {
    motCle: "Indice",
    famille: "Signes",
    texte: "Plusieurs petits éléments commencent à former un ensemble cohérent. Observe ce qui se répète."
  },

  "V-24": {
    motCle: "Charge",
    famille: "Ombres",
    texte: "Une responsabilité, une pression ou un poids devient trop présent et mérite d’être regardé autrement."
  },

  "V-25": {
    motCle: "Connexion",
    famille: "Liens",
    texte: "Un lien subtil unit des personnes, des événements ou des intentions et peut devenir plus important qu’il n’y paraît."
  },

  "V-26": {
    motCle: "Réciprocité",
    famille: "Liens",
    texte: "Les sentiments, les efforts ou les intentions peuvent être partagés et circuler dans les deux sens."
  },

  "V-27": {
    motCle: "Incertitude",
    famille: "Ombres",
    texte: "Une partie de la situation reste cachée ou difficile à lire. Mieux vaut éviter les conclusions trop rapides."
  },

  "V-28": {
    motCle: "Harmonie",
    famille: "Liens",
    texte: "L’entente, l’équilibre et la compréhension mutuelle peuvent favoriser une évolution plus douce."
  },

  "V-29": {
    motCle: "Révélation",
    famille: "Ombres",
    texte: "Une vérité cachée, un mécanisme ou une connexion complexe peut progressivement apparaître."
  },

  "V-30": {
    motCle: "Renouveau",
    famille: "Forces",
    texte: "Une nouvelle énergie permet de repartir, de se régénérer ou d’aborder la situation autrement."
  },

  "V-31": {
    motCle: "Transition",
    famille: "Mouvements",
    texte: "Une étape se termine tandis qu’une autre commence. La situation est en train de changer de forme."
  },

  "V-32": {
    motCle: "Conflit",
    famille: "Ombres",
    texte: "Une opposition ou une tension perturbe l’équilibre. Quelque chose demande à être confronté ou clarifié."
  },

  "V-33": {
    motCle: "Décision",
    famille: "Mouvements",
    texte: "Un choix devient nécessaire pour permettre à la situation d’avancer dans une direction plus précise."
  },

  "V-34": {
    motCle: "Blessure",
    famille: "Ombres",
    texte: "Une douleur ancienne ou récente influence encore la situation et peut demander attention ou réparation."
  },

  "V-35": {
    motCle: "Connexion",
    famille: "Ombres",
    texte: "Un lien existe, mais il peut être complexe, caché, pesant ou difficile à comprendre clairement."
  },

  "V-36": {
    motCle: "Évolution",
    famille: "Forces",
    texte: "La situation possède les ressources nécessaires pour progresser et se transformer positivement."
  },

  "V-37": {
    motCle: "Clarté",
    famille: "Forces",
    texte: "La capacité à comprendre, décider et voir l’essentiel devient une force importante dans cette situation."
  },

  "V-38": {
    motCle: "Légèreté",
    famille: "Mouvements",
    texte: "Quelque chose peut devenir plus simple ou plus fluide. Il est peut-être temps de relâcher ce qui alourdit."
  },

  "V-39": {
    motCle: "Opportunité",
    famille: "Signes",
    texte: "Une possibilité intéressante peut se présenter. Reste attentif aux ouvertures, même discrètes."
  },

  "V-40": {
    motCle: "Rétention",
    famille: "Ombres",
    texte: "Quelque chose est retenu, contenu ou difficile à libérer. Cette immobilisation peut freiner l’évolution."
  },

  "V-41": {
    motCle: "Croissance",
    famille: "Forces",
    texte: "Ce qui a été commencé possède un potentiel de développement. Patience et constance peuvent porter leurs fruits."
  },

  "V-42": {
    motCle: "Blocage",
    famille: "Ombres",
    texte: "Un obstacle empêche actuellement la situation d’avancer normalement et demande à être identifié."
  },

  "V-43": {
    motCle: "Écoute",
    famille: "Signes",
    texte: "Une indication importante peut venir d’une parole, d’un ressenti ou de quelque chose que tu n’écoutais pas encore."
  },

  "V-44": {
    motCle: "Direction",
    famille: "Mouvements",
    texte: "Une voie commence à se dessiner. Il devient possible de savoir vers quoi avancer."
  },

  "V-45": {
    motCle: "Famille",
    famille: "Liens",
    texte: "Les liens familiaux, les racines ou le sentiment d’appartenance occupent une place importante dans la situation."
  },

  "V-46": {
    motCle: "Épanouissement",
    famille: "Forces",
    texte: "Une situation peut atteindre une forme plus accomplie, plus heureuse ou plus conforme à ce que tu recherches."
  },

  "V-47": {
    motCle: "Réflexion",
    famille: "Liens",
    texte: "Une relation ou un échange mérite d’être observé avec recul afin de mieux comprendre ce qui vous relie."
  },

  "V-48": {
    motCle: "Solution",
    famille: "Signes",
    texte: "Un indice peut montrer comment résoudre la situation. La réponse est peut-être déjà plus proche qu’elle n’en a l’air."
  },

  "V-49": {
    motCle: "Énergie",
    famille: "Forces",
    texte: "Une réserve de volonté, de vitalité ou de détermination peut être mobilisée pour faire avancer la situation."
  },

  "V-50": {
    motCle: "Confusion",
    famille: "Ombres",
    texte: "Les informations ou les émotions se mélangent et rendent la situation difficile à lire avec précision."
  },

  "V-51": {
    motCle: "Commencement",
    famille: "Forces",
    texte: "Une nouvelle possibilité possède l’énergie nécessaire pour prendre naissance et se développer."
  },

  "V-52": {
    motCle: "Intuition",
    famille: "Signes",
    texte: "Un ressenti intérieur peut contenir une information importante, même si tu ne peux pas encore l’expliquer."
  },

  "V-53": {
    motCle: "Stabilité",
    famille: "Forces",
    texte: "Des bases solides permettent de sécuriser la situation et de construire avec davantage de confiance."
  },

  "V-54": {
    motCle: "Connexion",
    famille: "Liens",
    texte: "Un rapprochement ou un lien significatif se crée ou se renforce entre des personnes, des intentions ou des situations."
  },

  "V-55": {
    motCle: "Départ",
    famille: "Mouvements",
    texte: "Quelque chose quitte son point d’origine. Un nouveau trajet, une séparation ou une nouvelle aventure peut commencer."
  },

  "V-56": {
    motCle: "Rupture",
    famille: "Ombres",
    texte: "Une séparation ou une cassure remet en question une situation qui ne peut plus continuer exactement comme avant."
  },

  "V-57": {
    motCle: "Réussite",
    famille: "Forces",
    texte: "Les conditions peuvent permettre d’atteindre un objectif ou de voir les efforts engagés porter leurs fruits."
  },

  "V-58": {
    motCle: "Appel",
    famille: "Signes",
    texte: "Quelque chose cherche à attirer ton attention. Une invitation, un besoin ou une direction mérite d’être entendue."
  },

  "V-59": {
    motCle: "Liberté",
    famille: "Forces",
    texte: "Une possibilité de retrouver davantage d’autonomie, d’espace ou de choix devient accessible."
  },

  "V-60": {
    motCle: "Engagement",
    famille: "Liens",
    texte: "Un lien demande de prendre position, de s’investir ou de donner une forme plus concrète à une relation."
  }

};


/* =========================================================
   RÔLES DES TIRAGES
========================================================= */

const rolesTirages = {

  1: [
    "Réponse / énergie principale"
  ],

  3: [
    "Situation actuelle",
    "Influence ou obstacle",
    "Évolution"
  ],

  5: [
    "Situation actuelle",
    "Ce qui agit en ta faveur",
    "Ombre ou blocage",
    "Mouvement à venir",
    "Direction ou conseil"
  ],

  7: [
    "Passé récent",
    "Présent",
    "Influence cachée",
    "Obstacle principal",
    "Ce qui évolue",
    "Conseil",
    "Issue probable"
  ]

};


/* =========================================================
   TITRES DES TIRAGES
========================================================= */

const titresTirages = {

  1: {
    titre: "⚡ Tirage Éclair",
    description: "Choisis une carte."
  },

  3: {
    titre: "✨ Tirage Clair",
    description: "Choisis 3 cartes."
  },

  5: {
    titre: "🌙 Tirage Profond",
    description: "Choisis 5 cartes."
  },

  7: {
    titre: "🌌 Grand Tirage",
    description: "Choisis 7 cartes."
  }

};


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    document
      .querySelectorAll(
        ".bouton-tirage"
      )
      .forEach(
        bouton => {

          bouton.addEventListener(
            "click",
            () => {

              ouvrirTirage(
                Number(
                  bouton.dataset.tirage
                )
              );

            }
          );

        }
      );


    document
      .getElementById(
        "nouveauTirageBtn"
      )
      .addEventListener(
        "click",
        nouveauTirage
      );


    document
      .getElementById(
        "retourAccueilBtn"
      )
      .addEventListener(
        "click",
        retourAccueil
      );


    document
      .getElementById(
        "lectureApprofondieBtn"
      )
      .addEventListener(
        "click",
        afficherLectureApprofondie
      );

  }
);


/* =========================================================
   OUVRIR UN TIRAGE
========================================================= */

function ouvrirTirage(
  nombreCartes
) {

  dernierNombreCartes =
    nombreCartes;


  cartesDuTirage = [];

  nombreCartesRetournees = 0;


  const accueil =
    document.getElementById(
      "accueil"
    );


  const zoneTirage =
    document.getElementById(
      "zoneTirage"
    );


  const zoneCartes =
    document.getElementById(
      "cartesTirage"
    );


  const infosTirage =
    titresTirages[
      nombreCartes
    ];


  accueil.hidden =
    true;


  zoneTirage.hidden =
    false;


  zoneCartes.innerHTML =
    "";


  document.getElementById(
    "titreTirage"
  ).textContent =
    infosTirage.titre;


  document.getElementById(
    "descriptionTirage"
  ).textContent =
    infosTirage.description;


  reinitialiserLectureApprofondie();


  const paquet =
    creerPaquet();


  melangerPaquet(
    paquet
  );


  const cartesChoisies =
    paquet.slice(
      0,
      nombreCartes
    );


  const roles =
    rolesTirages[
      nombreCartes
    ];


  cartesChoisies.forEach(
    (
      imageCarte,
      index
    ) => {

      const numeroCarte =
        obtenirNumeroCarte(
          imageCarte
        );


      cartesDuTirage.push({

        numero:
          numeroCarte,

        role:
          roles[index],

        retournee:
          false

      });


      creerCarte(
        imageCarte,
        roles[index],
        index,
        nombreCartes,
        zoneCartes
      );

    }
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   CRÉER LE PAQUET
========================================================= */

function creerPaquet() {

  const paquet = [];


  for (
    let i = 1;
    i <= 60;
    i++
  ) {

    const numero =
      String(i)
        .padStart(
          2,
          "0"
        );


    paquet.push(
      `images/Cartes/V-${numero}.PNG`
    );

  }


  return paquet;

}


/* =========================================================
   MÉLANGER LE PAQUET
========================================================= */

function melangerPaquet(
  paquet
) {

  for (
    let i =
      paquet.length - 1;

    i > 0;

    i--
  ) {

    const j =
      Math.floor(
        Math.random()
        * (i + 1)
      );


    [
      paquet[i],
      paquet[j]
    ] = [
      paquet[j],
      paquet[i]
    ];

  }

}


/* =========================================================
   CRÉER UNE CARTE
========================================================= */

function creerCarte(
  imageCarte,
  roleCarte,
  indexCarte,
  nombreCartes,
  zoneCartes
) {

  const container =
    document.createElement(
      "div"
    );


  container.className =
    "carte-container";


  const flip =
    document.createElement(
      "div"
    );


  flip.className =
    "carte-flip";


  const dos =
    document.createElement(
      "img"
    );


  dos.src =
    "images/V-Dos.PNG";


  dos.alt =
    "Dos de la carte";


  dos.className =
    "carte-face carte-dos";


  const recto =
    document.createElement(
      "img"
    );


  recto.src =
    imageCarte;


  recto.alt =
    "Carte de voyance";


  recto.className =
    "carte-face carte-recto";


  const role =
    document.createElement(
      "div"
    );


  role.className =
    "carte-role";


  role.textContent =
    roleCarte;


  const interpretation =
    document.createElement(
      "div"
    );


  interpretation.className =
    "carte-interpretation";


  flip.appendChild(
    dos
  );


  flip.appendChild(
    recto
  );


  container.appendChild(
    flip
  );


  container.appendChild(
    role
  );


  container.appendChild(
    interpretation
  );


  zoneCartes.appendChild(
    container
  );


  let retournee =
    false;


  flip.addEventListener(
    "click",
    () => {

      if (
        retournee
      ) {

        return;

      }


      flip.classList.add(
        "retournee"
      );


      afficherInterpretation(
        imageCarte,
        interpretation
      );


      retournee =
        true;


      cartesDuTirage[
        indexCarte
      ].retournee =
        true;


      nombreCartesRetournees++;


      verifierLectureDisponible(
        nombreCartes
      );

    }
  );

}


/* =========================================================
   SIGNIFICATION INDIVIDUELLE
========================================================= */

function afficherInterpretation(
  imageCarte,
  interpretation
) {

  const numeroCarte =
    obtenirNumeroCarte(
      imageCarte
    );


  const info =
    infosCartes[
      numeroCarte
    ];


  if (
    !info
  ) {

    return;

  }


  interpretation.textContent =
    info.texte;


  interpretation.classList.add(
    "visible"
  );

}


/* =========================================================
   NUMÉRO DE CARTE
========================================================= */

function obtenirNumeroCarte(
  imageCarte
) {

  return imageCarte
    .split("/")
    .pop()
    .replace(
      /\.[^/.]+$/,
      ""
    );

}


/* =========================================================
   AFFICHER LE BOUTON LECTURE APPROFONDIE
========================================================= */

function verifierLectureDisponible(
  nombreCartes
) {

  if (
    nombreCartes <= 1
  ) {

    return;

  }


  if (
    nombreCartesRetournees
    !== nombreCartes
  ) {

    return;

  }


  document.getElementById(
    "lectureApprofondieBtn"
  ).hidden =
    false;

}


/* =========================================================
   RESET DE LA LECTURE
========================================================= */

function reinitialiserLectureApprofondie() {

  document.getElementById(
    "lectureApprofondieBtn"
  ).hidden =
    true;


  document.getElementById(
    "lectureApprofondieZone"
  ).hidden =
    true;


  document.getElementById(
    "lectureEnergieGenerale"
  ).hidden =
    true;


  document.getElementById(
    "lectureFamilleDominante"
  ).hidden =
    true;


  document.getElementById(
    "lectureSynthese"
  ).hidden =
    true;


  document.getElementById(
    "lectureAssociations"
  ).hidden =
    true;


  document.getElementById(
    "lectureEnergieContenu"
  ).innerHTML =
    "";


  document.getElementById(
    "lectureFamilleContenu"
  ).innerHTML =
    "";


  document.getElementById(
    "lectureSyntheseContenu"
  ).innerHTML =
    "";


  document.getElementById(
    "lectureAssociationsContenu"
  ).innerHTML =
    "";

}


/* =========================================================
   AFFICHER LA LECTURE APPROFONDIE
========================================================= */

function afficherLectureApprofondie() {

  if (
    cartesDuTirage.length <= 1
  ) {

    return;

  }


  const zone =
    document.getElementById(
      "lectureApprofondieZone"
    );


  zone.hidden =
    false;


  /* On ne montre plus les associations mécaniques */

  document.getElementById(
    "lectureAssociations"
  ).hidden =
    true;


  creerLectureGlobale();


  setTimeout(
    () => {

      zone.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    },
    100
  );

}


/* =========================================================
   CONSTRUIRE LA LECTURE GLOBALE
========================================================= */

function creerLectureGlobale() {

  const infos =
    cartesDuTirage
      .map(
        carte =>
          infosCartes[
            carte.numero
          ]
      )
      .filter(
        Boolean
      );


  if (
    infos.length === 0
  ) {

    return;

  }


  const compteFamilles =
    compterFamilles(
      infos
    );


  const motsCles =
    infos.map(
      info =>
        info.motCle
    );


  const premiere =
    infos[0];


  const derniere =
    infos[
      infos.length - 1
    ];


  const dominante =
    trouverFamilleDominante(
      compteFamilles
    );


  const texteGeneral =
    construireClimatGeneral(
      infos,
      premiere,
      derniere,
      dominante
    );


  const texteInfluences =
    construireInfluences(
      infos,
      compteFamilles
    );


  const textePossibilites =
    construirePossibilites(
      infos,
      motsCles
    );


  const texteDirection =
    construireDirection(
      infos,
      derniere
    );


  afficherBlocLecture(
    "lectureEnergieGenerale",
    "lectureEnergieContenu",
    texteGeneral
  );


  afficherBlocLecture(
    "lectureFamilleDominante",
    "lectureFamilleContenu",
    texteInfluences
  );


  afficherBlocLecture(
    "lectureSynthese",
    "lectureSyntheseContenu",
    textePossibilites
    + "\n\n"
    + texteDirection
  );

}


/* =========================================================
   AFFICHER UN BLOC DE LECTURE
========================================================= */

function afficherBlocLecture(
  sectionId,
  contenuId,
  texte
) {

  const section =
    document.getElementById(
      sectionId
    );


  const contenu =
    document.getElementById(
      contenuId
    );


  contenu.textContent =
    texte;


  contenu.style.whiteSpace =
    "pre-line";


  section.hidden =
    false;

}


/* =========================================================
   COMPTER LES FAMILLES
========================================================= */

function compterFamilles(
  infos
) {

  const compte = {

    Forces: 0,
    Liens: 0,
    Mouvements: 0,
    Signes: 0,
    Ombres: 0

  };


  infos.forEach(
    info => {

      if (
        compte[
          info.famille
        ] !== undefined
      ) {

        compte[
          info.famille
        ]++;

      }

    }
  );


  return compte;

}


/* =========================================================
   FAMILLE DOMINANTE
========================================================= */

function trouverFamilleDominante(
  compte
) {

  const classement =
    Object.entries(
      compte
    )
      .sort(
        (
          a,
          b
        ) =>
          b[1] - a[1]
      );


  if (
    classement.length < 2
  ) {

    return null;

  }


  if (
    classement[0][1]
    === classement[1][1]
  ) {

    return null;

  }


  return classement[0][0];

}


/* =========================================================
   CLIMAT GÉNÉRAL
========================================================= */

function construireClimatGeneral(
  infos,
  premiere,
  derniere,
  dominante
) {

  let texte =
    "Votre tirage semble décrire une situation qui n’est pas totalement figée. ";


  if (
    premiere.famille
    === "Ombres"
  ) {

    texte +=
      "Le point de départ paraît marqué par une hésitation, une difficulté, une tension ou un élément encore mal compris. ";

  }

  else if (
    premiere.famille
    === "Mouvements"
  ) {

    texte +=
      "Quelque chose semble déjà en train de bouger, de changer ou de chercher une nouvelle direction. ";

  }

  else if (
    premiere.famille
    === "Liens"
  ) {

    texte +=
      "La situation paraît fortement influencée par une relation, un attachement, une personne ou un engagement. ";

  }

  else if (
    premiere.famille
    === "Signes"
  ) {

    texte +=
      "Le tirage commence par une notion d’information, d’intuition ou de détail à observer attentivement. ";

  }

  else {

    texte +=
      "Le point de départ montre déjà des ressources ou un potentiel capables de faire évoluer la situation. ";

  }


  if (
    dominante === "Ombres"
  ) {

    texte +=
      "Plusieurs cartes suggèrent cependant que tout n’est pas encore clair. Certaines informations peuvent manquer, une peur peut influencer les choix, ou un obstacle peut avoir plus d’importance qu’il n’y paraît.";

  }

  else if (
    dominante === "Mouvements"
  ) {

    texte +=
      "L’ensemble insiste surtout sur l’évolution. Une décision, un déplacement, un changement de position ou simplement une nouvelle manière d’aborder les choses peut modifier sensiblement la suite.";

  }

  else if (
    dominante === "Liens"
  ) {

    texte +=
      "Les relations occupent une place importante. La suite peut dépendre de la qualité des échanges, de la confiance, d’un rapprochement ou au contraire de la nécessité de redéfinir certains liens.";

  }

  else if (
    dominante === "Signes"
  ) {

    texte +=
      "Le tirage invite particulièrement à observer les informations qui arrivent, les paroles entendues, les répétitions, les intuitions ou les événements qui semblent tomber au bon moment.";

  }

  else if (
    dominante === "Forces"
  ) {

    texte +=
      "La tendance générale paraît plutôt constructive. Il existe des ressources, une possibilité de progression ou une capacité à reprendre la main sur la situation.";

  }

  else {

    texte +=
      "Aucune influence ne domine complètement : plusieurs aspects semblent se mélanger, ce qui peut indiquer une situation encore ouverte à différentes évolutions.";

  }


  return texte;

}


/* =========================================================
   CE QUI PEUT INFLUENCER LA SITUATION
========================================================= */

function construireInfluences(
  infos,
  compte
) {

  let texte =
    "Plusieurs éléments peuvent modifier l’évolution de la situation. ";


  if (
    compte.Ombres > 0
  ) {

    texte +=
      "Il existe au moins une zone de prudence : doute, blocage, confusion, peur, tension ou élément caché. Cela ne signifie pas nécessairement une issue négative, mais plutôt qu’il serait utile d’éviter les décisions trop rapides. ";

  }


  if (
    compte.Signes > 0
  ) {

    texte +=
      "Des informations peuvent apparaître progressivement. Une conversation, un message, une intuition ou un détail apparemment secondaire pourrait aider à mieux comprendre ce qui se joue. ";

  }


  if (
    compte.Liens > 0
  ) {

    texte +=
      "Une autre personne peut également avoir une influence réelle. Selon votre question, cela peut concerner un partenaire, un proche, un collègue, la famille ou quelqu’un dont l’avis ou la présence compte davantage que prévu. ";

  }


  if (
    compte.Mouvements > 0
  ) {

    texte +=
      "Le facteur temps semble important : la situation peut évoluer, et ce qui paraît vrai aujourd’hui pourrait être différent après une décision ou un événement prochain. ";

  }


  if (
    compte.Forces > 0
  ) {

    texte +=
      "Enfin, certaines cartes montrent que vous disposez probablement de davantage de ressources ou de possibilités que vous ne le pensez actuellement.";

  }


  return texte;

}


/* =========================================================
   POSSIBILITÉS SELON LA NATURE DE LA QUESTION
========================================================= */

function construirePossibilites(
  infos,
  motsCles
) {

  const aLien =
    infos.some(
      info =>
        info.famille
        === "Liens"
    );


  const aMouvement =
    infos.some(
      info =>
        info.famille
        === "Mouvements"
    );


  const aOmbre =
    infos.some(
      info =>
        info.famille
        === "Ombres"
    );


  const aForce =
    infos.some(
      info =>
        info.famille
        === "Forces"
    );


  const aSigne =
    infos.some(
      info =>
        info.famille
        === "Signes"
    );


  let texte =
    "Plusieurs lectures restent possibles selon la situation à laquelle vous pensiez.\n\n";


  /* RELATIONNEL */

  if (
    aLien
  ) {

    texte +=
      "Si votre question concerne une relation, ce tirage peut parler d’un lien qui évolue, d’un rapprochement possible, d’un besoin de clarification ou d’un changement dans la manière dont chacun se positionne. ";

    if (
      aOmbre
    ) {

      texte +=
        "Il peut aussi exister un non-dit, une hésitation, une blessure ou une difficulté qui empêche encore la relation de trouver son équilibre. ";

    }

    if (
      aForce
    ) {

      texte +=
        "Malgré cela, certaines cartes laissent entendre qu’un terrain plus constructif peut se créer si les échanges deviennent plus clairs.";

    }

    texte +=
      "\n\n";

  }


  /* TRAVAIL / PROJET */

  if (
    aMouvement
    ||
    aForce
  ) {

    texte +=
      "Si votre question concerne le travail, un projet ou une décision personnelle, le tirage peut indiquer qu’une évolution est possible mais qu’elle demande probablement une prise de position concrète. ";

    if (
      aSigne
    ) {

      texte +=
        "Une information, une proposition, une réponse ou une opportunité peut jouer le rôle de déclencheur. ";

    }

    if (
      aOmbre
    ) {

      texte +=
        "Il peut toutefois être utile de vérifier les détails avant de vous engager, surtout si une partie de la situation reste incertaine.";

    }

    texte +=
      "\n\n";

  }


  /* SITUATION PERSONNELLE */

  texte +=
    "Si votre question est plus personnelle, ce tirage peut simplement refléter une période où quelque chose cherche à se réorganiser. Il ne s’agit pas forcément d’un événement spectaculaire : cela peut être une prise de conscience, un changement de priorité, une envie nouvelle ou le besoin de laisser derrière vous quelque chose qui ne correspond plus à la suite.";


  return texte;

}


/* =========================================================
   DIRECTION À PRIVILÉGIER
========================================================= */

function construireDirection(
  infos,
  derniere
) {

  let texte =
    "Direction suggérée : ";


  if (
    derniere.famille
    === "Forces"
  ) {

    texte +=
      "la fin du tirage est plutôt encourageante. Elle invite à vous appuyer sur ce qui fonctionne déjà, à renforcer vos ressources et à avancer progressivement plutôt que d’attendre une certitude absolue.";

  }

  else if (
    derniere.famille
    === "Mouvements"
  ) {

    texte +=
      "la situation semble demander du mouvement. Une décision, un changement de méthode ou simplement le fait de ne plus rester dans l’attente pourrait permettre de débloquer la suite.";

  }

  else if (
    derniere.famille
    === "Liens"
  ) {

    texte +=
      "la suite semble passer par les relations. Parler, écouter, clarifier les attentes ou observer la qualité réelle du lien peut être plus utile que chercher immédiatement une réponse définitive.";

  }

  else if (
    derniere.famille
    === "Signes"
  ) {

    texte +=
      "il semble préférable d’observer encore un peu avant de conclure. Une information supplémentaire, un échange ou un ressenti plus net pourrait préciser la direction.";

  }

  else {

    texte +=
      "la prudence reste utile. Quelque chose mérite probablement d’être compris, clarifié ou libéré avant de prendre une décision importante. Le tirage n’indique pas forcément une impasse, mais plutôt une étape intermédiaire.";

  }


  return texte;

}


/* =========================================================
   NOUVEAU TIRAGE
========================================================= */

function nouveauTirage() {

  ouvrirTirage(
    dernierNombreCartes
  );

}


/* =========================================================
   RETOUR ACCUEIL
========================================================= */

function retourAccueil() {

  document.getElementById(
    "accueil"
  ).hidden =
    false;


  document.getElementById(
    "zoneTirage"
  ).hidden =
    true;


  cartesDuTirage = [];

  nombreCartesRetournees = 0;


  reinitialiserLectureApprofondie();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
