import { ZodiacSign } from '@/types/astrology';

export const zodiacSigns: ZodiacSign[] = [
  {
    name: 'Bélier',
    period: '21 mars - 19 avril',
    description: 'Le Bélier est le pionnier du zodiaque, toujours prêt à ouvrir de nouvelles voies. Énergique et passionné, il fonce tête baissée vers ses objectifs avec une détermination sans faille.',
    qualities: ['Courageux', 'Déterminé', 'Leader naturel', 'Spontané', 'Énergique'],
    flaws: ['Impatient', 'Impulsif', 'Égocentrique', 'Colérique', 'Têtu'],
    element: 'Feu',
    symbol: '♈',
    emoji: '🐏',
    color: '#E74C3C',
    gradient: ['#E74C3C', '#FF6B6B'],
    compatibility: {
      goodMatches: ['Lion', 'Sagittaire', 'Gémeaux', 'Verseau'],
      badMatches: ['Cancer', 'Capricorne', 'Balance']
    }
  },
  {
    name: 'Taureau',
    period: '20 avril - 20 mai',
    description: 'Le Taureau recherche la stabilité et la sécurité dans tous les aspects de sa vie. Sensuel et terre-à-terre, il apprécie les plaisirs simples et durables de la vie.',
    qualities: ['Fiable', 'Patient', 'Pratique', 'Loyal', 'Déterminé'],
    flaws: ['Têtu', 'Possessif', 'Matérialiste', 'Lent à changer', 'Paresseux'],
    element: 'Terre',
    symbol: '♉',
    emoji: '🐂',
    color: '#27AE60',
    gradient: ['#27AE60', '#2ECC71'],
    compatibility: {
      goodMatches: ['Vierge', 'Capricorne', 'Cancer', 'Poissons'],
      badMatches: ['Lion', 'Verseau', 'Scorpion']
    }
  },
  {
    name: 'Gémeaux',
    period: '21 mai - 20 juin',
    description: 'Les Gémeaux sont les communicateurs du zodiaque. Curieux et adaptables, ils excellent dans l\'art de la conversation et ont soif d\'apprendre constamment.',
    qualities: ['Adaptable', 'Curieux', 'Communicatif', 'Intelligent', 'Esprit vif'],
    flaws: ['Superficiel', 'Indécis', 'Nerveux', 'Inconstant', 'Bavard'],
    element: 'Air',
    symbol: '♊',
    emoji: '👯',
    color: '#F39C12',
    gradient: ['#F39C12', '#FFC107'],
    compatibility: {
      goodMatches: ['Balance', 'Verseau', 'Bélier', 'Lion'],
      badMatches: ['Vierge', 'Poissons', 'Sagittaire']
    }
  },
  {
    name: 'Cancer',
    period: '21 juin - 22 juillet',
    description: 'Le Cancer est profondément émotionnel et intuitif. Protecteur de nature, il accorde une grande importance à la famille et au foyer, créant un cocon chaleureux autour de lui.',
    qualities: ['Empathique', 'Protecteur', 'Intuitif', 'Loyal', 'Créatif'],
    flaws: ['Lunatique', 'Susceptible', 'Possessif', 'Pessimiste', 'Rancunier'],
    element: 'Eau',
    symbol: '♋',
    emoji: '🦀',
    color: '#3498DB',
    gradient: ['#3498DB', '#5DADE2'],
    compatibility: {
      goodMatches: ['Scorpion', 'Poissons', 'Taureau', 'Vierge'],
      badMatches: ['Bélier', 'Balance', 'Capricorne']
    }
  },
  {
    name: 'Lion',
    period: '23 juillet - 22 août',
    description: 'Le Lion rayonne de confiance et de charisme naturel. Généreux et théâtral, il aime être au centre de l\'attention et inspire les autres par sa présence majestueuse.',
    qualities: ['Généreux', 'Confiant', 'Charismatique', 'Créatif', 'Leader'],
    flaws: ['Égocentrique', 'Arrogant', 'Dominateur', 'Orgueilleux', 'Dramatique'],
    element: 'Feu',
    symbol: '♌',
    emoji: '🦁',
    color: '#FF9500',
    gradient: ['#FF9500', '#FFB74D'],
    compatibility: {
      goodMatches: ['Bélier', 'Sagittaire', 'Gémeaux', 'Balance'],
      badMatches: ['Taureau', 'Scorpion', 'Verseau']
    }
  },
  {
    name: 'Vierge',
    period: '23 août - 22 septembre',
    description: 'La Vierge est méticuleuse et perfectionniste. Analytique et serviable, elle excelle dans l\'organisation et cherche toujours à améliorer les choses autour d\'elle.',
    qualities: ['Perfectionniste', 'Analytique', 'Serviable', 'Pratique', 'Modeste'],
    flaws: ['Critique', 'Inquiet', 'Maniaque', 'Timide', 'Perfectionniste à l\'excès'],
    element: 'Terre',
    symbol: '♍',
    emoji: '👩‍🌾',
    color: '#8E44AD',
    gradient: ['#8E44AD', '#BB8FCE'],
    compatibility: {
      goodMatches: ['Taureau', 'Capricorne', 'Cancer', 'Scorpion'],
      badMatches: ['Gémeaux', 'Sagittaire', 'Poissons']
    }
  },
  {
    name: 'Balance',
    period: '23 septembre - 22 octobre',
    description: 'La Balance recherche l\'harmonie et l\'équilibre dans tous les aspects de sa vie. Diplomatique et esthète, elle a un sens aigu de la justice et de la beauté.',
    qualities: ['Diplomatique', 'Équilibré', 'Charmant', 'Sociable', 'Juste'],
    flaws: ['Indécis', 'Superficiel', 'Dépendant', 'Évite les conflits', 'Vaniteux'],
    element: 'Air',
    symbol: '♎',
    emoji: '⚖️',
    color: '#E91E63',
    gradient: ['#E91E63', '#F48FB1'],
    compatibility: {
      goodMatches: ['Gémeaux', 'Verseau', 'Lion', 'Sagittaire'],
      badMatches: ['Cancer', 'Capricorne', 'Vierge']
    }
  },
  {
    name: 'Scorpion',
    period: '23 octobre - 21 novembre',
    description: 'Le Scorpion est intense et mystérieux. Passionné et déterminé, il possède une profondeur émotionnelle remarquable et une capacité de transformation unique.',
    qualities: ['Passionné', 'Déterminé', 'Loyal', 'Intuitif', 'Courageux'],
    flaws: ['Jaloux', 'Rancunier', 'Possessif', 'Secret', 'Destructeur'],
    element: 'Eau',
    symbol: '♏',
    emoji: '🦂',
    color: '#7B1FA2',
    gradient: ['#7B1FA2', '#9C27B0'],
    compatibility: {
      goodMatches: ['Cancer', 'Poissons', 'Vierge', 'Capricorne'],
      badMatches: ['Lion', 'Verseau', 'Taureau']
    }
  },
  {
    name: 'Sagittaire',
    period: '22 novembre - 21 décembre',
    description: 'Le Sagittaire est l\'aventurier du zodiaque. Optimiste et philosophe, il aspire à la liberté et à la découverte de nouveaux horizons, tant physiques que spirituels.',
    qualities: ['Optimiste', 'Aventureux', 'Honnête', 'Philosophe', 'Généreux'],
    flaws: ['Imprudent', 'Impatient', 'Irresponsable', 'Tactless', 'Superficiel'],
    element: 'Feu',
    symbol: '♐',
    emoji: '🏹',
    color: '#673AB7',
    gradient: ['#673AB7', '#9575CD'],
    compatibility: {
      goodMatches: ['Bélier', 'Lion', 'Balance', 'Verseau'],
      badMatches: ['Vierge', 'Poissons', 'Gémeaux']
    }
  },
  {
    name: 'Capricorne',
    period: '22 décembre - 19 janvier',
    description: 'Le Capricorne est ambitieux et discipliné. Pragmatique et persévérant, il gravit méthodiquement les échelons vers ses objectifs avec une détermination inébranlable.',
    qualities: ['Ambitieux', 'Discipliné', 'Responsable', 'Patient', 'Pragmatique'],
    flaws: ['Pessimiste', 'Têtu', 'Matérialiste', 'Froid', 'Rigide'],
    element: 'Terre',
    symbol: '♑',
    emoji: '🐐',
    color: '#607D8B',
    gradient: ['#607D8B', '#78909C'],
    compatibility: {
      goodMatches: ['Taureau', 'Vierge', 'Scorpion', 'Poissons'],
      badMatches: ['Bélier', 'Cancer', 'Balance']
    }
  },
  {
    name: 'Verseau',
    period: '20 janvier - 18 février',
    description: 'Le Verseau est innovateur et visionnaire. Indépendant et humanitaire, il cherche à révolutionner le monde avec ses idées originales et son esprit libre.',
    qualities: ['Innovateur', 'Indépendant', 'Humanitaire', 'Original', 'Intellectuel'],
    flaws: ['Détaché', 'Imprévisible', 'Rebelle', 'Têtu', 'Utopiste'],
    element: 'Air',
    symbol: '♒',
    emoji: '🏺',
    color: '#00BCD4',
    gradient: ['#00BCD4', '#4DD0E1'],
    compatibility: {
      goodMatches: ['Gémeaux', 'Balance', 'Bélier', 'Sagittaire'],
      badMatches: ['Taureau', 'Scorpion', 'Lion']
    }
  },
  {
    name: 'Poissons',
    period: '19 février - 20 mars',
    description: 'Les Poissons sont intuitifs et empathiques. Créatifs et rêveurs, ils naviguent dans le monde avec leur cœur, guidés par leur sensibilité et leur imagination.',
    qualities: ['Empathique', 'Intuitif', 'Créatif', 'Compassionnel', 'Spirituel'],
    flaws: ['Rêveur', 'Évasif', 'Impressionnable', 'Désorganisé', 'Victime'],
    element: 'Eau',
    symbol: '♓',
    emoji: '🐟',
    color: '#4CAF50',
    gradient: ['#4CAF50', '#66BB6A'],
    compatibility: {
      goodMatches: ['Cancer', 'Scorpion', 'Taureau', 'Capricorne'],
      badMatches: ['Gémeaux', 'Sagittaire', 'Vierge']
    }
  }
];

