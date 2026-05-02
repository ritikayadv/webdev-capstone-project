import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const getPlayers = async () => {
  try {
    const res = await axios.get(
      "https://cricbuzz-cricket2.p.rapidapi.com/stats/v1/player/trending",
      {
        headers: {
          "X-RapidAPI-Key": "d431018965mshd1a5470c84e0bc3p1c7396jsn9b2ceac1150b",
          "X-RapidAPI-Host": "cricbuzz-cricket2.p.rapidapi.com",
        },
      }
    );

    return (res.data?.player || []).map((p, index) => ({
      id: p.id || index,
      name: p.name || "Unknown",
      runs: Math.floor(Math.random() * 12000),
      matches: Math.floor(Math.random() * 300),
      avg: (Math.random() * 50).toFixed(2),
      strikeRate: (Math.random() * 150).toFixed(2),
    }));
  } catch (error) {
    console.log("API failed → using fallback");

    return [
      { id: 1, name: "Virat Kohli", runs: 12898, matches: 274, avg: 57.3, strikeRate: 93 },
      { id: 2, name: "Rohit Sharma", runs: 10709, matches: 243, avg: 49.1, strikeRate: 92 },
      { id: 3, name: "MS Dhoni", runs: 10599, matches: 350, avg: 50.5, strikeRate: 87 },
      { id: 4, name: "Joe Root", runs: 8900, matches: 180, avg: 49.5, strikeRate: 86 },
      { id: 5, name: "Steve Smith", runs: 9200, matches: 170, avg: 48.7, strikeRate: 87 },
      { id: 6, name: "Kane Williamson", runs: 8100, matches: 160, avg: 47.9, strikeRate: 81 },
      { id: 7, name: "David Warner", runs: 9500, matches: 210, avg: 45.6, strikeRate: 95 },
      { id: 8, name: "AB de Villiers", runs: 9577, matches: 228, avg: 53.5, strikeRate: 101 },
      { id: 9, name: "Babar Azam", runs: 5400, matches: 100, avg: 56.0, strikeRate: 89 },
      { id: 10, name: "Ben Stokes", runs: 4800, matches: 120, avg: 40.5, strikeRate: 92 },
    ];
  }
};

export const getPlayerStats = async (id) => {
  const players = await getPlayers();
  return players.find((p) => p.id == id);
};