function ProductDetails({ hidden, closeModal }) {
  return (
    <div
      className={hidden ? "modal" : ""}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      tabIndex="-1"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: 19,
        overflow: "auto",
      }}
    >
        <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-lg-down">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              onClick={() => closeModal()}
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
  );
}

export default ProductDetails;