export function getZodiacSign(day: number, month: number): ZodiacSign {
  // Tableau des dates limites pour chaque signe (jour/mois)
  const zodiacDates = [
    { sign: 0, month: 3, day: 21 }, // Bélier commence le 21 mars
    { sign: 1, month: 4, day: 20 }, // Taureau commence le 20 avril
    { sign: 2, month: 5, day: 21 }, // Gémeaux commence le 21 mai
    { sign: 3, month: 6, day: 21 }, // Cancer commence le 21 juin
    { sign: 4, month: 7, day: 23 }, // Lion commence le 23 juillet
    { sign: 5, month: 8, day: 23 }, // Vierge commence le 23 août
    { sign: 6, month: 9, day: 23 }, // Balance commence le 23 septembre
    { sign: 7, month: 10, day: 23 }, // Scorpion commence le 23 octobre
    { sign: 8, month: 11, day: 22 }, // Sagittaire commence le 22 novembre
    { sign: 9, month: 12, day: 22 }, // Capricorne commence le 22 décembre
    { sign: 10, month: 1, day: 20 }, // Verseau commence le 20 janvier
    { sign: 11, month: 2, day: 19 }, // Poissons commence le 19 février
  ];

  // Logique pour déterminer le signe astrologique
  if (month === 1) {
    return day >= 20 ? zodiacSigns[10] : zodiacSigns[9]; // Verseau ou Capricorne
  } else if (month === 2) {
    return day >= 19 ? zodiacSigns[11] : zodiacSigns[10]; // Poissons ou Verseau
  } else if (month === 3) {
    return day >= 21 ? zodiacSigns[0] : zodiacSigns[11]; // Bélier ou Poissons
  } else if (month === 4) {
    return day >= 20 ? zodiacSigns[1] : zodiacSigns[0]; // Taureau ou Bélier
  } else if (month === 5) {
    return day >= 21 ? zodiacSigns[2] : zodiacSigns[1]; // Gémeaux ou Taureau
  } else if (month === 6) {
    return day >= 21 ? zodiacSigns[3] : zodiacSigns[2]; // Cancer ou Gémeaux
  } else if (month === 7) {
    return day >= 23 ? zodiacSigns[4] : zodiacSigns[3]; // Lion ou Cancer
  } else if (month === 8) {
    return day >= 23 ? zodiacSigns[5] : zodiacSigns[4]; // Vierge ou Lion
  } else if (month === 9) {
    return day >= 23 ? zodiacSigns[6] : zodiacSigns[5]; // Balance ou Vierge
  } else if (month === 10) {
    return day >= 23 ? zodiacSigns[7] : zodiacSigns[6]; // Scorpion ou Balance
  } else if (month === 11) {
    return day >= 22 ? zodiacSigns[8] : zodiacSigns[7]; // Sagittaire ou Scorpion
  } else if (month === 12) {
    return day >= 22 ? zodiacSigns[9] : zodiacSigns[8]; // Capricorne ou Sagittaire
  }

  // Par défaut (ne devrait pas arriver)
  return zodiacSigns[0];
}
