import Image from "next/image";
import styles from "./page.module.css";
import logo from './images/logo.svg'

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image src={logo} alt="Logo NC - Desinfestações"></Image>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Abrir/Fechar menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
