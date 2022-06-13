function RegisterEstablishments() {
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

        <div
          className="hero-content"
          style={{ paddingTop: "92px", paddingBottom: "92px" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-lg-8 text-center text-md-start">
                <div className="btn btn-primary rounded-pill mb-4">
                  <img src="./assets/images/outline_storefront.png" alt="" />
                  <span>#estabelecimentos</span>
                </div>

                <h2 className="fs-1 mb-4 text-white">
                  <span className="text-primary fw-bold">Lorem ipsum</span>
                  <br /> dolor sit amet!
                </h2>
                <p
                  className="text-white opacity-75 mb-5"
                  style={{ maxWidth: "540px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum imperdiet quam, ut dignissim orci molestie sed.
                </p>
              </div>

              <div className="col-12 col-md-5 col-lg-4 position-relative">
                <form
                  className="position-relative position-md-absolute bg-white p-4 text-center shadow-lg start-0 end-0 top-0"
                  style={{ borderRadius: "20px" }}
                >
                  <h4 className="mb-4">
                    Cadastre-se <br />
                    <span className="text-primary fw-bold">
                      para fazer entregas!
                    </span>
                  </h4>

                  <p className="text-gray-400">Lorem ipsum dolor sit amet</p>

                  <div className="input-group input-group-rounded-pill mb-2">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_emoji_people_black.png"
                        width="24"
                        height="24"
                      />
                    </span>
                    <input
                      type="text"
                      placeholder="Nome e Sobrenome"
                      className="form-control rounded-end"
                    />
                  </div>

                  <div className="input-group input-group-rounded-pill mb-2 w-100">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_storefront_black_1.png"
                        width="24"
                        height="24"
                      />
                    </span>
                    <input
                      type="text"
                      placeholder="Nome do estabelecimento"
                      className="form-control rounded-end"
                    />
                  </div>

                  <div className="input-group input-group-rounded-pill mb-2">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_inventory_2_black.png"
                        width="24"
                        height="24"
                      />
                    </span>

                    <select
                      className="form-select"
                      aria-label="Tipo do produto"
                    >
                      <option selected>Tipo do produto</option>
                      <option value="1">...</option>
                      <option value="2">...</option>
                    </select>
                  </div>

                  <div className="input-group input-group-rounded-pill mb-2">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_place_black_2.png"
                        width="24"
                        height="24"
                      />
                    </span>

                    <select
                      className="form-select"
                      aria-label="Cidade do estabelecimento"
                    >
                      <option selected>Cidade do estabelecimento</option>
                      <option value="1">...</option>
                      <option value="2">...</option>
                    </select>
                  </div>

                  <div className="input-group input-group-rounded-pill mb-2">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_email_black_2.png"
                        width="24"
                        height="24"
                      />
                    </span>
                    <input
                      type="email"
                      placeholder="Seu email mais usado"
                      className="form-control rounded-end"
                    />
                  </div>

                  <div className="input-group input-group-rounded-pill mb-2">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_phone_iphone_black.png"
                        width="24"
                        height="24"
                      />
                    </span>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="form-control rounded-end"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline-primary shadow-lg rounded-pill w-100 mt-4"
                  >
                    Cadastrar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-5 mb-md-0">
              <h2 className="mb-4">
                <span className="text-primary fw-bold">Lorem ipsum</span> <br />{" "}
                dolor sit amet!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                venenatis at nunc vel lobortis.{" "}
                <strong>Integer leo nibh</strong>, vestibulum et condimentum
                vel, cursus sed risus.
              </p>

              <p>
                Proin quis dolor luctus dui malesuada porta in sagittis nibh.
                Nunc fringilla lobortis nisi{" "}
                <strong>tincidunt condimentum</strong>. Nulla id maximus nulla.
              </p>

              <p>
                Proin quis dolor luctus dui malesuada porta in sagittis nibh.
                Nunc fringilla lobortis nisi{" "}
                <strong>tincidunt condimentum</strong>. Nulla id maximus nulla.
              </p>

              <p>Etiam dapibus dignissim dolor.</p>
            </div>

            <div className="col-12 col-md-6 text-center">
              <img
                src="./assets/images/arrived.png"
                alt="Imagem de um entregador"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="row">
            <div className="text-center mb-5">
              <h2 className="mb-4">
                <span className="text-primary fw-bold">Lorem ipsum</span> dolor
                sit amet!
              </h2>
              <p
                style={{ maxWidth: "770px", color: "#373737" }}
                className="mx-auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                venenatis at nunc vel lobortis.{" "}
                <strong>Integer leo nibh</strong>, vestibulum et condimentum
                vel, cursus sed risus.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <img
                src="./assets/images/answer.png"
                alt="Imagem de um Estabelecimento"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-md-6 text-center text-md-start  mb-5">
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="border p-3 rounded-3 shadow-lg text-center">
                    <h4 className="mb-3">
                      <span className="text-primary fw-bold">Lorem ipsum</span>{" "}
                      dolor sit amet!
                    </h4>

                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam venenatis at nunc vel lobortis.
                      <strong>Integer leo nibh</strong>, vestibulum et
                      condimentum vel, cursus sed risus.
                    </p>
                  </div>
                </div>

                <div className="col-6 mb-4">
                  <div className="border p-3 rounded-3 shadow-lg text-center">
                    <h4 className="mb-3">
                      <span className="text-primary fw-bold">Lorem ipsum</span>{" "}
                      dolor sit amet!
                    </h4>

                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam venenatis at nunc vel lobortis.
                      <strong>Integer leo nibh</strong>, vestibulum et
                      condimentum vel, cursus sed risus.
                    </p>
                  </div>
                </div>

                <div className="col-6 mb-4">
                  <div className="border p-3 rounded-3 shadow-lg text-center">
                    <h4 className="mb-3">
                      <span className="text-primary fw-bold">Lorem ipsum</span>{" "}
                      dolor sit amet!
                    </h4>

                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam venenatis at nunc vel lobortis.
                      <strong>Integer leo nibh</strong>, vestibulum et
                      condimentum vel, cursus sed risus.
                    </p>
                  </div>
                </div>

                <div className="col-6 mb-4">
                  <div className="border p-3 rounded-3 shadow-lg text-center">
                    <h4 className="mb-3">
                      <span className="text-primary fw-bold">Lorem ipsum</span>{" "}
                      dolor sit amet!
                    </h4>

                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam venenatis at nunc vel lobortis.
                      <strong>Integer leo nibh</strong>, vestibulum et
                      condimentum vel, cursus sed risus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="row">
            <div className="text-center mb-4">
              <h2 className="fw-bold mb-4">F.A.Q</h2>
              <p className="text-gray-700">
                Encontre sua dúvida aqui! Perguntas mais frequentes!
              </p>
            </div>

            <div style={{ maxWidth: "770px" }} className="mx-auto">
              <div className="d-flex justify-content-between align-items-center border border-primary rounded-3 px-5 py-4 shadow-lg mb-4">
                <div>
                  <h4>Lorem ipsum dolor</h4>
                  <p className="text-gray-600 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras facilisis risus nibh, ut porta libero interdum nec.
                  </p>
                </div>
                <img
                  src="./assets/images/more.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center border border-primary rounded-3 px-5 py-4 shadow-lg mb-4">
                <div>
                  <h4>Lorem ipsum dolor</h4>
                  <p className="text-gray-600 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras facilisis risus nibh, ut porta libero interdum nec.
                  </p>
                </div>
                <img
                  src="./assets/images/more.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center border border-primary rounded-3 px-5 py-4 shadow-lg mb-4">
                <div>
                  <h4>Lorem ipsum dolor</h4>
                  <p className="text-gray-600 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras facilisis risus nibh, ut porta libero interdum nec.
                  </p>
                </div>
                <img
                  src="./assets/images/more.png"
                  alt=""
                  width="24"
                  height="24"
                />
              </div>
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

export default RegisterEstablishments;
