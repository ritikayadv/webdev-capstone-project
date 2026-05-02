import { useLocation } from "react-router-dom";

const Compare = () => {
  const { state } = useLocation();

  if (!state || state.length < 2) {
    return <p>Select 2 players first</p>;
  }

  const [p1, p2] = state;

  return (
    <div className="container">
      <h2>⚔️ Player Comparison</h2>

      <div className="grid">
        <div className="card">
          <h3>{p1.name}</h3>
          <p>Runs: {p1.runs}</p>
          <p>Matches: {p1.matches}</p>
          <p>Avg: {p1.avg}</p>
          <p>SR: {p1.strikeRate}</p>
        </div>

        <div className="card">
          <h3>{p2.name}</h3>
          <p>Runs: {p2.runs}</p>
          <p>Matches: {p2.matches}</p>
          <p>Avg: {p2.avg}</p>
          <p>SR: {p2.strikeRate}</p>
        </div>
      </div>
    </div>
  );
};

export default Compare;