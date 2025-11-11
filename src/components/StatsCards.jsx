import React from "react";

export default function StatsCards({ data }) {
  const totalStudents = data.reduce((acc, d) => acc + d.total_students, 0);
  const avgEvasion = (data.reduce((acc, d) => acc + d.evasion_rate, 0) / data.length).toFixed(1);
  const worstYear = data.reduce((prev, current) => (prev.evasion_rate > current.evasion_rate ? prev : current), {});

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "2rem", flexWrap: "wrap" }}>
      <div style={cardStyle}>
        <h3>Total de Alunos</h3>
        <p>{totalStudents}</p>
      </div>
      <div style={cardStyle}>
        <h3>Média de Evasão</h3>
        <p>{avgEvasion}%</p>
      </div>
      <div style={cardStyle}>
        <h3>Ano Crítico</h3>
        <p>{worstYear.year} ({worstYear.evasion_rate}%)</p>
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: "#f0f4f8",
  padding: "1rem 2rem",
  borderRadius: "8px",
  textAlign: "center",
  minWidth: "150px",
  margin: "0.5rem"
};
