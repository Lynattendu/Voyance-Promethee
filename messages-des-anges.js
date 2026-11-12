
"use strict";

/* =========================================================
   VOYANCE PROMÉTHÉE
   LES MESSAGES DES ANGES

   VERSION COMPLÈTE
   Heures miroirs - Nombres angéliques - Numérologie

   Textes de référence conservés et harmonisés.
   Messages complémentaires pris en charge.
   Historique local des consultations.
========================================================= */


/* =========================================================
   1. HEURES MIROIRS
========================================================= */

const HEURES_MIROIRS = {

  "00:00": "Absence, sacrifice, attente, silence mental, préparation.",

  "01:01": "Solitude, isolement, moi, principe paternel.",

  "02:02": "Dualité, antagonisme, complémentarité, principe maternel.",

  "03:03": "Pensée, idée, verbe, communication.",

  "04:04": "Forme, force, terre, cycles naturels, gouvernement, pouvoir.",

  "05:05": "Vie, création, transmission, activité, vitalité, magnétisme.",

  "06:06": "Initiation, harmonie, loyauté, sagesse, choix.",

  "07:07": "Prise de conscience, association, évolution, spiritualité.",

  "08:08": "Libération, loi, discipline, éthique, conscience.",

  "09:09": "Complexité, vie antérieure, humanisme, recherches.",

  "10:10": "Confiance en soi, réalisations, fortune et élévation, travail.",

  "11:11": "Charisme, aspect visionnaire, nervosité, soif de pouvoir, rébellion.",

  "12:12": "Clairvoyance, épreuves évolutives, karma, renoncement volontaire.",

  "13:13": "Mort et résurrection, mutation cyclique, goût du changement.",

  "14:14": "Mouvement, progrès, instabilité, involution.",

  "15:15": "Passion, sexualité, magnétisme, volonté, régression.",

  "16:16": "Fierté, besoin de solitude, purification, orgueil, isolement.",

  "17:17": "Volonté de dépassement, force créatrice, imagination.",

  "18:18": "Amour supérieur, réceptivité, magie, illusion.",

  "19:19": "Lumière universelle, pensée transcendante, énergie fécondante.",

  "20:20": "Rapidité, besoin de raison, alternance rapide de hauts et de bas.",

  "21:21": "Succès final, sagesse divine, synthèse, couronnement.",

  "22:22": "Prestige et renommée, sens de la mission, génie.",

  "23:23": "Agilité, don pour les communications, protection, héritage."

};


/* =========================================================
   2. COÏNCIDENCES NUMÉROLOGIQUES

   Un nombre peut recevoir plusieurs messages.
   Ils sont tous conservés.

   Les codes composés des mêmes chiffres
   sont regroupés sans être écrasés.
========================================================= */

const NOMBRES_ANGELIQUES = {};


function ajouterNombres(codes, texte) {

  codes
    .trim()
    .split(/\s+/)
    .forEach(code => {

      if (!/^\d{3}$/.test(code)) {
        console.warn("Code invalide :", code);
        return;
      }

      if (!NOMBRES_ANGELIQUES[code]) {
        NOMBRES_ANGELIQUES[code] = [];
      }

      if (!NOMBRES_ANGELIQUES[code].includes(texte)) {
        NOMBRES_ANGELIQUES[code].push(texte);
      }

    });

}


/* =========================================================
   SÉRIE 000 À 199
========================================================= */

ajouterNombres(
  "000",
  `Vous ne faites qu'UN avec l'Univers.

Rappelez-vous-en et ressentez la force de cette présence d'Amour.

Une situation a terminé un cycle complet.`
);


ajouterNombres(
  "111",
  `Faites attention à vos pensées.

Faites en sorte de vous focaliser sur ce que vous désirez réellement.

Une porte s'ouvre sur des opportunités et vos pensées sont en train de se manifester à une vitesse record.

C'est comme si l'Univers avait pris un instantané de vos pensées pour faire en sorte qu'elles se manifestent sur le plan matériel.

En êtes-vous satisfait ?

Si tel n'est pas le cas, changez-les à l'instant avec l'aide des Anges.`
);


ajouterNombres(
  "112 211 121 221 122 212",
  `Vos pensées prennent de l'ampleur.

Les choses commencent à prendre forme dans la direction souhaitée.`
);


ajouterNombres(
  "113 311 131 331 133 313",
  `Les Grands Sages sont en train de travailler avec vous sur vos pensées.

Ils sont comme des mentors vous apportant la Sagesse Ancestrale.

Ils vous envoient l'énergie nécessaire, vous soufflent des conseils et des suggestions pour vous aider à vous orienter.

Ouvrez l'oreille, et la bonne !`
);


ajouterNombres(
  "114 411 141 441 144 414",
  `Faites attention à vos pensées.

Faites un vœu, vous êtes en pleine zone manifestatoire à cette minute.`
);


/* Message complémentaire du 411 */

ajouterNombres(
  "411",
  `Demandez l'éclaircissement vital dont vous avez besoin.`
);


ajouterNombres(
  "115 511 151 551 155 515",
  `Vos pensées sont en train de créer le changement dans votre vie.

Si ces changements ne sont pas désirés, arrêtez-les ou changez-les en modifiant vos pensées.

Sinon, continuez à les diriger dans cette direction souhaitée.`
);


ajouterNombres(
  "116 611 161 661 166 616",
  `Laissez aller vos pensées vers les sphères supérieures, votre Sur-Vous.

Abandonnez vos préoccupations matérielles.`
);


/* Message complémentaire du 611 */

ajouterNombres(
  "611",
  `Demandez l'aide des Esprits pour prendre soin d'un problème que vous avez dans le monde matériel.`
);


ajouterNombres(
  "117 711 171 771 177 717",
  `Bravo, vous êtes sur la bonne voie.

Vous avez bien choisi vos pensées.

Concentrez-vous maintenant avec soin sur vos objectifs.

Prenez soin d'entourer vos souhaits par des émotions appropriées.

La gratitude accélère, selon cette tradition, le processus de manifestation.`
);


ajouterNombres(
  "118 811 181 881 188 818",
  `Vous approchez de la fin d'un cycle significatif dans votre vie.

Si vous avez dû vous passer de certaines composantes de votre existence, soyez heureux, car celles-ci seront améliorées ou remplacées par de meilleures.

Abandonnez tout ce qui ne fonctionne plus pour vous, puisque vos souhaits pour une meilleure vie sont en voie d'être exaucés.`
);


ajouterNombres(
  "119 911 191 991 199 919",
  `Une nouvelle porte s'ouvre, résultat de vos désirs.

Vous pouvez fixer vos intentions en gardant vos créations à l'esprit.

Laissez tomber l'ancien, il sera remplacé par le renouveau en accord avec vos désirs.`
);


ajouterNombres(
  "110 011 101 001 100 010",
  `L'Univers et les Anges vous suggèrent fortement de changer vos pensées.

Peut-être avez-vous souhaité être plus heureux et en meilleure santé.

Si tel est le cas, ceci en est une réponse symbolique.

Demandez des conseils !`
);


/* =========================================================
   SÉRIE 200 À 299
========================================================= */

ajouterNombres(
  "222",
  `Vos nouvelles idées commencent à germer dans la réalité.

Continuez à les arroser et à les nourrir.

Bientôt, vous les verrez éclore.`
);


ajouterNombres(
  "223 323 322 332 232 233",
  `Les Grands Sages sont en train de travailler avec vous en ce moment comme co-créateurs de votre nouveau projet.

Tout se déroule bien pour vous.

Selon cette croyance, votre futur sera rempli de la joie que vous recherchez.`
);


ajouterNombres(
  "224 424 422 442 242 244",
  `Les Anges prennent soin de votre nouveau projet.

Vous avez l'aide des sphères supérieures afin de faire les transitions nécessaires.

Vous n'êtes pas seul.

Ils travaillent avec vous de très près à cet instant précis.`
);


