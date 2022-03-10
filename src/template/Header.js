import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Image from "../merketFy.jpg";

function Header() {
  return (
    <header>
      <nav className="fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <Link className="navbar-brand" to="/">
                <>
                  <img alt="" src={Image} height="70" width="120" />
                </>
              </Link>
            </div>
            <div className="col-2 align-self-end">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Aliados
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Ayuda
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="!#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    id="userDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={["fas", "user-alt"]} />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userDropdown"
                  >
                    <li>
                      <Link to="/" className="dropdown-item">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="dropdown-item">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
