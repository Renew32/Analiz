// src/PlayerTable.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "./PlayerTable.css";

const playersByTeam = {
  PSG: [
    { name: "Ousmane Dembele", salary: "€72M", position: "FW", age: 25, apps: 30 },
    { name: "Achraf Hakimi", salary: "€14M", position: "DF", age: 26, apps: 28 }
  ],
  OM: [
    { name: "Pierre-Emerick Aubameyang", salary: "€7M", position: "FW", age: 34, apps: 29 },
    { name: "Jordan Veretout", salary: "€5M", position: "MF", age: 31, apps: 30 }
  ],
  ASM: [
    { name: "Wissam Ben Yedder", salary: "€8M", position: "FW", age: 33, apps: 30 },
    { name: "Youssouf Fofana", salary: "€6M", position: "MF", age: 25, apps: 32 }
  ],
  "OGC Nice": [
    { name: "Jean-Clair Todibo", salary: "€4M", position: "DF", age: 24, apps: 31 },
    { name: "Gaëtan Laborde", salary: "€3M", position: "FW", age: 30, apps: 30 }
  ],
  "RC LENS": [
    { name: "Seko Fofana", salary: "€5M", position: "MF", age: 29, apps: 30 },
    { name: "Kevin Danso", salary: "€2.5M", position: "DF", age: 26, apps: 33 }
  ],
  OL: [
    { name: "Alexandre Lacazette", salary: "€6M", position: "FW", age: 33, apps: 31 },
    { name: "Corentin Tolisso", salary: "€5M", position: "MF", age: 30, apps: 28 }
  ],
  Rennes: [
    { name: "Benjamin Bourigeaud", salary: "€4M", position: "MF", age: 30, apps: 33 },
    { name: "Arthur Theate", salary: "€3M", position: "DF", age: 24, apps: 32 }
  ],
  LOSC: [
    { name: "Jonathan David", salary: "€5.5M", position: "FW", age: 26, apps: 34 },
    { name: "Benjamin André", salary: "€3.5M", position: "MF", age: 33, apps: 33 }
  ],
  Brest: [
    { name: "Romain Del Castillo", salary: "€2M", position: "FW", age: 28, apps: 34 },
    { name: "Steve Mounié", salary: "€2M", position: "FW", age: 30, apps: 30 }
  ]
};

export default function PlayerTable({ team }) {
  const { t } = useTranslation();
  const players = playersByTeam[team];
  if (!players) return null;

  return (
    <div className="overflow-x-auto bg-white p-4 rounded shadow">
      <table className="player-table">
        <thead>
          <tr className="border-b">
            <th className="py-2 px-2">{t("player")}</th>
            <th className="py-2 px-2">{t("salary")}</th>
            <th className="py-2 px-2">{t("position")}</th>
            <th className="py-2 px-2">{t("age")}</th>
            <th className="py-2 px-2">{t("apps")}</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="py-2 px-2 font-medium">{p.name}</td>
              <td className="py-2 px-2">{p.salary}</td>
              <td className="py-2 px-2">{p.position}</td>
              <td className="py-2 px-2">{p.age}</td>
              <td className="py-2 px-2">{p.apps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}