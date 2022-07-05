import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MenuAccount from "../components/MenuAccount";
import Sidebar from "../components/Sidebar";

import { apiWithToken as api } from "../services/api";

function Favorites() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [tab, setTab] = useState("establishments");
  const [establishments, setEstablishments] = useState([]);
  const [products, setProducts] = useState([]);

  const fetchFavorites = async () => {
    let query = "latitude=-8.040903&longitude=-50.034375&cityId=1";

    const response = await api.get(`/favorites/get?${query}`);

    console.log(response.data.data);
    setEstablishments(response.data.data.estabelecimentos);
    setProducts(response.data.data.produtos);
  };

  const handleFavorite = async (event, id) => {
    event.preventDefault();

    let query = "cityId=1";

    const response = await api.post(`/favorites/action?${query}`, {
      storeId: id,
    });

    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <div
        className="modal"
        id="modalProduct"
        tabindex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="w-100 d-block mb-5">
                    <div id="primary-slider" className="splide mb-4">
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <img
                              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg"
                              className="img-fluid"
                            />
                          </li>
                          <li className="splide__slide">
                            <img
                              src="https://blog.duogourmet.com.br/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1200x675.jpg"
                              className="img-fluid"
                            />
                          </li>
                          <li className="splide__slide">
                            <img
                              src="https://uploads.metropoles.com/wp-content/uploads/2018/09/12120812/pink-burguer.jpeg"
                              className="img-fluid"
                            />{" "}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div id="secondary-slider" className="splide">
                      <div className="splide__track">
                        <ul className="splide__list">
                          <li className="splide__slide">
                            <img
                              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg"
                              className="img-fluid"
                            />
                          </li>
                          <li className="splide__slide">
                            <img
                              src="https://blog.duogourmet.com.br/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1200x675.jpg"
                              className="img-fluid"
                            />
                          </li>
                          <li className="splide__slide">
                            <img
                              src="https://uploads.metropoles.com/wp-content/uploads/2018/09/12120812/pink-burguer.jpeg"
                              className="img-fluid"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <h2 className="mb-3">Gorgonzola Burger + Porção</h2>
                  <a href="#" className="text-decoration-none fw-light">
                    Jac Burger
                  </a>
                  <p className="fw-light mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    varius pellentesque pulvinar. Lorem ipsum dolor sit .
                  </p>

                  <div className="mb-3">
                    <button
                      id="btn-collapse-choose-drink"
                      className="btn btn-primary rounded-0 w-100 d-flex justify-content-between"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-choose-drink"
                      aria-expanded="false"
                      aria-controls="collapse-choose-drink"
                    >
                      <span>Escolha o sabor do refrigerante</span>
                    </button>

                    <div className="collapse py-3" id="collapse-choose-drink">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="coca-cola"
                        />
                        <label className="form-check-label" for="coca-cola">
                          Coca-Cola
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="coca-cola-zero"
                        />
                        <label
                          className="form-check-label"
                          for="coca-cola-zero"
                        >
                          Coca-Cola Zero
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="fanta"
                        />
                        <label className="form-check-label" for="fanta">
                          Fanta
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="guarana"
                        />
                        <label className="form-check-label" for="guarana">
                          Guaraná
                        </label>
                      </div>
                    </div>
                  </div>

                  <p>Alguma observação?</p>

                  <textarea
                    className="form-control mb-5"
                    cols="30"
                    rows="2"
                    placeholder="Exemplo: Adicionar mais sal na carne, tirar o tomate e etc ..."
                    style={{ backgroundColor: "#F4F4F4" }}
                  ></textarea>

                  <div className="d-flex">
                    <div className="quantity-wrap flex-shrink-0 border border-primary rounded me-3 d-flex justify-content-between">
                      <button id="decrease" className="btn shadow-none">
                        -
                      </button>
                      <input
                        id="quantity"
                        type="number"
                        value="1"
                        min="1"
                        className="border-0 form-control shadow-none"
                      />
                      <button id="increase" className="btn shadow-none">
                        +
                      </button>
                    </div>

                    <button className="btn btn-outline-primary d-flex justify-content-between flex-shrink-1 flex-1">
                      <span>Adicionar</span>
                      <span>R$ 90,50</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "50%",
          left: "-35px",
          transform: "rotate(90deg)",
          borderEndEndRadius: "0",
          borderEndStartRadius: "0",
          zIndex: "10",
        }}
      >
        <img src="./assets/images/outline_confirmation_number.png" alt="" />
        Cupons
      </a>

      <button
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "45%",
          right: "-10px",
          transform: "rotate(-90deg)",
        }}
      >
        <img src="./assets/images/outline_shopping_cart.png" alt="" />
      </button>

      <button
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "65%",
          right: "-25px",
          transform: "rotate(-90deg)",
          borderEndEndRadius: "0",
          borderEndStartRadius: "0",
          zIndex: "10",
        }}
      >
        Express
      </button>

      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} logged={true} />
      ) : (
        ""
      )}

      <Header setShowSidebar={setShowSidebar} />

      <main className="mt-4">
        <div className="container">
          <MenuAccount selected={"favorites"} />

          <div className="row">
            <div className="col-12 col-md-6">
              <form action="" className="py-5">
                <div className="d-flex mb-5">
                  <img
                    src="./assets/images/fill_favorite.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">Favoritos</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <ul
                  className="nav app-nav-tabs justify-content-between mb-5"
                  role="tablist"
                >
                  <li className="app-nav-item">
                    <button
                      className={`app-nav-link ${
                        tab == "establishments" ? "active" : ""
                      }`}
                      id="establishments-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#establishments"
                      type="button"
                      role="tab"
                      aria-controls="establishments"
                      aria-selected="true"
                      onClick={() => setTab("establishments")}
                    >
                      Estabelecimentos
                    </button>
                  </li>
                  <li className="app-nav-item" role="presentation">
                    <button
                      className={`app-nav-link ${
                        tab == "products" ? "active" : ""
                      }`}
                      id="products-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#products"
                      type="button"
                      role="tab"
                      aria-controls="products"
                      aria-selected="false"
                      onClick={() => setTab("products")}
                    >
                      Produtos
                    </button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  {tab == "establishments" ? (
                    <div
                      className="tab-pane fade show active"
                      id="establishments"
                      role="tabpanel"
                      aria-labelledby="establishments-tab"
                    >
                      <div className="row">
                        {establishments.map((establishment) => {
                          return (
                            <div className="col-6 col-md-12 col-lg-6 mb-4">
                              <div
                                className={`product d-flex shadow-lg p-3 position-relative rounded-10 ${
                                  establishment.status_aberto == 0
                                    ? "closed"
                                    : ""
                                }`}
                              >
                                <div className="me-3">
                                  <Link
                                    to="/establishmentsclose"
                                    className="text-decoration-none position-relative"
                                  >
                                    {establishment.status_aberto == 0 ? (
                                      <p className="closed-title text-white position-absolute d-block">
                                        Fechado
                                      </p>
                                    ) : (
                                      ""
                                    )}

                                    <img
                                      src={establishment.icone}
                                      alt=""
                                      className="img-fluid"
                                      width="80"
                                      height="80"
                                    />
                                  </Link>
                                </div>

                                <div>
                                  <button
                                    className="favorite"
                                    onClick={(event) =>
                                      handleFavorite(event, establishment.id)
                                    }
                                  >
                                    <img
                                      src="./assets/images/outline_favorite_border.png"
                                      alt=""
                                    />
                                  </button>
                                  <Link
                                    to="/establishmentsopen"
                                    className="text-decoration-none text-black fw-bold"
                                  >
                                    <h2 className="fs-5 mb-0 pe-4">
                                      {establishment.nome}
                                    </h2>
                                  </Link>
                                  <div className="mb-2">
                                    {[
                                      ...Array(
                                        Number.parseInt(establishment.stars)
                                      ),
                                    ].map(() => {
                                      return (
                                        <img
                                          src="./assets/images/star.png"
                                          alt=""
                                        />
                                      );
                                    })}
                                  </div>

                                  <p className="mb-0">R$ 4,66 - 11,5 km </p>
                                  <p>35 – 45 min</p>
                                  <p className="text-danger">Cashback: 3%</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {tab == "products" ? (
                    <div
                      className="tab-pane fade inner-border show active"
                      id="products"
                      role="tabpanel"
                      aria-labelledby="products-tab"
                    >
                      <div className="py-5">
                        <div className="d-flex position-relative rounded-10">
                          <div className="me-3">
                            <a
                              href="#"
                              className="text-decoration-none position-relative"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                alt=""
                                className="img-fluid"
                                width="230"
                                height="120"
                              />
                            </a>
                          </div>

                          <div>
                            <button className="favorite">
                              <img src="./assets/images/outline_favorite_border.png" />
                            </button>
                            <a
                              href="#"
                              className="text-decoration-none text-black fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <h2 className="fs-5 mb-3 pe-4">
                                Gorgonzola Burger + Porção
                              </h2>
                            </a>

                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras facilisis risus nibh, ut porta libero
                              interdum nec.
                            </p>
                            <p>35 – 45 min</p>
                            <p className="fs-6 mb-0">R$ 90,50</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="d-flex position-relative rounded-10">
                          <div className="me-3">
                            <a
                              href="#"
                              className="text-decoration-none position-relative"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                alt=""
                                className="img-fluid"
                                width="230"
                                height="120"
                              />
                            </a>
                          </div>

                          <div>
                            <button className="favorite">
                              <img src="./assets/images/outline_favorite_border.png" />
                            </button>
                            <a
                              href="#"
                              className="text-decoration-none text-black fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <h2 className="fs-5 mb-3 pe-4">
                                Gorgonzola Burger + Porção
                              </h2>
                            </a>

                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras facilisis risus nibh, ut porta libero
                              interdum nec.
                            </p>
                            <p>35 – 45 min</p>
                            <p className="fs-6 mb-0">R$ 90,50</p>
                          </div>
                        </div>
                      </div>

                      <div className="py-5">
                        <div className="d-flex position-relative rounded-10">
                          <div className="me-3">
                            <a
                              href="#"
                              className="text-decoration-none position-relative"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                alt=""
                                className="img-fluid"
                                width="230"
                                height="120"
                              />
                            </a>
                          </div>

                          <div>
                            <button className="favorite">
                              <img src="./assets/images/outline_favorite_border.png" />
                            </button>
                            <a
                              href="#"
                              className="text-decoration-none text-black fw-bold"
                              data-bs-toggle="modal"
                              data-bs-target="#modalProduct"
                            >
                              <h2 className="fs-5 mb-3 pe-4">
                                Gorgonzola Burger + Porção
                              </h2>
                            </a>

                            <p className="mb-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Cras facilisis risus nibh, ut porta libero
                              interdum nec.
                            </p>
                            <p>35 – 45 min</p>
                            <p className="fs-6 mb-0">R$ 90,50</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
            <div className="col-6 d-none d-md-block text-center">
              <img
                src="./assets/images/favorites.png"
                alt=""
                className="img-fluid mb-5  d-none d-md-block"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="position-relative">
        <div className="bg-black">
          <div className="container">
            <div
              className="d-sm-block d-md-flex justify-content-between align-items-center"
              style={{ borderBottom: "1px solid #131313" }}
            >
              <img src="./assets/images/logo_footer.png" alt="Logo" />

              <div className="p-5 py-md-4 p-md-0">
                <div className="d-inline-block me-5">
                  <a href="#" className="text-decoration-none">
                    <img
                      src="./assets/images/google_play.png"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#" className="text-decoration-none">
                    <img src="./assets/images/app_store.png" alt="App Stote" />
                  </a>
                </div>

                <a
                  href="#"
                  className="text-decoration-none position-absolute right-0"
                  style={{ top: "30px" }}
                >
                  <img src="./assets/images/outline_chevron_top.png" alt="" />
                </a>
              </div>
            </div>

            <div className="py-5 px-5 d-flex flex-wrap">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">
                  Chegarápido Delivery
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Compre pelo site
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Minha conta
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Termos e condições de uso
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Políticas de Privacidade
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Entregador</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Seja um entregador
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Baixar aplicativo
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Entregador Express
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Parceiro</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Seja um parceiro
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Painel financeiro
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Painel operacional
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Franqueado</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Seja um franqueado
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Conheça o chegarápido express
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Trabalhe com a gente
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-mini py-4">
          <div className="container">
            <div className="d-block d-md-flex justify-content-between align-items-center">
              <p className="text-white mb-md-0 col-12 col-md-4">
                00.000.000/0000-00
              </p>
              <p className="text-white mb-md-0 col-12 col-md-4">
                © Copyright 2021 - <strong>Chegarápido Delivery</strong>.
              </p>
              <div className="col-12 col-md-4 footer-social">
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/facebook.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/instagram.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/whatsapp.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Favorites;
