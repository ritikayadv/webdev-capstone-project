import { useEffect, useState } from "react";
import { getPlayers } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPlayers().then((data) => {
      setPlayers(Array.isArray(data) ? data : []);
    });
  }, []);

  const filtered = players.filter((p) =>
    (p?.name || "").toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (player) => {
    if (selected.length < 2 && !selected.includes(player)) {
      setSelected([...selected, player]);
    }
  };

  return (
    <div className="container">
      <h1>🏏 player Dashboard</h1>

      <input
        placeholder="Search player..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        disabled={selected.length < 2}
        onClick={() => navigate("/compare", { state: selected })}
      >
        Compare Players
      </button>

      <div className="grid">
        {filtered.map((p, i) => (
          <div key={i} className="card">
            <h3>{p?.name}</h3>
            <button onClick={() => handleSelect(p)}>Select</button>
            <button onClick={() => navigate(`/player/${p.id}`)}>
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;