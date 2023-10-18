import Avida from '/src/assets/avida.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success sticky-top">
        <div className="container-xxl">
          <a className="navbar-brand" href="#">
            <img src={Avida} className='img-fluid' style={{maxWidth: '80px'}} alt="Logo de Avida" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Mapa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Comunidad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Planificador
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Enciclopedia
                </a>
              </li>
            </ul>
            <form className="justify-content-start">
              <Link to={"/login"}>
              <button
                className="btn btn-outline-warning me-2 text-white"
                type="button"
              >
                Iniciar Sesión
              </button>
              </Link>
              <button className="btn btn-primary" type="button">
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
