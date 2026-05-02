import { useNavigate } from "react-router-dom";

const PlayerCard = ({ player }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h3>{player.name}</h3>
      <p>{player.country}</p>

      <button onClick={() => navigate(`/player/${player.id}`)}>
        View Details
      </button>
    </div>
  );
};

export default PlayerCard;