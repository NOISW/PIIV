import React, { useEffect, useState } from "react";
import EvasionChart from "./EvasionChart";
import StatsCards from "./StatsCards";
import { fetchEvasionData } from "../api";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEvasionData().then(setData);
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Dashboard de Evasão Escolar</h1>
      {data.length > 0 && <StatsCards data={data} />}
      <EvasionChart />
    </div>
  );
}