ajouterNombres(
  "225 525 522 552 252 255",
  `Attendez-vous à ce qu'un changement se produise plus rapidement que prévu, grâce aux souhaits et aux intentions claires et fortes.

Ne vous laissez pas désarçonner quand vos souhaits deviennent réalité.

Il est probable qu'ils arrivent de façon inattendue.

Adressez-vous souvent à l'Univers et demandez du réconfort.`
);


ajouterNombres(
  "226 626 622 662 262 266",
  `Un nouvel achat ou une acquisition fait son chemin vers vous.`
);


ajouterNombres(
  "227 727 722 772 272 277",
  `Bonne nouvelle à propos d'un nouveau travail, d'une admission, d'une autorisation ou d'un dossier qui se débloque.

Accrochez-vous et ne laissez pas votre foi vaciller.`
);


ajouterNombres(
  "228 828 822 882 282 288",
  `Une porte s'ouvre pendant qu'une autre se ferme.

Écoutez votre intuition très attentivement à cet instant.

Elle vous guide vers les prochaines étapes qui vous assureront, selon cette tradition, une abondance régulière pendant ces transitions.`
);


ajouterNombres(
  "229 929 922 992 292 299",
  `Si vous avez été victime d'une perte, attendez-vous à ce qu'elle soit remplacée dans un futur proche.

Même si cela ne semble pas être le cas, tout va en votre faveur.

Ne vous inquiétez pas.

Ressentez l'énergie de votre vie aller de l'avant en ce moment.

Vous n'êtes pas puni par cette perte récente.

L'Univers est en train de vous préparer pour une phase nouvelle.`
);


ajouterNombres(
  "220 020 022 002 202 200",
  `Vous n'avez pas été oublié ou abandonné.

Vous êtes aimé.

L'Univers organise une phase nouvelle.

Entretenez-vous avec les hautes sphères le plus souvent possible et vous sentirez le miracle venir.

L'Univers vous rappelle l'importance de l'agenda universel.

Certains éléments ont besoin d'être en place avant de pouvoir atteindre le résultat désiré.

Aussi longtemps que vous vous accrocherez à vos pensées et à votre foi, rien ne pourra, selon cette croyance, vous empêcher d'atteindre vos désirs.`
);


/* =========================================================
   SÉRIE 300 À 399
========================================================= */

ajouterNombres(
  "333",
  `Les Grands Sages sont à vos côtés.

Ils veulent vous faire savoir que vous avez leur aide, leur Amour et leur complicité.

Appelez-les autant que vous le désirez quand vous voyez cette combinaison.

Dans cette tradition, les Grands Sages sont des entités très évoluées ayant dédié leur existence à l'évolution de l'Humanité.

Parmi les figures citées se trouvent Jésus, Marie, Moïse, Quan Yin, Yogananda et bien d'autres.`
);


/* Deuxième signification du groupe 113 */

ajouterNombres(
  "331 131 133 113 313 311",
  `Toute action commence par une pensée originelle ou une idée.

Demandez aux Grands Sages de vous aider à choisir avec sagesse ce que vous désirez.`
);


ajouterNombres(
  "334 434 433 443 343 344",
  `Vous avez beaucoup d'aides à votre disposition.

Les Anges et les Grands Sages sont là pour vous guider et vous apporter leur Amour.

Allez vers eux comme ils viennent à vous.`
);


/* Correction : 335 et non 334 */

ajouterNombres(
  "335 535 533 553 353 355",
  `Les Grands Sages souhaiteraient vous préparer à un grand changement imminent.

Ils vous tiennent la main pour traverser cette phase et vous font savoir que tout se passera bien.

Ouvrez-vous au changement et accueillez les bienfaits qu'il apporte avec lui.`
);


ajouterNombres(
  "336 636 633 663 363 366",
  `Les Grands Sages qui vous sont particulièrement proches vous aident à matérialiser ce qui est nécessaire d'un point de vue matériel pour accomplir votre mission.

Il peut s'agir de l'argent nécessaire pour vos frais d'apprentissage ou des conditions permettant de suivre les enseignements.

Cela peut aussi concerner les moyens nécessaires pour accomplir votre travail de guérison.

Ils œuvrent pour vous apporter cette aide.

Vous méritez cette aide car elle vous permettra d'aider les autres à votre tour.`
);


ajouterNombres(
  "337 737 733 773 373 377",
  `Les Grands Sages sont heureux.

Ils peuvent voir apparaître votre divinité authentique intérieure et la voir briller au-dehors.

Ils sont satisfaits du chemin que vous avez choisi.

Ils souhaitent que vous sachiez que vous méritez le bonheur qui se prépare pour vous.

Ils facilitent le courant de bénédictions qui accompagne votre héritage universel et le chemin choisi.`
);


ajouterNombres(
  "338 838 833 883 383 388",
  `C'est bien, continuez.

Augmentez votre niveau d'énergie et concentrez votre attention sur vos pensées et vos émotions.

Réalignez votre perspective avec la certitude de votre Unicité avec l'Univers.`
);


ajouterNombres(
  "339 939 933 993 393 399",
  `Débarrassez-vous des éléments de votre vie qui ne sont pas en accord avec votre intégrité.

Éloignez également ceux qui ont fait leur temps et rempli leur mission.

Ne vous accrochez pas à eux simplement parce que l'idée de les abandonner vous fait peur.

Sachez que chaque moment prendra soin de lui-même en son propre temps.

Gardez votre objectif en vue pour vous et votre futur.

Cela induira les expériences nécessaires.

Demandez aux Grands Sages de vous aider à trouver les bonnes pensées à avoir d'un point de vue supérieur.`
);


ajouterNombres(
  "330 030 033 003 303 300",
  `Concentrez-vous sur votre mission universelle.

Y a-t-il des conseils que vous auriez récemment ignorés ?

Si tel est le cas, il est probable que vous vous sentiez bloqué.

C'est la façon dont l'Univers vous en avertit.

On vous demande de contribuer au processus de co-création.

Cela implique d'écouter et de suivre les conseils que vous insuffle l'Univers, puis d'entreprendre certaines actions.`
);


/* =========================================================
   SÉRIE 400 À 499
========================================================= */

ajouterNombres(
  "444",
  `Les Anges vous entourent et vous rassurent.

Leur Amour et leur aide vous sont tout acquis.

Ne vous inquiétez pas, ils sont tout près.`
);


ajouterNombres(
  "445 454 544 455 545 554",
  `Les Anges sont engagés dans l'un des changements majeurs de votre vie en ce moment.`
);


ajouterNombres(
  "446 464 644 466 646 664",
  `Attention, vous êtes un peu trop porté sur le monde matériel.

Les Anges vous demandent de leur laisser vos inquiétudes afin qu'ils puissent intervenir.

Équilibrez votre concentration entre le spirituel et le matériel.

Sachez que vos ressources sont illimitées selon cette tradition, particulièrement si vous agissez main dans la main avec l'Univers.`
);


ajouterNombres(
  "447 474 744 477 747 774",
  `Continuez votre bon travail.

Vous êtes comme sur un tapis roulant.

Continuez à focaliser vos pensées car cela a un effet positif considérable.

Les Anges vous félicitent.

Remerciez-les.`
);


ajouterNombres(
  "448 484 844 488 848 884",
  `Une des phases de votre vie est sur le point de se terminer.

Le rythme se ralentit.

Les Anges sont à vos côtés et vont vous aider à vous guider vers une nouvelle situation qui conviendra mieux à vos désirs et à vos objectifs.`
);


ajouterNombres(
  "449 494 944 499 949 994",
  `Il est temps d'abandonner une situation qui a touché à sa fin.

Les Anges vous rappellent que lorsqu'une porte se ferme, une autre s'ouvre.

Ils vous aident à ouvrir ces nouvelles portes et à guérir les peines et les tristesses qui accompagnent les transitions que vous traversez.

Demandez-leur de vous aider à garder la foi dans le bien-fondé de ce passage difficile.`
);


