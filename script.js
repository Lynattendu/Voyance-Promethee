/* =========================================================
   VOYANCE PROMÉTHÉE
   SCRIPT.JS
========================================================= */


/* =========================================================
   VARIABLES GÉNÉRALES
========================================================= */

let dernierNombreCartes = 1;

let cartesDuTirage = [];

let nombreCartesRetournees = 0;


/* =========================================================
   INFORMATIONS DES 60 CARTES

   motCle et famille ne sont PAS affichés sous les cartes.
   Ils servent uniquement à la lecture approfondie.
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
   RÔLES SELON LE TYPE DE TIRAGE
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
   COMBINAISONS SPÉCIALES

   Elles remplacent la lecture générique lorsque
   deux cartes particulières apparaissent côte à côte.
========================================================= */

const combinaisonsSpeciales = {

  "V-01|V-44":
    "L’orientation se précise nettement. Une direction concrète semble émerger et invite à avancer avec davantage de confiance.",

  "V-04|V-40":
    "Un attachement peut être maintenu plus fortement qu’il ne devrait l’être. Il peut être utile de regarder ce qui empêche de lâcher prise.",

  "V-04|V-59":
    "Un lien important se confronte à un besoin de liberté. L’équilibre dépendra de la capacité à rester lié sans se sentir enfermé.",

  "V-05|V-31":
    "Le passage est confirmé par une véritable transition. Une étape semble se fermer pour laisser place à une nouvelle configuration.",

  "V-06|V-53":
    "Un bouleversement vient toucher une situation pourtant stable. Après l’agitation, de nouvelles bases peuvent cependant se reconstruire.",

  "V-08|V-11":
    "Une amitié ou une relation de confiance peut apporter un soutien particulièrement précieux dans la situation.",

  "V-09|V-29":
    "Une vérité importante cherche à émerger. Ce qui était caché ou complexe pourrait progressivement devenir visible.",

  "V-12|V-23":
    "Les coïncidences ne semblent pas anodines. Plusieurs indices peuvent se rejoindre et former un message plus cohérent.",

  "V-14|V-27":
    "L’incertitude peut progressivement se dissiper. Une information, un signe ou une compréhension nouvelle aide à y voir plus clair.",

  "V-16|V-52":
    "Le pressentiment et l’intuition se renforcent mutuellement. Ce que tu ressens mérite probablement d’être écouté avec attention.",

  "V-17|V-22":
    "Un message, une parole ou une information peut venir confirmer quelque chose que tu pressentais déjà.",

  "V-17|V-52":
    "Une intuition pourrait recevoir une confirmation concrète. Un ressenti intérieur trouve progressivement un écho dans les faits.",

  "V-18|V-46":
    "La progression mène vers une forme d’épanouissement. Les efforts engagés peuvent permettre d’atteindre un niveau plus satisfaisant.",

  "V-19|V-54":
    "Le rapprochement est renforcé par une véritable connexion. Un lien peut reprendre de l’importance ou devenir plus profond.",

  "V-20|V-26":
    "Les sentiments semblent pouvoir circuler dans les deux sens. Cette association favorise l’idée d’un amour ou d’une affection réciproque.",

  "V-20|V-27":
    "Les sentiments sont présents, mais une zone d’incertitude demeure. Tout n’est peut-être pas encore dit, compris ou assumé.",

  "V-20|V-56":
    "Une relation affective traverse une cassure, une séparation ou une transformation importante. Le lien ne peut probablement pas continuer exactement comme avant.",

  "V-21|V-36":
    "Le changement ne semble pas seulement passager : il peut conduire à une véritable évolution de la situation.",

  "V-23|V-48":
    "Un indice peut mener directement vers une solution. Observe particulièrement les détails, répétitions ou informations qui apparaissent.",

  "V-24|V-38":
    "Une charge peut commencer à s’alléger. Cette association invite à relâcher ce qui pèse inutilement.",

  "V-25|V-35":
    "Une connexion existe bien, mais elle peut comporter une part cachée, complexe ou difficile à comprendre complètement.",

  "V-28|V-32":
    "Un conflit peut être dépassé à condition de rechercher l’équilibre, le dialogue ou une forme de compréhension mutuelle.",

  "V-30|V-34":
    "Une blessure peut entrer dans une phase de réparation ou de renouveau. Quelque chose peut recommencer différemment.",

  "V-31|V-51":
    "Une transition ouvre directement sur un commencement. Une nouvelle étape paraît prête à prendre forme.",

  "V-33|V-44":
    "Une décision permet de définir clairement une direction. Le moment semble favorable pour choisir un cap.",

  "V-36|V-57":
    "L’évolution peut conduire à une réussite. La progression engagée possède un potentiel favorable.",

  "V-37|V-50":
    "La confusion peut être dépassée grâce à une compréhension plus nette. Les éléments commencent à se remettre en ordre.",

  "V-39|V-57":
    "Une opportunité peut mener à une réussite si elle est reconnue et saisie au bon moment.",

  "V-41|V-46":
    "Ce qui grandit peut atteindre une forme d’épanouissement. Cette association parle d’un développement favorable et progressif.",

  "V-42|V-48":
    "Un blocage existe, mais une solution semble également accessible. La difficulté n’est probablement pas définitive.",

  "V-42|V-49":
    "Un obstacle ralentit la situation, mais l’énergie nécessaire pour le dépasser est présente ou peut être mobilisée.",

  "V-43|V-58":
    "Quelque chose cherche clairement à être entendu. Une parole, un besoin ou un appel mérite une attention particulière.",

  "V-45|V-60":
    "Un engagement peut concerner directement la famille, les racines ou un lien d’appartenance particulièrement important.",

  "V-51|V-55":
    "Un départ ouvre sur un commencement. Quitter une situation peut devenir la condition nécessaire pour entrer dans une nouvelle étape.",

  "V-53|V-60":
    "Un engagement peut apporter de la stabilité et donner une forme plus solide ou durable à un lien."

};


