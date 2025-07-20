import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { teamRankings } from "./data";
import { useTranslation } from "react-i18next";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Filler
);

export default function OMRankingChart({ team = "Marseille" }) {
  const { t } = useTranslation();

  const rankingData = teamRankings[team] || [];

  const labels = Array.from({ length: rankingData.length }, (_, i) =>
    t("matchweek", { n: i + 1 })
  );

  const getOrdinalSuffix = (n) => {
    if (n >= 11 && n <= 13) return "th";
    switch (n % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: `Classement de ${team}`,
        data: rankingData,
        fill: false,
        tension: 0.3,
        borderColor: "#00264C",
        backgroundColor: "rgba(0, 38, 76, 0.2)",
        pointBackgroundColor:"#B1D34B",
        pointBorderColor: "#fff",
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        reverse: true,
        min: 0,
        max: 12,
        ticks: {
          stepSize: 1,
          color: "#4B5563",
          font: { size: 12, weight: "bold" },
          callback: function (value) {
            return value < 1 ? "" : value;
          },
        },
        grid: {
          color: "#E5E7EB",
        },
      },
      x: {
        ticks: {
          color: "#4B5563",
          font: { size: 12, weight: "bold" },
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const rank = context.raw;
            const suffix = getOrdinalSuffix(rank);
            return t("place", { rank, suffix });
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "320px" }}>
      <Line data={data} options={options} />
    </div>
  );
}