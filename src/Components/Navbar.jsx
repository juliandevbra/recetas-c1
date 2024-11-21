import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { routes } from "../utils/routes";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <button onClick={() => navigate(-1)}>🔙</button>
      <Link to={routes.home}>
        <h4>Home</h4>
      </Link>
      <Link to={routes.form}>
        <h4>Envio</h4>
      </Link>
      <Link to={routes.cart}>
        <h4>Carrito</h4>
      </Link>
    </nav>
  );
};
export default Navbar;