/* =========================================================
   INTERPRÉTATIONS DES ASSOCIATIONS DE FAMILLES
========================================================= */

const associationsFamilles = {

  "Forces|Forces":
    "Les deux cartes se renforcent. Il existe ici un potentiel important de progression, de construction ou d’accomplissement.",

  "Liens|Liens":
    "La relation, l’attachement ou les échanges occupent une place centrale. Ce qui se joue dépend fortement des personnes impliquées.",

  "Mouvements|Mouvements":
    "La situation est clairement en évolution. Plusieurs éléments poussent vers un changement, un déplacement ou une nouvelle étape.",

  "Signes|Signes":
    "Les indications se multiplient. Les messages, intuitions ou coïncidences méritent d’être observés attentivement.",

  "Ombres|Ombres":
    "Deux éléments complexes se répondent. Une difficulté, une peur ou quelque chose de caché demande à être regardé avant de pouvoir avancer.",

  "Forces|Liens":
    "Un lien peut devenir une véritable ressource. Une relation, un soutien ou un engagement favorise la situation.",

  "Forces|Mouvements":
    "L’énergie disponible favorise l’évolution. Le changement paraît soutenu par des ressources capables de le faire avancer.",

  "Forces|Signes":
    "Une indication ou une intuition peut révéler une possibilité favorable. Il est utile de rester attentif à ce qui se présente.",

  "Forces|Ombres":
    "Une difficulté est présente, mais des ressources existent pour lui faire face. Cette association parle davantage de dépassement que d’impasse.",

  "Liens|Mouvements":
    "Une relation ou un lien est en train d’évoluer. Rapprochement, éloignement ou changement de dynamique sont possibles.",

  "Liens|Signes":
    "Une information, une parole ou un ressenti peut être particulièrement important dans une relation.",

  "Liens|Ombres":
    "Un lien comporte une zone sensible, complexe ou cachée. Il peut être nécessaire de clarifier ce qui pèse sur la relation.",

  "Mouvements|Signes":
    "Un signe peut indiquer la direction du changement. Observe ce qui apparaît au moment où la situation commence à évoluer.",

  "Mouvements|Ombres":
    "La situation cherche à avancer mais rencontre une résistance, une hésitation ou un obstacle qui ralentit le mouvement.",

  "Signes|Ombres":
    "Les informations disponibles restent partielles ou ambiguës. L’intuition peut aider, mais il vaut mieux éviter les conclusions trop rapides."

};


/* =========================================================
   TEXTES DES FAMILLES DOMINANTES
========================================================= */

