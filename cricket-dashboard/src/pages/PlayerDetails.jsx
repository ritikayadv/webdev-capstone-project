import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPlayerStats } from "../services/api";

const PlayerDetails = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    getPlayerStats(id).then(setPlayer);
  }, [id]);

  if (!player) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{player.name}</h2>
      <p>🏏 Runs: {player.runs}</p>
      <p>🎯 Matches: {player.matches}</p>
      <p>📊 Average: {player.avg}</p>
      <p>⚡ Strike Rate: {player.strikeRate}</p>
    </div>
  );
};

export default PlayerDetails;