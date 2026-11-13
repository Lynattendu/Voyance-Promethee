"use strict";

/* =========================================================
   VOYANCE PROMÉTHÉE
   NUMÉROLOGIE — JAVASCRIPT COMPLET

   1. Mon profil numérologique
   2. Chemin de vie
   3. Numérologie des noms et prénoms
   4. Année, mois et jour personnels
   5. Analyse d'une date importante
   6. Compatibilité entre deux personnes
   7. Lectures approfondies

   Convention :
   Numérologie pythagoricienne occidentale.

   Les calculs sont mathématiques.
   Les interprétations sont symboliques.

   Aucun envoi de données à un serveur.
   Aucun stockage des données personnelles.
========================================================= */


/* =========================================================
   1. SIGNIFICATIONS DES NOMBRES
========================================================= */

const SIGNIFICATIONS = {

  1: {
    titre: "Indépendance et initiative",

    forces:
      "Volonté, courage, autonomie, initiative et capacité à diriger.",

    defis:
      "Impatience, autoritarisme, individualisme et difficulté à accepter les limites.",

    aspirations:
      "Agir librement, décider par soi-même et développer ses propres projets.",

    relations:
      "Recherche d'indépendance, de respect et de reconnaissance.",

    cycle:
      "Nouveau départ, affirmation de soi, initiative et commencement.",

    conseil:
      "Prenez des initiatives tout en restant attentif aux autres."
  },

  2: {
    titre: "Union et coopération",

    forces:
      "Diplomatie, écoute, sensibilité, patience et coopération.",

    defis:
      "Indécision, dépendance affective, timidité et manque d'affirmation.",

    aspirations:
      "Créer des liens harmonieux, partager et collaborer.",

    relations:
      "Recherche de confiance, de dialogue et de complémentarité.",

    cycle:
      "Association, patience, collaboration et rapprochement.",

    conseil:
      "Recherchez l'harmonie sans oublier vos propres besoins."
  },

  3: {
    titre: "Expression et créativité",

    forces:
      "Imagination, communication, sociabilité, créativité et enthousiasme.",

    defis:
      "Dispersion, agitation, superficialité et difficulté à terminer les projets.",

    aspirations:
      "Créer, communiquer, partager ses idées et s'exprimer librement.",

    relations:
      "Recherche de spontanéité, de joie et d'échanges.",

    cycle:
      "Expression, communication, créativité et rencontres.",

    conseil:
      "Transformez vos idées en réalisations concrètes."
  },

  4: {
    titre: "Construction et stabilité",

    forces:
      "Rigueur, méthode, persévérance, discipline et fiabilité.",

    defis:
      "Rigidité, routine, peur du changement et perfectionnisme.",

    aspirations:
      "Construire quelque chose de solide, stable et durable.",

    relations:
      "Recherche de fidélité, de sécurité et d'engagement.",

    cycle:
      "Travail, organisation, consolidation et construction.",

    conseil:
      "Construisez des bases solides tout en conservant de la souplesse."
  },

  5: {
    titre: "Liberté et changement",

    forces:
      "Curiosité, adaptation, audace, mobilité et ouverture d'esprit.",

    defis:
      "Instabilité, impulsivité, imprudence et difficulté à accepter les contraintes.",

    aspirations:
      "Explorer, voyager, expérimenter et découvrir de nouvelles possibilités.",

    relations:
      "Recherche de liberté, de nouveauté et d'espace personnel.",

    cycle:
      "Changement, mouvement, découverte et adaptation.",

    conseil:
      "Accueillez les nouvelles expériences sans agir dans la précipitation."
  },

  6: {
    titre: "Harmonie et responsabilité",

    forces:
      "Bienveillance, loyauté, protection, engagement et sens des responsabilités.",

    defis:
      "Sacrifice excessif, contrôle, perfectionnisme et difficulté à poser des limites.",

    aspirations:
      "Aimer, protéger, accompagner et créer l'harmonie.",

    relations:
      "Recherche de stabilité affective, de proximité et de réciprocité.",

    cycle:
      "Famille, engagement, responsabilités et harmonie.",

    conseil:
      "Prenez soin des autres sans négliger votre propre équilibre."
  },

  7: {
    titre: "Connaissance et spiritualité",

    forces:
      "Réflexion, analyse, intuition, profondeur et curiosité intellectuelle.",

    defis:
      "Isolement, doute, méfiance et difficulté à partager ses émotions.",

    aspirations:
      "Comprendre, apprendre, rechercher la vérité et donner du sens.",

    relations:
      "Recherche de profondeur, de confiance et de respect de l'intimité.",

    cycle:
      "Réflexion, étude, introspection et recherche intérieure.",

    conseil:
      "Accordez-vous du temps pour comprendre avant de prendre une décision."
  },

  8: {
    titre: "Pouvoir et réalisation",

    forces:
      "Ambition, détermination, organisation, efficacité et capacité de réalisation.",

    defis:
      "Domination, matérialisme, dureté et difficulté à lâcher prise.",

    aspirations:
      "Accomplir, organiser, diriger et obtenir des résultats.",

    relations:
      "Recherche de respect, de loyauté et d'objectifs partagés.",

    cycle:
      "Réalisation, responsabilités, finances et résultats.",

    conseil:
      "Poursuivez vos ambitions sans perdre votre équilibre personnel."
  },

  9: {
    titre: "Altruisme et accomplissement",

    forces:
      "Générosité, compassion, expérience, ouverture et sens de la transmission.",

    defis:
      "Hypersensibilité, idéalisme excessif, désillusion et difficulté à se détacher.",

    aspirations:
      "Aider, transmettre, comprendre et contribuer à un idéal.",

    relations:
      "Recherche de compréhension, de générosité et de profondeur.",

    cycle:
      "Achèvement, bilan, transmission et préparation d'un renouveau.",

    conseil:
      "Reconnaissez ce qui est accompli et préparez sereinement la suite."
  },

  11: {
    titre: "Intuition et inspiration",

    forces:
      "Intuition, inspiration, imagination, sensibilité et vision.",

    defis:
      "Tension intérieure, doute, nervosité et attentes excessives.",

    aspirations:
      "Inspirer, comprendre et donner du sens à ses intuitions.",

    relations:
      "Recherche de compréhension, de profondeur et d'harmonie.",

    cycle:
      "Inspiration, conscience et sensibilité.",

    conseil:
      "Associez vos intuitions à des actions réfléchies."
  },

  22: {
    titre: "Le maître bâtisseur",

    forces:
      "Vision, organisation, persévérance, ambition et concrétisation.",

    defis:
      "Pression excessive, rigidité, peur de l'échec et ambitions démesurées.",

    aspirations:
      "Construire une œuvre durable et transformer une vision en réalité.",

    relations:
      "Recherche de confiance, de stabilité et de projets communs.",

    cycle:
      "Construction, organisation et réalisations importantes.",

    conseil:
      "Transformez vos ambitions en étapes concrètes et réalisables."
  },

  33: {
    titre: "Transmission et compassion",

    forces:
      "Empathie, générosité, soutien, transmission et sens du service.",

    defis:
      "Sacrifice de soi, responsabilités excessives et idéalisme.",

    aspirations:
      "Accompagner, aider, transmettre et soutenir les autres.",

    relations:
      "Recherche de bienveillance, de compréhension et d'harmonie.",

    cycle:
      "Transmission, service et engagement.",

    conseil:
      "Aidez les autres sans oublier vos propres besoins."
  }

};


