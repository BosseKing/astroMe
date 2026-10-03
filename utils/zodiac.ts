import { Element, MonthDay, ZodiacSign } from '@/types/astrology';

/**
 * Données astrologiques des 12 signes solaires.
 *
 * Correspondances structurelles (élément, mode, polarité, planète maîtresse,
 * maison, partie du corps) : tradition astrologique occidentale classique.
 * Arcanes majeurs : attribution de la Golden Dawn.
 * Pierres, métaux, fleurs, jours et nombres : correspondances planétaires
 * traditionnelles.
 */
export const zodiacSigns: ZodiacSign[] = [
  {
    id: 'belier',
    name: 'Bélier',
    symbol: '♈',
    period: '21 mars – 19 avril',
    start: { day: 21, month: 3 },
    end: { day: 19, month: 4 },
    tagline: 'Le pionnier',
    motto: 'Je suis',
    element: 'Feu',
    modality: 'Cardinal',
    polarity: 'Yang',
    rulingPlanet: 'Mars',
    planetSymbol: '♂',
    house: 'Maison I',
    houseTheme: 'L’identité, le corps, les commencements',
    season: 'Équinoxe de printemps',
    oppositeSign: 'Balance',
    decans: [
      '1ᵉʳ décan · 21–31 mars · Mars — l’élan brut, l’instinct de conquête',
      '2ᵉ décan · 1–10 avril · Soleil — le panache, le besoin de rayonner',
      '3ᵉ décan · 11–19 avril · Vénus — l’ardeur qui séduit et s’attache',
    ],
    bodyPart: 'La tête, le visage, le cerveau',
    stone: 'Jaspe rouge & grenat',
    metal: 'Fer',
    flower: 'Chèvrefeuille',
    animal: 'Le bélier',
    luckyDay: 'Mardi',
    luckyNumbers: [1, 9, 19],
    luckyColor: 'Rouge écarlate',
    tarot: 'L’Empereur — IV',
    description:
      'Premier signe du zodiaque, le Bélier ouvre le cycle astrologique au moment exact où la sève remonte. Tout chez lui est commencement : il agit avant de réfléchir, dit avant de peser, part avant d’avoir la carte. Gouverné par Mars, il vit à l’instinct et transforme le désir en mouvement en une fraction de seconde. Sa force n’est pas l’endurance mais l’allumage : là où les autres hésitent, il a déjà franchi la ligne. Sa naïveté est réelle, et c’est elle qui le rend courageux — il ne calcule pas assez pour avoir peur. Le revers : il s’ennuie dès que l’aventure devient entretien, et laisse volontiers aux autres le soin de finir ce qu’il a lancé.',
    inLove:
      'Le Bélier tombe amoureux vite, fort et sans filet. Il aime la phase de conquête plus que tout et a besoin d’un partenaire qui garde une part d’inaccessible : un amour trop acquis s’éteint. Direct jusqu’à la brutalité, il ne joue pas de jeux — ce qu’il ressent, il le dit. En couple, il demande de la franchise, du désir affiché et de l’espace ; il supporte mal qu’on gère sa vie à sa place.',
    inWork:
      'Redoutable démarreur, il excelle partout où il faut ouvrir un terrain : création d’entreprise, vente, sport, urgence, compétition. Il travaille par poussées d’intensité et se fane dans la routine administrative. Meilleur seul ou à la tête d’une petite équipe qu’il entraîne, il obéit mal à une hiérarchie qu’il n’estime pas. Son vrai apprentissage professionnel : terminer.',
    inFriendship:
      'Ami loyal et bruyant, il défend les siens sans réfléchir et pardonne les disputes en une heure. Il déteste la mesquinerie et les non-dits : une explication franche vaut mille précautions. On peut compter sur lui dans une crise — beaucoup moins pour organiser l’anniversaire trois semaines à l’avance.',
    wellbeing:
      'Mars gouverne la tête : migraines, tensions de la mâchoire et insomnies d’excitation sont ses signaux classiques. Il lui faut une dépense physique régulière et intense, sans quoi l’énergie non brûlée se convertit en irritabilité. Sa faiblesse réelle : ignorer la fatigue jusqu’à l’épuisement brutal.',
    money:
      'Gagne facilement, dépense encore plus vite. Le Bélier achète sur l’impulsion et sous-estime le coût de ses projets. Il s’en sort par sa capacité à rebondir, pas par sa prudence : une épargne automatique, qu’il ne voit pas passer, est sa meilleure alliée.',
    shadow:
      'Confondre l’impatience avec le courage. Le Bélier fuit vers l’avant pour éviter de sentir ce qui, en lui, demanderait du temps et de la vulnérabilité.',
    qualities: ['Courageux', 'Franc', 'Initiateur', 'Enthousiaste', 'Généreux', 'Vif'],
    flaws: ['Impatient', 'Impulsif', 'Colérique', 'Égocentré', 'Imprudent'],
    celebrities: ['Lady Gaga', 'Vincent van Gogh', 'Emma Watson', 'Robert Downey Jr.'],
    bestMatches: [
      { sign: 'Lion', score: 95, note: 'Deux feux qui s’admirent au lieu de se concurrencer : passion, panache et fidélité.' },
      { sign: 'Sagittaire', score: 93, note: 'Même appétit de liberté ; aucun des deux ne cherche à retenir l’autre.' },
      { sign: 'Gémeaux', score: 87, note: 'L’Air attise le Feu : conversations vives, jeu de séduction permanent.' },
      { sign: 'Verseau', score: 84, note: 'Complicité de rebelles ; le Verseau donne du sens aux batailles du Bélier.' },
    ],
    challenges: [
      { sign: 'Cancer', score: 45, note: 'Le Bélier fonce, le Cancer se replie : la brusquerie de l’un blesse l’autre.' },
      { sign: 'Capricorne', score: 42, note: 'Deux Cardinaux qui veulent diriger — l’un par l’élan, l’autre par le contrôle.' },
      { sign: 'Balance', score: 58, note: 'Signe opposé : attraction magnétique, mais le tact de la Balance se heurte à l’absence de filtre du Bélier.' },
    ],
    color: '#FF5F4B',
    gradient: ['#8E1408', '#FF5F4B', '#FFA26B'],
  },
  {
    id: 'taureau',
    name: 'Taureau',
    symbol: '♉',
    period: '20 avril – 20 mai',
    start: { day: 20, month: 4 },
    end: { day: 20, month: 5 },
    tagline: 'Le bâtisseur',
    motto: 'J’ai',
    element: 'Terre',
    modality: 'Fixe',
    polarity: 'Yin',
    rulingPlanet: 'Vénus',
    planetSymbol: '♀',
    house: 'Maison II',
    houseTheme: 'Les ressources, la valeur, la sécurité',
    season: 'Plein printemps',
    oppositeSign: 'Scorpion',
    decans: [
      '1ᵉʳ décan · 20–30 avril · Vénus — la douceur et le goût du beau',
      '2ᵉ décan · 1–10 mai · Mercure — le sens pratique et le commerce',
      '3ᵉ décan · 11–20 mai · Saturne — la patience et la solidité',
    ],
    bodyPart: 'Le cou, la gorge, la nuque',
    stone: 'Émeraude & quartz rose',
    metal: 'Cuivre',
    flower: 'Rose & coquelicot',
    animal: 'Le taureau',
    luckyDay: 'Vendredi',
    luckyNumbers: [2, 6, 24],
    luckyColor: 'Vert profond',
    tarot: 'Le Pape — V',
    description:
      'Le Taureau est le signe de l’incarnation : ce qui n’est ni concret, ni durable, ni agréable au toucher ne l’intéresse pas longtemps. Gouverné par Vénus dans sa version terrestre, il vit par les sens — la nourriture, la matière, la peau, la lenteur. Sa grande affaire est la sécurité : construire un socle que rien ne fasse bouger, puis y installer le confort. Sa force est une constance impressionnante ; il finit ce qu’il commence, année après année, sans avoir besoin d’applaudissements. Sa limite tient au même trait : une fois installé, il assimile tout changement à une menace, et sa résistance passive vient à bout de n’importe quelle volonté.',
    inLove:
      'Le Taureau aime lentement et longtemps. Il ne promet rien qu’il ne tienne, et sa manière de dire l’amour est physique et concrète : la présence, le repas préparé, la main sur la nuque. Il lui faut du temps pour s’ouvrir, puis il s’attache profondément — parfois jusqu’à la possessivité. Rien ne le blesse comme l’instabilité ou le doute entretenu.',
    inWork:
      'Fiable au-delà de la moyenne, il tient les postes où la durée compte : finance, artisanat, immobilier, gastronomie, métiers d’art, agriculture. Il avance sans hâte mais ne lâche jamais, et son jugement matériel est excellent. Il négocie bien parce qu’il sait attendre. En revanche, il déteste les réorganisations permanentes et les décideurs qui changent d’avis.',
    inFriendship:
      'Amitiés de vingt ans, peu nombreuses et solides. Le Taureau est celui qu’on appelle pour une aide réelle — un déménagement, de l’argent, un canapé. Il n’a aucun goût pour les cercles mondains et repère très vite la fausseté.',
    wellbeing:
      'Vénus régit la gorge : angines, extinctions de voix et tensions cervicales le guettent, surtout quand il tait ce qu’il devrait dire. Son autre point sensible est le rapport à la nourriture, refuge de ses contrariétés. Le contact avec la nature, la marche et le massage le remettent d’aplomb mieux que n’importe quel discours.',
    money:
      'Le meilleur gestionnaire du zodiaque. Il épargne par instinct, investit dans le tangible et déteste la dette. Son risque n’est pas la ruine mais l’avarice : à force de sécuriser, il oublie de vivre de ce qu’il a accumulé.',
    shadow:
      'Prendre l’immobilité pour de la stabilité. Le Taureau peut rester des années dans une situation morte parce que la quitter coûterait un inconfort passager.',
    qualities: ['Fiable', 'Patient', 'Loyal', 'Sensuel', 'Persévérant', 'Apaisant'],
    flaws: ['Têtu', 'Possessif', 'Rigide', 'Matérialiste', 'Rancunier'],
    celebrities: ['Adele', 'David Beckham', 'Audrey Hepburn', 'Dwayne Johnson'],
    bestMatches: [
      { sign: 'Vierge', score: 95, note: 'Deux Terres qui parlent la même langue : du concret, de la durée, aucun drame inutile.' },
      { sign: 'Capricorne', score: 93, note: 'Construction commune et confiance qui se prouve par les actes.' },
      { sign: 'Cancer', score: 90, note: 'Le foyer comme projet de vie : tendresse, sécurité et fidélité réciproques.' },
      { sign: 'Poissons', score: 86, note: 'Le Taureau ancre les rêves du Poissons, qui adoucit sa rigidité.' },
    ],
    challenges: [
      { sign: 'Verseau', score: 40, note: 'Deux Fixes opposés : l’un veut tout garder, l’autre tout réinventer.' },
      { sign: 'Lion', score: 48, note: 'Deux orgueils immobiles ; personne ne cède et la dispute s’installe pour durer.' },
      { sign: 'Scorpion', score: 60, note: 'Signe opposé : attirance intense, mais la jalousie de l’un réveille la possessivité de l’autre.' },
    ],
    color: '#3FBF8F',
    gradient: ['#0C4A3A', '#3FBF8F', '#9BE8C4'],
  },
  {
    id: 'gemeaux',
    name: 'Gémeaux',
    symbol: '♊',
    period: '21 mai – 20 juin',
    start: { day: 21, month: 5 },
    end: { day: 20, month: 6 },
    tagline: 'Le messager',
    motto: 'Je pense',
    element: 'Air',
    modality: 'Mutable',
    polarity: 'Yang',
    rulingPlanet: 'Mercure',
    planetSymbol: '☿',
    house: 'Maison III',
    houseTheme: 'La parole, l’apprentissage, la fratrie',
    season: 'Fin du printemps',
    oppositeSign: 'Sagittaire',
    decans: [
      '1ᵉʳ décan · 21–31 mai · Mercure — la curiosité pure, l’esprit rapide',
      '2ᵉ décan · 1–10 juin · Vénus — le charme et l’art de plaire',
      '3ᵉ décan · 11–20 juin · Saturne — la pensée qui se structure',
    ],
    bodyPart: 'Les bras, les mains, les poumons',
    stone: 'Agate & citrine',
    metal: 'Mercure & laiton',
    flower: 'Muguet & lavande',
    animal: 'Le renard',
    luckyDay: 'Mercredi',
    luckyNumbers: [3, 5, 14],
    luckyColor: 'Jaune clair',
    tarot: 'Les Amoureux — VI',
    description:
      'Les Gémeaux sont le signe de la circulation : des idées, des mots, des gens. Gouvernés par Mercure, ils comprennent vite, apprennent vite et s’ennuient encore plus vite. Leur intelligence est associative plutôt que profonde — ils relient ce que personne ne pensait à relier, et cette agilité vaut mieux, dans bien des situations, qu’un long savoir. Le signe est double par nature : deux versions coexistent en eux et ils passent de l’une à l’autre sans y voir de contradiction. Ce n’est pas de la duplicité mais une pluralité assumée, que les signes fixes vivent souvent comme un manque de fiabilité.',
    inLove:
      'Les Gémeaux séduisent par la parole ; l’esprit est leur zone érogène. Ils ont besoin d’un partenaire qui les surprenne intellectuellement, sinon l’attention se détourne. Ils fuient les scènes lourdes, les silences chargés et les déclarations d’appartenance. On les garde en restant vivant soi-même, jamais en resserrant l’étau.',
    inWork:
      'Faits pour tout ce qui passe par le langage : journalisme, enseignement, commerce, communication, écriture, traduction, tech. Ils apprennent un métier en un temps record et mènent plusieurs projets de front — ce qui est à la fois leur talent et leur piège. Ils tiennent mal les tâches longues et solitaires.',
    inFriendship:
      'Cercle immense et hétéroclite : les Gémeaux connaissent tout le monde. Leur compagnie est délicieuse — drôle, informée, jamais moralisatrice. Le reproche qu’on leur fait le plus souvent est la disponibilité intermittente : très présents, puis introuvables trois mois.',
    wellbeing:
      'Mercure gouverne les poumons et le système nerveux : bronches sensibles, mains agitées, sommeil haché par un mental qui ne s’éteint pas. Leur hygiène de vie est d’abord mentale — écrire, parler, souffler. La respiration consciente et la marche font pour eux ce que le sport intensif fait pour d’autres.',
    money:
      'Rapport souple, parfois trop : plusieurs sources de revenus, des dépenses éparpillées, peu de suivi. Ils gagnent bien par leur polyvalence mais perdent au manque de vision longue. Automatiser l’épargne et simplifier les comptes change tout.',
    shadow:
      'Parler pour ne pas ressentir. L’humour et l’analyse deviennent une manière élégante de ne jamais descendre dans l’émotion.',
    qualities: ['Vif', 'Curieux', 'Adaptable', 'Drôle', 'Sociable', 'Ingénieux'],
    flaws: ['Dispersé', 'Inconstant', 'Nerveux', 'Superficiel', 'Fuyant'],
    celebrities: ['Marilyn Monroe', 'Angelina Jolie', 'Paul McCartney', 'Naomi Campbell'],
    bestMatches: [
      { sign: 'Balance', score: 94, note: 'Deux Airs raffinés : conversation infinie, légèreté partagée, zéro lourdeur.' },
      { sign: 'Verseau', score: 92, note: 'Complicité mentale rare ; chacun laisse à l’autre toute sa liberté.' },
      { sign: 'Bélier', score: 87, note: 'Le Gémeaux imagine, le Bélier exécute : un duo qui ne s’ennuie jamais.' },
      { sign: 'Lion', score: 85, note: 'Le Lion adore l’esprit du Gémeaux, qui adore un public aussi chaleureux.' },
    ],
    challenges: [
      { sign: 'Vierge', score: 47, note: 'Même planète, usages opposés : l’un improvise, l’autre exige de la méthode.' },
      { sign: 'Poissons', score: 44, note: 'Le Gémeaux rationalise ce que le Poissons ressent ; chacun se sent incompris.' },
      { sign: 'Sagittaire', score: 62, note: 'Signe opposé : mêmes envies d’ailleurs, mais l’un butine et l’autre veut du sens.' },
    ],
    color: '#7C9BFF',
    gradient: ['#2C2F87', '#7C9BFF', '#C7DBFF'],
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    period: '21 juin – 22 juillet',
    start: { day: 21, month: 6 },
    end: { day: 22, month: 7 },
    tagline: 'Le gardien',
    motto: 'Je ressens',
    element: 'Eau',
    modality: 'Cardinal',
    polarity: 'Yin',
    rulingPlanet: 'Lune',
    planetSymbol: '☽',
    house: 'Maison IV',
    houseTheme: 'Le foyer, les racines, la famille',
    season: 'Solstice d’été',
    oppositeSign: 'Capricorne',
    decans: [
      '1ᵉʳ décan · 21 juin–1ᵉʳ juillet · Lune — la sensibilité à fleur de peau',
      '2ᵉ décan · 2–12 juillet · Mars & Pluton — l’émotion qui devient force',
      '3ᵉ décan · 13–22 juillet · Jupiter & Neptune — la compassion élargie',
    ],
    bodyPart: 'La poitrine, l’estomac, les seins',
    stone: 'Pierre de lune & perle',
    metal: 'Argent',
    flower: 'Nénuphar & jasmin blanc',
    animal: 'Le crabe',
    luckyDay: 'Lundi',
    luckyNumbers: [2, 7, 11],
    luckyColor: 'Blanc nacré',
    tarot: 'Le Chariot — VII',
    description:
      'Le Cancer est le signe de la mémoire affective. Gouverné par la Lune, il enregistre les atmosphères avant les mots et sait, en entrant dans une pièce, si quelque chose ne va pas. Sa carapace n’est pas de la froideur mais une protection nécessaire : dessous, tout le touche. Signe cardinal, il ne subit pas — il construit activement un territoire, un foyer, un clan, et déploie une ténacité que l’on sous-estime toujours parce qu’elle avance de biais. Son passé n’est jamais loin ; il tire de lui sa profondeur, et aussi ses rancunes, qu’il conserve avec une précision troublante.',
    inLove:
      'Le Cancer aime en prenant soin. Il devine les besoins avant qu’ils soient formulés et se donne entièrement, à condition de se sentir en sécurité. Il teste beaucoup avant de s’ouvrir, se referme au premier signe de rejet et exprime rarement une blessure directement — il se retire. Avec lui, la constance vaut mieux que les grandes déclarations.',
    inWork:
      'Excellent dans tout ce qui touche au soin, à la transmission et au foyer : santé, éducation, immobilier, restauration, ressources humaines, métiers de l’enfance. Il crée des équipes où l’on se sent bien et se souvient de tout. Il supporte mal les environnements agressifs et les critiques publiques, qu’il vit comme des attaques personnelles.',
    inFriendship:
      'Ami maternel, nourricier et fidèle jusqu’à l’excès. Il ouvre sa maison, écoute vraiment, se souvient des dates. En retour il attend une loyauté sans faille : une trahison ne se répare pas facilement chez lui, même après des années.',
    wellbeing:
      'La Lune gouverne l’estomac : le Cancer somatise ses émotions dans la digestion. Sa santé suit ses cycles affectifs et lunaires, avec des périodes de repli qu’il vaut mieux respecter que combattre. L’eau, le sommeil et un intérieur apaisant lui font plus de bien que n’importe quelle discipline.',
    money:
      'Économe par besoin de sécurité, il constitue des réserves sans le crier. Il dépense volontiers pour la maison et pour les siens, beaucoup moins pour lui-même. Son point faible : les décisions financières prises sous le coup d’une inquiétude.',
    shadow:
      'Confondre protéger et retenir. À force de se rendre indispensable, le Cancer enferme parfois ceux qu’il aime — et se plaint ensuite de tout porter.',
    qualities: ['Empathique', 'Protecteur', 'Intuitif', 'Loyal', 'Tenace', 'Attentionné'],
    flaws: ['Susceptible', 'Rancunier', 'Lunatique', 'Envahissant', 'Fuyant le conflit'],
    celebrities: ['Frida Kahlo', 'Tom Hanks', 'Ariana Grande', 'Nelson Mandela'],
    bestMatches: [
      { sign: 'Scorpion', score: 95, note: 'Deux Eaux qui se comprennent sans parler : profondeur, intensité, loyauté absolue.' },
      { sign: 'Poissons', score: 93, note: 'Tendresse et intuition partagées ; le couple le plus doux du zodiaque.' },
      { sign: 'Taureau', score: 90, note: 'Sécurité, sensualité et goût commun du foyer.' },
      { sign: 'Vierge', score: 85, note: 'La Vierge organise ce que le Cancer ressent : un tandem qui tient dans la durée.' },
    ],
    challenges: [
      { sign: 'Bélier', score: 45, note: 'Le rythme du Bélier fait l’effet d’une porte qui claque à chaque conversation.' },
      { sign: 'Balance', score: 48, note: 'La Balance veut de la légèreté, le Cancer de la profondeur : chacun trouve l’autre injuste.' },
      { sign: 'Capricorne', score: 63, note: 'Signe opposé : complémentarité réelle entre foyer et ambition, à condition de traduire.' },
    ],
    color: '#8FD6F0',
    gradient: ['#1B3A6B', '#4A9FD4', '#A8DDF2'],
  },
  {
    id: 'lion',
    name: 'Lion',
    symbol: '♌',
    period: '23 juillet – 22 août',
    start: { day: 23, month: 7 },
    end: { day: 22, month: 8 },
    tagline: 'Le souverain',
    motto: 'Je veux',
    element: 'Feu',
    modality: 'Fixe',
    polarity: 'Yang',
    rulingPlanet: 'Soleil',
    planetSymbol: '☉',
    house: 'Maison V',
    houseTheme: 'La création, le jeu, l’amour, les enfants',
    season: 'Plein été',
    oppositeSign: 'Verseau',
    decans: [
      '1ᵉʳ décan · 23 juillet–2 août · Soleil — le rayonnement pur',
      '2ᵉ décan · 3–12 août · Jupiter — la générosité et l’ampleur',
      '3ᵉ décan · 13–22 août · Mars — l’autorité et le courage',
    ],
    bodyPart: 'Le cœur, le dos, la colonne vertébrale',
    stone: 'Rubis & œil de tigre',
    metal: 'Or',
    flower: 'Tournesol & souci',
    animal: 'Le lion',
    luckyDay: 'Dimanche',
    luckyNumbers: [1, 4, 19],
    luckyColor: 'Or solaire',
    tarot: 'La Force — XI',
    description:
      'Le Lion est le seul signe gouverné par le Soleil, et cela s’entend dans tout ce qu’il fait : il ne tourne pas autour d’un centre, il est le centre. Sa générosité est réelle et spectaculaire — il donne beaucoup, protège les siens et met sa fierté à ne jamais être petit. Signe fixe de Feu, il tient sa flamme dans la durée là où le Bélier s’allume et s’éteint : une fois engagé, il reste. Son besoin de reconnaissance n’est pas de la vanité mais un carburant : privé de regard, un Lion s’éteint réellement. Sa noblesse et son orgueil sont la même qualité vue sous deux angles.',
    inLove:
      'Le Lion aime grand : gestes larges, déclarations franches, loyauté totale. Il veut être choisi visiblement et supporte très mal l’indifférence ou l’humiliation, même légère, même en public. Il donne énormément et attend qu’on le lui rende en admiration sincère. Avec lui, la tiédeur tue plus vite que le conflit.',
    inWork:
      'Né pour être vu et pour diriger : scène, direction, création, enseignement, luxe, entrepreneuriat, politique. Il fédère par le charisme plus que par la méthode et sait faire grandir ceux qu’il choisit. Il travaille mal sous un chef qu’il ne respecte pas et déteste les tâches anonymes.',
    inFriendship:
      'Ami solaire et fidèle, il organise, invite, paie l’addition et défend ses proches en public. On lui pardonne son côté théâtral parce que sa chaleur est authentique. Ce qu’il ne pardonne pas, lui : être minimisé ou trahi devant témoins.',
    wellbeing:
      'Le Soleil régit le cœur et le dos : palpitations liées au stress, tensions dorsales, coups de fatigue spectaculaires après avoir trop donné. Le Lion a besoin de créer et de jouer autant que de dormir ; une vie sans expression le rend malade avant de le rendre triste.',
    money:
      'Dépensier magnifique. Il achète de la qualité, du beau, du visible, et n’aime pas compter devant les autres. Sa capacité à gagner est forte, sa capacité à conserver beaucoup moins. Il gère mieux quand quelqu’un d’autre tient les comptes.',
    shadow:
      'Avoir besoin d’un public pour exister. Le Lion peut jouer un rôle si longtemps qu’il ne sait plus qui il est quand la salle est vide.',
    qualities: ['Généreux', 'Charismatique', 'Loyal', 'Créatif', 'Courageux', 'Protecteur'],
    flaws: ['Orgueilleux', 'Dominateur', 'Susceptible', 'Théâtral', 'Autocentré'],
    celebrities: ['Barack Obama', 'Madonna', 'Coco Chanel', 'Jennifer Lopez'],
    bestMatches: [
      { sign: 'Bélier', score: 95, note: 'Passion, franchise et admiration mutuelle, sans lutte de pouvoir.' },
      { sign: 'Sagittaire', score: 93, note: 'Deux Feux joyeux : voyages, projets, rires et confiance.' },
      { sign: 'Balance', score: 89, note: 'La Balance offre l’élégance et l’attention dont le Lion se nourrit.' },
      { sign: 'Gémeaux', score: 85, note: 'Le Gémeaux amuse et stimule ; le Lion offre la chaleur qui manque.' },
    ],
    challenges: [
      { sign: 'Scorpion', score: 43, note: 'Deux Fixes de pouvoir : l’un règne au grand jour, l’autre en sous-main.' },
      { sign: 'Taureau', score: 48, note: 'Deux entêtements de granit ; aucun ne fait le premier pas.' },
      { sign: 'Verseau', score: 61, note: 'Signe opposé : le Verseau refuse par principe l’adoration que le Lion réclame.' },
    ],
    color: '#FFB03A',
    gradient: ['#7A3C00', '#FFB03A', '#FFE7A8'],
  },
  {
    id: 'vierge',
    name: 'Vierge',
    symbol: '♍',
    period: '23 août – 22 septembre',
    start: { day: 23, month: 8 },
    end: { day: 22, month: 9 },
    tagline: 'L’artisan',
    motto: 'J’analyse',
    element: 'Terre',
    modality: 'Mutable',
    polarity: 'Yin',
    rulingPlanet: 'Mercure',
    planetSymbol: '☿',
    house: 'Maison VI',
    houseTheme: 'Le travail, la santé, le quotidien, le service',
    season: 'Fin de l’été, moisson',
    oppositeSign: 'Poissons',
    decans: [
      '1ᵉʳ décan · 23 août–2 septembre · Mercure — l’analyse fine',
      '2ᵉ décan · 3–12 septembre · Saturne — la rigueur et l’exigence',
      '3ᵉ décan · 13–22 septembre · Vénus — le goût du travail bien fait',
    ],
    bodyPart: 'Les intestins, le système digestif, le ventre',
    stone: 'Péridot & saphir',
    metal: 'Nickel & mercure',
    flower: 'Myosotis & lavande',
    animal: 'L’abeille',
    luckyDay: 'Mercredi',
    luckyNumbers: [5, 6, 23],
    luckyColor: 'Beige & vert sauge',
    tarot: 'L’Ermite — IX',
    description:
      'La Vierge est le signe du travail bien fait. Mercure la rend analytique, mais en Terre : son intelligence ne sert pas la conversation, elle sert le réel — améliorer, réparer, affiner, rendre utile. Elle voit le détail qui cloche avant tout le monde, ce qui la rend précieuse et parfois insupportable. Son moteur profond est le service : elle se sent à sa place quand elle est utile à quelqu’un, et coupable quand elle ne l’est pas. Derrière sa réserve se cache une exigence dirigée d’abord contre elle-même ; l’auto-critique est son vrai adversaire, pas les autres.',
    inLove:
      'La Vierge aime discrètement et concrètement : elle s’occupe de vous, remarque votre fatigue, règle les problèmes avant que vous les voyiez. Elle se méfie des grandes déclarations et met du temps à faire confiance. Une fois engagée, sa fidélité est totale. Ce qui l’abîme : le désordre affectif, l’imprévisibilité, et sa propre manie de tout analyser plutôt que de se laisser aller.',
    inWork:
      'La collaboratrice dont toute équipe rêve : médecine, recherche, édition, comptabilité, artisanat, nutrition, qualité, ingénierie. Elle repère les failles d’un système en une journée et propose une correction dans la foulée. Elle a besoin de standards clairs et souffre dans le flou ou l’à-peu-près.',
    inFriendship:
      'Amie de confiance, présente dans les moments concrets — un dossier à remplir, une décision à peser, un déménagement. Elle ne fait pas de sentiment mais elle est là. Son franc-parler, très direct, peut être vécu comme de la critique alors qu’il s’agit d’attention.',
    wellbeing:
      'La Vierge somatise dans le ventre : intestins fragiles, tensions liées au stress, sensibilité alimentaire réelle. Elle est souvent la mieux informée en santé et la plus dure avec elle-même. Ce qui l’apaise n’est pas une nouvelle discipline mais l’autorisation d’être imparfaite.',
    money:
      'Prudente, méthodique, excellente en budget. Elle compare, planifie, garde une réserve et déteste devoir de l’argent. Son travers : se priver du plaisir immédiat au nom d’une sécurité qui n’est jamais assez.',
    shadow:
      'Croire que si tout est parfaitement en ordre, rien ne pourra faire mal. Le contrôle devient la manière d’éviter l’imprévu et donc la vie.',
    qualities: ['Méthodique', 'Fiable', 'Serviable', 'Lucide', 'Travailleuse', 'Discrète'],
    flaws: ['Critique', 'Anxieuse', 'Perfectionniste', 'Rigide', 'Pessimiste'],
    celebrities: ['Beyoncé', 'Keanu Reeves', 'Mère Teresa', 'Zendaya'],
    bestMatches: [
      { sign: 'Taureau', score: 95, note: 'Terre et Terre : calme, fidélité, projets concrets menés à bout.' },
      { sign: 'Capricorne', score: 93, note: 'Même sérieux, mêmes valeurs de travail ; une équipe redoutable à deux.' },
      { sign: 'Cancer', score: 88, note: 'Le Cancer réchauffe, la Vierge sécurise : un foyer stable et tendre.' },
      { sign: 'Scorpion', score: 86, note: 'Deux esprits qui vont au fond des choses et détestent le superficiel.' },
    ],
    challenges: [
      { sign: 'Gémeaux', score: 47, note: 'Le même Mercure, deux vitesses : l’un s’éparpille, l’autre veut du fini.' },
      { sign: 'Sagittaire', score: 45, note: 'Le désordre joyeux du Sagittaire épuise le besoin d’ordre de la Vierge.' },
      { sign: 'Poissons', score: 64, note: 'Signe opposé : le flou du Poissons irrite, mais lui seul apprend à la Vierge à lâcher.' },
    ],
    color: '#A8C99A',
    gradient: ['#2F4A2C', '#7FA96E', '#CFE4BE'],
  },
  {
    id: 'balance',
    name: 'Balance',
    symbol: '♎',
    period: '23 septembre – 22 octobre',
    start: { day: 23, month: 9 },
    end: { day: 22, month: 10 },
    tagline: 'L’esthète',
    motto: 'Nous sommes',
    element: 'Air',
    modality: 'Cardinal',
    polarity: 'Yang',
    rulingPlanet: 'Vénus',
    planetSymbol: '♀',
    house: 'Maison VII',
    houseTheme: 'Le couple, les contrats, l’autre',
    season: 'Équinoxe d’automne',
    oppositeSign: 'Bélier',
    decans: [
      '1ᵉʳ décan · 23 septembre–2 octobre · Vénus — le charme et l’harmonie',
      '2ᵉ décan · 3–12 octobre · Saturne & Uranus — la justice et l’indépendance',
      '3ᵉ décan · 13–22 octobre · Mercure — l’art de la négociation',
    ],
    bodyPart: 'Les reins, les lombaires, la peau',
    stone: 'Opale & lapis-lazuli',
    metal: 'Cuivre & bronze',
    flower: 'Rose & hortensia',
    animal: 'La colombe',
    luckyDay: 'Vendredi',
    luckyNumbers: [6, 9, 15],
    luckyColor: 'Rose poudré & bleu ciel',
    tarot: 'La Justice — VIII',
    description:
      'La Balance est le signe de la relation. Sept signes après le Bélier, elle découvre qu’on n’existe pas seul : tout, chez elle, passe par l’autre — le goût, la décision, l’identité même. Gouvernée par Vénus dans sa version aérienne, elle cherche l’harmonie, la juste mesure et la beauté, et supporte physiquement mal la laideur et le conflit. Son indécision légendaire n’est pas de la mollesse : c’est un esprit qui voit sincèrement les deux côtés et refuse de trancher injustement. Signe cardinal, elle sait pourtant décider vite quand il s’agit d’équité ; c’est sur elle-même qu’elle hésite.',
    inLove:
      'La Balance est faite pour le couple et le sait. Elle séduit avec une élégance naturelle, crée une atmosphère où tout devient plus doux et se donne beaucoup de mal pour éviter les heurts. Son piège est de s’effacer : à force de s’adapter, elle finit par ne plus savoir ce qu’elle veut, puis part d’un coup. Elle a besoin d’un partenaire qui la pousse à dire non.',
    inWork:
      'Excellente là où il faut arbitrer, relier ou embellir : droit, diplomatie, design, mode, ressources humaines, négociation, art. Elle apaise les équipes et obtient des accords que personne n’espérait. Elle souffre dans les environnements brutaux et fuit les décisions solitaires impopulaires.',
    inFriendship:
      'Amie charmante, attentive, présente dans les sorties comme dans les crises. Elle sait écouter les deux versions d’une dispute et rétablir la paix. On lui reproche parfois de ménager tout le monde et de ne jamais prendre parti.',
    wellbeing:
      'Vénus régit les reins et la peau : rétention, lombaires fragiles, réactions cutanées au stress. La Balance se déséquilibre quand son environnement est laid ou tendu — l’esthétique n’est pas un luxe pour elle, c’est une hygiène. Le repos, le beau et l’air lui rendent leur assise.',
    money:
      'Rapport élégant et un peu flottant : elle aime la qualité, cède au coup de cœur esthétique et sous-estime les petites dépenses. Elle négocie très bien pour les autres, beaucoup moins pour elle-même.',
    shadow:
      'Confondre la paix et l’évitement. En refusant le conflit, la Balance laisse s’accumuler des rancœurs qui explosent d’un seul coup, souvent au moment du départ.',
    qualities: ['Diplomate', 'Élégante', 'Juste', 'Sociable', 'Conciliante', 'Raffinée'],
    flaws: ['Indécise', 'Dépendante', 'Fuyante', 'Complaisante', 'Superficielle'],
    celebrities: ['Kim Kardashian', 'Will Smith', 'Serena Williams', 'John Lennon'],
    bestMatches: [
      { sign: 'Gémeaux', score: 94, note: 'Deux Airs complices : légèreté, curiosité, conversations sans fin.' },
      { sign: 'Verseau', score: 92, note: 'Respect mutuel de la liberté et goût partagé des idées justes.' },
      { sign: 'Lion', score: 89, note: 'Le Lion décide, la Balance embellit : un couple qu’on remarque.' },
      { sign: 'Sagittaire', score: 86, note: 'Voyages, culture et optimisme ; le Sagittaire l’aide à trancher.' },
    ],
    challenges: [
      { sign: 'Cancer', score: 48, note: 'Le besoin de profondeur du Cancer se heurte au besoin de légèreté de la Balance.' },
      { sign: 'Capricorne', score: 46, note: 'Deux Cardinaux : l’un veut plaire, l’autre veut avancer — le rythme casse.' },
      { sign: 'Bélier', score: 58, note: 'Signe opposé : forte attirance, mais la brusquerie du Bélier heurte son besoin d’harmonie.' },
    ],
    color: '#F0A6C0',
    gradient: ['#5C2545', '#E48FB1', '#FBD3E1'],
  },
  {
    id: 'scorpion',
    name: 'Scorpion',
    symbol: '♏',
    period: '23 octobre – 21 novembre',
    start: { day: 23, month: 10 },
    end: { day: 21, month: 11 },
    tagline: 'L’alchimiste',
    motto: 'Je désire',
    element: 'Eau',
    modality: 'Fixe',
    polarity: 'Yin',
    rulingPlanet: 'Pluton & Mars',
    planetSymbol: '♇',
    house: 'Maison VIII',
    houseTheme: 'La transformation, l’intimité, les crises',
    season: 'Plein automne',
    oppositeSign: 'Taureau',
    decans: [
      '1ᵉʳ décan · 23 octobre–1ᵉʳ novembre · Mars & Pluton — l’intensité brute',
      '2ᵉ décan · 2–11 novembre · Neptune & Jupiter — la profondeur mystique',
      '3ᵉ décan · 12–21 novembre · Lune — l’émotion sous la carapace',
    ],
    bodyPart: 'Le bassin, les organes génitaux, l’élimination',
    stone: 'Obsidienne & topaze',
    metal: 'Fer & acier',
    flower: 'Chrysanthème & pivoine noire',
    animal: 'Le scorpion',
    luckyDay: 'Mardi',
    luckyNumbers: [8, 9, 18],
    luckyColor: 'Noir & pourpre',
    tarot: 'La Mort — XIII',
    description:
      'Le Scorpion est le signe de ce qui se passe sous la surface. Rien ne l’intéresse à demi : il veut le fond, le vrai, ce qu’on ne dit pas — et il le trouve, avec une lucidité qui met mal à l’aise. Gouverné par Pluton (et Mars en maîtrise traditionnelle), il traverse dans sa vie plusieurs morts symboliques dont il ressort chaque fois transformé, ce que peu de signes savent faire. Sa force est une puissance de volonté quasi inépuisable ; son danger, l’absolutisme. Il ne connaît pas la demi-mesure : l’attachement devient fusion, la déception devient rupture définitive, et le pardon lui coûte un travail immense.',
    inLove:
      'Amour total ou rien. Le Scorpion s’engage en profondeur et exige la même vérité en retour ; le mensonge, même minuscule, détruit tout. Magnétique et jaloux, il perçoit les changements d’humeur avant qu’ils s’expriment. Quand il aime, il protège férocement ; quand il se sent trahi, il disparaît sans négocier.',
    inWork:
      'Fait pour les métiers d’enquête et de crise : psychologie, chirurgie, finance, investigation, sécurité, recherche, restructuration. Il travaille avec une concentration rare et supporte des tensions qui feraient céder les autres. Il refuse la superficialité et déteste rendre des comptes à quelqu’un qu’il juge médiocre.',
    inFriendship:
      'Peu d’amis, mais des amis à vie. Le Scorpion garde les secrets mieux que quiconque et se rend disponible dans les vrais naufrages, quand tous les autres ont fui. En contrepartie, il teste, il observe longtemps, et une trahison efface tout.',
    wellbeing:
      'Signe des cycles d’élimination : son corps réclame de purger ce qui a été retenu. Les émotions gardées à l’intérieur deviennent tension chronique. Le sport intense, l’eau et la parole thérapeutique sont pour lui des soins, pas des options.',
    money:
      'Stratège financier redoutable, il pense en pouvoir et en indépendance plus qu’en confort. Il investit avec sang-froid, prend des risques calculés et parle rarement de ce qu’il possède. Attention à l’obsession du contrôle, qui devient méfiance généralisée.',
    shadow:
      'Le soupçon. À force de chercher ce qui est caché, le Scorpion finit par en inventer et détruit ce qu’il voulait garder.',
    qualities: ['Intense', 'Loyal', 'Lucide', 'Courageux', 'Magnétique', 'Résilient'],
    flaws: ['Jaloux', 'Rancunier', 'Secret', 'Contrôlant', 'Extrême'],
    celebrities: ['Pablo Picasso', 'Marie Curie', 'Ryan Gosling', 'Katy Perry'],
    bestMatches: [
      { sign: 'Cancer', score: 95, note: 'Deux Eaux qui se lisent en silence ; loyauté et profondeur sans limite.' },
      { sign: 'Poissons', score: 93, note: 'Fusion émotionnelle et compréhension instinctive de l’invisible.' },
      { sign: 'Capricorne', score: 89, note: 'Ambition et discrétion partagées ; deux volontés qui ne plient pas.' },
      { sign: 'Vierge', score: 86, note: 'Même exigence de vérité, même horreur du bavardage.' },
    ],
    challenges: [
      { sign: 'Lion', score: 43, note: 'Deux Fixes de pouvoir qui refusent de céder, chacun sur son terrain.' },
      { sign: 'Verseau', score: 42, note: 'Le détachement du Verseau ressemble à un abandon pour le Scorpion.' },
      { sign: 'Taureau', score: 60, note: 'Signe opposé : magnétisme puissant, mais deux entêtements jaloux face à face.' },
    ],
    color: '#B06BE0',
    gradient: ['#2B0B45', '#8438B8', '#D9A8F5'],
  },
  {
    id: 'sagittaire',
    name: 'Sagittaire',
    symbol: '♐',
    period: '22 novembre – 21 décembre',
    start: { day: 22, month: 11 },
    end: { day: 21, month: 12 },
    tagline: 'L’explorateur',
    motto: 'Je vois loin',
    element: 'Feu',
    modality: 'Mutable',
    polarity: 'Yang',
    rulingPlanet: 'Jupiter',
    planetSymbol: '♃',
    house: 'Maison IX',
    houseTheme: 'Le voyage, la philosophie, le sens',
    season: 'Fin de l’automne',
    oppositeSign: 'Gémeaux',
    decans: [
      '1ᵉʳ décan · 22 novembre–1ᵉʳ décembre · Jupiter — l’optimisme et l’expansion',
      '2ᵉ décan · 2–11 décembre · Mars — l’audace et la conquête',
      '3ᵉ décan · 12–21 décembre · Soleil — la quête de sens et de vérité',
    ],
    bodyPart: 'Les hanches, les cuisses, le foie',
    stone: 'Turquoise & lapis',
    metal: 'Étain',
    flower: 'Œillet & narcisse',
    animal: 'Le cheval',
    luckyDay: 'Jeudi',
    luckyNumbers: [3, 7, 21],
    luckyColor: 'Pourpre & turquoise',
    tarot: 'Tempérance — XIV',
    description:
      'Le Sagittaire vise plus loin que sa portée, et c’est tout son sujet. Gouverné par Jupiter, il a besoin d’horizon : voyages, études, croyances, cultures, tout ce qui élargit. Il a le talent rare de croire que ça va bien se passer — et cette confiance, souvent, fait que ça se passe bien. Sa franchise est célèbre et brutale : il dit ce qu’il pense, s’étonne sincèrement qu’on soit blessé, puis passe à autre chose. Signe mutable de Feu, il change de direction sans état d’âme et ne supporte pas les engagements pris sous contrainte : ce qu’il ne choisit pas librement, il le fuit.',
    inLove:
      'Le Sagittaire aime la liberté autant que son partenaire, et refuse de choisir entre les deux. Il est chaleureux, drôle, généreux, et il fuit dès qu’on parle de cage. La bonne formule avec lui est le compagnonnage : un projet commun, des voyages, une confiance qui n’exige pas de comptes. Le contrôle produit exactement ce qu’il veut éviter — la fuite.',
    inWork:
      'Fait pour l’international, l’enseignement, l’édition, le droit, le voyage, le sport, le conseil. Il donne du souffle aux projets et convainc facilement. Sa faiblesse est la mise en œuvre : il promet grand, planifie peu et perd l’intérêt quand l’aventure devient gestion.',
    inFriendship:
      'Ami joyeux, entraînant, toujours partant. Il élargit le monde de ses proches et ne juge presque jamais les modes de vie différents. On lui reproche son manque de tact et ses disparitions quand une autre aventure l’appelle.',
    wellbeing:
      'Jupiter gouverne le foie et les hanches : excès de table, sciatiques, blessures sportives. Le Sagittaire vit dans le trop, et son corps encaisse jusqu’au jour où il ne peut plus. Le mouvement en plein air, la modération jupitérienne et la vraie détente le maintiennent.',
    money:
      'Optimiste jusqu’à l’imprudence. Il croit toujours qu’il rentrera de l’argent et dépense en conséquence, surtout en voyages et en expériences. Il rebondit souvent grâce à la chance jupitérienne — sur laquelle il ne faudrait pas trop compter.',
    shadow:
      'Prendre la fuite pour de la liberté. Le Sagittaire quitte un lieu, un poste, une relation au moment exact où il faudrait rester et regarder en face.',
    qualities: ['Optimiste', 'Franc', 'Aventureux', 'Généreux', 'Cultivé', 'Enthousiaste'],
    flaws: ['Imprudent', 'Maladroit', 'Insaisissable', 'Excessif', 'Dispersé'],
    celebrities: ['Taylor Swift', 'Bruce Lee', 'Walt Disney', 'Tina Turner'],
    bestMatches: [
      { sign: 'Bélier', score: 93, note: 'Même énergie, même appétit ; personne n’étouffe personne.' },
      { sign: 'Lion', score: 93, note: 'Chaleur, panache et projets vastes menés à deux.' },
      { sign: 'Verseau', score: 88, note: 'Deux libertés qui se respectent et refont le monde ensemble.' },
      { sign: 'Balance', score: 86, note: 'La Balance civilise le Sagittaire, qui lui apprend à oser.' },
    ],
    challenges: [
      { sign: 'Vierge', score: 45, note: 'L’ordre contre l’improvisation : deux mutables qui s’usent mutuellement.' },
      { sign: 'Poissons', score: 47, note: 'La franchise du Sagittaire blesse une sensibilité qu’il ne perçoit pas.' },
      { sign: 'Gémeaux', score: 62, note: 'Signe opposé : deux curieux, mais l’un veut du sens et l’autre de la variété.' },
    ],
    color: '#8B6BE0',
    gradient: ['#2E1B6B', '#7B5FE0', '#C4B0FF'],
  },
  {
    id: 'capricorne',
    name: 'Capricorne',
    symbol: '♑',
    period: '22 décembre – 19 janvier',
    start: { day: 22, month: 12 },
    end: { day: 19, month: 1 },
    tagline: 'L’architecte',
    motto: 'Je réalise',
    element: 'Terre',
    modality: 'Cardinal',
    polarity: 'Yin',
    rulingPlanet: 'Saturne',
    planetSymbol: '♄',
    house: 'Maison X',
    houseTheme: 'La carrière, la réussite, la place sociale',
    season: 'Solstice d’hiver',
    oppositeSign: 'Cancer',
    decans: [
      '1ᵉʳ décan · 22 décembre–1ᵉʳ janvier · Saturne — la rigueur fondatrice',
      '2ᵉ décan · 2–11 janvier · Vénus — l’ambition adoucie',
      '3ᵉ décan · 12–19 janvier · Mercure — la stratégie et le calcul',
    ],
    bodyPart: 'Les genoux, les os, la peau, les dents',
    stone: 'Onyx & grenat',
    metal: 'Plomb',
    flower: 'Pensée & lierre',
    animal: 'La chèvre de montagne',
    luckyDay: 'Samedi',
    luckyNumbers: [4, 8, 22],
    luckyColor: 'Gris anthracite & brun',
    tarot: 'Le Diable — XV',
    description:
      'Le Capricorne joue sur le temps long. Gouverné par Saturne, il accepte l’effort, la lenteur et la contrainte comme le prix normal de ce qui dure — et cette acceptation lui donne un avantage énorme sur les signes pressés. Il gravit, marche après marche, sans avoir besoin d’être encouragé. Sa maturité est précoce : beaucoup de Capricornes ont été responsables trop tôt, et cela laisse une gravité qui ne les quitte pas. L’humour noir est leur soupape. Leur vraie difficulté n’est pas de réussir mais de s’autoriser à profiter, à demander de l’aide, à ne pas tout porter.',
    inLove:
      'Le Capricorne se déclare peu et s’engage beaucoup. Il montre l’amour par la fiabilité : il est là, il tient parole, il construit. Sa pudeur peut passer pour de la froideur alors qu’il ressent intensément. Il a besoin d’un partenaire patient, qui ne prenne pas la réserve pour du désintérêt, et qui l’oblige gentiment à sortir du travail.',
    inWork:
      'Le signe de la réussite construite : direction, finance, droit, architecture, ingénierie, institution, entrepreneuriat de fond. Il est le seul à supporter dix ans d’efforts pour un résultat, ce qui le mène plus haut que les plus doués. Il gère bien, délègue mal et ne se repose pas assez.',
    inFriendship:
      'Peu d’amis, choisis avec soin, gardés trente ans. Le Capricorne conseille avec un réalisme précieux et rend service sans rien demander. Il ne fait pas d’effusion et se rend disponible surtout quand la situation est grave — ce qui est sa manière d’aimer.',
    wellbeing:
      'Saturne régit les os, les genoux, la peau et les dents : raideurs, arthrose, tensions accumulées. Son ennemi est la contracture chronique du surmenage. Le repos n’est pas une faiblesse mais son traitement de fond, et son état s’améliore souvent en vieillissant, à mesure qu’il se relâche.',
    money:
      'Excellent gestionnaire de long terme : épargne, immobilier, patrimoine, prudence. Il investit avec méthode et pense retraite très tôt. Son travers : la peur du manque, qui persiste même quand tout est sécurisé.',
    shadow:
      'Mesurer sa valeur à ce qu’il produit. Le Capricorne travaille pour prouver qu’il mérite d’exister — et la preuve n’est jamais définitive.',
    qualities: ['Ambitieux', 'Fiable', 'Discipliné', 'Stratège', 'Patient', 'Responsable'],
    flaws: ['Rigide', 'Pessimiste', 'Froid en apparence', 'Workaholic', 'Contrôlant'],
    celebrities: ['Michelle Obama', 'David Bowie', 'Muhammad Ali', 'Kate Middleton'],
    bestMatches: [
      { sign: 'Taureau', score: 94, note: 'Deux Terres solides : projet commun, patrimoine, confiance tranquille.' },
      { sign: 'Vierge', score: 93, note: 'Rigueur partagée et respect mutuel du travail bien fait.' },
      { sign: 'Scorpion', score: 89, note: 'Deux volontés puissantes qui se reconnaissent et ne se trahissent pas.' },
      { sign: 'Poissons', score: 85, note: 'Le Poissons adoucit Saturne, le Capricorne donne au rêve une structure.' },
    ],
    challenges: [
      { sign: 'Bélier', score: 42, note: 'L’un veut tout de suite, l’autre veut bien faire : le conflit est structurel.' },
      { sign: 'Balance', score: 46, note: 'La recherche d’harmonie face à la recherche de résultat ; incompréhension durable.' },
      { sign: 'Cancer', score: 63, note: 'Signe opposé : complémentaires en théorie, à condition de traduire ambition et tendresse.' },
    ],
    color: '#9AA7B8',
    gradient: ['#1E2733', '#6C7C90', '#C3CFDD'],
  },
  {
    id: 'verseau',
    name: 'Verseau',
    symbol: '♒',
    period: '20 janvier – 18 février',
    start: { day: 20, month: 1 },
    end: { day: 18, month: 2 },
    tagline: 'Le visionnaire',
    motto: 'Je sais',
    element: 'Air',
    modality: 'Fixe',
    polarity: 'Yang',
    rulingPlanet: 'Uranus & Saturne',
    planetSymbol: '♅',
    house: 'Maison XI',
    houseTheme: 'Les amis, les groupes, les projets collectifs',
    season: 'Cœur de l’hiver',
    oppositeSign: 'Lion',
    decans: [
      '1ᵉʳ décan · 20–29 janvier · Uranus — la rupture et l’originalité',
      '2ᵉ décan · 30 janvier–8 février · Mercure — l’intelligence conceptuelle',
      '3ᵉ décan · 9–18 février · Vénus — l’humanisme et la fraternité',
    ],
    bodyPart: 'Les chevilles, les mollets, la circulation',
    stone: 'Améthyste & aigue-marine',
    metal: 'Aluminium',
    flower: 'Orchidée & gypsophile',
    animal: 'Le hibou',
    luckyDay: 'Samedi',
    luckyNumbers: [4, 11, 22],
    luckyColor: 'Bleu électrique & indigo',
    tarot: 'L’Étoile — XVII',
    description:
      'Le Verseau pense contre. Non par provocation, mais parce qu’il voit les conventions de l’extérieur, comme des choix arbitraires que l’on pourrait faire autrement. Gouverné par Uranus sur une base saturnienne, il combine l’invention et l’entêtement : c’est un signe fixe, et ses idées ne bougent pas. Son intelligence est conceptuelle, souvent en avance, parfois froide — il aime l’humanité entière plus facilement qu’une personne en particulier. Il tient à ses amis autant qu’à sa liberté et considère l’amitié comme le lien le plus noble. Sa distance émotionnelle n’est pas de l’indifférence : c’est sa manière de rester lucide.',
    inLove:
      'Le Verseau a besoin d’une relation qui ne ressemble à aucune autre, et surtout pas à un modèle imposé. Il veut un ami avant un amant, de l’espace, des conversations, aucune scène. Il se braque devant la possessivité et exprime peu ses émotions, ce qui déroute les signes d’Eau. En retour, sa fidélité, une fois donnée, est étonnamment durable.',
    inWork:
      'Fait pour l’innovation, la tech, la science, l’associatif, la recherche, les causes collectives, tout ce qui casse un modèle. Il voit les tendances avant les autres et travaille mieux dans les structures horizontales. Il obéit mal à l’autorité pour l’autorité et s’ennuie mortellement dans la répétition.',
    inFriendship:
      'C’est son domaine. Le Verseau a des amis partout, de tous milieux, et il les traite en égaux. Il rend service sans compter et n’exige rien en retour, sauf de ne pas être enfermé dans un rôle. Ses absences prolongées ne signifient rien pour lui — il reprend la conversation trois ans après comme si de rien n’était.',
    wellbeing:
      'Uranus gouverne la circulation et les chevilles : mauvaise circulation, entorses, tensions nerveuses par décharges. Le Verseau vit dans la tête et oublie son corps pendant des semaines. Le mouvement régulier et l’ancrage — marche, respiration, contact avec le sol — le rééquilibrent.',
    money:
      'Rapport détaché, parfois idéologique : l’argent n’est pas une valeur en soi. Il peut être très généreux, désintéressé, puis se retrouver démuni. Ses meilleures décisions financières sont celles qu’il automatise pour ne plus avoir à y penser.',
    shadow:
      'Se réfugier dans l’abstraction. Le Verseau défend l’humanité en gros pour ne pas affronter la personne, présente et exigeante, qui lui demande d’être là.',
    qualities: ['Original', 'Indépendant', 'Humaniste', 'Visionnaire', 'Loyal', 'Tolérant'],
    flaws: ['Distant', 'Entêté', 'Imprévisible', 'Provocateur', 'Détaché'],
    celebrities: ['Oprah Winfrey', 'Bob Marley', 'Galilée', 'Harry Styles'],
    bestMatches: [
      { sign: 'Gémeaux', score: 93, note: 'Deux esprits libres qui s’amusent et ne s’enferment jamais.' },
      { sign: 'Balance', score: 92, note: 'Idéaux partagés, élégance et respect total de l’autonomie.' },
      { sign: 'Sagittaire', score: 89, note: 'Deux aventuriers de la pensée ; aucun besoin de contrôler l’autre.' },
      { sign: 'Bélier', score: 84, note: 'Le Bélier passe à l’acte ce que le Verseau conçoit.' },
    ],
    challenges: [
      { sign: 'Taureau', score: 40, note: 'Deux Fixes opposés : l’un veut la stabilité, l’autre la rupture.' },
      { sign: 'Scorpion', score: 42, note: 'La fusion demandée par le Scorpion est exactement ce que le Verseau refuse.' },
      { sign: 'Lion', score: 61, note: 'Signe opposé : le Lion veut être adoré, le Verseau ne s’agenouille devant personne.' },
    ],
    color: '#5EC8E0',
    gradient: ['#0E3450', '#3FA9D6', '#A9E4F5'],
  },
  {
    id: 'poissons',
    name: 'Poissons',
    symbol: '♓',
    period: '19 février – 20 mars',
    start: { day: 19, month: 2 },
    end: { day: 20, month: 3 },
    tagline: 'Le rêveur',
    motto: 'Je crois',
    element: 'Eau',
    modality: 'Mutable',
    polarity: 'Yin',
    rulingPlanet: 'Neptune & Jupiter',
    planetSymbol: '♆',
    house: 'Maison XII',
    houseTheme: 'L’inconscient, le retrait, la spiritualité',
    season: 'Fin de l’hiver',
    oppositeSign: 'Vierge',
    decans: [
      '1ᵉʳ décan · 19–29 février · Neptune & Jupiter — l’imagination sans bord',
      '2ᵉ décan · 1–10 mars · Lune — la sensibilité et la mémoire',
      '3ᵉ décan · 11–20 mars · Pluton & Mars — le rêve qui trouve sa force',
    ],
    bodyPart: 'Les pieds, le système lymphatique, l’immunité',
    stone: 'Aigue-marine & améthyste',
    metal: 'Étain & platine',
    flower: 'Lotus & jonquille',
    animal: 'Le poisson',
    luckyDay: 'Jeudi',
    luckyNumbers: [7, 12, 29],
    luckyColor: 'Turquoise & lilas',
    tarot: 'La Lune — XVIII',
    description:
      'Douzième et dernier signe, le Poissons dissout les frontières — entre soi et les autres, entre le réel et l’imaginaire, entre hier et demain. Gouverné par Neptune, il perçoit ce qui ne se dit pas et absorbe les états d’âme de son entourage sans toujours distinguer ce qui lui appartient. De là vient sa compassion exceptionnelle, et aussi son épuisement. Son imagination est immense et vaut mieux que bien des raisonnements ; sa difficulté est le contour : dire non, se limiter, choisir. Signe mutable d’Eau, il s’adapte à tout, jusqu’à disparaître dans ce à quoi il s’adapte.',
    inLove:
      'Le Poissons aime de manière inconditionnelle, presque sacrificielle. Il idéalise, se donne entièrement, pardonne trop, et confond parfois l’amour avec le sauvetage. Romantique et intuitif, il crée une intimité rare — mais il a besoin d’un partenaire honnête et stable, capable de lui rappeler qu’il existe séparément. La déception le fait fuir dans le rêve plutôt que dans l’explication.',
    inWork:
      'Fait pour la création, le soin et l’invisible : art, musique, cinéma, thérapie, spiritualité, humanitaire, écriture. Son intuition professionnelle est excellente lorsqu’on lui laisse un cadre. Il souffre dans les environnements durs, chiffrés et compétitifs, et gagne à s’associer à quelqu’un qui gère le concret.',
    inFriendship:
      'Ami d’une écoute rare, sans jugement, capable de comprendre ce que personne d’autre ne voit. On lui confie tout. Sa limite est l’absorption : il prend sur lui les problèmes des autres, puis s’éclipse quelque temps pour se recharger, sans prévenir.',
    wellbeing:
      'Neptune régit les pieds et le système immunitaire : sensibilité générale, fatigues inexpliquées, réactivité aux substances et aux ambiances. Le Poissons a besoin de solitude régulière comme d’un médicament. L’eau, la musique, le sommeil et des limites claires valent mieux pour lui que n’importe quel stimulant.',
    money:
      'Rapport flou : il ne regarde pas, prête sans réclamer, oublie les échéances. L’argent n’a pas de réalité pour lui tant qu’il n’en manque pas. Déléguer la gestion ou automatiser les versements le protège de lui-même.',
    shadow:
      'La fuite. Face à ce qui contrarie, le Poissons s’absente — dans le rêve, l’art, le sommeil ou pire — plutôt que d’affronter et de trancher.',
    qualities: ['Empathique', 'Créatif', 'Intuitif', 'Doux', 'Généreux', 'Adaptable'],
    flaws: ['Fuyant', 'Influençable', 'Désorganisé', 'Victimisant', 'Trop confiant'],
    celebrities: ['Albert Einstein', 'Rihanna', 'Steve Jobs', 'Simone Signoret'],
    bestMatches: [
      { sign: 'Cancer', score: 94, note: 'Deux Eaux tendres qui se protègent mutuellement du monde.' },
      { sign: 'Scorpion', score: 93, note: 'Profondeur, intuition et intensité partagées jusqu’au bout.' },
      { sign: 'Taureau', score: 88, note: 'Le Taureau donne un sol au rêve du Poissons, qui le rend plus doux.' },
      { sign: 'Capricorne', score: 85, note: 'Structure et sensibilité : chacun apporte à l’autre ce qui lui manque.' },
    ],
    challenges: [
      { sign: 'Gémeaux', score: 44, note: 'Le mental rapide du Gémeaux passe à côté de l’émotion du Poissons.' },
      { sign: 'Sagittaire', score: 47, note: 'La franchise sans filtre blesse une sensibilité qu’elle ne voit pas.' },
      { sign: 'Vierge', score: 64, note: 'Signe opposé : la Vierge structure ce que le Poissons ressent, si elle cesse de corriger.' },
    ],
    color: '#6FD8C8',
    gradient: ['#0F3F45', '#3EA99B', '#A7EDE0'],
  },
];

