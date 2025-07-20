// src/XGLeagueChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
} from "chart.js";
import { xgPerMatch } from "./data";
import { useTranslation } from "react-i18next";
import "./XG.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend
);

export default function XGLeagueChart({ selectedTeam, onSelectTeam }) {
  const { t } = useTranslation();

  // Trier les équipes par ordre alphabétique
  const sortedXG = [...xgPerMatch].sort((a, b) => a.team.localeCompare(b.team));
  const labels = sortedXG.map(t => t.team);

  const data = {
    labels,
    datasets: [
      {
        label: t("xg_chart"),
        data: sortedXG.map(t => t.xg),
        backgroundColor: (ctx) =>
          ctx.chart.data.labels[ctx.dataIndex] === selectedTeam
            ? "#B1D34B"
            : "#00264C",
        borderRadius: 6,
        hoverBackgroundColor: (ctx) =>
          ctx.chart.data.labels[ctx.dataIndex] === selectedTeam
            ? "#A0C943"
            : "#001B38",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    onClick: (evt, elements) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const team = labels[index];
        onSelectTeam(team);
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#4B5563",
          font:{size: 12}
        },
        title: {
          display: true,
          text: "xG / match",
          color: "#4B5563",
          font: { size: 14, weight: "bold" },
        },
        grid:{
         color: "#E5E7EB"
        }
      },
      y: {
        ticks: {
          color: "#1F2937",
          font: { size: 13, weight: "500" }
        },
        grid:{
          display: false
        }
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="xg-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}