/* =========================================================
   2. FONCTIONS GÉNÉRALES
========================================================= */

function el(id) {
  return document.getElementById(id);
}


function afficherTexte(id, texte) {

  const element = el(id);

  if (!element) {
    return;
  }

  element.textContent = String(texte);

  element.style.whiteSpace = "pre-line";

}


function afficherResultat(id) {

  const element = el(id);

  if (!element) {
    return;
  }

  element.hidden = false;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


function afficherErreur(message) {
  alert(message);
}


function sommeChiffres(nombre) {

  return String(nombre)
    .replace(/\D/g, "")
    .split("")
    .reduce(
      (total, chiffre) => total + Number(chiffre),
      0
    );

}


/* =========================================================
   3. RÉDUCTION NUMÉROLOGIQUE
========================================================= */

function reduireNombre(nombre, maitres = true) {

  let resultat = Number(nombre);

  if (
    !Number.isSafeInteger(resultat) ||
    resultat < 0
  ) {
    throw new Error("Nombre invalide.");
  }

  while (resultat > 9) {

    if (
      maitres &&
      [11, 22, 33].includes(resultat)
    ) {
      break;
    }

    resultat = sommeChiffres(resultat);

  }

  return resultat;

}


function detailReduction(nombre, maitres = true) {

  let resultat = Number(nombre);

  const etapes = [String(resultat)];

  while (resultat > 9) {

    if (
      maitres &&
      [11, 22, 33].includes(resultat)
    ) {
      break;
    }

    resultat = sommeChiffres(resultat);

    etapes.push(String(resultat));

  }

  return etapes.join(" → ");

}


function signification(nombre) {

  return SIGNIFICATIONS[nombre] || null;

}


/* =========================================================
   4. VALIDATION DES DATES
========================================================= */

function analyserDate(valeur) {

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(valeur || "")
  ) {
    throw new Error("Indique une date valide.");
  }

  const parties = valeur.split("-").map(Number);

  const annee = parties[0];
  const mois = parties[1];
  const jour = parties[2];

  if (
    annee < 100 ||
    mois < 1 ||
    mois > 12 ||
    jour < 1 ||
    jour > 31
  ) {
    throw new Error("La date indiquée est invalide.");
  }

  const date = new Date(
    Date.UTC(annee, mois - 1, jour)
  );

  if (
    date.getUTCFullYear() !== annee ||
    date.getUTCMonth() !== mois - 1 ||
    date.getUTCDate() !== jour
  ) {
    throw new Error("Cette date n'existe pas.");
  }

  return {
    jour,
    mois,
    annee
  };

}


function formaterDate(valeur) {

  const date = analyserDate(valeur);

  return (
    String(date.jour).padStart(2, "0") +
    "/" +
    String(date.mois).padStart(2, "0") +
    "/" +
    date.annee
  );

}


function dateAujourdhui() {

  const date = new Date();

  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );

}


/* =========================================================
   5. CHEMIN DE VIE

   Méthode choisie :
   - Réduire le jour à 1-9
   - Réduire le mois à 1-9
   - Réduire l'année à 1-9
   - Additionner les trois résultats
   - Conserver les maîtres nombres au résultat final

   Les autres écoles peuvent utiliser une
   convention différente.
========================================================= */

function calculerCheminVie(dateNaissance) {

  const date = analyserDate(dateNaissance);

  const jour = reduireNombre(
    date.jour,
    false
  );

  const mois = reduireNombre(
    date.mois,
    false
  );

  const annee = reduireNombre(
    date.annee,
    false
  );

  const total = jour + mois + annee;

  const resultat = reduireNombre(
    total,
    true
  );

  const details =
    "Jour : " +
    detailReduction(date.jour, false) +

    "\nMois : " +
    detailReduction(date.mois, false) +

    "\nAnnée : " +
    detailReduction(date.annee, false) +

    "\n\nAddition : " +
    jour + " + " + mois + " + " + annee +
    " = " + total +

    "\n\nRésultat : " +
    detailReduction(total, true);

  return {
    nombre: resultat,
    details
  };

}


