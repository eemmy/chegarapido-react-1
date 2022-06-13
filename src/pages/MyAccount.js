function MyAccount() {
  return (
    <div>
      <a
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{ position:"fixed", top:"50%", left:"-35px", transform:"rotate(90deg)", borderEndEndRadius:"0", borderEndStartRadius:"0", zIndex:"10", }}
      >
        <img src="./assets/images/outline_confirmation_number.png" alt="" />
        Cupons
      </a>

      <button
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{ position:"fixed", top:"45%", right:"-10px", transform:"rotate(-90deg)", }}
      >
        <img src="./assets/images/outline_shopping_cart.png" alt="" />
      </button>

      <button
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{ position:"fixed", top:"65%", right:"-25px", transform:"rotate(-90deg)", borderEndEndRadius:"0", borderEndStartRadius:"0", zIndex:"10", }}
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
          <p className="my-5">
            Olá, <span className="text-primary">Welison!</span>
          </p>

          <ul className="list-unstyled mb-5">
            <li className="mb-2">
              <a href="./index.html" className="text-decoration-none text-black">
                <img src="./assets/images/outline_home_black.png" alt="" />
                <span className="ms-2">Home</span>
              </a>

              <li className="mb-2">
                <a
                  href="./minha-conta.html"
                  className="text-decoration-none text-black"
                >
                  <img src="./assets/images/outline_person_black.png" alt="" />
                  <span className="ms-2">Minha conta</span>
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="./meus-enderecos.html"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_maps_home_work_black.png"
                    alt=""
                  />
                  <span className="ms-2">Meus endereços</span>
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="./meus-pedidos.html"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_fact_check_black.png"
                    alt=""
                  />
                  <span className="ms-2">Meus pedidos</span>
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="./favoritos.html"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_star_rate_black.png"
                    alt=""
                  />
                  <span className="ms-2">Favoritos</span>
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="./carteira.html"
                  className="text-decoration-none text-black"
                >
                  <img
                    src="./assets/images/outline_attach_money_black.png"
                    alt=""
                  />
                  <span className="ms-2">Carteira (Cashback)</span>
                </a>
              </li>
            </li>
          </ul>

          <a
            href="./index.html"
            className="btn btn-outline-primary rounded-pill w-100 shadow-lg"
          >
            <span>Sair</span>
          </a>
        </div>
      </div>

      <header className="shadow-lg">
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

              <div className="d-flex align-items-center ms-5">
                Olá, <span className="text-primary ms-2">Welison</span>
                <img src="./assets/images/outline_expand_more.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="mt-4">
        <div className="container">
          <div className="shadow-lg p-3 rounded-10 my-5">
            <ul className="list-unstyled d-flex flex-md-row flex-column gap-vertical-8 justify-content-between align-items-center mb-0">
              <li className="w-100">
                <a
                  href="minha-conta.html"
                  className="text-decoration-none btn w-100 rounded-0 text-primary"
                  style={{ borderBottom:"3px solid #EF4000", }}
                >
                  Minha conta
                </a>
              </li>
              <li className="w-100">
                <a
                  href="meus-enderecos.html"
                  className="text-decoration-none btn w-100 rounded-0 text-black"
                >
                  Meus endereços
                </a>
              </li>
              <li className="w-100">
                <a
                  href="meus-pedidos.html"
                  className="text-decoration-none btn w-100 rounded-0 text-black"
                >
                  Meus pedidos
                </a>
              </li>
              <li className="w-100">
                <a
                  href="favoritos.html"
                  className="text-decoration-none btn w-100 rounded-0 text-black"
                >
                  Favoritos
                </a>
              </li>
              <li className="w-100">
                <a
                  href="carteira.html"
                  className="text-decoration-none btn w-100 rounded-0 text-black"
                >
                  Carteira (<span className="text-primary">Cashback</span>)
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <form action="" className="py-5">
                <div className="d-flex mb-5">
                  <img
                    src="./assets/images/outline_person_black.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">Minha conta</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <img
                    src="./assets/images/user-profile.png"
                    alt=""
                    width="112"
                    height="112"
                    className="rounded-circle border me-4"
                  />

                  <label
                    for="profile-avatar"
                    type="button"
                    className="btn btn-primary rounded-pill me-3"
                  >
                    Upload
                  </label>
                  <input
                    type="file"
                    name="profile-avatar"
                    id="profile-avatar"
                    className="d-none"
                  />

                  <button className="btn btn-outline-primary rounded-pill">
                    Remover
                  </button>
                </div>

                <hr className="my-5" />

                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control rounded-pill"
                        placeholder="John Doe"
                        value="John Doe"
                      />
                      <label for="name" className="form-label">
                        Nome e sobrenome
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        className="form-control rounded-pill"
                        placeholder="99999999999"
                        value="99999999999"
                      />
                      <label for="cpf" className="form-label">
                        CPF
                      </label>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        className="form-control rounded-pill"
                        placeholder="(99) 9999-9999"
                        value="(99) 9999-9999"
                      />
                      <label for="phone" className="form-label">
                        Celular
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control rounded-pill"
                        placeholder="name@example.com"
                        value="name@example.com"
                      />
                      <label for="email" className="form-label">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="form-floating">
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control rounded-pill"
                    placeholder="**********"
                    value="**********"
                  />
                  <label for="password" className="form-label">
                    Senha
                  </label>
                </div>

                <hr className="my-5" />

                <h3 className="fw-light">Conectar contas</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  facilisis risus nibh.
                </p>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <span>
                    <img
                      src="./assets/images/logo-facebook.png"
                      alt=""
                      width="30"
                      height="30"
                    />
                    <span className="ms-3">Entrar com o Facebook</span>
                  </span>

                  <button className="btn btn-outline-primary rounded-pill shadow-lg">
                    Desconectar
                  </button>
                </div>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <span>
                    <img
                      src="./assets/images/logo-google.png"
                      alt=""
                      width="30"
                      height="30"
                    />{" "}
                    <span className="ms-3">Entrar com o Facebook</span>{" "}
                  </span>

                  <button className="btn btn-outline-primary rounded-pill shadow-lg">
                    Desconectar
                  </button>
                </div>

                <hr className="my-5" />

                <button
                  type="submit"
                  className="btn btn-lg btn-outline-primary rounded-pill shadow-lg w-100 mb-5"
                >
                  Salvar
                </button>
              </form>
            </div>
            <div className="col-6 d-none d-md-block text-center">
              <img
                src="./assets/images/minhaconta.png"
                alt=""
                className="img-fluid"
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
              style={{ borderBottom:"1px solid #131313", }}
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
                  style={{ top:"30px", }}
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

export default MyAccount;
