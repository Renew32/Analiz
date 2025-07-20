import React from "react";
import { teamInfo } from "./data";
import { useTranslation } from "react-i18next";
import "./TeamOverview.css";

export default function TeamOverview({ team }) {
  const { t } = useTranslation();
  const info = teamInfo[team];

  if (!info) return null;

  return (
    <div className="team-overview">
      <div className="team-logo-container">
        <img src={info.logo} alt={team} className="team-logo"/>
      </div>
      <div>
        <p className="text-sm text-gray-700">{t("president")} : {info.president}</p>
        <p className="text-sm text-gray-700">{t("coach")} : {info.coach}</p>
        <p className="text-sm text-gray-700">{t("stadium")} : {info.stadium}</p>
        <p className="text-sm text-gray-700">{t("city")} : {info.city}</p>
        
      </div>
    </div>
  );
}