// src/App.jsx
import React, { useState } from "react";
import FilterSidebar from "./SideBar.jsx";
import TeamOverview from "./TeamOverview.jsx";
import XGLeagueChart from "./XGLeagueChart.jsx";
import OMRankingChart from "./OMRankingChart.jsx";
import PlayerTable from "./PlayerTable.jsx";
import CardContainer from "./CardContainer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";
import "./i18n"; 

const teams = ["PSG",
  "OM",
  "ASM",
  "OGC Nice",
  "RC LENS",
  "OL",
  "Rennes",
  "LOSC",
  "Brest"];

export default function App() {
  const [selectedTeam, setSelectedTeam] = useState("OM");
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <FilterSidebar teams={teams} selectedTeam={selectedTeam} onSelectTeam={setSelectedTeam} />

      {/* Main content */}
      <div className="flex-grow-1 bg-light min-vh-100">
        {/* Topbar */}
        <nav className="navbar navbar-light bg-white px-4 shadow-sm mb-4 d-flex justify-content-between align-items-center">
         <span className="navbar-brand fw-bold text-dark">Analiz</span>

          {/* Language Selector 👇 intégré ici */}
          <select className="form-select form-select-sm w-auto" value={i18n.language} onChange={changeLanguage}>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>
        </nav>

        <main className="px-4">
          <div className="row g-4">

            <div className="col-md-6 col-xl-6">
              <CardContainer title={t("club_info")}>
                <TeamOverview team={selectedTeam} />
              </CardContainer>
            </div>

            <div className="col-md-6 col-xl-6">
              <CardContainer title={t("top_salary", { team: selectedTeam })}>
                <PlayerTable team={selectedTeam} />
              </CardContainer>
            </div>
            

            <div className="col-12">
              <CardContainer title={t("xg_chart")}>
                <XGLeagueChart selectedTeam={selectedTeam} onSelectTeam={setSelectedTeam} />
              </CardContainer>
            </div>

            <div className="col-12">
              <CardContainer title={t("ranking", { team: selectedTeam })}>
                <OMRankingChart team={selectedTeam} />
              </CardContainer>
            </div>

            

          </div>
        </main>
      </div>
    </div>
  );
}