ajouterNombres(
  "440 404 044 400 040 004",
  `L'Univers et les Anges veulent que vous sachiez que vous êtes très aimé.

Ils vous demandent de prendre un moment pour ressentir cet Amour.

Cette énergie vous aidera à répondre à bon nombre de vos questions et à résoudre les difficultés.`
);


/* =========================================================
   SÉRIE 500 À 599
========================================================= */

ajouterNombres(
  "555",
  `Attachez vos ceintures car un changement majeur s'annonce dans votre vie.

Voyez-le comme un événement naturel du flot de votre vie.

Peut-être est-ce une réponse à vos souhaits !

Continuez à vous visualiser en paix et serein.`
);


ajouterNombres(
  "556 565 655 566 656 665",
  `Votre vie matérielle est en train de changer de façon considérable.

Une nouvelle maison, une voiture ou toute autre possession pourrait être concernée.`
);


ajouterNombres(
  "557 575 755 577 757 775",
  `Ce code est une validation de la certitude que vous êtes sur le bon chemin.

Un changement imminent pourrait vous enrichir physiquement, émotionnellement ou intellectuellement, voire par une combinaison des trois.

Gardez le cap.

Vous pourrez bientôt voir comment les changements viennent s'intégrer à votre vie ou à celle de ceux qui vous entourent.`
);


ajouterNombres(
  "558 585 855 588 858 885",
  `Il est 23h59 !

Juste avant le changement de date, le passage au nouveau.

N'en ayez pas peur car vous serez soutenu et aimé tout au long de ce processus imminent.`
);


ajouterNombres(
  "559 595 955 599 959 995",
  `Pour que le renouveau puisse s'installer, il est nécessaire de faire table rase du passé.

Sachez que celui-ci a rempli son rôle durant toutes ces années.

La vie est fluide et le changement est inévitable.

Le renouveau vous attend à une porte que vous n'avez qu'à ouvrir.

Rappelez-vous que vous ouvrez cette porte quand vous vous détachez avec Amour du passé.`
);


ajouterNombres(
  "550 505 055 500 050 005",
  `Vous faites l'expérience des changements de façon parfaite dans l'ordre idéal.

Ils sont un cadeau de l'Univers et sont en alignement avec le plan universel pour votre moi supérieur.`
);


/* =========================================================
   SÉRIE 600 À 699
========================================================= */

ajouterNombres(
  "666",
  `Vos pensées sont en déséquilibre.

Vous êtes un peu trop tourné vers le monde matériel.

Rééquilibrez-les entre le spirituel et le matériel.

Concentrez-vous sur l'Esprit et le service.

Sachez qu'ainsi vos besoins seront, selon cette tradition, automatiquement assouvis.`
);


ajouterNombres(
  "667 676 766 677 767 776",
  `Ce code vous confirme que vos pensées et votre travail avec le monde matériel sont sur la bonne piste.

Vous avez réussi à équilibrer vos pensées et vos activités de façon à prendre soin du cerveau, du corps et de l'âme.

Continuez ce bon travail.`
);


ajouterNombres(
  "668 686 866 688 868 886",
  `Vous êtes sur le point de vous séparer de quelque chose appartenant au monde matériel.

Il peut s'agir de vendre ou de perdre un bien.

Si tel n'est pas votre souhait, vous pouvez changer vos pensées et en modifier la direction.

Toutefois, si vous en êtes satisfait, vous pouvez considérer cette coïncidence comme un signe symbolique que cela se produira bientôt.`
);


ajouterNombres(
  "669 696 966 699 969",
  `Sachez vous détacher des choses matérielles, spécialement si vous avez des obsessions concernant un type précis de matériel ou de possession.

Laissez tomber et détachez-vous de cet objet vendu ou perdu.

Selon cette tradition, celui-ci sera remplacé par quelque chose de meilleur.

Soyez prêt et ouvert à recevoir de nouvelles possessions qui pourraient aller au-delà de vos espérances.

Vous êtes prêt à passer dans une classe supérieure et vous méritez le meilleur.`
);


ajouterNombres(
  "660 606 066 600 060",
  `Concentrez-vous sur vos désirs matériels.

Vous n'avez pas à vivre une vie de pauvreté.

Essayez plutôt une approche spirituelle qui vous apportera la certitude que vos besoins seront comblés.

Sachez que l'Univers est en vous et qu'il est la source de tout ce dont vous avez besoin.

Gardez tout simplement la foi et montrez votre gratitude.

Soyez ensuite ouvert aux signes et aux opportunités qui combleront vos besoins matériels.`
);


/* =========================================================
   SÉRIE 700 À 799
========================================================= */

ajouterNombres(
  "777",
  `Les Anges vous applaudissent.

Vous êtes sur la bonne voie.

Continuez dans cette direction.

Sachez que vos vœux deviennent réalité selon cette tradition.

Ce signe extrêmement positif vous annonce plus de miracles en prévision.`
);


ajouterNombres(
  "778 787 877 788 878 887",
  `Avez-vous le sentiment qu'une partie de votre vie touche à sa fin ?

Vos sentiments s'avèrent être justes selon cette croyance.

La fin pourrait représenter un changement positif significatif d'une situation ou encore le terme d'une partie de votre vie.

Cette séquence annonce symboliquement de bonnes nouvelles à propos d'un changement impliquant la finalisation d'une situation intense.

Accrochez-vous car votre vie pourrait devenir plus facile.`
);


ajouterNombres(
  "779 797 977 799 979 997",
  `Félicitations !

Vous êtes en train de vous débarrasser des pans de votre vie qui vous sont devenus inutiles et qui ne tiennent plus leur place dans le grand schéma de votre existence.

Cette combinaison applaudit les décisions allant vers la volonté de vivre honnêtement.`
);


ajouterNombres(
  "770 707 077 700 070 007",
  `Message en direct de l'Univers pour vous féliciter du travail mental, spirituel ou physique que vous accomplissez.

Non seulement vous vous aidez, mais vous aidez aussi les autres en prenant cette voie.

L'Univers vous demande de continuer ce superbe travail.`
);


/* =========================================================
   SÉRIE 800 À 899
========================================================= */

ajouterNombres(
  "888",
  `Une phase est proche de sa finalisation.

Préparez-vous, vous terminez une épreuve émotionnelle ou relationnelle.

Il y a une lumière au bout du tunnel.

Les récoltes sont prêtes à être faites.

Ne tardez pas à les ramasser et à en profiter.

Ne perdez pas votre temps.

Faites ce pas et vous bénéficierez des fruits de votre travail.`
);


ajouterNombres(
  "889 898 988 998 989 899",
  `Une phase significative de votre vie a définitivement touché à sa fin.

Elle apporte avec elle d'autres événements terminaux, tel un jeu de dominos.

Comme un train qui entre en gare, un wagon va s'arrêter, suivi des autres un peu plus tard.

Ils vont devoir ralentir avant de stopper, mais en décalage.

Vous traversez une série d'événements et de nombreuses parties de votre vie ralentissent et s'arrêtent.

Ne vous en faites pas car ces changements sont nécessaires et préliminaires à d'autres séquences et circonstances pour votre renouveau.`
);


ajouterNombres(
  "880 808 088 008 080 800",
  `Les changements imminents font partie de votre plan de vie général.

Ils sont les réponses à vos souhaits et sont en phase avec ce que l'Univers vous réserve.

Demandez de l'aide pour apaiser les frayeurs et les soucis que vous avez à propos des changements à venir.`
);


/* =========================================================
   SÉRIE 900 À 999
========================================================= */

ajouterNombres(
  "999",
  `Phase finale.

Terminus d'une phase vitale de votre vie vue de haut.

Message aux Artisans de Lumière concernés par la guérison de la Terre :

« Redouble tes efforts car Gaïa a besoin de toi en cet instant. »`
);


