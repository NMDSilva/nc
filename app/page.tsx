import Image from "next/image";
import logo from './images/logo.svg'

export default function Home() {
  return (
    <>
      <nav id="navbar-example2" className="navbar navbar-expand-md fixed-top">
        <a className="navbar-brand" href="#home">
          <Image src={logo} alt="Logo NC - Desinfestações"></Image>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          data-bs-backdrop="static"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#list-item-1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#list-item-2">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#list-item-3">Contactos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex={0}>
      
        <h4 id="list-item-1">Item 1</h4>
        <ul>
          <li><span>bbb</span></li>
          <li><span>ccc</span></li>
          <li><span>dddd</span></li>
          <li><span>eeee</span></li>
          <li><span>fff</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li></li>
        </ul>
        <h4 id="list-item-2">Item 2</h4>
        <ul>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
        </ul>
        <h4 id="list-item-3">Item 3</h4>
<ul>
        <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
          <li><span>teste</span></li>
        </ul>
      </div>
    </>
  );
}
