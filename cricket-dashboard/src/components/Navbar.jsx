import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>player Dashboard</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
      </div>
    </nav>
  );
};

export default Navbar;