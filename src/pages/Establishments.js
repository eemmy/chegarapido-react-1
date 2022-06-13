function Establishments() {
  return (
    <div>
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
        type="button"
        data-quantity="10"
        className="btn btn-primary text-white d-none d-md-block btn-cart-float"
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

      <div
        className="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
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
          ></button>
        </div>
        <div className="offcanvas-body">
          <p className="my-4">
            Olá, <span className="text-primary">convidado!</span>
          </p>

          <ul className="list-unstyled mb-5">
            <li className="mb-2">
              <a
                href="./estabelecimentos.html"
                className="text-decoration-none text-black"
              >
                <img
                  src="./assets/images/outline_storefront_black.png"
                  alt=""
                />
                <span className="ms-2">Estabelecimentos</span>
              </a>

              <li className="mb-2">
                <a href="#" className="text-decoration-none text-black">
                  <img src="./assets/images/outline_forum_black.png" alt="" />
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
              <a
                href="./cadastro-entregador.html"
                className="btn btn-primary rounded-pill w-100 text-start"
              >
                <img src="./assets/images/outline_delivery_dining.png" alt="" />
                <span>Seja entregador</span>
              </a>
            </li>

            <li className="mb-2">
              <a
                href="./cadastro-estabelecimento.html"
                className="btn btn-primary rounded-pill w-100 text-start"
              >
                <img src="./assets/images/outline_storefront.png" alt="" />
                <span>Cadastre seu estabelecimento</span>
              </a>
            </li>

            <li>
              <a
                href="./cadastro-franqueado.html"
                className="btn btn-primary rounded-pill w-100 text-start"
              >
                <img src="./assets/images/outline_store_white.png" alt="" />
                <span>Seja nosso franqueado</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section id="hero">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white py-4">
            <div className="container">
              <div className="d-flex align-items-center">
                <button
                  className="btn me-0 me-md-4"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasMenu"
                  aria-controls="offcanvasMenu"
                >
                  <img
                    className="icon-menu-header"
                    src="./assets/images/outline_menu.png"
                    alt="Icon Menu"
                  />
                </button>
                <a className="navbar-brand" href="index.html">
                  <img
                    className="logo-header"
                    src="./assets/images/logo.png"
                    alt="Chega Rápido"
                  />
                </a>
              </div>

              <div className="d-flex">
                <div className="d-none d-lg-block">
                  <p className="text-primary mb-0">Entrega em:</p>
                  <p className="text-gray-600 mb-0">
                    <img src="./assets/images/outline_place.png" alt="" />
                    Selecionar endereço
                    <img src="./assets/images/outline_expand_more.png" alt="" />
                  </p>
                </div>

                <div className="d-flex align-items-center ms-md-5 ms-0">
                  <a
                    href="./criar-conta.html"
                    className="me-4 text-primary text-decoration-none d-none d-md-block"
                  >
                    Criar conta
                  </a>

                  <a
                    href="./entrar.html"
                    className="btn btn-primary btn-sm btn-md-lg rounded-pill py-1 px-3 py-md-2 px-md-4 shadow-lg text-white fs-6 fw-normal"
                  >
                    Entrar
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="position-relative">
          <h2
            className="fw-normal text-primary text-center opacity-75 mb-5"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: "999",
            }}
          >
            #carouseldeofertas
          </h2>

          <div id="carouseldeofertas" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <img
                    src="./assets/images/store-1.png"
                    className="img-fluid"
                    style={{ backdropFilter: "brightness(20%)" }}
                  />
                </li>
                <li className="splide__slide">
                  <img
                    src="./assets/images/store-1.png"
                    className="img-fluid"
                    style={{ backdropFilter: "brightness(20%)" }}
                  />
                </li>
                <li className="splide__slide">
                  <img
                    src="./assets/images/store-1.png"
                    className="img-fluid"
                    style={{ backdropFilter: "brightness(20%)" }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form action="" method="get">
          <div className="container bg-white p-4 p-lg-0 rounded shadow-lg search-wrap">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <div className="input-group input-group-rounded-pill shadow-xl me-4">
                  <span className="input-group-text ps-4">
                    <img
                      src="./assets/images/outline_restaurant_2.png"
                      width="30"
                      height="30"
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="Digite aqui o nome do prato ou restaurante..."
                    className="form-control form-control-lg bg-with fs-6 py-lg-4"
                  />
                </div>
              </div>

              <div className="col-12 col-lg-3 mb-3">
                <div className="input-group input-group-rounded-pill shadow-xl">
                  <span className="input-group-text ps-4">
                    <img
                      src="./assets/images/outline_watch_later.png"
                      width="24"
                      height="24"
                    />
                  </span>

                  <select
                    className="form-select fs-6 text-gray-400 px-3 py-2  p-lg-4"
                    aria-label="Entregar agora"
                  >
                    <option>Hórario de entrega</option>
                    <option value="1" selected>
                      Entregar agora
                    </option>
                    <option value="2">...</option>
                  </select>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill text-white btn-lg fs-6 shadow-xl px-3 py-2  py-lg-4 px-lg-5 text-center w-100"
                >
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <h3 className="fw-light mb-5">
                Todos os <br />{" "}
                <span className="fw-bold">estabelecimentos</span>
              </h3>

              <div className="accordion accordion-flush" id="accordionFilter">
                <div className="accordion-item" style={{ border: "0" }}>
                  <h2 className="accordion-header" id="headingOrder">
                    <button
                      className="accordion-button accordion__button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOrder"
                      aria-expanded="false"
                      aria-controls="collapseOrder"
                    >
                      Ordenar
                    </button>
                  </h2>
                  <div
                    id="collapseOrder"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOrder"
                  >
                    <div className="d-flex flex-column mb-4">
                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          name="order"
                          id="order1"
                          className="form-check-input"
                        />
                        <label
                          for="order1"
                          className="form-check-label fw-light"
                        >
                          Sugestões
                        </label>
                      </div>

                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          name="order"
                          id="order2"
                          className="form-check-input"
                          checked
                        />
                        <label
                          for="order2"
                          className="form-check-label fw-light"
                        >
                          Mais populares
                        </label>
                      </div>

                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          name="order"
                          id="order3"
                          className="form-check-input"
                        />
                        <label
                          for="order3"
                          className="form-check-label fw-light"
                        >
                          Avaliação
                        </label>
                      </div>

                      <div className="form-check mb-2">
                        <input
                          type="radio"
                          name="order"
                          id="order4"
                          className="form-check-input"
                        />
                        <label
                          for="order4"
                          className="form-check-label fw-light"
                        >
                          Tempo de entrega
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "0" }}>
                  <h2 className="accordion-header" id="headingPriceRange">
                    <button
                      className="accordion-button accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsePriceRange"
                      aria-expanded="false"
                      aria-controls="collapsePriceRange"
                    >
                      Faixa de preço
                    </button>
                  </h2>
                  <div
                    id="collapsePriceRange"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingPriceRange"
                  >
                    <div className="d-flex justify-content-between">
                      <div className="price-range-block">
                        <input
                          name="price-range"
                          type="radio"
                          id="price-range-1"
                          className="d-none"
                        />
                        <label
                          for="price-range-1"
                          className="fs-14 bg-gray-50 px-4 py-2 px-md-3 py-md-1 rounded-pill"
                        >
                          $
                        </label>
                      </div>

                      <div className="price-range-block">
                        <input
                          name="price-range"
                          type="radio"
                          id="price-range-2"
                          className="d-none"
                          checked
                        />
                        <label
                          for="price-range-2"
                          className="fs-14 bg-gray-50 px-4 py-2 px-md-3 py-md-1 rounded-pill"
                        >
                          $$
                        </label>
                      </div>

                      <div className="price-range-block">
                        <input
                          name="price-range"
                          type="radio"
                          id="price-range-3"
                          className="d-none"
                        />
                        <label
                          for="price-range-3"
                          className="fs-14 bg-gray-50 px-4 py-2 px-md-3 py-md-1 rounded-pill"
                        >
                          $$$
                        </label>
                      </div>

                      <div className="price-range-block">
                        <input
                          name="price-range"
                          type="radio"
                          id="price-range-4"
                          className="d-none"
                        />
                        <label
                          for="price-range-4"
                          className="fs-14 bg-gray-50 px-4 py-2 px-md-3 py-md-1 rounded-pill"
                        >
                          $$$$
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "0" }}>
                  <h2 className="accordion-header" id="headingRestrictions">
                    <button
                      className="accordion-button accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseRestrictions"
                      aria-expanded="false"
                      aria-controls="collapseRestrictions"
                    >
                      Restrições
                    </button>
                  </h2>
                  <div
                    id="collapseRestrictions"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingRestrictions"
                  >
                    <div className="d-flex justify-content-around">
                      <div className="restrictions-block">
                        <input
                          name="restrictions"
                          type="radio"
                          id="restrictions-1"
                          className="d-none"
                        />
                        <label
                          for="restrictions-1"
                          className="fs-14 bg-gray-50 px-2 py-1 px-lg-4 py-lg-2 rounded-pill w-100"
                        >
                          Vegetariano
                        </label>
                      </div>

                      <div className="restrictions-block">
                        <input
                          name="restrictions"
                          type="radio"
                          id="restrictions-2"
                          className="d-none"
                          checked
                        />
                        <label
                          for="restrictions-2"
                          className="fs-14 bg-gray-50 px-2 py-1 px-lg-4 py-lg-2 rounded-pill w-100 text-nowrap"
                        >
                          Sem Glúten
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={{ border: "0" }}>
                  <h2 className="accordion-header" id="headingDeliveryPrice">
                    <button
                      className="accordion-button accordion__button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDeliveryPrice"
                      aria-expanded="false"
                      aria-controls="collapseDeliveryPrice"
                    >
                      Preço da entrega
                    </button>
                  </h2>
                  <div
                    id="collapseDeliveryPrice"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingDeliveryPrice"
                  >
                    <div id="slider"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8 col-lg-9">
              <div className="scroll-x">
                <nav>
                  <ul className="list-unstyled d-flex justify-content-between bg-white">
                    <li>
                      <a
                        href="#"
                        className="text-decoration-none text-gray-700 btn rounded-pill"
                      >
                        #supermercados
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-decoration-none text-gray-700 btn rounded-pill"
                      >
                        #bebidas
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-decoration-none btn btn-outline-primary rounded-pill "
                      >
                        #restaurantes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-decoration-none text-gray-700 btn rounded-pill"
                      >
                        #promocoes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-decoration-none text-gray-700 btn rounded-pill"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        Ver mais{" "}
                        <img
                          src="./assets/images/outline_chevron_down.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <ul className="row list-unstyled">
              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>

              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>

              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-fechado.html"
                      className="text-decoration-none closed-store"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-fechado.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>

              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>

              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>

              <li className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="d-flex shadow-lg p-3 position-relative rounded-10">
                  <div className="me-3">
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none"
                    >
                      <img
                        src="./assets/images/jac-burger.png"
                        alt=""
                        className="img-fluid"
                        width="80"
                        height="80"
                      />
                    </a>
                  </div>

                  <div>
                    <img
                      src="./assets/images/outline_favorite_border.png"
                      alt=""
                      className="favorite position-absolute"
                    />
                    <a
                      href="./estabelecimento-aberto.html"
                      className="text-decoration-none text-black fw-bold"
                    >
                      <h2 className="store-title fs-5 mb-0 pe-4 d-inline-block text-truncate">
                        Jac Burger
                      </h2>
                    </a>
                    <div className="mb-2">
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                      <img src="./assets/images/star.png" />
                    </div>

                    <p className="mb-0 fs-14">R$ 4,66 - 11,5 km </p>
                    <p className="fs-14">35 – 45 min</p>
                    <p className="fs-14 text-danger">Cashback: 3%</p>
                  </div>
                </div>
              </li>
            </ul>

            <button className="btn btn-primary w-100 text-white shadow-lg btn-lg">
              <img
                src="./assets/images/outline_refresh_white.png"
                alt=""
                className="me-3"
              />
              Atualizar mais estabelecimentos
            </button>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-block d-md-flex justify-content-between">
          <div className="col-sm-12 col-md-3 col-lg-4">
            <h2 className="mb-4">
              <span className="fw-bold">#</span>Categorias
            </h2>

            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_store.png"
                    alt="icon supermercados"
                    width="30"
                    height="30"
                  />
                  #supermercados
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_restaurant.png"
                    alt="icon restaurantes"
                    width="30"
                    height="30"
                  />
                  #restaurantes
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_medication.png"
                    alt="icon farmacias"
                    width="30"
                    height="30"
                  />
                  #farmacias
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-primary rounded-pill text-white text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_sports_bar.png"
                    alt="icon bebidas"
                    width="30"
                    height="30"
                  />
                  #bebidas
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_local_shipping.png"
                    alt="icon express"
                    width="30"
                    height="30"
                  />
                  #express
                </button>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-9 col-lg-8 ps-md-5 ps-0">
            <div
              id="myCarousel"
              className=" carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className="active rounded-circle"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  className="rounded-circle bg-white"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  className="rounded-circle bg-white"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <p className="mb-0 d-inline-block ms-2">Popular</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // Sao Paulo - SP //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Visitar
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <p className="mb-0 d-inline-block ms-2">Popular</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // São Paulo - SP //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Visitar
                    </a>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <p className="mb-0 d-inline-block ms-2">Popular</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // Goiânia - GO //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Visitar
                    </a>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev opacity-100"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                style={{ marginLeft: "-1px", width: "70px" }}
              >
                <div
                  className="bg-white"
                  style={{
                    borderRadius: "0 35px 35px 0",
                    width: "35px",
                    height: "70px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <span
                    style={{ marginTop: "20px", marginLeft: "-20px" }}
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </div>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next opacity-100"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                style={{ marginRight: "-1px", width: "70px" }}
              >
                <div
                  className="bg-white"
                  style={{
                    borderRadius: "35px 0 0 35px",
                    width: "35px",
                    height: "70px",
                    transform: "translateX(50%)",
                  }}
                >
                  <span
                    style={{ marginTop: "20px", marginLeft: "10px" }}
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </div>
                <span className="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>
              Pratos // lanches <strong>mais pedidos</strong>
            </h2>
            <a href="#" className="text-black">
              Ver todos
            </a>
          </div>

          <div id="products-more-requests" className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="px-2">
                    <div className="position-relative">
                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/burguer.png"
                          alt=""
                          className="img-fluid w-100"
                        />
                      </a>

                      <a href="#">
                        <img
                          src="./assets/images/fill_favorite_white.png"
                          alt=""
                          className="position-absolute"
                          style={{ top: "15px", right: "15px" }}
                        />
                      </a>

                      <a href="#" className="text-decoration-none">
                        <img
                          src="./assets/images/outline_shopping_cart.png"
                          alt=""
                          className="position-absolute"
                          style={{ bottom: "15px", right: "15px" }}
                        />
                      </a>
                    </div>

                    <div className="d-flex justify-content-between align-tems-center mt-4">
                      <h4 className="fs-6">
                        <a href="#" className="text-decoration-none text-black">
                          Gorgonzola Burger + Porção
                        </a>
                      </h4>
                      <div>
                        <img src="./assets/images/star.png" />
                        <span className="mb-0 ms-1">4.9</span>
                      </div>
                    </div>
                    <p className="text-primary fw-bold mb-1 fs-7">
                      <a href="#" className="text-decoration-none">
                        Jac Burger
                      </a>
                    </p>
                    <p className="fs-7">
                      R$ 35,50 / 05min - 10min / Frete: 4,40
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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

export default Establishments;
