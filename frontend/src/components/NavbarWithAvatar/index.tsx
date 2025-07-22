import { SNavbar } from "./styles";
import logo from "@/assets/images/LOGO.png";
import firstGuest from "@/assets/images/avatars/first_guest.png";
import { Link } from "react-router-dom";


export function NavbarComAvatar() {
  return (
    <SNavbar>
      <nav>
        <ul>
          <Link to="/">
          <img src={logo} alt="Logo" />
          </Link>

          <li>
            <input type="checkbox" id="dropdown-toggle" hidden />
            <label htmlFor="dropdown-toggle">
              <img src={firstGuest} alt="Menu" />
            </label>

            <ul className="dropdown-menu">
              <li><a href="/pages/auth/login.html">PERFIL</a></li>
              <li><a href="/">SAIR</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </SNavbar>
  );
}
