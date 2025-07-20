// src/data.js


// Classement par journée (réduit aux 9 meilleurs)
export const teamRankings = {
  "PSG": [1, 1, 3, 2, 1, 2, 2, 3, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 3, 1, 1, 1, 1, 1, 2, 3, 3, 1, 3, 1],
  "OM": [3, 1, 3, 3, 2, 1, 3, 4, 3, 3, 1, 4, 1, 2, 3, 1, 1, 4, 1, 3, 1, 4, 1, 2, 4, 2, 1, 1, 4, 1, 4, 3, 1, 2],
  "ASM": [3, 4, 1, 4, 2, 5, 1, 5, 5, 5, 5, 4, 1, 1, 5, 1, 4, 5, 2, 2, 3, 4, 2, 2, 4, 2, 3, 5, 1, 3, 2, 3, 2, 3],
  "OGC Nice": [2, 5, 6, 4, 6, 3, 3, 6, 6, 6, 3, 6, 4, 2, 6, 6, 6, 5, 6, 6, 2, 2, 3, 4, 3, 3, 2, 6, 5, 5, 6, 4, 6, 4],
  "RC LENS": [6, 4, 5, 7, 5, 7, 7, 3, 6, 7, 7, 5, 3, 5, 6, 5, 6, 3, 4, 6, 4, 5, 4, 6, 5, 5, 5, 4, 7, 5, 6, 5, 7, 5],
  "OL": [8, 5, 8, 4, 4, 6, 6, 5, 4, 5, 8, 7, 8, 5, 4, 6, 7, 4, 6, 4, 5, 7, 5, 8, 5, 4, 5, 4, 8, 4, 5, 8, 7, 6],
  "Rennes": [6, 9, 7, 8, 5, 6, 9, 9, 5, 6, 5, 5, 6, 7, 5, 6, 7, 7, 5, 5, 7, 9, 5, 6, 5, 9, 9, 9, 9, 5, 9, 9, 7, 7],
  "LOSC": [10, 7, 7, 7, 9, 10, 6, 7, 6, 10, 7, 10, 9, 8, 9, 10, 8, 6, 7, 8, 9, 10, 8, 6, 9, 7, 7, 10, 7, 8, 6, 10, 9, 8],
  "Brest": [10, 9, 10, 11, 10, 9, 8, 7, 8, 8, 9, 10, 8, 10, 10, 8, 11, 9, 8, 11, 7, 10, 8, 9, 9, 9, 7, 9, 10, 9, 10, 9, 9, 9]
};

// xG réels (top 9 équipes)
export const xgPerMatch = [
  { team: "PSG", xg: 2.3 },
  { team: "OM", xg: 1.73 },
  { team: "ASM", xg: 1.69 },
  { team: "OGC Nice", xg: 1.68 },
  { team: "RC LENS", xg: 1.63 },
  { team: "OL", xg: 1.58 },
  { team: "Rennes", xg: 1.56 },
  { team: "LOSC", xg: 1.55 },
  { team: "Brest", xg: 1.48 }
];

// Frappes OM
export const omShots = [
  { x: 20, y: 30 }, { x: 45, y: 25 }, { x: 60, y: 40 },
  { x: 50, y: 35 }, { x: 70, y: 20 }, { x: 35, y: 30 },
  { x: 42, y: 50 }, { x: 48, y: 45 }, { x: 58, y: 38 },
  { x: 55, y: 42 }, { x: 64, y: 28 }, { x: 66, y: 22 },
  { x: 40, y: 34 }, { x: 46, y: 27 }, { x: 52, y: 29 },
  { x: 60, y: 24 }, { x: 61, y: 22 }, { x: 58, y: 25 }
];

// Infos clubs (top 9 équipes)
export const teamInfo = {
  "PSG": {
    coach: "Luis Enrique",
    stadium: "Parc des Princes",
    city: "Paris",
    logo: "/logos/psg.png",
    president: "Nasser Al-Khelaifi"
  },
  "OM": {
    coach: "Jean-Louis Gasset",
    stadium: "Orange Vélodrome",
    city: "Marseille",
    logo: "/logos/om.png",
    president: "Pablo Longoria"
  },
  "ASM": {
    coach: "Adi Hütter",
    stadium: "Louis-II",
    city: "Monaco",
    logo: "/logos/asm.png",
    president: "Dmitry Rybolovlev"
  },
  "OGC Nice": {
    coach: "Francesco Farioli",
    stadium: "Allianz Riviera",
    city: "Nice",
    logo: "/logos/nice.png",
    president: "Jean-Pierre Rivère"
  },
  "RC LENS": {
    coach: "Franck Haise",
    stadium: "Bollaert-Delelis",
    city: "Lens",
    logo: "/logos/lens.png",
    president: "Joseph Oughourlian"
  },
  "OL": {
    coach: "Pierre Sage",
    stadium: "Groupama Stadium",
    city: "Lyon",
    logo: "/logos/lyon.png",
    president: "John Textor"
  },
  "Rennes": {
    coach: "Julien Stéphan",
    stadium: "Roazhon Park",
    city: "Rennes",
    logo: "/logos/rennes.png",
    president: "Olivier Cloarec"
  },
  "LOSC": {
    coach: "Paulo Fonseca",
    stadium: "Pierre-Mauroy",
    city: "Villeneuve-d'Ascq",
    logo: "/logos/lille.png",
    president: "Olivier Létang"
  },
  "Brest": {
    coach: "Éric Roy",
    stadium: "Francis-Le Blé",
    city: "Brest",
    logo: "/logos/brest.png",
    president: "Denis Le Saint"
  }
};