import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchEvasionData } from "../api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function EvasionChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvasionData().then(setData);
  }, []);

  const chartData = {
    labels: data.map(d => d.year),
    datasets: [{
      label: "Taxa de Evasão (%)",
      data: data.map(d => d.evasion_rate),
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.3,
      fill: true,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Evasão Escolar Anual (%)" }
    },
  };

  return <Line data={chartData} options={options} />;
}