ajouterNombres(
  "990 909 099 009 090 900",
  `La phase de votre vie qui vient de se conclure était écrite.

Rien n'est jamais vraiment perdu.

Dans cette croyance, il n'y a ni mort ni accident au sens spirituel.

Ce changement récent qui a altéré ou stoppé de façon conséquente votre vie est interprété comme une réponse à vos souhaits.

L'Univers vous fait savoir que rien ne vous est vraiment retiré et que votre perte s'inscrit, dans cette tradition, dans une transformation de votre chemin de vie.

Tentez de pardonner à ceux qui sont impliqués afin de vous sentir plus léger et plus libre pour entrer dans cette nouvelle phase de vie.`
);


/* =========================================================
   3. SIGNIFICATION DES NOMBRES EN NUMÉROLOGIE

   Textes développés conservés.
========================================================= */

const NUMEROLOGIE = {

  "0": {

    titre: "Le Tout et le potentiel",

    texte: `Avant les neuf premiers nombres, le zéro initialise le Tout.

Il représente l'incréé, l'infini non manifesté et indéfinissable, le potentiel cosmique d'où tout vient et où tout repart.

Pour ces raisons, il n'est traditionnellement pas utilisé en numérologie de la même manière que les autres chiffres.

Il peut éventuellement signaler que la liberté totale en ce domaine, en bien comme en mal, est prise par l'élément en question.`

  },


  "1": {

    titre: "Volonté et commencement",

    texte: `Volonté intense. Grandes facultés de réalisation et maîtrise de soi. Autoritarisme.

Le 1 est le symbole de l'homme debout, le seul être de la création à posséder cette faculté.

Il est symbole de l'homme actif, associé aux résultats de la création.

C'est également le lieu, le domicile de l'être, source et fin de toute chose, un centre en quelque sorte.

Ce centre peut être mystique et rayonner comme un Soleil.

Le 1 est une base, un point de départ.

Il fait partie des symboles unificateurs, comme ceux qui concilient les contraires et unissent les opposés.

Ce nombre permet de réconcilier le rationnel et l'irrationnel, l'intellect et l'imaginaire, le réel et l'idéal, le concret et l'abstrait.

Si le zéro contenait tous les possibles à l'état caché, le 1 contient toutes les potentialités manifestées.

C'est la source, le point de départ, l'unité primordiale à l'origine de toute chose, le principe générateur de tout ce qui est.

Doté d'une énergie considérable et masculine dans cette tradition, le 1 représente celui qui est à l'origine, le créateur, celui qui commande et dirige les autres, l'homme d'action, le pionnier et, par extension, le tyran.

Le début, le démarrage, mais aussi le renouveau et l'occasion de prendre un nouveau départ sont contenus dans ce nombre.

C'est parfois une période de direction et de responsabilité.

Toujours une phase très énergétique, mais souvent solitaire et difficile, fréquemment enviable.`

  },


  "2": {

    titre: "Union et dualité",

    texte: `Unions, associations. Incite à se lier, à collaborer. Timidité.

Le 2, tout comme le double, possède son symbolisme.

Le 2, c'est l'opposition, les conflits, la réflexion, l'équilibre réalisé ou les menaces latentes, l'ambivalence et le doublement.

Il est attribué à l'archétype de la Mère, au principe féminin.

C'est l'involution désastreuse ou l'évolution créatrice, le dualisme où repose toute la dialectique.

Le combat, le mouvement, le progrès, la division, la multiplication et la synthèse sont également attribués au 2.

Il peut renforcer la valeur symbolique de ce qui l'entoure et multiplier sa puissance à l'infini.

C'est le reflet, le double du 1.

Le rythme binaire qui régit notre monde est issu du principe des contraires : jour et nuit, yin et yang, action et réaction.

C'est la polarité et l'équilibre.

Dans cette tradition symbolique, le 1 représente l'homme et le 2 la femme.

Le 2 est celui qui organise derrière celui qui dirige, le brillant second.

C'est une personne équilibrée, sociable et diplomate, qui rassemble et assemble.

Mais c'est aussi le rêveur, l'utopiste, ce qui peut conduire à l'indécision.

Il représente une période de collaboration et d'association dans la vie privée ou professionnelle.

Cette période devrait être calme et équilibrée.

Quelquefois placé sous une influence féminine dans cette interprétation, ce nombre évoque aussi, dans son sens contraire, une phase de séparation.`

  },


  "3": {

    titre: "Expression et création",

    texte: `Sociabilité développée. Sens aigu de la communication. Bavardage.

Le 3 exprime un ordre principalement intellectuel et spirituel en Dieu, dans l'Univers et dans l'homme.

Un engendre deux qui engendre toutes choses.

Le 3 devient alors un support, un chiffre parfait, exprimant une certaine forme de totalité et d'achèvement.

Il représente la perfection de l'unité divine, l'achèvement de la manifestation, un accomplissement, une participation où la conscience est développée.

Cela peut se traduire par diverses formes de divination.

Le 3 est une limite entre le favorable et le défavorable.

Il est aussi symbole de la totalité de l'ordre social.

C'est pourquoi il est bénéfique si l'on suit cet ordre social.

C'est le souffle de l'esprit qui va créer et, par le verbe, s'exprimer et communiquer.

Il représente le dynamisme créateur de vie et de mouvement.

Pour le couple, il peut symboliser la venue d'une troisième personne : l'enfant.

Le 3 est celui qui s'extériorise, s'exprime et communique le goût, l'harmonie et la beauté.

C'est l'artiste, l'homme médiatique.

C'est également le bavard, le clown, le brouillon.

Expression, communication, création et mouvement de la vie sont associés à ce nombre.

Le 3 est considéré, avec le 5, comme l'une des meilleures périodes symboliques de l'existence.`

  },


  "4": {

    titre: "Construction et stabilité",

    texte: `Réalisations concrètes. Stabilité. Sens de l'ordre. Rigidité.

Depuis la préhistoire, le 4 est symbole de ce qui est solide, palpable et perceptible.

C'est un symbole totalisateur.

Le 4 représente l'archétype du pouvoir totalisateur, l'étendue de ce pouvoir et son influence sur les actes des individus.

Il se rattache au carré et à la croix.

Il symbolise la totalité du créé et du révélé.

Dans certaines traditions japonaises, le 4 est associé à la mort.

Ce nombre peut donc également évoquer une nécessité de changement.

Il se rattache à l'Univers dans sa totalité, au monde visible et matériel et à l'intégration de l'humain dans ce monde.

Il organise et représente une force destinée à cette fin.

Dans certaines interprétations, c'est un nombre féminin.

Il représente une potentialité qui vient avec la manifestation du chiffre 5.

D'après les travaux de C. G. Jung, la quaternité se rapporte symboliquement à la totalité des processus psychiques conscients et inconscients.

Elle représente une condition permettant de prendre conscience du monde et de sa réalité.

Le 4 est le nombre de la manifestation matérielle : la matière, le monde matériel, l'Univers créé, la Terre, la solidité et la dureté.

Mais il représente aussi les limitations, le travail et les efforts nécessaires.

C'est l'homme pratique, solide, méthodique, ordonné, mais parfois limité.

C'est encore le routinier, le maniaque ou la bête de somme.

Il peut symboliser une période de travail, parfois difficile et contraignante, mais permettant de construire solidement.`

  },


  "5": {

    titre: "Liberté et changement",

    texte: `Mobilité. Ouverture d'esprit. Facultés d'adaptation. Libertinage.

Le 5 représente, dans de nombreuses traditions symboliques, la manifestation de l'être humain au terme d'une évolution biologique et spirituelle.

Il désigne un acte, comme les autres chiffres impairs, tandis que les chiffres pairs indiquent un état dans cette interprétation.

C'est le nombre de l'existence matérielle et objective, symbole de la vie manifestée.

Le 5 est la somme de 2 et de 3.

Il est également le milieu des neuf premiers nombres.

C'est l'union, le centre de l'homme.

L'être humain, bras écartés, peut symboliquement apparaître composé de cinq parties formant une croix.

Le cinq évoque également l'Univers avec ses axes horizontal et vertical passant par un même centre.

Il peut représenter la perfection et la volonté d'ordre.

Les cinq sens et les cinq formes sensibles de la matière expriment la totalité du monde perceptible.

Mais il peut également symboliser la création inachevée.

Dans certaines interprétations anciennes, il est associé à des échecs, à la perte ou à la mort.

Le 5 peut être cruel ou créatif.

La lettre C symbolise également un possible pouvoir de transmutation.

L'homme qui s'intègre dans le monde matériel et qui va l'animer, c'est le 5.

C'est l'être humain avec ses cinq sens et sa liberté de les utiliser pour chercher, expérimenter, combattre et parfois se tromper.

Le 5, c'est la vie, le combat, l'aventure, le changement, la liberté, la sensualité et la sexualité.

C'est l'aventurier de toutes les aventures : physiques, affectives, spirituelles ou intellectuelles.

C'est l'expérimentateur, le chercheur, l'homme ou la femme libre, ardent, entreprenant, audacieux, magnétique et chanceux.

Il aime la vie et ses plaisirs.

Mais il peut aussi être imprudent, coléreux ou dangereux.

Le 5 représente le temps de la liberté, des voyages, du changement, du combat, des aventures et de la vie intense.`

  },


  "6": {

    titre: "Harmonie et responsabilités",

    texte: `Accord, vie commune, harmonie. Esprit conciliant. Intolérance.

Le 6 marque symboliquement l'opposition de la créature au créateur dans un certain équilibre.

Cela implique pour la créature de se distinguer du créateur, éventuellement en créant à son tour.

Mais cette distinction est source d'ambivalence.

Elle peut pencher vers le bien ou vers le mal, vers l'union ou vers la révolte.

Le 6 peut représenter une perfection qui cherche à se révéler.

C'est aussi une épreuve entre le bien et le mal.

Le 6 est attribué, surtout dans l'Antiquité, à Vénus ou Aphrodite pour son pouvoir de donner forme.

Il est médiateur entre la base, le principe et la manifestation de la création.

Il symbolise les choses intellectuelles et temporelles.

Comme il intervient juste avant le 7, il représente un passage vers la conscience de ce qui est manifesté.

Chez les Bambaras, le 6 est un symbole faste, signe des jumeaux mâles, soit 3 + 3.

La recherche de l'harmonie et de l'amour est indiquée par le six.

Il représente l'équilibre entre le créateur et le créé.

Évolution, involution, choix, harmonie, musique, danse, amour, responsabilités familiales, communautaires ou nationales, devoir et désintéressement sont associés à ce nombre.

C'est l'amoureux, le doux, le bon, celui qui aime la beauté.

Mais il peut être trop rêveur ou trop sensible.

Le 6 représente l'homme responsable, parfois à un très haut niveau.

C'est aussi le temps de l'amour, des responsabilités et de l'engagement.`

  },


  "7": {

    titre: "Spiritualité et connaissance",

    texte: `Vie intérieure. Profondeur d'analyse. Spiritualité. Manque de confiance.

Le 7 symbolise une transformation après un cycle accompli, suivie d'un renouveau positif.

Son symbolisme laisse une place au libre arbitre après la fin d'un cycle réussi.

Le 7 symbolise également la totalité du temps, de l'espace et de l'Univers en mouvement.

C'est l'aboutissement après six autres passages symboliques.

Le septième jour, jour où Dieu laisse la responsabilité à l'homme dans certaines traditions, marque également une culmination dynamique des six autres phases.

Le 7 représente aussi un pacte, une totalité humaine et une perfection unifiée.

C'est 4 + 3, le 4 étant associé au féminin et le 3 au masculin dans cette symbolique.

Le 7 représente la totalité des différents états de conscience, en bien comme en mal.

C'est l'homme à la recherche d'une relation avec son créateur.

Il symbolise la liaison entre le divin et l'humain.

La spiritualité peut être évoquée par le silence, le mystère, la méditation, la philosophie et la discussion.

Le 3 du monde de l'Esprit s'ajoute au 4, monde de la matière, pour donner le 7.

Le 7, c'est le mystique, le penseur, le philosophe, l'homme silencieux et secret.

Quelquefois, c'est quelqu'un qui se cache ou qui se rebelle.

Il représente le temps de la méditation, de l'étude, de la réflexion, de la solitude ou du repos.`

  },


  "8": {

    titre: "Pouvoir et réalisation",

    texte: `Pouvoir. Réussite matérielle. Esprit d'entreprise. Manipulation.

Le huit est le nombre de l'équilibre cosmique et de la médiation.

Il se rapporte aux choses intermédiaires.

C'est le nombre des directions cardinales, auxquelles s'ajoutent les directions intermédiaires.

On le retrouve symboliquement dans la politique, les affaires, la publicité et la diffusion des idées.

Il concentre l'entité et l'innombrable.

C'est la possibilité d'une sagesse infinie aux formes innombrables.

Il est associé à l'éducation, à l'effort spirituel et à toute recherche.

Au-delà du septième jour vient le huitième, qui marque symboliquement la vie des justes et la condamnation des impurs.

Le 8 correspond donc au renouveau.

Le 8 couché est également le symbole mathématique de l'infini.

La lame 8 du Tarot représente la Justice dans certaines traditions du Tarot.

Ce nombre n'est considéré comme maléfique que par son incompréhension et une mauvaise utilisation du pouvoir.

L'homme reprend la lutte avec le 8.

C'est le succès matériel : gains, argent et pouvoir.

C'est également le nombre des articulations, des passages, de la transformation, de la résurrection et du karma.

Il peut représenter la plénitude spirituelle du nombre 7 devenue matérielle.

C'est l'homme d'affaires, d'argent et de pouvoir.

C'est celui du succès, le gagneur, l'arriviste, parfois autoritaire, dominateur ou malhonnête.

Mais il peut aussi représenter l'homme confronté à la ruine.

Le 8 évoque le pouvoir, l'argent, l'originalité, le succès foudroyant ou la chute, ainsi que les problèmes financiers.`

  },


  "9": {

    titre: "Altruisme et accomplissement",

    texte: `Altruisme, dévouement, dépassement de soi, achèvement et hyperémotivité.

Le nombre 9 semble être la mesure des gestations et des recherches fructueuses.

Il symbolise le couronnement des efforts, comme lorsqu'on mène une création à son terme.

C'est la perfection de la perfection, l'ordre dans l'ordre et l'unité dans l'unité.

Le Yang, tout comme la plénitude, est associé au 9 dans certaines traditions.

Ce nombre est complet car il est le dernier des neuf premiers nombres.

Il permet symboliquement l'analyse des autres chiffres.

C'est pourquoi il représente l'achèvement et le temps complet.

Il annonce une fin et un recommencement, une transposition sur un nouveau plan.

Il évoque la germination et la création de quelque chose de nouveau.

Il peut aussi représenter la mort symbolique, la fin d'une situation ou d'un cycle.

Le 9, c'est l'extension vers les autres.

Le but est atteint.

C'est la fin, l'aboutissement, la conclusion et la récompense des épreuves.

C'est la plénitude des dons, les connaissances universelles et les vérités éternelles.

Avec le neuf, l'homme peut méditer.

Il peut aller vers les autres pour aider, soulager et enseigner.

Le 9 est celui de l'expérience, l'altruiste et l'idéaliste.

Il peut aussi représenter quelqu'un doté de nombreux talents, mais dont la mise en avant peut être mal perçue.

C'est un temps d'achèvement, de bilan et de récolte, bonne ou mauvaise.

Extension pour les uns, fin pour les autres.

Dans tous les cas, c'est la préparation d'un nouveau cycle.`

  },


  "11": {

    titre: "Intuition et inspiration",

    texte: `Le 11 est le symbole de l'idéalisme, de l'intuition, de l'énergie, de l'inspiration, de la volonté et du courage.

Mais il représente également la tension et les contradictions.

Le 11 possède le potentiel d'être une source d'inspiration pour les autres.

Il est associé à une quantité excessive d'énergie et d'intuition.

Il y a parfois tellement de choses dans son psychisme qu'il lui arrive de ne pas se comprendre lui-même.

Le 11 peut galvaniser toutes les situations dans lesquelles il entre.

Il inspire les autres, parfois sans effort conscient.

L'énergie semble couler à travers lui, sans qu'il puisse toujours la contrôler.

Cela lui donne à la fois de la puissance, des turbulences et parfois une grande émotivité.

Le 11 est symboliquement considéré comme un canal d'information entre le haut et le bas, entre le royaume des archétypes et le monde relatif.

Des idées, des pensées, de la compréhension et de la perspicacité semblent lui parvenir sans qu'il ait nécessairement recours à un processus de pensée rationnelle.

Il semble exister un pont entre son royaume conscient et inconscient.

Cette connexion est associée à un haut niveau d'intuition.

Tout cela se traduit symboliquement par une grande capacité d'invention.

Dans les traditions numérologiques, de nombreux inventeurs, artistes, chefs religieux, prophètes et figures historiques sont associés au maître nombre 11.

Parce qu'il est considéré comme hautement chargé, il subit les conséquences d'une épée à double tranchant.

Il possède de grandes capacités, mais se livre souvent à beaucoup d'auto-réflexion et d'auto-critique.

Il se sent fréquemment très conscient de lui-même.

Il peut ressentir une différence avec les autres.

Même lorsqu'il cherche à se fondre dans son environnement, il peut se sentir remarquable, étranger ou en décalage.

Dans cette tradition, le 11 est associé à un message ou à un rôle particulier à jouer dans la vie.

Mais il doit suffisamment se développer intérieurement pour profiter pleinement de cette opportunité.

Jusqu'à ce moment, son développement intérieur peut prendre le pas sur sa capacité à matérialiser de grandes réalisations.

En conséquence, le 11 semble parfois se développer lentement.

Cette tradition associe parfois son succès à une maturité acquise entre 30 et 45 ans, sans que cela constitue une règle réelle ou une prédiction.

Le 11 peut être frustré parce qu'il nourrit des attentes extrêmement élevées envers lui-même.

Ces attentes peuvent devenir irréalistes et l'empêcher de passer à l'action.

Il peut également traverser des crises de confusion ou manquer de direction.

Cela peut provoquer une perte de confiance ou un profond découragement.

Dans cette interprétation symbolique, ces difficultés sont associées à la complexité de sa sensibilité et de son potentiel.

Le 11 possède une forte ambition et le désir de réaliser quelque chose de grand.

Cependant, un manque de confiance dans ses capacités peut lui causer beaucoup de frustration.

Il a besoin de développer une confiance à la hauteur de son ambition pour concrétiser ses rêves.

La confiance représente symboliquement la clé qui ouvre son potentiel.

Sa sensibilité particulière l'invite à prendre soin de son équilibre, notamment lorsqu'il traverse des périodes de stress.

Il peut rechercher une harmonie avec son environnement et adopter des habitudes de vie qui favorisent son bien-être.

Le 11 peut faire preuve d'un grand tact et d'une forte diplomatie.

Il est également patient et coopératif.

Il travaille bien avec les groupes et trouve des moyens de créer une harmonie entre différentes opinions.

Il possède un sens aigu de la beauté, de l'équilibre et du rythme.

Dans les relations amoureuses, le 11 est décrit comme sensible et passionné.

Son intuition symbolique lui permet de percevoir les besoins et les désirs de son partenaire.

Il peut y répondre avec délicatesse.

Toutefois, lorsqu'il se sent maltraité ou abandonné, il peut réagir avec une intensité importante.

Ses critiques peuvent devenir personnelles et blessantes.

Note importante :

Dans cette tradition, il est considéré comme rare de vibrer pleinement à la vibration du maître nombre 11.

La plupart des personnes concernées vibreraient plutôt à un niveau associé au nombre 2, obtenu par réduction numérologique de 11, ou entre les deux.

Le 2 représente alors les dimensions de coopération, d'équilibre et de relation qui accompagnent l'intuition du 11.`

  }

};


