function EstablishmentsClose() {
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
                            />
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

      <div
        className="modal"
        id="modalInfo"
        tabindex="-1"
        aria-labelledby="infoModalLabel"
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
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <h2 className="mb-4 fw-bold">Sobre</h2>

                    <div className="mb-4">
                      <h6 style={{ fontWeight: "500" }}>Endereço</h6>
                      <p className="text-gray-700 mb-1">
                        R Segismundo Mendes, 77 - Centro
                      </p>
                      <p className="text-gray-700">Uberaba - MG</p>
                    </div>

                    <div className="mb-4">
                      <h6 style={{ fontWeight: "500" }}>CEP</h6>
                      <p className="text-gray-700">00000-000</p>
                    </div>

                    <div className="mb-4">
                      <h6 style={{ fontWeight: "500" }}>Outras informações</h6>
                      <p className="text-gray-700">CNPJ: 00.000.000/0001-00</p>
                    </div>

                    <h2 className="mb-4 fw-bold">Horário</h2>

                    <ul className="list-unstyled mb-4">
                      <li className="text-gray-700">
                        <strong className="text-black">Seg</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Ter</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Qua</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Qui</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Sex</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Sáb</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                      <li className="text-gray-700">
                        <strong className="text-black">Dom</strong> - 10:30 às
                        16:30 - 17:00 às 23:59
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <h2 className="mb-4">Avaliações</h2>

                    <ul className="list-unstyled">
                      <li>
                        <h6
                          className="d-inline-block"
                          style={{ fontWeight: "500" }}
                        >
                          Nome da pessoa
                        </h6>
                        <span
                          className="float-end"
                          style={{ color: "#D2CA00" }}
                        >
                          <img src="./assets/images/star.png" /> 4,8
                        </span>

                        <div className="mb-2">
                          <img
                            src="./assets/images/outline_today_black.png"
                            width="18"
                            height="18"
                          />
                          <span className="me-2">02/08/2021</span>

                          <img
                            src="./assets/images/outline_schedule_black.png"
                            width="18"
                            height="18"
                          />
                          <span>15:14h</span>
                        </div>

                        <p className="text-gray-700">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec condimentum imperdiet quam, ut dignissim
                          orci molestie sed.”
                        </p>

                        <ul style={{ listStyle: "none" }}>
                          <li>
                            <h6
                              className="d-inline-block text-primary"
                              style={{ fontWeight: "500" }}
                            >
                              Jac Burger
                            </h6>
                            <span
                              className="float-end"
                              style={{ color: "#D2CA00" }}
                            >
                              <img src="./assets/images/star.png" /> 4,8
                            </span>

                            <div className="mb-2">
                              <img
                                src="./assets/images/outline_today_black.png"
                                width="18"
                                height="18"
                              />
                              <span className="me-2">02/08/2021</span>

                              <img
                                src="./assets/images/outline_schedule_black.png"
                                width="18"
                                height="18"
                              />
                              <span>15:14h</span>
                            </div>

                            <p className="text-gray-700">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Donec condimentum imperdiet quam,
                              ut dignissim orci molestie sed.”
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        <h6
                          className="d-inline-block"
                          style={{ fontWeight: "500" }}
                        >
                          Nome da pessoa
                        </h6>
                        <span
                          className="float-end"
                          style={{ color: "#D2CA00" }}
                        >
                          <img src="./assets/images/star.png" /> 4,8
                        </span>

                        <div className="mb-2">
                          <img
                            src="./assets/images/outline_today_black.png"
                            width="18"
                            height="18"
                          />
                          <span className="me-2">02/08/2021</span>

                          <img
                            src="./assets/images/outline_schedule_black.png"
                            width="18"
                            height="18"
                          />
                          <span>15:14h</span>
                        </div>

                        <p className="text-gray-700">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec condimentum imperdiet quam, ut dignissim
                          orci molestie sed.”
                        </p>
                      </li>
                    </ul>
                    <ul className="list-unstyled">
                      <li>
                        <h6
                          className="d-inline-block"
                          style={{ fontWeight: "500" }}
                        >
                          Nome da pessoa
                        </h6>
                        <span
                          className="float-end"
                          style={{ color: "#D2CA00" }}
                        >
                          <img src="./assets/images/star.png" /> 4,8
                        </span>

                        <div className="mb-2">
                          <img
                            src="./assets/images/outline_today_black.png"
                            width="18"
                            height="18"
                          />
                          <span className="me-2">02/08/2021</span>

                          <img
                            src="./assets/images/outline_schedule_black.png"
                            width="18"
                            height="18"
                          />
                          <span>15:14h</span>
                        </div>

                        <p className="text-gray-700">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec condimentum imperdiet quam, ut dignissim
                          orci molestie sed.”
                        </p>

                        <ul style={{ listStyle: "none" }}>
                          <li>
                            <h6
                              className="d-inline-block text-primary"
                              style={{ fontWeight: "500" }}
                            >
                              Jac Burger
                            </h6>
                            <span
                              className="float-end"
                              style={{ color: "#D2CA00" }}
                            >
                              <img src="./assets/images/star.png" /> 4,8
                            </span>

                            <div className="mb-2">
                              <img
                                src="./assets/images/outline_today_black.png"
                                width="18"
                                height="18"
                              />
                              <span className="me-2">02/08/2021</span>

                              <img
                                src="./assets/images/outline_schedule_black.png"
                                width="18"
                                height="18"
                              />
                              <span>15:14h</span>
                            </div>

                            <p className="text-gray-700">
                              “Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Donec condimentum imperdiet quam,
                              ut dignissim orci molestie sed.”
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        <div className="hero-content py-5">
          <div className="container">
            <div className="d-flex justify-content-between">
              <a href="./estabelecimentos.html">
                <img
                  src="./assets/images/outline_chevron_left_white.png"
                  alt="Voltar"
                  width="50"
                  height="50"
                />
              </a>

              <div>
                <img src="./assets/images/star.png" />
                <img src="./assets/images/star.png" />
                <img src="./assets/images/star.png" />
                <img src="./assets/images/star.png" />
                <img src="./assets/images/star.png" />
              </div>
            </div>
            <div className="mb-5 position-relative closed-storex">
              <div className="mb-2 closed-store">
                <img
                  src="./assets/images/jac-burger.png"
                  alt="Logo"
                  className="rounded-circle d-block mx-auto"
                  width="114"
                  height="114"
                />
              </div>

              <div className="d-flex justify-content-between">
                <div></div>
                <div className="d-flex align-items-center mb-2 mx-auto">
                  <h2 className="text-white me-2">Jac Burger</h2>
                  <img
                    src="./assets/images/outline_favorite_border_white.png"
                    alt="Icon Favorito"
                    width="30"
                    height="30"
                  />
                </div>
                <button
                  className="btn text-white p-0 shadow-none fs-7 position-absolute position-md-initial top-0 end-0"
                  data-bs-toggle="modal"
                  data-bs-target="#modalInfo"
                >
                  Detalhes
                  <img
                    src="./assets/images/outline_chevron_bottom_white.png"
                    width="30"
                    height="30"
                  />
                </button>
              </div>

              <p className="text-gray-700 text-center">
                R$4.99 - R$7.30 • 35 – 45 min • 2,5 km • (Cashback:{" "}
                <span className="text-primary">3%</span>)
              </p>
            </div>
          </div>
        </div>

        <form action="" method="get">
          <div
            className="container d-flex justify-content-between"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="input-group input-group-rounded-pill shadow-lg me-4">
              <span className="input-group-text">
                <img
                  src="./assets/images/outline_restaurant_2.png"
                  width="30"
                  height="30"
                />
              </span>
              <input
                type="text"
                placeholder="Pesquisar no cardápio..."
                className="form-control form-control-lg bg-with fs-5"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary rounded-pill text-white btn-lg fs-6 shadow-lg px-3 py-2  py-md-4 px-md-5 text-center"
            >
              <span className="d-none d-md-block">Pesquisar</span>
              <img
                className="d-inline-block d-md-none"
                src="./assets/images/search.svg"
                alt=""
              />
            </button>
          </div>
        </form>
      </section>

      <main>
        <div className="container">
          <nav
            id="products"
            className="scroll-x navbar sticky-top shadow-lg p-3 rounded-10 my-5 bg-white"
          >
            <ul className="nav flex-nowrap w-100">
              <li className="nav-item flex-1 text-center">
                <a
                  className="app-nav-link nav-link text-nowrap"
                  href="#category-1"
                >
                  Categoria 1
                </a>
              </li>
              <li className="nav-item flex-1 text-center">
                <a
                  className="app-nav-link nav-link text-nowrap"
                  href="#category-2"
                >
                  Categoria 2
                </a>
              </li>
              <li className="nav-item flex-1 text-center">
                <a
                  className="app-nav-link nav-link text-nowrap"
                  href="#category-3"
                >
                  Categoria 3
                </a>
              </li>
              <li className="nav-item flex-1 text-center">
                <a
                  className="app-nav-link nav-link text-nowrap"
                  href="#category-4"
                >
                  Categoria 4
                </a>
              </li>
              <li className="nav-item flex-1 text-center">
                <a
                  className="app-nav-link nav-link text-nowrap"
                  href="#category-5"
                >
                  Categoria 5
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <section id="category-1">
              <h4>Categoria 1</h4>
              <div className="row my-middle">
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="category-2">
              <h4>Categoria 1</h4>
              <div className="row my-middle">
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="category-3">
              <h4>Categoria 1</h4>
              <div className="row my-middle">
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="category-4">
              <h4>Categoria 1</h4>
              <div className="row my-middle">
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="category-5">
              <h4>Categoria 1</h4>
              <div className="row my-middle">
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="p-4 border rounded-10 mb-4">
                    <div className="d-flex rounded-10">
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

                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>

                        <p className="fs-6 mb-0">R$ 90,50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default EstablishmentsClose;