const textesFamillesDominantes = {

  Forces:
    "Les Forces dominent ce tirage. L’accent est mis sur les ressources disponibles, la progression, la capacité d’agir et ce qui peut se construire.",

  Liens:
    "Les Liens dominent ce tirage. Les relations, sentiments, échanges ou engagements semblent jouer un rôle essentiel dans la situation.",

  Mouvements:
    "Les Mouvements dominent ce tirage. La situation n’est pas figée : changement, évolution, déplacement ou décision occupent une place importante.",

  Signes:
    "Les Signes dominent ce tirage. Les messages, intuitions, coïncidences et informations discrètes méritent une attention particulière.",

  Ombres:
    "Les Ombres dominent ce tirage. Certaines zones restent complexes, cachées ou difficiles. La compréhension de ce qui bloque semble essentielle avant d’avancer."

};


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const boutonsTirage =
      document.querySelectorAll(
        ".bouton-tirage"
      );


    boutonsTirage.forEach(
      bouton => {

        bouton.addEventListener(
          "click",
          () => {

            const nombreCartes =
              Number(
                bouton.dataset.tirage
              );

            ouvrirTirage(
              nombreCartes
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


  const titre =
    document.getElementById(
      "titreTirage"
    );


  const description =
    document.getElementById(
      "descriptionTirage"
    );


  const zoneCartes =
    document.getElementById(
      "cartesTirage"
    );


  accueil.hidden = true;

  zoneTirage.hidden = false;

  zoneCartes.innerHTML = "";


  reinitialiserLectureApprofondie();


  const infosTirage =
    titresTirages[
      nombreCartes
    ];


  titre.textContent =
    infosTirage.titre;


  description.textContent =
    infosTirage.description;


  const roles =
    rolesTirages[
      nombreCartes
    ];


  /* =======================================================
     CRÉATION DU PAQUET
  ======================================================= */

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


  /* =======================================================
     MÉLANGE
  ======================================================= */

  for (
    let i = paquet.length - 1;
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


  /* =======================================================
     CARTES DU TIRAGE
  ======================================================= */

  const cartesChoisies =
    paquet.slice(
      0,
      nombreCartes
    );


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
        zoneCartes,
        nombreCartes
      );

    }
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   CRÉER UNE CARTE
========================================================= */

function creerCarte(
  imageCarte,
  roleCarte,
  indexCarte,
  zoneCartes,
  nombreCartes
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


  /* =======================================================
     DOS
  ======================================================= */

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


  /* =======================================================
     RECTO
  ======================================================= */

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


  /* =======================================================
     RÔLE
  ======================================================= */

  const role =
    document.createElement(
      "div"
    );


  role.className =
    "carte-role";


  role.textContent =
    roleCarte;


  /* =======================================================
     INTERPRÉTATION
  ======================================================= */

  const interpretation =
    document.createElement(
      "div"
    );


  interpretation.className =
    "carte-interpretation";


  /* =======================================================
     ASSEMBLAGE
  ======================================================= */

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


  /* =======================================================
     RETOURNEMENT
  ======================================================= */

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
   AFFICHER LA SIGNIFICATION INDIVIDUELLE
========================================================= */

function afficherInterpretation(
  imageCarte,
  interpretation
) {

  const nomFichier =
    obtenirNumeroCarte(
      imageCarte
    );


  const info =
    infosCartes[
      nomFichier
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
   EXTRAIRE V-XX DU NOM DE FICHIER
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
   VÉRIFIER SI LA LECTURE APPROFONDIE EST DISPONIBLE
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


  const bouton =
    document.getElementById(
      "lectureApprofondieBtn"
    );


  bouton.hidden =
    false;

}


/* =========================================================
   RÉINITIALISER LA LECTURE APPROFONDIE
========================================================= */

function reinitialiserLectureApprofondie() {

  const bouton =
    document.getElementById(
      "lectureApprofondieBtn"
    );


  const zone =
    document.getElementById(
      "lectureApprofondieZone"
    );


  bouton.hidden =
    true;


  zone.hidden =
    true;


  document.getElementById(
    "lectureEnergieGenerale"
  ).hidden = true;


  document.getElementById(
    "lectureFamilleDominante"
  ).hidden = true;


  document.getElementById(
    "lectureSynthese"
  ).hidden = true;


  document.getElementById(
    "lectureAssociationsContenu"
  ).innerHTML = "";


  document.getElementById(
    "lectureEnergieContenu"
  ).innerHTML = "";


  document.getElementById(
    "lectureFamilleContenu"
  ).innerHTML = "";


  document.getElementById(
    "lectureSyntheseContenu"
  ).innerHTML = "";

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


  creerLectureAssociations();

  creerLectureEnergie();

  creerLectureFamilleDominante();

  creerSynthese();


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
   CRÉER LES ASSOCIATIONS ENTRE CARTES VOISINES
========================================================= */

function creerLectureAssociations() {

  const contenu =
    document.getElementById(
      "lectureAssociationsContenu"
    );


  contenu.innerHTML = "";


  for (
    let i = 0;
    i < cartesDuTirage.length - 1;
    i++
  ) {

    const carteA =
      cartesDuTirage[i];


    const carteB =
      cartesDuTirage[i + 1];


    const infoA =
      infosCartes[
        carteA.numero
      ];


    const infoB =
      infosCartes[
        carteB.numero
      ];


    if (
      !infoA
      ||
      !infoB
    ) {

      continue;

    }


    const bloc =
      document.createElement(
        "div"
      );


    bloc.className =
      "association-carte";


    const titre =
      document.createElement(
        "div"
      );


    titre.className =
      "association-titre";


    titre.textContent =
      `${infoA.motCle} ✦ ${infoB.motCle}`;


    const texte =
      document.createElement(
        "div"
      );


    texte.className =
      "association-texte";


    texte.textContent =
      obtenirInterpretationAssociation(
        carteA.numero,
        carteB.numero
      );


    bloc.appendChild(
      titre
    );


    bloc.appendChild(
      texte
    );


    contenu.appendChild(
      bloc
    );

  }

}


/* =========================================================
   TROUVER L'INTERPRÉTATION DE DEUX CARTES
========================================================= */

function obtenirInterpretationAssociation(
  numeroA,
  numeroB
) {

  const cle =
    creerClePaire(
      numeroA,
      numeroB
    );


  if (
    combinaisonsSpeciales[
      cle
    ]
  ) {

    return combinaisonsSpeciales[
      cle
    ];

  }


  const infoA =
    infosCartes[
      numeroA
    ];


  const infoB =
    infosCartes[
      numeroB
    ];


  const cleFamilles =
    creerCleFamilles(
      infoA.famille,
      infoB.famille
    );


  const lectureFamille =
    associationsFamilles[
      cleFamilles
    ];


  if (
    lectureFamille
  ) {

    return (
      `${infoA.motCle} associé à ${infoB.motCle}. `
      + lectureFamille
    );

  }


  return (
    `${infoA.motCle} et ${infoB.motCle} se répondent dans ce tirage. `
    + "Le sens de l’une nuance et complète celui de l’autre."
  );

}


/* =========================================================
   CLÉ D'UNE PAIRE DE CARTES
========================================================= */

function creerClePaire(
  carteA,
  carteB
) {

  return [
    carteA,
    carteB
  ]
    .sort()
    .join("|");

}


/* =========================================================
   CLÉ D'UNE PAIRE DE FAMILLES
========================================================= */

function creerCleFamilles(
  familleA,
  familleB
) {

  const ordre = [
    "Forces",
    "Liens",
    "Mouvements",
    "Signes",
    "Ombres"
  ];


  return [
    familleA,
    familleB
  ]
    .sort(
      (
        a,
        b
      ) =>
        ordre.indexOf(a)
        -
        ordre.indexOf(b)
    )
    .join("|");

}


/* =========================================================
   ÉNERGIE GÉNÉRALE
========================================================= */

function creerLectureEnergie() {

  const section =
    document.getElementById(
      "lectureEnergieGenerale"
    );


  const contenu =
    document.getElementById(
      "lectureEnergieContenu"
    );


  if (
    cartesDuTirage.length < 3
  ) {

    section.hidden =
      true;

    return;

  }


  const premiere =
    infosCartes[
      cartesDuTirage[0].numero
    ];


  const derniere =
    infosCartes[
      cartesDuTirage[
        cartesDuTirage.length - 1
      ].numero
    ];


  contenu.textContent =
    `Le tirage s’ouvre sur ${premiere.motCle} et se termine sur ${derniere.motCle}. `
    + construireEvolutionGlobale(
      premiere,
      derniere
    );


  section.hidden =
    false;

}


/* =========================================================
   ÉVOLUTION ENTRE PREMIÈRE ET DERNIÈRE CARTE
========================================================= */

function construireEvolutionGlobale(
  premiere,
  derniere
) {

  if (
    premiere.famille
    === "Ombres"
    &&
    derniere.famille
    === "Forces"
  ) {

    return "L’ensemble suggère un passage d’une difficulté ou d’une zone obscure vers davantage de ressources et de possibilités.";

  }


  if (
    premiere.famille
    === "Ombres"
    &&
    derniere.famille
    === "Mouvements"
  ) {

    return "Une situation initialement complexe semble chercher une issue par le changement ou la mise en mouvement.";

  }


  if (
    premiere.famille
    === "Mouvements"
    &&
    derniere.famille
    === "Forces"
  ) {

    return "Le changement engagé peut conduire vers une position plus solide ou plus favorable.";

  }


  if (
    premiere.famille
    === "Signes"
    &&
    derniere.famille
    === "Mouvements"
  ) {

    return "Une information, une intuition ou un signe pourrait devenir le déclencheur d’une évolution concrète.";

  }


  if (
    premiere.famille
    === "Liens"
    &&
    derniere.famille
    === "Forces"
  ) {

    return "Ce qui se joue dans les relations peut progressivement devenir une source de stabilité ou de progression.";

  }


  if (
    derniere.famille
    === "Ombres"
  ) {

    return "La conclusion reste prudente : une difficulté ou une zone encore mal comprise demande à être éclaircie.";

  }


  if (
    derniere.famille
    === "Signes"
  ) {

    return "La suite semble dépendre d’une information, d’un ressenti ou d’un signe qui n’est peut-être pas encore totalement visible.";

  }


  if (
    derniere.famille
    === "Liens"
  ) {

    return "L’issue du tirage accorde une importance particulière aux relations, aux sentiments ou aux engagements.";

  }


  if (
    derniere.famille
    === "Mouvements"
  ) {

    return "La situation paraît appelée à évoluer plutôt qu’à rester dans son état actuel.";

  }


  return "Le chemin décrit par les cartes semble conduire vers une capacité d’action, de construction ou d’évolution.";

}


/* =========================================================
   FAMILLE DOMINANTE
========================================================= */

function creerLectureFamilleDominante() {

  const section =
    document.getElementById(
      "lectureFamilleDominante"
    );


  const contenu =
    document.getElementById(
      "lectureFamilleContenu"
    );


  if (
    cartesDuTirage.length < 3
  ) {

    section.hidden =
      true;

    return;

  }


  const compteurs = {

    Forces: 0,
    Liens: 0,
    Mouvements: 0,
    Signes: 0,
    Ombres: 0

  };


  cartesDuTirage.forEach(
    carte => {

      const info =
        infosCartes[
          carte.numero
        ];


      if (
        info
        &&
        compteurs[
          info.famille
        ] !== undefined
      ) {

        compteurs[
          info.famille
        ]++;

      }

    }
  );


  const classement =
    Object.entries(
      compteurs
    )
      .sort(
        (
          a,
          b
        ) =>
          b[1] - a[1]
      );


  const meilleureFamille =
    classement[0];


  const secondeFamille =
    classement[1];


  if (
    meilleureFamille[1] === 0
  ) {

    section.hidden =
      true;

    return;

  }


  if (
    meilleureFamille[1]
    === secondeFamille[1]
  ) {

    contenu.textContent =
      "Aucune famille ne domine nettement ce tirage. Plusieurs influences se répondent et demandent à être lues ensemble.";

    section.hidden =
      false;

    return;

  }


  const nomFamille =
    meilleureFamille[0];


  contenu.textContent =
    textesFamillesDominantes[
      nomFamille
    ];


  section.hidden =
    false;

}


/* =========================================================
   SYNTHÈSE
========================================================= */

function creerSynthese() {

  const section =
    document.getElementById(
      "lectureSynthese"
    );


  const contenu =
    document.getElementById(
      "lectureSyntheseContenu"
    );


  if (
    cartesDuTirage.length < 3
  ) {

    section.hidden =
      true;

    return;

  }


  const premiereCarte =
    infosCartes[
      cartesDuTirage[0].numero
    ];


  const derniereCarte =
    infosCartes[
      cartesDuTirage[
        cartesDuTirage.length - 1
      ].numero
    ];


  const obstacles =
    cartesDuTirage.filter(
      carte =>
        infosCartes[
          carte.numero
        ].famille
        === "Ombres"
    ).length;


  const forces =
    cartesDuTirage.filter(
      carte =>
        infosCartes[
          carte.numero
        ].famille
        === "Forces"
    ).length;


  let conclusion =
    `Le tirage part de ${premiereCarte.motCle} et conduit vers ${derniereCarte.motCle}. `;


  if (
    obstacles > forces
  ) {

    conclusion +=
      "Plusieurs éléments demandent encore à être compris, débloqués ou clarifiés avant que la situation puisse évoluer pleinement.";

  }

  else if (
    forces > obstacles
  ) {

    conclusion +=
      "Les ressources favorables sont bien présentes et semblent pouvoir soutenir l’évolution de la situation.";

  }

  else {

    conclusion +=
      "Le tirage montre un équilibre entre possibilités et résistances : la façon dont la situation sera abordée peut faire une réelle différence.";

  }


  contenu.textContent =
    conclusion;


  section.hidden =
    false;

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

  const accueil =
    document.getElementById(
      "accueil"
    );


  const zoneTirage =
    document.getElementById(
      "zoneTirage"
    );


  accueil.hidden =
    false;


  zoneTirage.hidden =
    true;


  cartesDuTirage = [];

  nombreCartesRetournees = 0;


  reinitialiserLectureApprofondie();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