/* =========================================================
   4. CONFIGURATION DES CATÉGORIES
========================================================= */

const CONFIGURATIONS = {

  miroirs: {

    titre: "Les heures miroirs",

    description:
      "Entre une heure miroir que tu as remarquée, par exemple 06h06 ou 17h17.",

    placeholder: "Exemple : 17h17",

    exemples: [
      "00h00",
      "06h06",
      "11h11",
      "17h17",
      "22h22"
    ]

  },


  angeliques: {

    titre: "Les nombres angéliques",

    description:
      "Entre une combinaison de trois chiffres. Les zéros au début sont importants.",

    placeholder: "Exemple : 777",

    exemples: [
      "000",
      "111",
      "121",
      "222",
      "444",
      "777"
    ]

  },


  numerologie: {

    titre: "La numérologie",

    description:
      "Découvre la signification des chiffres de 0 à 9 et du maître nombre 11.",

    placeholder: "Exemple : 7",

    exemples: [
      "0",
      "1",
      "3",
      "5",
      "7",
      "9",
      "11"
    ]

  }

};


let categorieActive = "miroirs";


/* =========================================================
   5. OUTILS
========================================================= */

function el(id) {
  return document.getElementById(id);
}


function creerBoutonNombre(nombre, conteneur) {

  const bouton = document.createElement("button");

  bouton.type = "button";
  bouton.className = "petit-nombre";
  bouton.textContent = nombre;

  bouton.addEventListener("click", () => {

    el("nombreRecherche").value = nombre;

    rechercherNombre(nombre);

  });

  conteneur.appendChild(bouton);

}


