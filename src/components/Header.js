import { useState } from "react";
import { Link } from "react-router-dom";

import SelectAddress from "../components/modals/SelectAddress";

function Header({ setShowSidebar }) {
  const [hidden, setHidden] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));

  const [logged, setLogged] = useState(user ? true : false);

  return (
    <header className="shadow-lg">
      <SelectAddress hidden={hidden} closeModal={() => setHidden(true)} />

      <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
        <div className="container">
          <div className="d-flex align-items-center">
            <button
              className="btn me-0 me-md-4"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
              aria-controls="offcanvasMenu"
              onClick={() => setShowSidebar(true)}
            >
              <img
                className="icon-menu-header"
                src="./assets/images/outline_menu.png"
                alt="Icon Menu"
              />
            </button>
            <Link className="navbar-brand" to="/">
              <img
                className="logo-header"
                src="./assets/images/logo.png"
                alt="Chega Rápido"
              />
            </Link>
          </div>

          <div className="d-flex">
            <div className="d-none d-lg-block">
              <p className="text-primary mb-0">Entrega em:</p>
              <button
                className="btn px-0 text-gray-600 mb-0 btn btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#select-address-modal"
                onClick={() => setHidden(false)}
              >
                <img src="./assets/images/outline_place.png" alt="" />
                Selecionar endereço
                <img src="./assets/images/outline_expand_more.png" alt="" />
              </button>
            </div>

            {logged ? (
              <div className="d-flex align-items-center ms-5">
                Olá, <span className="text-primary ms-2">Welison</span>
                <img src="./assets/images/outline_expand_more.png" alt="" />
              </div>
            ) : (
              <div className="d-flex align-items-center ms-md-5 ms-0">
                <Link
                  to="/register"
                  className="me-4 text-primary text-decoration-none d-none d-md-block"
                >
                  Criar conta
                </Link>

                <Link
                  to="/login"
                  className="btn btn-primary btn-sm btn-md-lg rounded-pill py-1 px-3 py-md-2 px-md-4 shadow-lg text-white fs-6 fw-normal"
                >
                  Entrar
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