/** Ordre chronologique des débuts de signe, utilisé pour la recherche. */
const SIGN_BOUNDARIES: { start: MonthDay; index: number }[] = zodiacSigns
  .map((sign, index) => ({ start: sign.start, index }))
  .sort((a, b) => a.start.month - b.start.month || a.start.day - b.start.day);

const NB_DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/** Nombre de jours du mois — février compte 29 jours, l'année n'étant pas demandée. */
export function daysInMonth(month: number): number {
  return NB_DAYS_IN_MONTH[month - 1] ?? 31;
}

export const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

export const MONTHS_SHORT = [
  'Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin',
  'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.',
];

/**
 * Renvoie le signe solaire correspondant à un jour et un mois.
 * On cherche la dernière borne de signe atteinte dans l'année ; avant la
 * première (20 janvier, Verseau) on est encore Capricorne.
 */
export function getZodiacSign(day: number, month: number): ZodiacSign {
  let current = SIGN_BOUNDARIES[SIGN_BOUNDARIES.length - 1];

  for (const boundary of SIGN_BOUNDARIES) {
    const started =
      month > boundary.start.month ||
      (month === boundary.start.month && day >= boundary.start.day);
    if (started) current = boundary;
  }

  return zodiacSigns[current.index];
}

export function getSignByName(name: string): ZodiacSign | undefined {
  return zodiacSigns.find((sign) => sign.name === name);
}

/** Les signes regroupés par élément, dans l'ordre du zodiaque. */
export function signsByElement(element: Element): ZodiacSign[] {
  return zodiacSigns.filter((sign) => sign.element === element);
}

/** Formate un jour + un mois, ex. « 14 février ». */
export function formatMonthDay(day: number, month: number): string {
  return `${day} ${MONTHS[month - 1].toLowerCase()}`;
}
