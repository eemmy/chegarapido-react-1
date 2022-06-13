//import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import api from "../services/api";

function MyRequests() {
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

      <div className="modal" id="order-info-previous" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
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
                  <div className="col-12 col-md-5 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3>Detalhes do produto</h3>
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-md-none"
                      >
                        Ver cardápio
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 mb-4">
                    <div className="d-flex align-items-center float-end">
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-none d-md-block"
                      >
                        Ver cardápio
                      </a>
                      <div className="d-flex justify-content-between align-items-center border rounded-10 border-success ms-md-4 px-2 py-1">
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="15.5" cy="15.5" r="15.5" fill="#2FB400" />
                          <path
                            d="M10 16.1432C13.7463 19.4578 14.6829 20.0892 14.6829 19.9905L22 12"
                            stroke="white"
                            stroke-width="3"
                          />
                        </svg>
                        <div className="ms-3">
                          <p className="mb-0 fs-7">Seu pedido está:</p>
                          <strong className="text-success fs-7">
                            Entregue
                          </strong>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 fs-7">
                            <strong>Data</strong>: 09/08/2021
                          </p>
                          <p className="mb-0 fs-7">
                            <strong>Hora</strong>: 16:30hrs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Ítens:</h5>

                      <ul className="list-unstyled">
                        <li>
                          <p className="mb-2">
                            <span className="text-primary">1x</span> Gorgonzola
                            Burger + Porção
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">
                            <span className="text-primary">1x</span> Coca-cola
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Pagamento:</h5>

                      <ul className="list-unstyled">
                        <li className="fw-light mb-2">
                          <span>Cupom:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Cashback:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Taxa de entrega:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Subtotal:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-bold text-primary">
                          <span>Total:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Tipo de pagamento</h5>

                      <p className="fw-light">
                        <img
                          src="./assets/images/visa-logo-mini.png"
                          width="25"
                          height="15"
                          className="me-2"
                        />
                        Cartão de crédito
                      </p>
                      <strong className="text-success">
                        Pagamento efetuado com sucesso
                      </strong>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Avaliação:</h5>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Embalagem:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Tempo de entrega:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Custo benefício:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                      </div>

                      <label for="comment">
                        <h6>Deixe algum comentário:</h6>
                      </label>
                      <textarea
                        id="comment"
                        className="form-control"
                        style={{ backgroundColor: "#F4F4F4" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="order-info-active" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
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
                  <div className="col-12 col-md-5 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3>Detalhes do produto</h3>
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-md-none"
                      >
                        Ver cardápio
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 mb-4">
                    <div className="d-flex align-items-center float-end">
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-none d-md-block"
                      >
                        Ver cardápio
                      </a>
                      <div
                        className="d-flex justify-content-between align-items-center border rounded-10 ms-md-4 px-2 py-1"
                        style={{ borderColor: "#D2CA00 !important" }}
                      >
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="15.5" cy="15.5" r="15.5" fill="#D2CA00" />
                          <path d="M8 16H23" stroke="white" stroke-width="3" />
                        </svg>

                        <div className="ms-3">
                          <p className="mb-0 fs-7">Seu pedido está:</p>
                          <strong className="fs-7" style={{ color: "#D2CA00" }}>
                            Em andamento
                          </strong>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 fs-7">
                            <strong>Data</strong>: 09/08/2021
                          </p>
                          <p className="mb-0 fs-7">
                            <strong>Hora</strong>: 16:30hrs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Ítens:</h5>

                      <ul className="list-unstyled">
                        <li>
                          <p className="mb-2">
                            <span className="text-primary">1x</span> Gorgonzola
                            Burger + Porção
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">
                            <span className="text-primary">1x</span> Coca-cola
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Pagamento:</h5>

                      <ul className="list-unstyled">
                        <li className="fw-light mb-2">
                          <span>Cupom:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Cashback:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Taxa de entrega:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Subtotal:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-bold text-primary">
                          <span>Total:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Tipo de pagamento</h5>

                      <p className="fw-light">
                        <img
                          src="./assets/images/visa-logo-mini.png"
                          width="25"
                          height="15"
                          className="me-2"
                        />
                        Cartão de crédito
                      </p>
                      <strong className="text-success">
                        Pagamento efetuado com sucesso
                      </strong>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Avaliação:</h5>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Embalagem:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Tempo de entrega:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Custo benefício:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                      </div>

                      <label for="comment">
                        <h6>Deixe algum comentário:</h6>
                      </label>
                      <textarea
                        id="comment"
                        className="form-control"
                        style={{ backgroundColor: "#F4F4F4" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal" id="order-info-canceled" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
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
                  <div className="col-12 col-md-5 mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3>Detalhes do produto</h3>
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-md-none"
                      >
                        Ver cardápio
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-7 mb-4">
                    <div className="d-flex align-items-center float-end">
                      <a
                        href="#"
                        className="text-decoration-none text-primary d-none d-md-block"
                      >
                        Ver cardápio
                      </a>
                      <div
                        className="d-flex justify-content-between align-items-center border rounded-10 ms-md-4 px-2 py-1"
                        style={{ borderColor: "#FF0000 !important" }}
                      >
                        <svg
                          width="31"
                          height="31"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="15.5" cy="15.5" r="15.5" fill="#FF0000" />
                          <path
                            d="M10.8652 10.5283L20.1356 20.4715"
                            stroke="white"
                            stroke-width="3"
                          />
                          <path
                            d="M20.4717 10.8652L10.5285 20.1356"
                            stroke="white"
                            stroke-width="3"
                          />
                        </svg>
                        <div className="ms-3">
                          <p className="mb-0 fs-7">Seu pedido está:</p>
                          <strong className="fs-7" style={{ color: "#FF0000" }}>
                            Cancelado
                          </strong>
                        </div>
                        <div className="ms-3">
                          <p className="mb-0 fs-7">
                            <strong>Data</strong>: 09/08/2021
                          </p>
                          <p className="mb-0 fs-7">
                            <strong>Hora</strong>: 16:30hrs
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Ítens:</h5>

                      <ul className="list-unstyled">
                        <li>
                          <p className="mb-2">
                            <span className="text-primary">1x</span> Gorgonzola
                            Burger + Porção
                          </p>
                        </li>
                        <li>
                          <p className="mb-0">
                            <span className="text-primary">1x</span> Coca-cola
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Pagamento:</h5>

                      <ul className="list-unstyled">
                        <li className="fw-light mb-2">
                          <span>Cupom:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Cashback:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Taxa de entrega:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-light mb-2">
                          <span>Subtotal:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                        <li className="fw-bold text-primary">
                          <span>Total:</span>{" "}
                          <span className="float-end">R$ 0,00</span>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Tipo de pagamento</h5>

                      <p className="fw-light">
                        <img
                          src="./assets/images/visa-logo-mini.png"
                          width="25"
                          height="15"
                          className="me-2"
                        />
                        Cartão de crédito
                      </p>
                      <strong className="text-success">
                        Pagamento efetuado com sucesso
                      </strong>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div
                      className="border rounded-10 p-3 mb-4"
                      style={{ borderColor: "#E3E3E3" }}
                    >
                      <h5 className="mb-4">Avaliação:</h5>
                      <div className="row">
                        <div className="col-6 mb-4">
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Embalagem:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Tempo de entrega:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                        <div className="col-6 mb-4">
                          <p className="mb-1">Custo benefício:</p>
                          <p className="mb-1">Comida:</p>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#D2CA00" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                          <span style={{ color: "#C4C4C4" }}>&#9733</span>
                        </div>
                      </div>

                      <label for="comment">
                        <h6>Deixe algum comentário:</h6>
                      </label>
                      <textarea
                        id="comment"
                        className="form-control"
                        style={{ backgroundColor: "#F4F4F4" }}
                      ></textarea>
                    </div>
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
                  className="text-decoration-none btn w-100 rounded-0 text-primary"
                  style={{ borderBottom: "3px solid #EF4000" }}
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
                    src="./assets/images/outline_fact_check_black.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">Meus pedidos</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <ul className="nav app-nav-tabs mb-5" role="tablist">
                  <li className="app-nav-item" role="presentation">
                    <button
                      className="app-nav-link active"
                      id="active-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ctive-orders"
                      type="button"
                      role="tab"
                      aria-controls="ctive-orders"
                      aria-selected="true"
                    >
                      Ativos
                    </button>
                  </li>
                  <li className="app-nav-item" role="presentation">
                    <button
                      className="app-nav-link"
                      id="previous-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#previous-orders"
                      type="button"
                      role="tab"
                      aria-controls="previous-orders"
                      aria-selected="false"
                    >
                      Anteriores
                    </button>
                  </li>
                  <li className="app-nav-item" role="presentation">
                    <button
                      className="app-nav-link"
                      id="canceled-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#canceled-orders"
                      type="button"
                      role="tab"
                      aria-controls="canceled-orders"
                      aria-selected="false"
                    >
                      Cancelados
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="ctive-orders"
                    role="tabpanel"
                    aria-labelledby="active-orders-tab"
                  >
                    <div className="mb-4">
                      <div className="border border-success rounded-3 p-4 shadow-lg">
                        <div className="d-flex">
                          <img
                            src="./assets/images/jac-burger.png"
                            alt=""
                            width="133"
                            height="133"
                            className="me-3 rounded-circle"
                          />
                          <div>
                            <a
                              href="#order-info-active"
                              data-bs-toggle="modal"
                              className="text-black text-decoration-none"
                            >
                              <h4 className="mb-2 fw-bold">Pedido #1720745</h4>
                            </a>
                            <a
                              href="#"
                              className="fs-6 mb-1 link-primary text-decoration-none"
                            >
                              Jac burger - São Benedito
                            </a>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_date_range_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              09/08/2021
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_schedule_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              16:30hrs
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_attach_money_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              R$ 95,50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="border border-success rounded-3 p-4 shadow-lg">
                        <div className="d-flex">
                          <img
                            src="./assets/images/jac-burger.png"
                            alt=""
                            width="133"
                            height="133"
                            className="me-3 rounded-circle"
                          />
                          <div>
                            <a
                              href="#order-info-previus"
                              data-bs-toggle="modal"
                              className="text-black text-decoration-none"
                            >
                              <h4 className="mb-2 fw-bold">Pedido #1720745</h4>
                            </a>
                            <a
                              href="#"
                              className="fs-6 mb-1 link-primary text-decoration-none"
                            >
                              Jac burger - São Benedito
                            </a>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_date_range_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              09/08/2021
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_schedule_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              16:30hrs
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_attach_money_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              R$ 95,50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="previous-orders"
                    role="tabpanel"
                    aria-labelledby="previous-orders-tab"
                  >
                    <div className="mb-4">
                      <div className="border border-gray-100 rounded-3 p-4">
                        <div className="d-flex">
                          <img
                            src="./assets/images/jac-burger.png"
                            alt=""
                            width="133"
                            height="133"
                            className="me-3 rounded-circle"
                          />
                          <div>
                            <a
                              href="#order-info-previous"
                              data-bs-toggle="modal"
                              className="text-decoration-none text-black"
                            >
                              <h4 className="mb-2 fw-bold">Pedido #1720745</h4>
                            </a>
                            <a
                              href="#order-info-previous"
                              data-bs-toggle="modal"
                              className="fs-6 mb-1 link-primary text-decoration-none"
                            >
                              Jac burger - São Benedito
                            </a>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_date_range_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              09/08/2021
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_schedule_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              16:30hrs
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_attach_money_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              R$ 95,50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="canceled-orders"
                    role="tabpanel"
                    aria-labelledby="canceled-orders-tab"
                  >
                    <div className="mb-4">
                      <div className="border border-danger rounded-3 p-4 opacity-25">
                        <div className="d-flex">
                          <img
                            src="./assets/images/jac-burger.png"
                            alt=""
                            width="133"
                            height="133"
                            className="me-3 rounded-circle"
                          />
                          <div>
                            <a
                              href="#order-info-canceled"
                              data-bs-toggle="modal"
                              className="text-decoration-none text-black"
                            >
                              <h4 className="mb-2 fw-bold">Pedido #1720745</h4>
                            </a>
                            <p className="fs-6 mb-1 text-primary">
                              Jac burger - São Benedito
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_date_range_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              09/08/2021
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_schedule_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              16:30hrs
                            </p>
                            <p className="fs-6 mb-1 text-black">
                              <img
                                src="./assets/images/outline_attach_money_black.png"
                                alt=""
                                width="17"
                                height="17"
                                className="me-2"
                              />
                              R$ 95,50
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-md-6 text-center">
              <img
                src="./assets/images/mapa.png"
                alt=""
                className="img-fluid mb-5  d-none d-md-block"
              />

              <div className="mb-5">
                <h4 className="text-start text-primary mb-4">
                  Mais pedidos por você:
                </h4>
                <div className="position-relative">
                  <div id="more-requests-slider" className="splide">
                    <div className="splide__track">
                      <ul className="splide__list">
                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>
                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>
                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <a
                              className="text-decoration-none text-black"
                              href="./estabelecimento-aberto.html"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                    <img src="./assets/images/app_store.png" alt="App Stote" />{" "}
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

export default MyRequests;
