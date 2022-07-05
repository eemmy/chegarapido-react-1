import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MenuAccount from "../components/MenuAccount";
import ProductDetails from "../components/modals/ProductDetails";
import Sidebar from "../components/Sidebar";

import { apiWithToken as api } from "../services/api";

function MyRequests() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [tab, setTab] = useState("active");

  const [requestActive, setRequestActive] = useState([]);
  const [requestPrevious, setRequestPrevious] = useState([]);
  const [requestCanceled, setRequestCanceled] = useState([]);

  const fetchOrders = async () => {
    const response = await api.get("/orders/get");

    if (response.status == 404) {
      return;
    }

    response.data?.data?.orders.map((order) => {
      if (order.status_entrega == 3) {
        let a = [...requestPrevious, order];

        setRequestPrevious(a);
        return;
      }

      if (order.status_entrega == 4) {
        let a = [...requestCanceled, order];

        setRequestCanceled(a);
        return;
      }

      let a = [...requestActive, order];
      setRequestActive(order);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <ProductDetails hidden={hidden} closeModal={() => setHidden(true)} />
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

      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} logged={true} />
      ) : (
        ""
      )}

      <Header setShowSidebar={setShowSidebar} />

      <main className="mt-4">
        <div className="container">
          <MenuAccount selected={"myrequests"} />

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
                      className={`app-nav-link ${
                        tab == "active" ? "active" : ""
                      }`}
                      id="active-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ctive-orders"
                      type="button"
                      role="tab"
                      aria-controls="ctive-orders"
                      aria-selected="true"
                      onClick={() => setTab("active")}
                    >
                      Ativos
                    </button>
                  </li>
                  <li className="app-nav-item" role="presentation">
                    <button
                      className={`app-nav-link ${
                        tab == "previous" ? "active" : ""
                      }`}
                      id="previous-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#previous-orders"
                      type="button"
                      role="tab"
                      aria-controls="previous-orders"
                      aria-selected="false"
                      onClick={() => setTab("previous")}
                    >
                      Anteriores
                    </button>
                  </li>
                  <li className="app-nav-item" role="presentation">
                    <button
                      className={`app-nav-link ${
                        tab == "canceled" ? "active" : ""
                      }`}
                      id="canceled-orders-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#canceled-orders"
                      type="button"
                      role="tab"
                      aria-controls="canceled-orders"
                      aria-selected="false"
                      onClick={() => setTab("canceled")}
                    >
                      Cancelados
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {tab == "active" && requestActive.length != 0 ? (
                    <div>
                      {requestActive.length != 0 ? (
                        <div>
                          <div
                            className="tab-pane fade show active"
                            id="ctive-orders"
                            role="tabpanel"
                            aria-labelledby="active-orders-tab"
                          >
                            {requestActive.map((order) => {
                              return (
                                <div className="mb-4">
                                  <div className="border border-success rounded-3 p-4 shadow-lg">
                                    <div className="d-flex">
                                      <img
                                        src="./assets/images/jac-burger.png" /* modify mock by  "order.icone" */
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
                                          <h4 className="mb-2 fw-bold">
                                            Pedido #1720745
                                          </h4>
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
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}

                  {tab == "previous" ? (
                    <div>
                      {requestPrevious.length != 0 ? (
                        <div
                          className="tab-pane fade show active"
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
                                    <h4 className="mb-2 fw-bold">
                                      Pedido #1720745
                                    </h4>
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
                      ) : (
                        <div>A lista de pedidos esta vazia</div>
                      )}
                    </div>
                  ) : (
                    <div>A lista de pedidos está vazia</div>
                  )}

                  {tab == "canceled" && requestActive.length != 0 ? (
                    <div
                      className="tab-pane fade show active"
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
                                <h4 className="mb-2 fw-bold">
                                  Pedido #1720745
                                </h4>
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
                  ) : (
                    ""
                  )}
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
                            <Link
                              className="text-decoration-none text-black"
                              to="/establishmentsopen"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </Link>
                          </div>
                        </li>
                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <Link
                              className="text-decoration-none text-black"
                              to="/establishmentsopen"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </Link>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <Link
                              className="text-decoration-none text-black"
                              to="/establishmentsopen"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </Link>
                          </div>
                        </li>

                        <li className="splide__slide">
                          <div className="splide__slide__container">
                            <Link
                              className="text-decoration-none text-black"
                              to="/establishmentsopen"
                            >
                              <img
                                src="./assets/images/jac-burger.png"
                                width="70"
                                height="70"
                                className="rounded-circle mb-4"
                              />
                              <p className="fs-14">Jac Burguer</p>
                            </Link>
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
