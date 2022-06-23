import { Link } from "react-router-dom";

function SidebarCart({ setShowSidebar, logged }) {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "white",
        height: "100vh",
        width: "400px",
        zIndex: "90000",
        right: "0",
      }}
    >
      <div className="offcanvas-header">
        <h6 id="offcanvasCartLabel">Confira seu pedido:</h6>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => setShowSidebar(false)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div
              className="me-3 ratio ratio-1x1 flex-shrink-0"
              style={{ width: "80px" }}
            >
              <img
                src="./assets/images/burguer.png"
                alt="Foto do produto"
                width="80"
                height="80"
                className="img-fluid rounded-3"
                style={{ width: "80px", height: "80px" }}
              />
            </div>

            <div className="me-2">
              <p className="mb-1">
                <span className="text-primary fw-bold">1x</span>
                Gorgonzola Burger + Porção
              </p>

              <p className="text-primary">Jac Burger</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div className="text-end">
            <a href="#" className="text-nowrap text-decoration-none">
              Ver cardápio
            </a>

            <button className="btn mt-5">
              <img src="./assets/images/remove.png" width="30" height="30" />
            </button>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img
              src="./assets/images/outline_confirmation_number_black.png"
              alt=""
            />
            <div>
              <h5 className="fw-bold text-primary mb-1">Cupom</h5>
              <p className="mb-1 fs-7 text-gray-700">
                Insira o código do cupom:
              </p>
              <p className="text-primary mb-0">XXUTY5</p>
            </div>
          </div>

          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#coupon-modal"
            aria-controls="offcanvasCoupon"
          >
            <img src="./assets/images/chevron-right.png" alt="" />
          </button>
        </div>

        <hr />

        <ul className="list-unstyled">
          <li>
            <p className="fw-light mb-1">
              Cupom: <span className="float-end">R$ 0,00</span>
            </p>
            <p className="fw-light mb-1">
              Cashback: <span className="float-end">R$ 0,00</span>
            </p>
            <p className="fw-light mb-1">
              Taxa de entrega: <span className="float-end">R$ 0,00</span>
            </p>
            <p className="fw-light mb-1">
              Subtotal: <span className="float-end">R$ 0,00</span>
            </p>
            <p className="fw-bold mb-1">
              Total: <span className="float-end">R$ 0,00</span>
            </p>
          </li>
        </ul>

        <a href="./pagamento.html" className="btn w-100 btn-black-pill mt-5">
          Ir para pagamento
        </a>
      </div>
    </div>
  );
}

export default SidebarCart;