/* =========================================================
   6. CHANGEMENT DE CATÉGORIE
========================================================= */

function changerCategorie(categorie) {

  if (!CONFIGURATIONS[categorie]) {
    return;
  }

  categorieActive = categorie;

  document.querySelectorAll(".categorie").forEach(bouton => {

    const active =
      bouton.dataset.categorie === categorie;

    bouton.classList.toggle("active", active);

    bouton.setAttribute(
      "aria-pressed",
      String(active)
    );

  });

  const configuration = CONFIGURATIONS[categorie];

  el("titreCategorie").textContent =
    configuration.titre;

  el("descriptionCategorie").textContent =
    configuration.description;

  el("nombreRecherche").placeholder =
    configuration.placeholder;

  el("nombreRecherche").value = "";

  el("resultat").hidden = true;

  const exemples = el("exemples");

  exemples.innerHTML = "";

  configuration.exemples.forEach(nombre => {

    creerBoutonNombre(nombre, exemples);

  });

  afficherHistorique();

}


/* =========================================================
   7. NORMALISATION DES NOMBRES
========================================================= */

function normaliserNombre(valeur) {

  let nombre = String(valeur)
    .trim()
    .replace(/\s/g, "");

  if (categorieActive === "miroirs") {

    nombre = nombre.replace(/[hH]/g, ":");

    const correspondance =
      nombre.match(/^(\d{1,2}):(\d{2})$/);

    if (!correspondance) {
      return null;
    }

    const heure = Number(correspondance[1]);
    const minute = Number(correspondance[2]);

    if (heure > 23 || minute > 59) {
      return null;
    }

    const heureFormatee =
      String(heure).padStart(2, "0");

    const minuteFormatee =
      String(minute).padStart(2, "0");

    return heureFormatee + ":" + minuteFormatee;

  }

  if (categorieActive === "angeliques") {

    return /^\d{3}$/.test(nombre)
      ? nombre
      : null;

  }

  if (categorieActive === "numerologie") {

    return /^(?:[0-9]|11)$/.test(nombre)
      ? nombre
      : null;

  }

  return null;

}


