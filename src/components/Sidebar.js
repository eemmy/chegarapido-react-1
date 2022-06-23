import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ setShowSidebar, logged }) {
  //const [logged, setLogged] = useState(false);
  return (
    <div
      className=""
      style={{
        position: "absolute",
        backgroundColor: "white",
        height: "100vh",
        width: "400px",
        zIndex: "90000",
      }}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasMenuLabel">
          <img src="./assets/images/logo.png" alt="Logo" />
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Fechar"
          onClick={() => setShowSidebar(false)}
        ></button>
      </div>
      {logged ? (
        <div className="offcanvas-body">
          <p className="my-5">
            Olá, <span className="text-primary">Welison!</span>
          </p>

          <ul className="list-unstyled mb-5">
            <li className="mb-2">
              <Link to="/" className="text-decoration-none text-black">
                <img src="./assets/images/outline_home_black.png" alt="" />
                <span className="ms-2">Home</span>
              </Link>

              <li className="mb-2">
                <Link
                  to="/myaccount"
                  className="text-decoration-none text-black"
                >
                  <img src="./assets/images/outline_person_black.png" alt="" />
                  <span className="ms-2">Minha conta</span>
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/myaddress"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_maps_home_work_black.png"
                    alt=""
                  />
                  <span className="ms-2">Meus endereços</span>
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/myrequests"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_fact_check_black.png"
                    alt=""
                  />
                  <span className="ms-2">Meus pedidos</span>
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  to="/favorites"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_star_rate_black.png"
                    alt=""
                  />
                  <span className="ms-2">Favoritos</span>
                </Link>
              </li>

              <li className="mb-2">
                <Link to="/wallet" className="text-decoration-none text-black">
                  <img
                    src="./assets/images/outline_attach_money_black.png"
                    alt=""
                  />
                  <span className="ms-2">Carteira (Cashback)</span>
                </Link>
              </li>
            </li>
          </ul>

          <Link
            to="/"
            className="btn btn-outline-primary rounded-pill w-100 shadow-lg"
          >
            <span>Sair</span>
          </Link>
        </div>
      ) : (
        <div className="offcanvas-body">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <p className="my-4">
                Olá, <span className="text-primary">convidado!</span>
              </p>

              <ul className="list-unstyled mb-5">
                <li className="mb-2">
                  <Link
                    to="/establishments"
                    className="text-decoration-none text-black"
                  >
                    <img
                      src="./assets/images/outline_storefront_black.png"
                      alt=""
                    />
                    <span className="ms-2">Estabelecimentos</span>
                  </Link>

                  <li className="mb-2">
                    <a
                      href="#"
                      className="text-decoration-none text-black"
                      disabled
                    >
                      <img
                        src="./assets/images/outline_forum_black.png"
                        alt=""
                      />
                      <span className="ms-2">Sugerir estabelecimentos</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="text-decoration-none text-black">
                      <img
                        src="./assets/images/outline_local_mall_black.png"
                        alt=""
                      />
                      <span className="ms-2">Compre pelo site</span>
                    </a>
                  </li>
                </li>
              </ul>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link
                    to="/registerdeliveryman"
                    className="btn btn-primary rounded-pill w-100 text-start"
                  >
                    <img
                      src="./assets/images/outline_delivery_dining.png"
                      alt=""
                    />
                    <span>Seja entregador</span>
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/registerestablishment"
                    className="btn btn-primary rounded-pill w-100 text-start"
                  >
                    <img src="./assets/images/outline_storefront.png" alt="" />
                    <span>Cadastre seu estabelecimento</span>
                  </Link>
                </li>

                <li className="mb-2">
                  <Link
                    to="/registerfranchised"
                    className="btn btn-primary rounded-pill w-100 text-start"
                  >
                    <img src="./assets/images/outline_store_white.png" alt="" />
                    <span>Seja nosso franqueado</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-top pt-4 d-md-none">
              <Link
                to="/login"
                className="btn btn-primary rounded-pill mb-2 w-100"
              >
                Entrar
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-primary rounded-pill w-100"
              >
                Criar uma conta
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
