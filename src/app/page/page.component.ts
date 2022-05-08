import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faHome, faCalendarDay, faCalendarPlus, faContactCard } from '@fortawesome/free-solid-svg-icons';
import { NavBarItem } from './../shared/nav-bar/nav-bar-item.model';
import { NavBarService } from './../shared/nav-bar/nav-bar.service';
import { Component, OnInit } from '@angular/core';
import { ProgressBarVerticalService } from '../shared/progress-bar-vertical/progress-bar-vertical.service';
import { Section } from '../shared/section/section.model';
import { Subsection } from '../shared/section/subsection/subsection.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  sections: Section[] = [];
  faIcon: IconDefinition = faBars;
  screenWidth: number;

  constructor(
    private _navBarService: NavBarService,
    private _progressBarVertical: ProgressBarVerticalService
  ) 
  {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {
    // init nav bar
    const navBar1 : NavBarItem = new NavBarItem('Devoxx', faHome);
    navBar1.activeNavBar('Devoxx');
    const navBar2 : NavBarItem = new NavBarItem('Jeudi', faCalendarDay);
    const navBar3 : NavBarItem = new NavBarItem('Vendredi', faCalendarPlus);
    const navBar4 : NavBarItem = new NavBarItem('Bilan', faContactCard);
    this._navBarService.addItems([navBar1, navBar2, navBar3, navBar4]);

    // init section
    const sectionDevoxx : Section = new Section('Devoxx', true, navBar1.idNavBar);
    sectionDevoxx.addSubsections([
      new Subsection(
        'Voici mon expérience au Devoxx 2022',
        ['Capgemini étant exposant au Devoxx 2022, j\'ai eu la chance de pouvoir participer au salon pendant deux jours : jeudi 21 et vendredi 22 avril 2022.',
        'A travers cette page, je souhaite vous partager mon expérience au sein du salon Devoxx en tant qu\'exposante, mais aussi en tant que participante aux différentes conférences.',
        ' ',
        'Tout d\'abord commençons par introduire Devoxx. Mais qu\'est-ce que c\'est ? C\'est un ensemble de conférences dédiées aux développeurs, avec en supplément, des stands et des activités. Cet événement dure trois jours à Paris.',
        'Je vous laisse découvrir mes deux jours d\'expériences au sein de cet événement annuel.'],
        'Devoxx',
        'assets/devoxx.jpg'
      )
    ]);
    this.sections.push(sectionDevoxx);

    const sectionJeudi : Section = new Section('Jeudi', true, navBar2.idNavBar);
    sectionJeudi.addSubsections([
      new Subsection(
        'Arrivée au Palais des congrés',
        ['Ca y est, arrivée devant le palais des congrès! \
        Il me faut encore récupérer mon badge et je vais au stand Capgemini. \
        Rendez-vous au 2e étage, stand n°18'],
        'Palais des congrés',
        'assets/palaiscongres.jpeg'
      ),
      new Subsection(
        'Arrivée au stand Capgemini', 
        ['Arrivée devant le stand, je suis accueillie par l\'équipe Capgemini :).',
        'Le stand Capgemini contenait une borne d\'arcade (PacMan), une machine à pop corn, un écran et un hologramme.',
        'Arrivée là bas, on me montre alors le fichier utilisé pour aller dans les différentes conférences. \
        Il faut toujours qu\'il y ait une personne au niveau du stand, et nous avons que 4 badges pour aller voir les conférences.'],
        'Stand Capgemini',
        'assets/stand-capgemini.jpg'
      ),
      new Subsection(
        'Visite des stands', 
        ['Le matin, les conférences étaient déjà réservées. Avec une collègue, nous décidons de faire un petit tour des différents stands, \
        c\'est alors l\'heure de la découverte... En passant par des startup ou des plus grandes entreprises, \
        des présentations de solution ou différentes animations, le tour a été très enrichissant.',
        'Durant notre trajet, nous nous sommes aussi arrêter chez une autre ESN qui cherchait à continuer d\'améliorer\
         leurs critères de recrutement en se préoccupant de ce que les développeurs font/aiment. Nous avons vu une \
         solution "promyse" qui permet de partager les bonnes pratiques entre développeurs.\
         Sur le passage, on s\'arrête pour discuter autour de Mirantis, qui est le moyen le plus simple de libérer \
         la puissance de Kubernetes. On découvre plusieurs autres stand sans vraiment s\'arrêter, \
         et on s\'inscrit à différents concours pour gagner des voyages, switch. On récolte des petits goodies au passage.',
        'On passe également de temps en temps sur le stand Capgemini pour voir si on a besoin de nous.',
        'Ensuite, après avoir retrouvé d\'autres Capgeminien, nous voulons récupérer des goodies, alors nous continuons la suite des stands. \
        On arrive alors sur différents stands, avec des jeux de baskets, des codingame, ... \
        On continue notre tour, et direction le stand Elastic ! \
        Une grosse discussion est lancée et cela permet de visualiser les différences entre la version gratuite et payante. \
        Puis on réalise un Kahoot pour essayer de gagner un cadeau. Il fallait être dans le top 3 pour optenir un cadeau... \
        Arrivé 4e... Pour se consoler, nous continuons et nous nous arrêtons au stand "Orange". Là où il y a un autre \
        stand de basket. 2 paniers, un pour chaque joueur. Le premier qui met un panier doit répondre à une question à \
        propos de la société "Orange". A la fin, un lot peut être gagné.',
        'Bon, c\'est fini les petites visites, nous retournons au stand Capgemini. \
        Les autres Capgeminiens reviennent alors de leurs conférences et nous racontent ce qu\'il s\'est passé !',
        '"Micro Frontends REX - Diviser pour mieux régner !", 10:45 - 11:30, a été conseillé. \
          D\'autres sont allés voir "Model-Driven Design", 11:45 - 12:30'],
        '',
        ''
      ),
      new Subsection(
        'Heure du repas', 
        ['L\'heure du repas a alors sonné, on va alors chercher un sandwich au stand prévu.'],
        'Repas',
        'assets/repas.jpg'
      ),
      new Subsection(
        'Conférence "Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon"',
        ['De 13h30-14h15, Loic Mathieu et Victor GALLET ont partagé leur REX sur ce qu\'ils ont réalisé chez Decathlon.',
        'L\'objectif de leur mission était de construire une solution robuste et performante pour les échanges de données pour la Value Chain : stock, logistique, création de solution, ... ',
        'Ils ont alors travaillé sur VCstream, qui est la plateforme de streaming de la value chain Decathlon. Au niveau des technologies : Broker Kafka et micro service Quarkus.',
        'Avant de comprendre exactement la solution mise en place, il faut comprendre qu\'il y a 2 sens de communication des données : outbound (ERP -> Decathlon SI) et inbound (Decathlon SI -> ERP).',
        'VSStream vient se situer entre l\'ERP et le SI',
        '',
        '<t>Solution & Parcours du code',
        'La solution utilise Kafka car c\'est une plateforme distribuée de diffusion continue de données, elle apporte de nombreux avantages. \
        Mais la solution a quelques impacts au niveau des performances :', 
        '<li>enregistrement illimité des messages <li>TLS partout <li>acquitement complet <li>idempotence (éviter les doublons) <li>compression (charge au consommateur de décompression), <li>Commit des offset par lot de message (possibilité de consommer plusieurs fois le même message)',
        'Le framework utilisé est Quarkus. Il a été pensé pour pour Kubernetes et le cloud. Son démarrage est très rapide (2 à 4s), \
        et son empreinte mémoire est très faible. De plus, il a un coeur réactif : tous les messages sont traités au fil de l\'eau.',
        'L\'extension Quarkus pour utiliser Apache Kafka est SmallRye Reactive Messaging. \
        L\'implémentation est assez simple, et seul un fichier de configuration existe pour Kafka.',
        '',
        '<t>Performance',
        'Régulièrement, des tests sont lancés par Gatling avec des mocks HTTP',
        'Et de temps en temps, des tests aux limites sont réalisés',
        'Depuis la proposition lancée à Devoxx, une autre amélioration a été réalisé. Maintenant, il est possible \
        d\'envoyer 1,5M de message par minutes avec une consommation de CPU de seulement 25% grâce à une nouvelle fonctionnalité \
        dans Smallrye Reactive Messaging : traitement par lot.',
        '',
        '<t>Monitorer la plateforme : Prometeus et Grafana',
        'Des traces des objets fonctionelles ont également été ajoutées pour suivre les objets : ',
        '<li>UUID partagé (dans le header Kafka) <li>OpenTracing (ajouter des choses dans les header Kafka)\
         <li>traces à l\'entrée et à la sortie des fonctions',
        'Suite aux tests, des optimisations ont été réalisés sur le framework Quarkus.',
        '',
        '<t>Problématiques',
        '<li>Même si VCStream consomme très rapidement les messages, il faut s\'assurer que les consommateurs peuvent suivre. \
        <li>Suite au traitement par lot, alors des soucis de supervision ont eu lieu, mais également des soucis de performance dû à la taille conséquente \
        des messages, un autre soucis apparaissait aussi, celui au niveau du rejeu. En effet, tous les messages du lot sont rejoués \
        <li>L\'ERP n\'étant pas souvent disponible, alors il a fallut penser à un mécanisme de retry',
        '',
        '<t>Flexibilité et GreenIT',
        'Un outil permet de gérer les différentes activités : Keda pour Kubernates Event Driven Autoscaling. \
         Il permet flexibilité de la plateforme et la prise en compte le greenIT. En effet, avec une configuration, \
         il permet de provoquer les arrêts s\'il n\'y a pas d\'activité voire les redémarrages des marchines.',
        '',
        '<t>Conclusion',
        'La solution a été un gros succès. ',
        'Cependant, il reste toujours le problème de la donnée unique (exactly once semantic). En effet, \
        les messages peuvent être envoyés plusieurs fois, mais les clients ont l\'habitude de gérer ce cas.',
        'La solution est très performante car les messages transités sont du passe plat. Alors attention aux performances \
        si nous souhaitons faire des traitements un peu plus lourds. De plus, avant de faire une solution si performante, \
        il ne faut pas oublier de se demander si les clients peuvent suivre le rythme, si ce n\'est pas le cas, cela peut \
        provoquer d\'autres erreurs qu\'il faudra résoudre. Le traitement par lot peut également apporter quelques soucis \
        au niveau des traitements, il faut bien s\'assurer que les clients acceptent ces données.'
      ],
        'Traiter 1 million de messages par CPU par Go de mémoire avec Quarkus et Microprofile reactive messaging kafka à Décathlon',
        'assets/decathlon.jpg'
      ),
      new Subsection(
        'Retour au stand Capgemini',
        ['Ensuite de retour au stand Capgemini. Avec l\'accueil de toute personne arrivant au jeux d\'arcade. \
        Des scores sont battus ! Avec 19 000 pour record au jeu. Je refais un autre tour avec un Capgeminien et je m\'arrête \
        au stand Sonar. Il m\'est alors possible de discuter avec eux des différents problèmes que nous avons pu \
        rencontrer lors de l\'ajout d\'un sonar externe au plugin eclipse et des différentes lenteurs que le plugin \
        sonarLint onsave fait. '],
        '',
        ''
      ),
      new Subsection(
        'Conférence "Continuous delivery on premise : Gerrit, Jenkins et Sonarqube entrent dans un bar..."',
        ['Rendez-vous à 15h30-16h15 pour une autre conférence "Continuous delivery on premise : Gerrit, Jenkins et \
        Sonarqube entrent dans un bar..." - Julien Béti et Réda Housni Alaoui. Ils nous font alors une présentation de leur mise en place du \
        delivery continue.',
        '',
        '<t>Objectifs',
        '<li>reactivité par rapport au besoin du client <li>productivité des développeurs (pas besoin de se préoccuper \
          des tâches manuelles) <li>bootstrap de projet simplifié <li>réglementaire: audit',
          '',
          '<t>Point sur les définitions',
        '<li>Point commun entre Continuous Integration & Continuous Delivery : cycle court, automatisation',
        '<li>Différence avec Continuous Integration : mise à disposition de livrable en continu (release dans le dépôt de livrable systématique après un commit)',
        'Dans le Continuous Delivery : on va jusqu\'au bout du processus, et le livrable et mis en production', 
        '',
        '<t>Outils',
        '<li>Jira (outil de ticketing) <li>Gerrit (gestionnaire de code source) <li>Jenkins (automate) <li>SonarQube (analyse de code) <li>Nexus (dépôt de livrable)',
        '',
        '<t>Workflow',
        'Suite aux votes de Sonar (qualité de code), de Jenkins (tests automatiques) et du reviewer validés, un merge automatique est réalisé. \
        Cela va déclencher la résolution du ticket automatique dans Jira et apporter quelques informations sur le ticket comme le nom de la branche.',
        'Suite à cela, une release est déclenchée et déposée sur le nexus. Puis il y a un déploiement automatique sur les environnements utilisés en permanence.',
        'Dans le ticket Jira, tout est mis à jour : le tag de la version, la release qui est faite; et un mail automatique est envoyé.',
        '',
        '<t>Acteurs',
        'Le développeur doit uniquement mettre à jour le ticket dans Jira pour affirmer s\il est en cours ou non - et gérer la communication autour du ticket. \
        Pour tout le reste, il lui suffit de faire des commit/push et gérer les itérations',
        'Au niveau de Gerrit, qui est le gestionnaire de version utilisé par Google, il s\'utilise à peu près comme les autres outils de versionning, \
        mais le vocabulaire est un peu différent. Celui-ci contient un système de vote (-2 jusqu\'à +2), un système de pull request chainées,\
        un système de merge automatique conditionnelle, et permet de mettre à jour des tickets Jira, mais aussi de fermer des versions et d\'envoyer la release note par mail',
        '',
        '<t>Mise en place de l\'automate',
        'Un projet dédié pour les pipeline réutilisables a été fait au sein de leur entreprise.',
        'On retrouve deux catégories de pipeline : PR ou Branch (livrable)',
        'Au démarrage des pipeline, elles partagent les deux premières phases : compilation et tests automatiques. Ensuite, chacune a sa spécialité : ',
        '<li>PR Pipeline : vote de sonar/jenkins, revue de SonarQube, vote Code Quality, mise à disposition d\'une snapshot \
        <li>Branch Pipeline : mise à disposition d\'une release, déploiement sur un environnement staging (utilisé courrament), notification ',
        '',
        'Notes : Il est conseillé d\'utiliser flatten-maven-plugin (1 commit, et possibilité de définir la version de la release) au lieu de maven-release-plugin.',
        'maven-release-plugin a quelques défauts : <li>un tag qui va être créé avec deux commits. \
        Ce qui créé deux problèmes : en utilisant CD, alors l\'automate de build déclenche des build quand il voit un commit qui apparait, ce qui provoque une boucle (bon c\'est configurable ça). \
        <li>historique illisible avec deux commit <li>utilisation de la version release qui est directement dans le pom.xml',
        '',
        '<t>Les limites et les problèmes',
        '<li>popularité de Gerrit <li>Workflow PR spécifique à Gerrit (différent des outils connus) \
        <li>soumissions de code vers SonarQube avec Gerrit (plugin qui a été abandonné) <li> PR conccurrent sans merge conflicts \
        <li>peu de support NPM',
        '',
        '<t>Conclusion',
        'La mise en place de cette solution permet aux développeurs de ne plus se préoccuper des tâches rébarbatives du quotidien.\
        Elle permet également de gagner en productivité car tout est automatisé. \
        De plus, elle permet d\'être réutilisée dans de nombreux projets.',
        'En général, les outils annoncés par Julien Béti et Réda Housni Alaoui sont souvent utilisés (Jira, Jenkins, SonarQube). \
        Par contre, l\'utilisation de Gerrit est un peu problèmatique au vu de la communauté qui reste assez mineure.'
        ],
        'Continuous delivery on premise : Gerrit, Jenkins et Sonarqube entrent dans un bar...',
        'assets/continuousdelivery.jpg'
      ),
      new Subsection(
        'Rencontre',
        [' En sortant du stand, je croise un ancien camarade de l\'université ! Nous décisons d\'aller chercher \
        un petit goûter : une boisson et un gâteau.',
        'Retour ensuite aux stands, on s\'arrête alors sur un stand "Contrast Security", \
        on nous présente alors un outil qui permet de protéger notre application. En bref, c\'est une sorte de sonar \
        basé sur la sécurité.'],
        '',
        ''
      ),
      new Subsection(
        'Conférence "Tailwind ou le futur du CSS"',
        ['Dernière séance du jour "Tailwind ou le futur du CSS" 17h45 - 18h15. Faite par Amadou SALL. \
        Mélangeant humour et savoir, Amadou nous présente une nouvelle manière de designer un site, sans écrire une ligne de CSS. ',
        '',
        '<t>Design avec du CSS',
        'Aujourd\'hui, les deux manières de designer un site sont les suivantes :',
        '<li>Vanilla CSS : écrire tout à la main - L\'avantage, c\'est que cela apporte beaucoup de liberté mais \
        cela provoque beaucoup de travail et de risques\
         <li>Silver Plan : framework orienté composant comme Bootstrap - Les avantages c\'est que cela est \
         très rapide, très facile et que cela est de qualité mais il peut manquer d\'originalité \
         et ce n\'est pas fait pour être customisé',
        'Tailwindcss est une nouvelle approche qui permet de faire des design custom sans écrire du css. \
        Tailwind ne fournit pas des composants prédéfinis, il fournit des milliers de classes utilitaires.',
        'Quoi de mieux qu\'une visualisation du code pour nous faire adopter cette solution ! Amadou SALL nous a alors montré \
        comment faire un blog joli et responsive sans ligne de CSS.',
        '',
        '<t>Avantages et Inconvénient',
        '<li>+ Cohérence dans l\'application<li>+ Responsive design<li>+ Tout est customisable<li>+ Extensible<li>+ Très rapide\
        <li>+ Bonne expérience utilisateur : uniquement HTML, pas besoin de chercher pour nommer des classes, prototypes rapides, \
        possibilité de faire du refactoring sans oublier de supprimer le code CSS mort \
        <li>- Connaitre le CSS<li>- Beaucoup de classes à ajouter dans le code HTML (compliqué pour la revue de code)\
        <li>- Pas possible d\'avoir des composants réutilisables : soit acheter la version payante, ou tout faire soi-même',
        '',
        '<t>Conclusion',
        'Entre Vanilla CSS et Silver Plan, TailwindCSS est une solution qui permet de faire un compromis. \
        Il apporte beaucoup d\'avantages, mais, cela demande de connaitre un peu le CSS et cela est très verbeux dans le code HTML. '
        ],
        'Tailwind ou le futur du CSS',
        'assets/tailwind.jpg'
      ),
      new Subsection(
        'Go Paris',
        ['Après cette séance, j\'ai été ramené toutes mes affaires à l\'hôtel, et j\'en ai profité pour \
        faire un tour à la tour Eiffel ! Le palais des congrès n\'est pas si loin. '],
        'Paris',
        'assets/paris.jpg'
      ),
      new Subsection(
        'Soirée Devoxx 10 ans',
        [' Après cette petite escale, je suis de retour au palais des congrés pour la soirée des 10 ans. \
        J\'ai retrouvé les collègues là bas. Petit moment de détente, on se retrouve tous. Et en se balandant, on croise \
        un stand parmi lequel la musique était au rendez-vous, petite dance au lac du conémara ! Super ambiance :)',
        'Après cela, quelques uns d\'entre nous restent au bar en face du palais des congrés. \
        C\'est l\'occasion de nous retrouver entre Capgeminiens.'],
        'Equipe',
        'assets/equipe.jpg'
      )
    ]);
    this.sections.push(sectionJeudi);

    const sectionVendredi : Section = new Section('Vendredi', true, navBar3.idNavBar);
    sectionVendredi.addSubsections([
      new Subsection(
        'Dernier jour',
        ['En arrivant, nous allons chercher un petit déjeuner. Et nous nous racontons les histoires de la veille.',
        'Le score de PacMan a été battue pendant la soirée : 22 000 !!'],
        '',
        ''
      ),
      new Subsection(
        'Conférence "Migrer de Spring MVC à Spring Web Flux"', 
        ['"Migrer de Spring MVC à Spring Web Flux" 10h45-11h30, première conférence de la journée réalisée par Mathilde LORRAIN et \
        Hugo CAUPERT.',
        'Le talk est dédié à des personnes qui ont l\'habitude de développer sur spring MVC et qui ont envie de comprendre le fonctionnement des API reactive.',
        '',
        '<t>Spring MVC',
        'Spring MVC marche sur un container de servlet (tomcat par exemple) et sur le paradigme 1 requête = 1thread (unité d\'éxecucion sur lequel tout bout de code est éxecuté).',
        'Si on souhaite augmenter le nombre de bout de code à exécuter, alors il faut augmenter les thread. Un pool de thread est un ensemble de thread utilisés pour le même but et pour qu\'ils soient réutilisables. \
        Tomcat par exemple contient un pool de thread de 200 par défaut.',
        'Si plusieurs requêtes viennent en parallèle, alors toutes les requêtes ne pouvant être traitées sont mises en attente.',
        'Ici, le nombre de requête concurrente vaut le nombre de thread dans le pool.',
        'Et comme le thread est dédié qu\'à une seule requête, alors il peut être bloqué en attente d\'une réponse d\'un service exterieur ou alors d\'une requête BDD par exemple',
        '',
        '<t>Limitation du nombre d\'opération',
        'Le nombre d\'opération en parallèle vaut le nombre de coeur. \
        Pour permettre d\'utiliser ces nombreux threads, alors un ordonnanceur existe pour donner les tâches aux threads libres (context-switch). \
        Pour récupérer les informations des contextes, alors l\'ordonnanceur va dans le cache. Mais plus il y a de threads, plus il y a de cache. \
        Plus il y a de thread, plus il y a de la conccurrence, et donc plus de mémoire utilisée. Le context-switch coûte car le CPU ne fait rien et il attend. \
        De plus, quand un thread est débloqué, l\'ordonnanceur ne s\'en rend pas compte de suite',
        '',
        '<t>Approche réactive',
        'Ce qu\'on souhaite alors avoir c\'est de l\'asynchrone et du non bloquant, soit 1 thread = 1 event loop. \
        Il serait alors possible d\'executer le code par plusieurs thread et inversement.',
        'Pour faire cela en java, l\'API ReactiveStream avec un adaptateur est disponible depuis java 9 (2019).',
        'La conférence n\'aborde pas comment sont réalisées les implémentations, car des solutions existent déjà. \
        Par exemple : Reactor (2015), c\'est lui qui est utilisé par Spring',
        '',
        '<t>Solution',
        '<li>Ajout du starter web flux dans le pom <li>Passer du modèle synchrone en asynchrone',
        'Implémentation de Reactor et de ses objets manipulés : Mono (un seul objet) et Flux (liste)',
        'Possibilité d\'appeler des opérateurs pour aggréger les données, on peut tout faire avec des opérateurs, mais ça peut complexifier le code. \
        D\'autant plus que la gestion des non retour n\'est pas très bien géré, il faut gérer la nullité. ',
        'En Kotlin, il existe des coroutines qui permet de faire de l\'impératif et du séquentiel (ex: suspend devant la fonction et .awaitFirst())',
        'Mais il faut toujours réfléchir et se demander si c\'est bloquant ou non.',
        '<li>Persistance',
        'Compliqué car avant c\'était Hibernate/JPA/JDBC. Mais maintenant, il faut trouver un autre drivers : Reactive Mongo par exemple ou R2DBC. \
        Ce ne sont pas des ORM. Dans l\'exemple, on voit l\'utilisation de R2DBC. Par contre, la notion OneToMany ne fonctionne pas. \
        La solution est de créer son propre objet DTO avec un mapper pour récupérer les données.',
        'On garde à l\'idée que la communication avec une BDD relationnelle avec Spring Web flux reste assez compliquée.',
        '<li>Transaction',
        'Une transaction est en général sur un thread local. Alors en programmation reactive, cela ne peut pas fonctionner... \
        Mais le TransactionManager a une implémentation qui permet de faire la gestion des transactions depuis Spring 5.2. \
        @Transactional marche comme d\'habitude.',
        '<li>HTTP Request possible',
        '<li>Caching',
        'Avec la programmation reactive, le publisher n\'a pas d\'etat car il s\'agit d\'un stream. \
        Il faut alors spécifier la notion cache (cache dans le cache) pour enregistrer l\'objet et non le publisher. \
        De plus, il faut faire attention à la gestion des erreurs, car si une erreur est jetée, alors elle est peut se retrouver dans le cache.',
        '',
        '<t>Production',
        'Une fois mise en production, l\'application n\'allait pas beaucoup plus vite ... car même si on prend plus de requête en entrée, la BDD ne répondait pas assez rapidement.',
        'La solution aurait été donc de se concentrer autour de la BDD et non autour de la programmation réactive.',
        'Des tests de stress ont été fait pour savoir quand utiliser le framework',
        '<li> application 3 tiers avec DB relationnelle: NON <li> application avec beaucoup de compute : NON \
        <li> Agrégateur de service : calcul dans les autres services et on attend la réponse : OUI \
        (l\'implémentation en Spring MVC n\'est pas appropriée car le CPU et la mémoire travaillent trop peu, \
        et si le nombre de thread est augmenté, alors il risque de provoquer un OutOfMemory) \
        <li> Agrégateur de service en parallèle : OUI',
        '',
        'Conclusion',
        'Spring Web Flux n\'est pas sorti pour remplacer Spring Web MVC: si ça marche déjà en Spring Web MVC, alors il n\'y a pas besoin de migrer.',
        'La programmation reactive permet un gain de performance et un gain de mémoire. Mais ce style de programmation ne peut être utilisé dans tous les cas.',
        'Ce qu\'il faut retenir de la programmation avec Spring Web flux :',
        '<li> Syntaxe compliqué <li> Requête web service gérées <li> ORM pour les BDD relationnelle non existant <li> Test unitaire/intégration opérationnels <li> Cache compliqué',
        'La conférence est très intéressante et permet de nous mettre un point d\'attention sur les limites de la programmation reactive aujourd\'hui.'
        ],
        'Migrer de Spring MVC à Spring Web Flux',
        'assets/webflux.jpg'
      ),
      new Subsection(
        'Conférence "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !"',
        ['Conférence de l\'après-midi qui reprend avec "Rendez vos interfaces fiables en faisant aimer les tests à votre équipe !" \
         13h30-14h15 par Johnathan MEUNIER et Jean-Lou PIERME. L\'idée de la conférence est de montrer des tests front afin \
          de tester ce que l\'utilisateur fait et non ce que le code fait. Il faut avoir confiance aux tests pour être sûr que tout est OK. \
          Johnathan MEUNIER et Jean-Lou PIERME nous présentent alors leur REX.',
          '',
          '<t>Analyse d\'un projet',
          'Lors de l\'analyse d\'un projet, on se rend vite bien compte que même s\'il y a 100% coverage, cela ne veut pas forcément dire que l\'application est fiable. \
          Bien évidemment, cela rassure, donne un sentiment de sécurité. Mais cela est très facile d\'atteindre les 100% de coverage (si on oublie les assertions). \
          De plus, si toutes les méthodes exportées avec les paramètres sont testées unitairement, est-ce que cela peut vraiment dire que l\'application est fonctionnelle ? \
          Pas vraiment, car si nous regroupons certaines fonctionnalités dans un ensemble, cela risquerait de ne pas fonctionner pour l\'utilisateur. \
          Et parfois, des tests de méthodes trop techniques peuvent exister, mais cela n\'apportent rien à l\'utilisateur, on ne peut pas l\'utiliser comme documentation non plus.',
          '',
          '<t>Suggestions',
          '<li>Tester les features, pas l\'implémentation \
          <li>Rester testé à travers le temps, même en cas de refactoring : tests un enchainement d\'appels. On met des paramètres en entrée et on vérifie le résultat en sortie. \
          L\'implémentation peut changer tant que le résultat ne change pas \
          <li> Permettre la documentation <li>Permettre de vérifier l\'accessibilité \
          <li>Simplifier les pull request : en lisant le sénario de test on sait directement ce que le code doit faire \
          Si on teste tous les scénarios, on va arriver petit à petit au coverage à 100%. Cela permet aussi de détecter le code mort \
          Seules les dépendances externes sont mockées, et toutes les configurations sont exclues',
          '',
          '<t>Toutes les features doivent être testées',
          'Pour faire cela, utiliser du TDD que ce soit un bug ou une nouvelle feature est une bonne pratique. \
          Il permet permet de coder à travers des exemple, il est conseillé de le faire avec des exemples courts.',
          'Pour les projets legacy (sans tests), il faut faire attention au fait d\'ajouter trop de tests. ',
          'Pour réaliser des tests d\'intégration, il faut utiliser un langage naturel pour que tout le monde puisse comprendre le test : Guerkin et Cucumber.',
          'Avec un peu de pratique, Johnathan et Jean-Lou nous montre comment implémenter un test avec Guerkin',
          '',
          '<t>Limitations',
          '<li>Le développeurs doivent être confortable avec les tests unitaires et avec le projet pour pouvoir faire du TDD \
          <li>Besoin de comprendre fonctionnellement l\'ensemble du projet',
          '<li>Tests trop larges <li>Soucis d\'asynchronisme (cela peut être décourageant)',
          '',
          'Conclusion',
          'A travers cette présentation, Johnathan et Jean-Lou nous ont montré plusieurs points importants.',
          'Le coverage à 100% n\'est pas un bon indicateur. Cela doit être un but à atteindre, mais il n\'est pas utile de mal tester \
          toute l\'application pour atteindre cet objectif. Les tests doivent apporter un savoir fonctionnel, grâce à des exemples.',
          'En réalité, le TDD n\'est pas utilisé au pied de la lettre. Il a quelques limitation, alors il faut être pragmatique. ',
          'De plus, le code est jetable, alors que les tests sont pereins dans le temps. Il ne faut pas oublier de faire \
          du refactoring sur les tests.'
        ],
        '',
        ''
      ),
      new Subsection(
        'Visite des stands',
        ['Petit passage avec un Capgeminien chez Gatling. Avec l\'explication de leur solution gratuite/payante. \
        La discussion a été très enrichissante. Nous avons pu repartir avec un petit souvenir : un T-shirt.'],
        '',
        ''
      ),
      new Subsection(
        'Conférence "Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?"',
        ['"Architecture microservices et cohérence des données : mais on fait comment pour de vrai ?" 15h30-16h30 , fait par Jean-François JAMES. \
        Dans cette conférence, le découpage en micro service d\'une application monolithe a été évoqué. Une solution a \
        été abordée pour permettre de gérer au mieux les transactions en utilisant MicroProfile et le framework Eventuate. \
        Présentation très technique mais très enrichissante.',
        '',
        '<t>Cohérence des données avec des transactions',
        'Les Transactions ACID (Atomicity-Consistency-Isolation-Durability) locales - cas d\'un monolithe - permettent de \
        gérer facilement les transactions. Cela est très simple et a été suffisament éprouvé en production. \
        Lors de la tranformation en distribué avec un transaction manager qui assure le commit, \
        on garde la simplicité de développement. Mais alors, le protocole est très verbeux,  \
        le coût de l\'isolation est élevé et ce n\'est pas supporté par Kafka.',
        'Une des solutions est donc d\'apporter une transaction légère au dessus. \
        Ce qui permet de faire un couplage assez faible, mais cela reste compliqué de le faire à la main.',
        'C\'est à ce moment que LRA/SAGA rentrent en jeu. \
        Il existe 4 solutions pour faire cela : Microprofile, framework Eventuate, AxonIQ, SEATA.',
        '',
        '<t>MicroProfile : mode synchrone',
        'MicroProfile est un ensemble de spécifications qui facilite le développement d\'application cloud native, microservice. \
        L\'auteur de cette solution a été un livre : Chris Richarson - Microservices Pattern. \
        Pour gérer les transactions, il y a un LRA coordinateur. Celui-ci va intéragir avec des endpoints HTTP (synchrone). \
        Pour réaliser cela, il suffit de programmer avec des annotations sur des méthodes.',
        'Afin de retrouver toutes les participants à la transaction, un élément est ajouté dans le header HTTP : lraId. \
        Cela fait alors un couplage technique faible. \
        Charge au développeur d\'assurer la cohérence.',
        'Une démonstration a été réalisée avec Swagger et JAEGER pour vérifier les différents appels.',
        '',
        '<t>Eventuate SAGA : mode asynchrone',
        'Eventuate SAGA permet de gérer le mode asynchrone et se programme avec des orchestrations (DSL). \
        Dans l\'exemple, Kafka est utilisé, les services autour sont en Quarkus. \
        Tout est orchestré au niveau du code avec des step. Il y a deux flots d\'execution: un montant et un descendant. \
        Kafka ne gère pas la transaction, alors tout passe par une gestion d\'élément dans une table : c\'est le CDC qui gère cela via : ',
        '<li>SQL polling <li>Transaction log tailing',
        'Une démonstration a été réalisée avec Swagger et avec la visualisation des topics Kafka',
        '',
        '<t>Conclusion',
        'Des solutions très différentes techniquement permettent de gérer les transactions sur une architecture microservice. \
        Même si ça reste assez contraignant, cela est assez important ...\
        Parmi les solutions montrées, chacun a ses avantages et inconvénients : ',
        '<li>Microprofile LRA : Courbe d\'apprentissage, simplicité de codage, simplicité de configuration, \
        couplage fonctionnel (idLra), couplage technique fort dû à la synchronisation, pas très générique, assez limité \
        <li>Eventuate : code assez complexe, configuration partout, couplage fonctionnel assez lourd, couplage technique \
        car mode asynchrone, observabilité : CDC et Kafka montre tout, généricité : il fonctionne avec multi tout..'
       ],
        '',
        ''
      ),
      new Subsection(
        'Conférence "La fin des architectures en couches avec l’approche hexagonale"',
        ['Dernière conférence avec "La fin des architectures en couches avec l’approche hexagonale" de Benjamin LEGROS. \
        Conférence qui montrait les bienfaits de l\'architecture hexagonale par rapport à une architecture 3 couches. \
        Très intéressante',
        '',
        '<t>Mise en place d\'une solution en sortant d\'école',
        '<li>1. Modélisation <li>2. Persistance : Hibernate <li>3. Architecture 3 tiers : \
        couche présentation > couche services > couche persistances',
        'Mais suite à un changement d\'interface complète, alors les modifications sont plus lourdes. \
        Les dépendances entre les objets Hibernate font une dépendance cyclique suite aux modifications. \
        L\'idée alors est de faire des vues JSON pour récupérer que les éléments besoins. Mais attention aux limites : \
        les imbrications entre les objets dépendants (besoin d\'avoir une information d\'un objet dépendant). \
        Par contre, il y a des imports qui ne correspondent pas au métier. Et alors on se rend compte que l\'architecture \
        3 tiers n\'est pas la plus appropriée.',
        '',
        '<t>Architecture hexagonale',
        'Règle d\'or : "Je ne dois pas contraindre mon domaine avec des contraintes de couches".',
        'Ce qu\'on aimerait : avoir l\'objet avec ses dépendances, et des déclinaisons de cet objet. \
        Des mappers et des DTO sont alors créés. ',
        'Alistair Cockburn sort en 2005 un article sur Ports and Adapter (ancien nom pour Architecture hexagonale). \
        Dans l\'architecture hexagonale, le plus important c\'est le coeur, le domaine. \
        Celui-ci peut avoir plusieurs besoins qui seront reliés autour. \
        Mais il ne faut pas que les objets du coeur "fuitent" vers les besoins externes. \
        Pour cela, des "ports" sont créés (objets et interface) ainsi que des "adapters" (des implémentations et mappers). \
        Cela permet de décorréler les API et la persistance des données (séparation des responsabilités).',
        'Pour les tests, cela apporte de tester en isolation les fonctionnalités. ',
        '',
        '<t>DDD : Domain Driven Design',
        'L\'idée est d\'avoir un langage commun compréhensible par tous : Ubiquitous Language.',
        '<li>Objet : Le typage très fort permet de mieux comprendre les objets, et faire des objets de domaine qui ne sont pas liés à Hibernate. \
        <li>Service : certaines opérations ne doivent pas être réalisées sur un objet comme vérifier qu\'un prix est positif, \
        faire des opérations sur plusieurs objets ou alors avoir un état',
        '<li>CQRS : Command Query Responsibility Segregation - Faire la séparation entre les 2 types de flux : un flux sortant et un flux sortant',
        '<li>Event-sourcing et mutations unitaires',
        '',
        '<t>Solution en architecture hexagonale',
        '<li>1. Modéliser',
        '2 types de modélisation possibles : ',
        '<li>Réutilisation de modules : application, client, domain \
        <li>Séparation de dépendances : application, domain, dto, une couche par implémentation - un peu plus compliqué pour les tests unitaires',
        '<li>2. Domaine',
        'Le domaine doit contenir uniquement la logique métier, des classes métiers avec les librairies, ainsi que des \
        librairies de tests mais pas de gestion d\'Hibernate ! Il ne doit pas avoir de dépendances techniques.',
        '<li>3. Adapteurs',
        '<li>4. Application',
        'Les configurations sont retrouvés par implémentation. Et tout est lancé via l\'application.',
        'Toutes les implémentations sont retrouvées avec les mappers, les classes techniques et les comportements spécifiques.',
        '',
        '<t>Limites et cas d\'utilisation',
        '<li>Les limites: Objet à durer de vie courte, faire beaucoup de mapper, faire une démultiplication des classes, et un overhead executif',
        '<li>Les bénéfices : Flexibilité sur le domaine, lisibilité fonctionnelle, tests isolés des couches techniques, \
        gestion des contraintes de couches plus simple, meilleure intégration avec DDD et CQRS, flexibilité dans le cadre \
        des micro service.',
        'Il ne faut pas utiliser l\'architecture hexagonale si la logique fonctionnelle est peu complexe alors cela n\'a pas d\'intérêt, si les webapp sont de petites tailles, si la gestion des objets à durée de vie courte est mal géré, ou tout ce qui est scripting',
        'Mais c est ok pour agréger des objets complexes, s\'il y a beaucoup de ports, beaucoup d\'API, si on utilise de l\'event sourcing',
        '',
        '<t>Conclusion',
        'A travers cette présentation, Benjamin LEGROS nous a montré les différents avantages de l\'architecture hexagonale. \
         L\'architecture hexagonale est une autre vision d\'architecture qui permet de mettre en avant le domaine qui contient tout le code métier. \
         Cependant, si la logique fonctionnelle est trop peu complexe, il n\'est pas forcément utile de passer sous ce type d\'architecture : l\'architecture 3-tiers peut faire l\'affaire !'
        ],
        '',
        ''
      )
    ]);
    this.sections.push(sectionVendredi);

    const sectionContact : Section = new Section('Bilan', false, navBar4.idNavBar);
    sectionContact.addSubsections([
      new Subsection(
        'Mon bilan',
        ['Ces deux jours ont été une très belle expérience. Tous les développeurs devraient vivre ça au moins une fois dans leur vie.',
        'Ce fût très enrichissant, aussi bien en participant aux conférences mais également avec les différents échanges que j\'ai pu avoir.',
        'Je conseille vraiment l\'expérience ! '],
        'Bye',
        'assets/laptop-wave.png'
      )
    ]);
    this.sections.push(sectionContact);

  }

  onScroll() {
    this._progressBarVertical.sendRequestCalculProgressBarVertical();
  }

}