/* =========================================================
   6. NUMÉROLOGIE DES LETTRES

   TABLE PYTHAGORICIENNE

   1 : A J S
   2 : B K T
   3 : C L U
   4 : D M V
   5 : E N W
   6 : F O X
   7 : G P Y
   8 : H Q Z
   9 : I R

   Convention :
   Y est considéré comme consonne.
========================================================= */

const VALEUR_LETTRES = {

  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9

};


function normaliserNom(nom) {

  return String(nom)
    .replace(/Æ/gi, "AE")
    .replace(/Œ/gi, "OE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z]/g, "");

}


function verifierNom(nom, description) {

  const texte = String(nom).trim();

  if (!texte) {
    throw new Error(
      "Renseigne " + description + "."
    );
  }

  const sansLigatures = texte
    .replace(/Æ/gi, "AE")
    .replace(/Œ/gi, "OE");

  if (
    !/^[A-Za-zÀ-ÿ\s'’-]+$/.test(sansLigatures)
  ) {
    throw new Error(
      "Caractères non reconnus dans " +
      description + "."
    );
  }

  if (!normaliserNom(texte)) {
    throw new Error(
      "Aucune lettre utilisable dans " +
      description + "."
    );
  }

  return texte;

}


function calculerNom(nom, type = "toutes") {

  const nomNormalise = normaliserNom(nom);

  const voyelles = "AEIOU";

  let lettres = [...nomNormalise];

  if (type === "voyelles") {

    lettres = lettres.filter(
      lettre => voyelles.includes(lettre)
    );

  }

  if (type === "consonnes") {

    lettres = lettres.filter(
      lettre => !voyelles.includes(lettre)
    );

  }

  if (lettres.length === 0) {
    throw new Error(
      "Impossible de calculer ce nombre : " +
      "aucune lettre correspondante."
    );
  }

  const valeurs = lettres.map(
    lettre => VALEUR_LETTRES[lettre]
  );

  const total = valeurs.reduce(
    (somme, valeur) => somme + valeur,
    0
  );

  const nombre = reduireNombre(
    total,
    true
  );

  const details =
    lettres.map(
      (lettre, index) =>
        lettre + "(" + valeurs[index] + ")"
    ).join(" + ") +

    "\n\nTotal : " + total +

    "\nRéduction : " +
    detailReduction(total, true);

  return {
    nombre,
    total,
    details
  };

}


/* =========================================================
   7. ANALYSE DU PROFIL NUMÉROLOGIQUE
========================================================= */

function calculerProfil(evenement) {

  evenement.preventDefault();

  try {

    const prenom = verifierNom(
      el("prenomNaissance").value,
      "ton premier prénom"
    );

    const autresPrenoms =
      el("autresPrenoms").value.trim();

    if (autresPrenoms) {
      verifierNom(
        autresPrenoms,
        "tes autres prénoms"
      );
    }

    const nom = verifierNom(
      el("nomNaissance").value,
      "ton nom de naissance"
    );

    const dateNaissance =
      el("dateNaissance").value;

    analyserDate(dateNaissance);

    const nomUsage =
      el("nomUsage").value.trim();

    if (nomUsage) {
      verifierNom(
        nomUsage,
        "ton nom d'usage"
      );
    }

    const nomComplet = [
      prenom,
      autresPrenoms,
      nom
    ].filter(Boolean).join(" ");


    /* CALCUL DES CINQ NOMBRES */

    const vie = calculerCheminVie(
      dateNaissance
    );

    const expression = calculerNom(
      nomComplet,
      "toutes"
    );

    const ame = calculerNom(
      nomComplet,
      "voyelles"
    );

    const personnalite = calculerNom(
      nomComplet,
      "consonnes"
    );

    const totalMaturite =
      vie.nombre + expression.nombre;

    const maturite = reduireNombre(
      totalMaturite,
      true
    );


    /* AFFICHAGE DES NOMBRES */

    afficherTexte(
      "identiteResultat",
      nomComplet + " — " +
      formaterDate(dateNaissance)
    );

    afficherTexte(
      "nombreCheminVie",
      vie.nombre
    );

    afficherTexte(
      "nombreExpression",
      expression.nombre
    );

    afficherTexte(
      "nombreAme",
      ame.nombre
    );

    afficherTexte(
      "nombrePersonnalite",
      personnalite.nombre
    );

    afficherTexte(
      "nombreMaturite",
      maturite
    );


    /* SIGNIFICATIONS COURTES */

    afficherTexte(
      "resumeCheminVie",
      signification(vie.nombre).titre
    );

    afficherTexte(
      "resumeExpression",
      signification(expression.nombre).titre
    );

    afficherTexte(
      "resumeAme",
      signification(ame.nombre).titre
    );

    afficherTexte(
      "resumePersonnalite",
      signification(personnalite.nombre).titre
    );

    afficherTexte(
      "resumeMaturite",
      signification(maturite).titre
    );


    /* DÉTAIL DES CALCULS */

    let detailsCalculs =

      "CHEMIN DE VIE\n\n" +
      vie.details +

      "\n\n-------------------------\n\n" +

      "NOMBRE D'EXPRESSION\n\n" +
      expression.details +

      "\n\n-------------------------\n\n" +

      "ÉLAN DE L'ÂME\n\n" +
      ame.details +

      "\n\n-------------------------\n\n" +

      "NOMBRE DE PERSONNALITÉ\n\n" +
      personnalite.details +

      "\n\n-------------------------\n\n" +

      "NOMBRE DE MATURITÉ\n\n" +
      vie.nombre + " + " +
      expression.nombre + " = " +
      totalMaturite +

      "\n\nRéduction : " +
      detailReduction(totalMaturite, true);


    /* NOM D'USAGE */

    let lectureUsage = "";

    if (nomUsage) {

      const nomCompletUsage = [
        prenom,
        autresPrenoms,
        nomUsage
      ].filter(Boolean).join(" ");

      const calculUsage = calculerNom(
        nomCompletUsage,
        "toutes"
      );

      detailsCalculs +=

        "\n\n-------------------------\n\n" +

        "NOM D'USAGE\n\n" +
        calculUsage.details;

      lectureUsage =

        "\n\nNOM ACTUELLEMENT UTILISÉ\n\n" +

        "Avec le nom d'usage, le nombre " +
        "d'expression devient " +
        calculUsage.nombre + "." +

        "\n\nCe nombre est associé à " +
        signification(
          calculUsage.nombre
        ).titre.toLowerCase() + "." +

        "\n\nCette lecture est complémentaire " +
        "et ne remplace pas celle du nom de naissance.";

    }


    detailsCalculs +=

      "\n\n-------------------------\n\n" +

      "CONVENTIONS DE CALCUL\n\n" +

      "Les accents sont normalisés.\n" +

      "Tous les prénoms sont pris en compte.\n" +

      "La lettre Y est classée comme consonne.\n" +

      "Les nombres 11, 22 et 33 sont " +
      "conservés lorsqu'ils apparaissent " +
      "dans la réduction finale.";

    afficherTexte(
      "detailsCalculProfil",
      detailsCalculs
    );


    /* RÉCUPÉRATION DES SIGNIFICATIONS */

    const sVie = signification(
      vie.nombre
    );

    const sExpression = signification(
      expression.nombre
    );

    const sAme = signification(
      ame.nombre
    );

    const sPersonnalite = signification(
      personnalite.nombre
    );

    const sMaturite = signification(
      maturite
    );


    /* FORCES */

    afficherTexte(
      "lectureForces",

      "TON CHEMIN DE VIE\n\n" +

      "Ton chemin de vie est le nombre " +
      vie.nombre + "." +

      "\n\nIl est associé à " +
      sVie.titre.toLowerCase() + "." +

      "\n\nSes principales forces symboliques sont : " +
      sVie.forces +

      "\n\nTON EXPRESSION\n\n" +

      "Ton nombre d'expression est " +
      expression.nombre + "." +

      "\n\nIl évoque : " +
      sExpression.forces +

      "\n\nCes deux nombres apportent " +
      "deux perspectives complémentaires." +

      "\n\nLe chemin de vie représente " +
      "une orientation générale du parcours, " +
      "tandis que l'expression symbolise " +
      "les capacités et les moyens " +
      "susceptibles d'être développés."
    );


    /* DÉFIS */

    afficherTexte(
      "lectureDefis",

      "LES DÉFIS DU CHEMIN DE VIE\n\n" +

      "Le nombre " + vie.nombre +
      " est associé aux difficultés suivantes : " +
      sVie.defis +

      "\n\nLES DÉFIS DE L'EXPRESSION\n\n" +

      "Le nombre " + expression.nombre +
      " évoque : " +
      sExpression.defis +

      "\n\nLorsque ces nombres sont différents, " +
      "ils peuvent représenter plusieurs " +
      "tendances symboliques à équilibrer." +

      "\n\nLorsqu'ils sont identiques, " +
      "leurs thèmes peuvent être interprétés " +
      "comme plus présents dans la lecture." +

      "\n\nCela ne signifie pas que ces difficultés " +
      "caractérisent nécessairement la personne."
    );


    /* ASPIRATIONS */

    afficherTexte(
      "lectureAspirations",

      "TON ÉLAN DE L'ÂME\n\n" +

      "Le nombre obtenu est " +
      ame.nombre + "." +

      "\n\nIl est associé à " +
      sAme.titre.toLowerCase() + "." +

      "\n\nDans cette tradition, " +
      "il évoque le besoin de : " +
      sAme.aspirations +

      "\n\nCe nombre est calculé uniquement " +
      "avec les voyelles du nom complet " +
      "de naissance." +

      "\n\nIl représente les motivations " +
      "et les désirs intérieurs " +
      "dans la lecture numérologique."
    );


    /* RELATIONS */

    afficherTexte(
      "lectureRelations",

      "TA PERSONNALITÉ SYMBOLIQUE\n\n" +

      "Ton nombre de personnalité est " +
      personnalite.nombre + "." +

      "\n\nIl est associé à " +
      sPersonnalite.titre.toLowerCase() + "." +

      "\n\nSur le plan des relations, " +
      "il évoque : " +
      sPersonnalite.relations +

      "\n\nTON ÉLAN INTÉRIEUR\n\n" +

      "Ton élan de l'âme " +
      ame.nombre + " représente : " +
      sAme.aspirations +

      "\n\nLa comparaison de ces deux nombres " +
      "permet une lecture symbolique " +
      "de l'image extérieure et " +
      "des aspirations intérieures." +

      "\n\nElle ne permet pas de connaître " +
      "avec certitude la personnalité " +
      "ou les sentiments d'une personne."
    );


    /* SYNTHÈSE GÉNÉRALE */

    const synthese =

      "TON PORTRAIT NUMÉROLOGIQUE\n\n" +

      "Chemin de vie " +
      vie.nombre + " : " +
      sVie.titre + "." +

      "\n\nExpression " +
      expression.nombre + " : " +
      sExpression.titre + "." +

      "\n\nÉlan de l'âme " +
      ame.nombre + " : " +
      sAme.titre + "." +

      "\n\nPersonnalité " +
      personnalite.nombre + " : " +
      sPersonnalite.titre + "." +

      "\n\nMaturité " +
      maturite + " : " +
      sMaturite.titre + "." +

      "\n\nLECTURE GÉNÉRALE\n\n" +

      "Ton chemin de vie évoque " +
      sVie.titre.toLowerCase() +
      ", tandis que ton nombre d'expression " +
      "met en avant " +
      sExpression.titre.toLowerCase() + "." +

      "\n\nTes aspirations profondes " +
      "sont symboliquement associées à " +
      sAme.titre.toLowerCase() + "." +

      "\n\nTon nombre de personnalité " +
      "apporte une dimension liée à " +
      sPersonnalite.titre.toLowerCase() + "." +

      "\n\nEnfin, le nombre de maturité " +
      maturite +
      " représente une orientation " +
      "susceptible de se développer " +
      "avec l'expérience." +

      "\n\nIl évoque : " +
      sMaturite.aspirations +

      lectureUsage +

      "\n\nUNE DIRECTION À EXPLORER\n\n" +

      sVie.conseil +

      "\n\nCette lecture reste symbolique. " +
      "Elle ne constitue pas une analyse " +
      "scientifique de la personnalité " +
      "ni une prédiction certaine.";

    afficherTexte(
      "syntheseProfil",
      synthese
    );

    afficherResultat(
      "resultatProfil"
    );

  } catch (erreur) {

    afficherErreur(
      erreur.message
    );

  }

}


/* =========================================================
   8. CYCLES PERSONNELS

   Convention calendaire :
   Année personnelle : 1er janvier au 31 décembre.

   Les cycles sont réduits de 1 à 9.
========================================================= */

function calculerCyclesPersonnels(
  naissance,
  dateEtudiee
) {

  const n = analyserDate(naissance);

  const d = analyserDate(dateEtudiee);

  const jourNaissance = reduireNombre(
    n.jour,
    false
  );

  const moisNaissance = reduireNombre(
    n.mois,
    false
  );

  const anneeUniverselle = reduireNombre(
    d.annee,
    false
  );

  const totalAnnee =
    jourNaissance +
    moisNaissance +
    anneeUniverselle;

  const anneePersonnelle = reduireNombre(
    totalAnnee,
    false
  );

  const totalMois =
    anneePersonnelle + d.mois;

  const moisPersonnel = reduireNombre(
    totalMois,
    false
  );

  const totalJour =
    moisPersonnel + d.jour;

  const jourPersonnel = reduireNombre(
    totalJour,
    false
  );

  const details =

    "ANNÉE PERSONNELLE\n\n" +

    "Jour de naissance : " +
    jourNaissance +

    "\nMois de naissance : " +
    moisNaissance +

    "\nAnnée étudiée : " +
    d.annee + " → " +
    anneeUniverselle +

    "\n\n" +
    jourNaissance + " + " +
    moisNaissance + " + " +
    anneeUniverselle + " = " +
    totalAnnee +

    "\nRésultat : " +
    anneePersonnelle +

    "\n\nMOIS PERSONNEL\n\n" +

    anneePersonnelle + " + " +
    d.mois + " = " +
    totalMois +

    "\nRésultat : " +
    moisPersonnel +

    "\n\nJOUR PERSONNEL\n\n" +

    moisPersonnel + " + " +
    d.jour + " = " +
    totalJour +

    "\nRésultat : " +
    jourPersonnel +

    "\n\nConvention : cycles calendaires " +
    "réduits de 1 à 9.";

  return {
    annee: anneePersonnelle,
    mois: moisPersonnel,
    jour: jourPersonnel,
    details
  };

}


/* =========================================================
   9. ANALYSE DES CYCLES
========================================================= */

function analyserCyclesPersonnels(evenement) {

  evenement.preventDefault();

  try {

    const naissance =
      el("naissanceCycles").value;

    const date =
      el("dateCycles").value;

    const cycles = calculerCyclesPersonnels(
      naissance,
      date
    );

    const annee = signification(
      cycles.annee
    );

    const mois = signification(
      cycles.mois
    );

    const jour = signification(
      cycles.jour
    );

    afficherTexte(
      "nombreAnneePersonnelle",
      cycles.annee
    );

    afficherTexte(
      "nombreMoisPersonnel",
      cycles.mois
    );

    afficherTexte(
      "nombreJourPersonnel",
      cycles.jour
    );

    afficherTexte(
      "resumeAnneePersonnelle",
      annee.titre
    );

    afficherTexte(
      "resumeMoisPersonnel",
      mois.titre
    );

    afficherTexte(
      "resumeJourPersonnel",
      jour.titre
    );

    afficherTexte(
      "detailsCalculCycles",
      cycles.details
    );

    const lecture =

      "TON ANNÉE PERSONNELLE\n\n" +

      "Tu traverses symboliquement " +
      "une année personnelle " +
      cycles.annee + "." +

      "\n\nElle est associée à " +
      annee.titre.toLowerCase() + "." +

      "\n\nLes thèmes traditionnels " +
      "de cette année sont : " +
      annee.cycle +

      "\n\nCette influence représente " +
      "le fil conducteur symbolique " +
      "de l'année étudiée." +

      "\n\nTON MOIS PERSONNEL\n\n" +

      "Ton mois personnel est " +
      cycles.mois + "." +

      "\n\nIl évoque : " +
      mois.cycle +

      "\n\nCe mois peut être interprété " +
      "comme une période où ces thèmes " +
      "prennent une place particulière " +
      "dans la lecture." +

      "\n\nTON JOUR PERSONNEL\n\n" +

      "Ton jour personnel est " +
      cycles.jour + "." +

      "\n\nIl est associé à : " +
      jour.cycle +

      "\n\nCette influence apporte " +
      "une dernière nuance symbolique " +
      "à l'année et au mois." +

      "\n\nSYNTHÈSE\n\n" +

      "L'année " +
      cycles.annee + " représente " +
      annee.titre.toLowerCase() + "." +

      "\n\nLe mois " +
      cycles.mois + " ajoute " +
      mois.titre.toLowerCase() + "." +

      "\n\nLe jour " +
      cycles.jour + " met en avant " +
      jour.titre.toLowerCase() + "." +

      "\n\nDIRECTION À EXPLORER\n\n" +

      jour.conseil +

      "\n\nLes cycles numérologiques " +
      "ne permettent pas de prévoir " +
      "avec certitude les événements futurs.";

    afficherTexte(
      "lectureCycles",
      lecture
    );

    afficherResultat(
      "resultatCycles"
    );

  } catch (erreur) {

    afficherErreur(
      erreur.message
    );

  }

}


/* =========================================================
   10. TYPES D'ÉVÉNEMENTS
========================================================= */

const EVENEMENTS = {

  amour: {
    titre: "Mariage ou rencontre",

    interpretation:
      "Les thèmes de l'union, de la communication, " +
      "de l'engagement et de l'harmonie peuvent " +
      "être rapprochés de cet événement."
  },

  travail: {
    titre: "Travail ou projet professionnel",

    interpretation:
      "Les thèmes de l'initiative, de l'organisation, " +
      "des responsabilités et de la réalisation " +
      "peuvent être explorés."
  },

  voyage: {
    titre: "Voyage",

    interpretation:
      "Cette étude peut évoquer la découverte, " +
      "la liberté, le mouvement et l'adaptation."
  },

  demenagement: {
    titre: "Déménagement",

    interpretation:
      "Les thèmes du changement, du foyer, " +
      "de la stabilité et des nouvelles habitudes " +
      "peuvent être étudiés."
  },

  projet: {
    titre: "Nouveau projet",

    interpretation:
      "Les thèmes de la créativité, de l'initiative, " +
      "de la persévérance et de la construction " +
      "peuvent enrichir cette réflexion."
  },

  personnel: {
    titre: "Événement personnel",

    interpretation:
      "Cette date peut être étudiée à travers " +
      "la complémentarité entre son nombre " +
      "universel et ton jour personnel."
  }

};


/* =========================================================
   11. NOMBRE D'UNE DATE
========================================================= */

function calculerNombreDate(date) {

  const d = analyserDate(date);

  const chiffres =
    String(d.jour).padStart(2, "0") +
    String(d.mois).padStart(2, "0") +
    String(d.annee).padStart(4, "0");

  const total = sommeChiffres(
    chiffres
  );

  const nombre = reduireNombre(
    total,
    false
  );

  return {
    nombre,

    details:
      [...chiffres].join(" + ") +
      " = " + total +
      "\nRéduction : " +
      detailReduction(total, false)
  };

}


/* =========================================================
   12. ANALYSE D'UNE DATE IMPORTANTE
========================================================= */

function analyserEvenement(evenement) {

  evenement.preventDefault();

  try {

    const naissance =
      el("naissanceEvenement").value;

    const date =
      el("dateEvenement").value;

    const type =
      el("typeEvenement").value;

    const nomEvenement =
      el("nomEvenement").value.trim();

    if (!EVENEMENTS[type]) {
      throw new Error(
        "Choisis la nature de l'événement."
      );
    }

    const contexte =
      EVENEMENTS[type];

    const cycles =
      calculerCyclesPersonnels(
        naissance,
        date
      );

    const nombreDate =
      calculerNombreDate(date);

    const significationDate =
      signification(nombreDate.nombre);

    const significationJour =
      signification(cycles.jour);

    afficherTexte(
      "titreResultatEvenement",
      (nomEvenement || contexte.titre) +
      " — " + formaterDate(date)
    );

    afficherTexte(
      "nombreDateEvenement",
      nombreDate.nombre
    );

    afficherTexte(
      "nombreJourEvenement",
      cycles.jour
    );

    afficherTexte(
      "detailsCalculEvenement",

      "NOMBRE UNIVERSEL DE LA DATE\n\n" +
      nombreDate.details +

      "\n\n-------------------------\n\n" +

      "CYCLES PERSONNELS\n\n" +
      cycles.details
    );

    let comparaison = "";

    if (
      nombreDate.nombre ===
      cycles.jour
    ) {

      comparaison =
        "Les deux calculs conduisent " +
        "au même nombre.\n\n" +

        "Dans cette tradition, cela peut " +
        "symboliser un renforcement du thème " +
        "associé à ce nombre.";

    } else {

      comparaison =
        "Les deux calculs conduisent " +
        "à des nombres différents.\n\n" +

        "Ils représentent deux perspectives " +
        "symboliques complémentaires.";

    }

    const lecture =

      "NOMBRE DE LA DATE\n\n" +

      "Le nombre de cette date est " +
      nombreDate.nombre + "." +

      "\n\nIl correspond à " +
      significationDate.titre.toLowerCase() + "." +

      "\n\nSes thèmes sont : " +
      significationDate.cycle +

      "\n\nTON JOUR PERSONNEL\n\n" +

      "Ton jour personnel est " +
      cycles.jour + "." +

      "\n\nIl évoque " +
      significationJour.titre.toLowerCase() + "." +

      "\n\nSes thèmes sont : " +
      significationJour.cycle +

      "\n\nCOMPARAISON DES INFLUENCES\n\n" +

      comparaison +

      "\n\nNATURE DE L'ÉVÉNEMENT\n\n" +

      contexte.titre +

      "\n\n" +
      contexte.interpretation +

      "\n\nCette lecture propose " +
      "une interprétation symbolique " +
      "de la date et non une prévision " +
      "de la réussite de l'événement.";

    afficherTexte(
      "lectureEvenement",
      lecture
    );

    afficherTexte(
      "conseilEvenement",

      "POUR LE NOMBRE DE LA DATE\n\n" +

      significationDate.conseil +

      "\n\nPOUR TON JOUR PERSONNEL\n\n" +

      significationJour.conseil +

      "\n\nCes indications peuvent servir " +
      "de support à une réflexion." +

      "\n\nElles ne permettent pas " +
      "d'affirmer qu'une date sera " +
      "favorable ou défavorable."
    );

    afficherResultat(
      "resultatEvenement"
    );

  } catch (erreur) {

    afficherErreur(
      erreur.message
    );

  }

}


/* =========================================================
   13. COMPATIBILITÉ ENTRE DEUX PERSONNES
========================================================= */

function analyserCompatibilite(evenement) {

  evenement.preventDefault();

  try {

    const prenom1 =
      el("prenomPersonne1").value.trim();

    const prenom2 =
      el("prenomPersonne2").value.trim();

    if (prenom1) {
      verifierNom(
        prenom1,
        "le premier prénom"
      );
    }

    if (prenom2) {
      verifierNom(
        prenom2,
        "le deuxième prénom"
      );
    }

    const date1 =
      el("datePersonne1").value;

    const date2 =
      el("datePersonne2").value;

    const chemin1 =
      calculerCheminVie(date1);

    const chemin2 =
      calculerCheminVie(date2);

    const nom1 =
      prenom1 || "Première personne";

    const nom2 =
      prenom2 || "Deuxième personne";

    const s1 =
      signification(chemin1.nombre);

    const s2 =
      signification(chemin2.nombre);

    const typesRelations = {
      amoureuse: "relation amoureuse",
      amicale: "amitié",
      familiale: "relation familiale",
      professionnelle: "relation professionnelle"
    };

    const relation =
      typesRelations[
        el("typeRelation").value
      ] || "relation";


    /* AFFICHAGE */

    afficherTexte(
      "nomResultatPersonne1",
      nom1
    );

    afficherTexte(
      "nomResultatPersonne2",
      nom2
    );

    afficherTexte(
      "nombrePersonne1",
      chemin1.nombre
    );

    afficherTexte(
      "nombrePersonne2",
      chemin2.nombre
    );


    /* DÉTAILS DES CALCULS */

    afficherTexte(
      "detailsCalculCompatibilite",

      nom1.toUpperCase() +
      "\n\n" +
      chemin1.details +

      "\n\n-------------------------\n\n" +

      nom2.toUpperCase() +
      "\n\n" +
      chemin2.details +

      "\n\nLes maîtres nombres peuvent " +
      "également être étudiés par " +
      "leur racine numérologique : " +
      "11 → 2, 22 → 4 et 33 → 6."
    );


    /* COMPLÉMENTARITÉ */

    let rapprochement = "";

    if (
      chemin1.nombre ===
      chemin2.nombre
    ) {

      rapprochement =
        "Les deux personnes possèdent " +
        "le même chemin de vie.\n\n" +

        "Dans la tradition numérologique, " +
        "cela peut évoquer des valeurs " +
        "ou des orientations symboliques communes.";

    } else if (
      reduireNombre(chemin1.nombre, false) ===
      reduireNombre(chemin2.nombre, false)
    ) {

      rapprochement =
        "Les chemins de vie sont différents, " +
        "mais partagent la même racine numérologique.\n\n" +

        "Cette particularité peut être " +
        "interprétée comme une proximité " +
        "entre certains thèmes symboliques.";

    } else {

      rapprochement =
        "Les deux chemins de vie possèdent " +
        "des orientations symboliques différentes.\n\n" +

        "Ces différences peuvent être " +
        "envisagées comme des sources " +
        "de complémentarité.";

    }

    afficherTexte(
      "lectureComplementarites",

      nom1 + "\n\n" +

      "Chemin de vie : " +
      chemin1.nombre +

      "\n\nForces associées : " +
      s1.forces +

      "\n\n-------------------------\n\n" +

      nom2 + "\n\n" +

      "Chemin de vie : " +
      chemin2.nombre +

      "\n\nForces associées : " +
      s2.forces +

      "\n\n-------------------------\n\n" +

      rapprochement +

      "\n\nDans cette " +
      relation +
      ", ces caractéristiques peuvent " +
      "servir de pistes pour explorer " +
      "les différences et les points communs."
    );


    /* DIFFÉRENCES ET DÉFIS */

    afficherTexte(
      "lectureDifferences",

      "LES DÉFIS DE " +
      nom1.toUpperCase() +

      "\n\n" +
      s1.defis +

      "\n\nLES DÉFIS DE " +
      nom2.toUpperCase() +

      "\n\n" +
      s2.defis +

      "\n\nBESOINS RELATIONNELS SYMBOLIQUES\n\n" +

      nom1 + " : " +
      s1.relations +

      "\n\n" +

      nom2 + " : " +
      s2.relations +

      "\n\nCes différences ne signifient " +
      "pas qu'un conflit se produira." +

      "\n\nElles constituent uniquement " +
      "des thèmes à explorer ensemble."
    );


    /* SYNTHÈSE */

    afficherTexte(
      "syntheseCompatibilite",

      "ÉTUDE DE COMPATIBILITÉ\n\n" +

      nom1 + " : chemin de vie " +
      chemin1.nombre +

      "\n" + s1.titre +

      "\n\n" +

      nom2 + " : chemin de vie " +
      chemin2.nombre +

      "\n" + s2.titre +

      "\n\nLECTURE GÉNÉRALE\n\n" +

      "La numérologie compare ici " +
      "deux orientations symboliques." +

      "\n\nLe premier chemin est associé à " +
      s1.titre.toLowerCase() + "." +

      "\n\nLe second évoque " +
      s2.titre.toLowerCase() + "." +

      "\n\nLeur association peut inviter " +
      "à réfléchir aux complémentarités, " +
      "aux besoins de chacun et aux " +
      "ajustements nécessaires dans une relation." +

      "\n\nCONSEIL POUR " +
      nom1.toUpperCase() + "\n\n" +

      s1.conseil +

      "\n\nCONSEIL POUR " +
      nom2.toUpperCase() + "\n\n" +

      s2.conseil +

      "\n\nLa qualité réelle d'une relation " +
      "dépend du respect, de la confiance, " +
      "des comportements et de la communication." +

      "\n\nAucun pourcentage de compatibilité " +
      "ou résultat amoureux n'est inventé."
    );

    afficherResultat(
      "resultatCompatibilite"
    );

  } catch (erreur) {

    afficherErreur(
      erreur.message
    );

  }

}


/* =========================================================
   14. NAVIGATION ENTRE LES DEUX RUBRIQUES
========================================================= */

function changerRubrique(rubrique) {

  if (
    rubrique !== "profil" &&
    rubrique !== "personnel"
  ) {
    return;
  }

  const afficherProfil =
    rubrique === "profil";

  el("rubriqueProfil").hidden =
    !afficherProfil;

  el("rubriquePersonnel").hidden =
    afficherProfil;

  document.querySelectorAll(
    ".bouton-rubrique"
  ).forEach(bouton => {

    const actif =
      bouton.dataset.rubrique === rubrique;

    bouton.classList.toggle(
      "actif",
      actif
    );

    bouton.setAttribute(
      "aria-expanded",
      String(actif)
    );

  });

}


/* =========================================================
   15. NAVIGATION NUMÉROLOGIE PERSONNELLE
========================================================= */

function changerAnalyse(analyse) {

  const sections = {

    cycles: "analyseCycles",

    evenement: "analyseEvenement",

    compatibilite: "analyseCompatibilite"

  };

  if (!sections[analyse]) {
    return;
  }

  Object.entries(sections).forEach(
    ([cle, id]) => {

      el(id).hidden =
        cle !== analyse;

    }
  );

  document.querySelectorAll(
    ".bouton-sous-menu"
  ).forEach(bouton => {

    const actif =
      bouton.dataset.analyse === analyse;

    bouton.classList.toggle(
      "actif",
      actif
    );

    bouton.setAttribute(
      "aria-pressed",
      String(actif)
    );

  });

}


/* =========================================================
   16. TESTS DES CALCULS
========================================================= */

function verifierCalculs() {

  const tests = [

    {
      nom: "Chemin de vie 15/07/1985",
      obtenu: calculerCheminVie(
        "1985-07-15"
      ).nombre,
      attendu: 9
    },

    {
      nom: "Prénom ANNA",
      obtenu: calculerNom(
        "ANNA"
      ).nombre,
      attendu: 3
    },

    {
      nom: "Année personnelle 2027",
      obtenu: calculerCyclesPersonnels(
        "1985-07-15",
        "2027-06-21"
      ).annee,
      attendu: 6
    },

    {
      nom: "Mois personnel juin 2027",
      obtenu: calculerCyclesPersonnels(
        "1985-07-15",
        "2027-06-21"
      ).mois,
      attendu: 3
    },

    {
      nom: "Jour personnel 21 juin 2027",
      obtenu: calculerCyclesPersonnels(
        "1985-07-15",
        "2027-06-21"
      ).jour,
      attendu: 6
    }

  ];

  tests.forEach(test => {

    if (test.obtenu !== test.attendu) {

      console.error(
        "Erreur de calcul :",
        test.nom,
        test.obtenu,
        "au lieu de",
        test.attendu
      );

    } else {

      console.log(
        "Calcul correct :",
        test.nom
      );

    }

  });

}


/* =========================================================
   17. INITIALISATION
========================================================= */

function initialiserNumerologie() {


  /* NAVIGATION PRINCIPALE */

  document.querySelectorAll(
    ".bouton-rubrique"
  ).forEach(bouton => {

    bouton.addEventListener(
      "click",
      () => {

        changerRubrique(
          bouton.dataset.rubrique
        );

      }
    );

  });


  /* NAVIGATION SECONDAIRE */

  document.querySelectorAll(
    ".bouton-sous-menu"
  ).forEach(bouton => {

    bouton.addEventListener(
      "click",
      () => {

        changerAnalyse(
          bouton.dataset.analyse
        );

      }
    );

  });


  /* FORMULAIRE PROFIL */

  el("formulaireProfil").addEventListener(
    "submit",
    calculerProfil
  );


  /* FORMULAIRE CYCLES */

  el("formulaireCycles").addEventListener(
    "submit",
    analyserCyclesPersonnels
  );


  /* FORMULAIRE ÉVÉNEMENT */

  el("formulaireEvenement").addEventListener(
    "submit",
    analyserEvenement
  );


  /* FORMULAIRE COMPATIBILITÉ */

  el("formulaireCompatibilite").addEventListener(
    "submit",
    analyserCompatibilite
  );


  /* DATE DU JOUR */

  el("dateCycles").value =
    dateAujourdhui();


  /* ÉCRANS PAR DÉFAUT */

  changerRubrique("profil");

  changerAnalyse("cycles");


  /* VÉRIFICATIONS */

  verifierCalculs();


  console.log(
    "Voyance Prométhée : numérologie initialisée."
  );

}


/* =========================================================
   18. DÉMARRAGE DE L'APPLICATION
========================================================= */

if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initialiserNumerologie
  );

} else {

  initialiserNumerologie();

}

/* =========================================================
   FIN DU SCRIPT
========================================================= */
