import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgLogo = ".//img/logosinf.jpg"
  return (

    <header>
        <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="Logo" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Pc Gamer </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> Hardware </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/4"}> Accesorios </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar