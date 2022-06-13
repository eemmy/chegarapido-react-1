function Wallet() {
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
        id="transfer-cahsback-modal-overlay"
        className="app-modal-overlay"
      ></div>
      <div
        id="transfer-cahsback-modal"
        className="app-modal"
        data-user-selected="false"
      >
        <div>
          <h5 className="fw-light mb-4 text-primary">
            Transferência de Cashback
          </h5>

          <p className="fw-light mb-4">
            Digite um valor que deseja transferir (o valor deve estar entre
            <strong>R$ 0,50</strong> e <strong>R$ 1.000,00</strong>:
          </p>

          <input
            id="add-balance"
            className="form-control mb-4 fs-4 fw-bold border-0"
            value="R$ 10,00"
            inputMode="numeric"
          />

          <button
            id="btn-select-user"
            className="btn text-primary border-top border-bottom rounded-0 w-100 d-flex justify-content-between"
          >
            <span>Selecione um usuário</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </button>

          <button
            id="user-selected"
            className="btn border-top border-bottom rounded-0 w-100 d-flex justify-content-between align-items-center"
          >
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>

              <div className="ms-3 text-start">
                <p className="fw-bold text-primary mb-1">Welison Davi</p>
                <p className="text-gray-700 mb-0">(94) 9 9262 0055</p>
              </div>
            </div>

            <span className="text-gray-700">655.785.892-00</span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </button>

          <button
            id="btn-transfer-cashback"
            className="btn btn-outline-primary w-100 rounded-pill mt-5"
            data-bs-toggle="modal"
            data-bs-target="#confirm-transfer-modal"
          >
            Fazer transferência
          </button>
        </div>
      </div>

      <div id="select-user-modal-overlay" className="app-modal-overlay"></div>
      <div id="select-user-modal" className="app-modal">
        <div>
          <h5 className="fw-light mb-4 text-primary">Transferência</h5>

          <p className="fw-light mb-4">
            Digite o <strong>CPF</strong> ou <strong>TELEFONE</strong> do
            usuário que deseja transferir:
          </p>

          <div className="d-flex mb-4">
            <input
              className="form-control flex-1 me-3"
              type="text"
              placeholder="Buscar CPF"
            />

            <input
              className="form-control flex-1"
              type="text"
              placeholder="Buscar telefone"
            />
          </div>

          <button className="user-cash btn border-top rounded-0 w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>

              <div className="ms-3 text-start">
                <p className="fw-bold text-primary mb-1">Welison Davi</p>
                <p className="text-gray-700 mb-0">(94) 9 9262 0055</p>
              </div>
            </div>

            <span className="text-gray-700">655.785.892-00</span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </button>

          <button className="user-cash btn border-top rounded-0 w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>

              <div className="ms-3 text-start">
                <p className="fw-bold text-primary mb-1">Welison Davi</p>
                <p className="text-gray-700 mb-0">(94) 9 9262 0055</p>
              </div>
            </div>

            <span className="text-gray-700">655.785.892-00</span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </button>

          <button className="user-cash btn border-top rounded-0 w-100 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
              </svg>

              <div className="ms-3 text-start">
                <p className="fw-bold text-primary mb-1">Welison Davi</p>
                <p className="text-gray-700 mb-0">(94) 9 9262 0055</p>
              </div>
            </div>

            <span className="text-gray-700">655.785.892-00</span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#666666"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div
        className="modal"
        id="confirm-transfer-modal"
        tabIndex="-1"
        aria-labelledby="confirmTransferModalLabel"
        aria-hidden="true"
        data-transfer-success="false"
      >
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="confirm-transfer-content" className="text-center">
                <h5 className="fw-light mb-4" style={{ fontWeight: "500" }}>
                  Transferência <br /> de <br />
                  <strong className="text-primary">Cashback</strong>
                </h5>

                <p className="text-gray-light fw-light mb-4">
                  Você tem certeza que deseja tranferir:{" "}
                  <strong className="text-primary">R$ 20,00</strong> para{" "}
                  <strong className="text-primary">welisontim</strong>?
                </p>

                <div className="d-flex">
                  <button
                    className="btn btn-outline-primary flex-1 me-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancelar
                  </button>
                  <button
                    id="btn-confirm-transfer"
                    className="btn btn-primary flex-1"
                  >
                    Sim
                  </button>
                </div>
              </div>
              <div id="transfer-success-content" className="text-center">
                <h5 className="fw-light mb-5" style={{ fontWeight: "500" }}>
                  Transferência <br /> de <br />
                  <strong className="text-primary">Cashback</strong>
                </h5>
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <circle cx="15.5" cy="15.5" r="15.5" fill="#2FB400" />
                  <path
                    d="M10 16.1432C13.7463 19.4578 14.6829 20.0892 14.6829 19.9905L22 12"
                    stroke="white"
                    strokeWidth="3"
                  />
                </svg>
                <p className="fw-light mb-5">
                  Transferência realizada com{" "}
                  <span className="text-success">sucesso</span>!
                </p>
                <button
                  className="btn btn-primary flex-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
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
              <a
                href="./index.html"
                className="text-decoration-none text-black"
              >
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
            <ul className="list-unstyled d-flex flex-md-row flex-column gap-vertical-8  justify-content-between align-items-center mb-0">
              <li className="w-100">
                <a
                  href="minha-conta.html"
                  className="text-decoration-none btn w-100 rounded-0 text-black"
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
                  className="text-decoration-none btn w-100 rounded-0 text-primary"
                  style={{ borderBottom: "3px solid #EF4000" }}
                >
                  Carteira (<span className="text-primary">Cashback</span>)
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-12 col-md-6  pe-md-5">
              <form action="" className="py-5">
                <div className="d-flex mb-5">
                  <img
                    src="./assets/images/outline_attach_money_black.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">
                      Carteira (<span className="text-primary">Cashback</span>)
                    </h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <div className="border border-primary rounded-10 p-5 mb-4">
                  <p className="text-primary fw-light">Cashback disponível</p>
                  <h2 className="text-primary">
                    R$ <span className="fw-bold">204,00</span>
                  </h2>
                </div>

                <div className="d-flex gap-30 mb-5">
                  <div className="flex-1">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill btn-lg w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#add-balance-modal"
                    >
                      Adicionar
                    </button>

                    <div
                      className="modal"
                      id="add-balance-modal"
                      tabIndex="-1"
                      aria-labelledby="addBalanceModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered modal-sm">
                        <div className="modal-content">
                          <div className="modal-header border-0">
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <h5 className="fw-light mb-4 text-primary">
                                Adicionar saldo
                              </h5>

                              <p className="fw-light mb-4">
                                Digite um valor entre <strong>R$ 0,50</strong> e{" "}
                                <strong>R$ 60.000,00</strong>:
                              </p>

                              <input
                                id="#add-balance"
                                className="form-control mb-4 fs-4 fw-bold border-0"
                                value="R$ 10,00"
                                inputMode="numeric"
                              />

                              <button className="btn btn-outline-primary flex-1 w-100 rounded-pill">
                                Fazer pagamento
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    id="btn-open-transfer-modal"
                    type="button"
                    className="btn btn-outline-primary rounded-pill btn-lg flex-1"
                  >
                    Transferir
                  </button>
                </div>

                <h3 className="fw-light mb-4">Seu histórico recente:</h3>

                <div className="inner-border">
                  <div className="d-flex justify-content-between align-items-center py-4">
                    <div className="d-flex justify-content-between align-items-center gap-16">
                      <img
                        src="./assets/images/outline_local_mall_black.png"
                        width="40"
                        height="40"
                      />

                      <div>
                        <p className="fs-6 mb-2">Você transferiu</p>
                        <div className="text-primary fs-7">R$ 20,00</div>
                      </div>
                    </div>
                    <div>
                      <p className="fs-6 mb-2">10/06/2021</p>
                      <div className="text-success fs-7">Enviado</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-4">
                    <div className="d-flex justify-content-between align-items-center gap-16">
                      <img
                        src="./assets/images/outline_local_mall_black.png"
                        width="40"
                        height="40"
                      />

                      <div>
                        <p className="fs-6 mb-2">Transferência de Welison</p>
                        <div className="text-primary fs-7">R$ 20,00</div>
                      </div>
                    </div>
                    <div>
                      <p className="fs-6 mb-2">10/06/2021</p>
                      <div className="text-info fs-7">Recebido</div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center py-4">
                    <div className="d-flex justify-content-between align-items-center gap-16">
                      <img
                        src="./assets/images/outline_local_mall_black.png"
                        width="40"
                        height="40"
                      />

                      <div>
                        <p className="fs-6 mb-2">Transferência de Welison</p>
                        <div className="text-primary fs-7">R$ 20,00</div>
                      </div>
                    </div>
                    <div>
                      <p className="fs-6 mb-2">10/06/2021</p>
                      <div className="text-danger fs-7">Recusado</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 d-md-block text-center ps-md-5 mb-5">
              <img
                src="./assets/images/cashback.png"
                alt=""
                className="img-fluid mb-5"
              />

              <div className="d-flex gap-16">
                {/*
            <img src="./assets/images/qr_code.png" alt="QR Code" width="140" height="147">
            <div className="text-start">
              <h4 className="text-primary mb-4">Transferência por <br/>
                QRCODE
              </h4>
              <p className="text-gray-700">Faça uma transferência agora apontando a câmera para o <strong
                  className="text-primary">QRCODE</strong> ao lado!</p>
            </div>
            </img>
          */}
              </div>
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

export default Wallet;