/* =========================================================
   8. ANALYSE THÉMATIQUE

   Les lectures ne prétendent pas connaître
   la situation personnelle du consultant.

   Elles proposent plusieurs directions
   cohérentes avec le message d'origine.
========================================================= */

function analyserTheme(message) {

  const texte = message.toLowerCase();

  const themes = {

    transformation:
      /changement|renouveau|cycle|transition|mutation|évolution|phase|terminer|termine|passé|porte|fin d'une|fin d'un|achev|sépar|perte|abandon|détach|nouveau départ/,

    relations:
      /amour|relation|harmonie|loyauté|association|union|partenaire|familial|sentimental|affectif|couple|réconfort/,

    creation:
      /pensée|idée|création|projet|objectif|imagination|intuition|souhait|vœu|inspiration|manifestation|intention|créat/,

    materiel:
      /matériel|argent|pouvoir|travail|réussite|acquisition|achat|maison|voiture|possession|finance|abondance|ressource/,

    spiritualite:
      /ange|univers|sage|spirituel|spiritualité|divin|mission|conscience|sagesse|méditation|âme|esprit|énergie|protection/

  };

  const scores = {};

  Object.entries(themes).forEach(([theme, expression]) => {

    scores[theme] = expression.test(texte) ? 1 : 0;

  });

  const ordre = [
    "transformation",
    "relations",
    "creation",
    "materiel",
    "spiritualite"
  ];

  const trouves = ordre.filter(theme => scores[theme] > 0);

  if (trouves.length === 0) {
    trouves.push("reflexion");
  }

  return trouves;

}


/* =========================================================
   9. LECTURES APPROFONDIES PAR THÈME
========================================================= */

const LECTURES = {

  transformation: {

    texte: `Cette symbolique évoque une période de transformation.

Elle peut concerner une situation personnelle, une relation, un projet professionnel ou simplement votre manière d'envisager l'avenir.

Vous ressentez peut-être le besoin de changer quelque chose sans savoir encore exactement dans quelle direction avancer.

Il est également possible qu'un changement soit déjà engagé, mais que ses conséquences ne soient pas encore clairement visibles.

Ce message ne signifie pas nécessairement qu'un bouleversement va se produire. Il peut aussi vous inviter à reconnaître qu'une situation ne vous convient plus totalement.

Parfois, avancer demande une décision. D'autres fois, il faut accepter que certaines choses évoluent progressivement.

La question essentielle est peut-être de savoir ce que vous souhaitez conserver et ce que vous êtes prêt à transformer.`,

    conseil: `Identifiez ce qui vous semble arrivé au terme d'un cycle.

Demandez-vous ce que vous souhaitez garder, transformer ou laisser derrière vous.

Une première action réfléchie peut être plus utile qu'un changement précipité.`

  },


  relations: {

    texte: `Cette interprétation attire votre attention sur les relations et la recherche d'harmonie.

Elle peut concerner votre vie sentimentale, votre famille, une amitié ou une relation professionnelle.

Vous traversez peut-être une période où les attentes des autres prennent beaucoup de place.

Il peut également exister un décalage entre ce que vous ressentez intérieurement et ce que vous exprimez.

Ce message peut vous inviter à mieux comprendre les personnes qui vous entourent, mais aussi à reconnaître vos propres besoins.

L'harmonie ne signifie pas nécessairement l'absence de désaccord.

Elle peut naître d'une discussion sincère, d'un choix assumé ou d'une meilleure compréhension mutuelle.

Dans certaines situations, retrouver un équilibre implique aussi de savoir poser des limites.`,

    conseil: `Observez vos relations actuelles.

Y a-t-il quelque chose que vous souhaiteriez exprimer ou comprendre davantage ?

Privilégiez un dialogue sincère et respectueux, sans négliger vos propres besoins.`

  },


  creation: {

    texte: `Ce message met en lumière votre monde intérieur, vos pensées et votre capacité à imaginer de nouvelles possibilités.

Vous avez peut-être une idée à développer, une envie de changement ou un objectif que vous n'osez pas encore concrétiser.

Il est possible que vous hésitiez entre plusieurs directions.

Cette symbolique vous invite à faire la différence entre ce que vous souhaitez réellement et ce que vous poursuivez par habitude, obligation ou crainte.

Les idées peuvent devenir le point de départ de grandes transformations.

Mais elles nécessitent aussi du temps, de la patience et des actions concrètes.

Votre imagination peut être une force importante si vous parvenez à lui donner une direction.

Ce message peut donc représenter une invitation à prendre davantage confiance dans votre capacité d'initiative.`,

    conseil: `Prenez un moment pour clarifier vos intentions.

Qu'aimeriez-vous véritablement réaliser ?

Notez une idée qui vous tient à cœur, puis cherchez la première étape concrète permettant de la développer.`

  },


  materiel: {

    texte: `Cette lecture semble liée à votre vie concrète, à vos responsabilités et à vos ambitions.

Elle peut évoquer le travail, les finances, un projet matériel, un logement ou votre besoin de sécurité.

Vous recherchez peut-être une amélioration de votre situation actuelle.

Il est également possible que vous attendiez les résultats d'efforts engagés depuis quelque temps.

Ce message vous invite à examiner vos priorités et les moyens dont vous disposez pour atteindre vos objectifs.

La réussite peut prendre différentes formes.

Elle ne se limite pas à l'argent ou à la reconnaissance extérieure.

Elle peut aussi correspondre à une stabilité retrouvée, une décision importante ou une plus grande liberté dans votre quotidien.

L'essentiel est de rechercher un équilibre entre vos ambitions, vos possibilités et votre bien-être.`,

    conseil: `Examinez vos priorités matérielles et professionnelles.

Quelles actions dépendent réellement de vous ?

Une décision réfléchie et des démarches concrètes restent plus utiles qu'une attente fondée uniquement sur un signe.`

  },


  spiritualite: {

    texte: `Cette combinaison possède une dimension spirituelle importante dans la tradition des nombres angéliques.

Elle peut être comprise comme une invitation à retrouver confiance, sérénité et clarté intérieure.

Vous traversez peut-être une période durant laquelle vous recherchez des réponses ou souhaitez donner davantage de sens à certains événements.

Ce message peut également représenter un besoin de recul, de calme ou de réflexion personnelle.

Selon vos croyances, vous pouvez y voir une forme d'accompagnement spirituel.

Il peut aussi être interprété comme un rappel de vos valeurs, de vos convictions ou de ce qui vous apporte de la force.

Cette lecture ne permet pas de déterminer avec certitude l'origine d'un événement ni de prédire ce qui arrivera.

Elle propose avant tout une manière symbolique de réfléchir à votre chemin.`,

    conseil: `Accordez-vous un moment de calme.

Réfléchissez aux valeurs qui vous guident et à ce qui vous apporte de la confiance.

Conservez ce qui a du sens pour vous, sans considérer cette interprétation comme une obligation.`

  },


  reflexion: {

    texte: `Ce nombre peut être interprété comme une invitation à prendre du recul sur votre situation actuelle.

Il peut évoquer une réflexion personnelle, une prise de conscience, une relation ou une étape importante de votre parcours.

Vous traversez peut-être une période de questionnement.

Il est également possible que tout semble relativement stable, mais que vous ressentiez le besoin de comprendre davantage certains événements.

Cette symbolique laisse volontairement plusieurs possibilités ouvertes.

Elle ne prétend pas connaître votre histoire ni annoncer un événement précis.

Elle propose plutôt d'observer ce qui fait écho à votre expérience et ce qui pourrait vous aider à avancer avec davantage de clarté.`,

    conseil: `Considérez cette interprétation comme une piste de réflexion.

Quelle situation de votre vie pourrait faire écho à cette symbolique ?

Vous restez libre de lui donner le sens qui vous semble pertinent.`

  }

};


/* =========================================================
   10. GÉNÉRATION DES INTERPRÉTATIONS

   Une lecture principale.
   Une lecture complémentaire si nécessaire.
   Pas de répétition inutile.
========================================================= */

function genererInterpretation(message, categorie, nombre) {

  const themes = analyserTheme(message);

  const principal = themes[0];

  let lecture = LECTURES[principal].texte;

  if (themes.length > 1) {

    const secondaire = themes.find(
      theme => theme !== principal
    );

    if (secondaire && LECTURES[secondaire]) {

      const paragraphes =
        LECTURES[secondaire].texte.split("\n\n");

      lecture += "\n\nUne autre dimension de ce message mérite votre attention.\n\n";

      lecture += paragraphes.slice(0, 3).join("\n\n");

    }

  }

  if (
    categorie === "miroirs"
  ) {

    lecture += `

Les heures miroirs peuvent être perçues comme des moments symboliques qui attirent votre attention sur une idée, une émotion ou une situation.

La répétition d'une heure ne signifie pas qu'un événement précis va forcément se produire.

Elle peut néanmoins devenir une occasion personnelle de réflexion.`;

  }

  if (
    categorie === "angeliques"
  ) {

    lecture += `

Dans les traditions angéliques, cette combinaison est associée à un langage symbolique des nombres.

L'interprétation peut prendre plusieurs sens selon les préoccupations, les projets ou les expériences du consultant.`;

  }

  if (
    categorie === "numerologie"
  ) {

    lecture += `

En numérologie, les nombres représentent des qualités, des tendances et des symboles.

Ils ne définissent pas une personnalité de manière certaine et ne déterminent pas l'avenir d'une personne.`;

  }

  return lecture;

}


/* =========================================================
   11. CONSEIL PERSONNALISÉ PAR SYMBOLE
========================================================= */

function genererConseil(message) {

  const themes = analyserTheme(message);

  const principal = themes[0];

  return LECTURES[principal].conseil;

}


/* =========================================================
   12. RECHERCHE
========================================================= */

function rechercherNombre(valeur) {

  const nombre = normaliserNombre(valeur);

  if (!nombre) {

    afficherErreur(
      "Le format du nombre saisi n'est pas valide."
    );

    return;

  }

  let titre = "";

  let message = "";

  if (categorieActive === "miroirs") {

    const texte = HEURES_MIROIRS[nombre];

    if (texte) {

      titre = "Heure miroir";

      message = texte;

    }

  }


  if (categorieActive === "angeliques") {

    const messages = NOMBRES_ANGELIQUES[nombre];

    if (messages && messages.length > 0) {

      titre = "Nombre angélique";

      message = messages.join("\n\n✧ Message complémentaire\n\n");

    }

  }


  if (categorieActive === "numerologie") {

    const donnee = NUMEROLOGIE[nombre];

    if (donnee) {

      titre = donnee.titre;

      message = donnee.texte;

    }

  }


  if (!message) {

    afficherErreur(
      "Ce nombre ne possède pas encore de signification enregistrée dans notre base."
    );

    return;

  }


  el("typeResultat").textContent = titre;

  el("nombreResultat").textContent =
    categorieActive === "miroirs"
      ? nombre.replace(":", "h")
      : nombre;

  el("messageSymbolique").textContent =
    message;

  el("lectureApprofondie").textContent =
    genererInterpretation(
      message,
      categorieActive,
      nombre
    );

  el("conseilMessage").textContent =
    genererConseil(message);

  el("resultat").hidden = false;

  enregistrerHistorique(nombre);

  el("resultat").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

}


/* =========================================================
   13. AFFICHAGE DES ERREURS
========================================================= */

function afficherErreur(texte) {

  el("typeResultat").textContent =
    "Aucune interprétation disponible";

  el("nombreResultat").textContent = "✧";

  el("messageSymbolique").textContent = texte;

  el("lectureApprofondie").textContent =
    "Vérifie le format du nombre ou essaie un des exemples proposés.";

  el("conseilMessage").textContent =
    "Aucune signification n'a été inventée pour cette recherche.";

  el("resultat").hidden = false;

}


/* =========================================================
   14. HISTORIQUE LOCAL
========================================================= */

function cleHistorique() {

  return (
    "voyance_promethee_anges_" +
    categorieActive
  );

}


function lireHistorique() {

  try {

    const donnees = JSON.parse(
      localStorage.getItem(cleHistorique()) || "[]"
    );

    return Array.isArray(donnees)
      ? donnees
      : [];

  } catch (erreur) {

    return [];

  }

}


function enregistrerHistorique(nombre) {

  let liste = lireHistorique();

  liste = liste.filter(
    ancienNombre => ancienNombre !== nombre
  );

  liste.unshift(nombre);

  liste = liste.slice(0, 20);

  try {

    localStorage.setItem(
      cleHistorique(),
      JSON.stringify(liste)
    );

  } catch (erreur) {

    console.warn(
      "Historique indisponible.",
      erreur
    );

  }

  afficherHistorique();

}


/* =========================================================
   15. AFFICHAGE HISTORIQUE
========================================================= */

function afficherHistorique() {

  const liste = lireHistorique();

  const bloc = el("historique");

  const conteneur = el("listeHistorique");

  conteneur.innerHTML = "";

  bloc.hidden = liste.length === 0;

  liste.forEach(nombre => {

    const nombreAffiche =
      categorieActive === "miroirs"
        ? nombre.replace(":", "h")
        : nombre;

    creerBoutonNombre(
      nombreAffiche,
      conteneur
    );

  });

}


/* =========================================================
   16. CONTRÔLE DES DONNÉES

   Toutes les combinaisons à trois chiffres
   contenant au moins deux chiffres identiques
   doivent être couvertes.
========================================================= */

function verifierDonnees() {

  const manquants = [];

  for (let n = 0; n <= 999; n++) {

    const code = String(n).padStart(3, "0");

    const chiffres = code.split("");

    const contientRepetition =
      chiffres[0] === chiffres[1] ||
      chiffres[0] === chiffres[2] ||
      chiffres[1] === chiffres[2];

    if (
      contientRepetition &&
      !NOMBRES_ANGELIQUES[code]
    ) {

      manquants.push(code);

    }

  }

  const heuresDisponibles =
    Object.keys(HEURES_MIROIRS).length;

  const nombresDisponibles =
    Object.keys(NOMBRES_ANGELIQUES).length;

  const numerologieDisponible =
    Object.keys(NUMEROLOGIE).length;

  console.log(
    "Heures miroirs :", heuresDisponibles
  );

  console.log(
    "Nombres angéliques :", nombresDisponibles
  );

  console.log(
    "Numérologie :", numerologieDisponible
  );

  if (manquants.length > 0) {

    console.warn(
      "Combinaisons non renseignées :",
      manquants
    );

  } else {

    console.log(
      "Toutes les combinaisons à chiffres répétés sont présentes."
    );

  }

}


/* =========================================================
   17. ÉVÉNEMENTS
========================================================= */

document.querySelectorAll(".categorie").forEach(bouton => {

  bouton.addEventListener("click", () => {

    changerCategorie(
      bouton.dataset.categorie
    );

  });

});


el("formulaireRecherche").addEventListener(
  "submit",
  evenement => {

    evenement.preventDefault();

    rechercherNombre(
      el("nombreRecherche").value
    );

  }
);


el("effacerHistorique").addEventListener(
  "click",
  () => {

    const confirmation = confirm(
      "Effacer l'historique de cette rubrique ?"
    );

    if (!confirmation) {
      return;
    }

    try {

      localStorage.removeItem(
        cleHistorique()
      );

    } catch (erreur) {

      console.warn(
        "Impossible d'effacer l'historique.",
        erreur
      );

    }

    afficherHistorique();

  }
);


/* =========================================================
   18. INITIALISATION
========================================================= */

verifierDonnees();

changerCategorie("miroirs");

console.log(
  "Voyance Prométhée - Messages des anges prêt."
);

