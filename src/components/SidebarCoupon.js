import { useState } from "react";
import { Link } from "react-router-dom";

function SidebarCoupon({ setShowSidebar, logged }) {
  return (
    <div
      className=""
      style={{
        position: "absolute",
        backgroundColor: "white",
        height: "100vh",
        width: "400px",
        zIndex: "90000",
      }}
    >
      <div className="offcanvas-header">
        <h4 className="text-primary" id="offcanvasCouponLabel">
          Cupons
        </h4>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          onClick={() => setShowSidebar(false)}
        ></button>
      </div>
      <div className="offcanvas-body">
        <p
          className="fs-14 border-bottom pb-2"
          style={{ borderColor: "#ebebeb" }}
        >
          Disponíveis
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img
              src="./assets/images/outline_confirmation_number_black.png"
              width="42"
              height="42"
            />
          </div>

          <div>
            <h5 className="fw-bold mb-1">Cupom</h5>
            <p className="mb-1 fs-7 text-gray-700 mb-0">
              Insira o código do cupom:
            </p>
            <p className="text-primary">XXUTY5</p>
          </div>

          <button className="btn btn-outline-primary">Resgatar cupom</button>
        </div>

        <p
          className="fs-14 border-bottom pb-2"
          style={{ borderColor: "#ebebeb" }}
        >
          Utilizados
        </p>

        <div className="d-flex justify-content-between align-items-center opacity-25">
          <div>
            <img
              src="./assets/images/outline_confirmation_number_black.png"
              width="42"
              height="42"
            />
          </div>

          <div>
            <h5 className="fw-bold mb-1">Cupom</h5>
            <p className="mb-1 fs-7 text-gray-700 mb-0">
              Insira o código do cupom:
            </p>
            <p className="text-primary">XXUTY5</p>
          </div>

          <button className="btn btn-outline-primary">Resgatar cupom</button>
        </div>

        <p
          className="fs-14 border-bottom pb-2"
          style={{ borderColor: "#ebebeb" }}
        >
          Expirados
        </p>
        <div className="d-flex justify-content-between align-items-center opacity-25">
          <div>
            <img
              src="./assets/images/outline_confirmation_number_black.png"
              width="42"
              height="42"
            />
          </div>

          <div>
            <h5 className="fw-bold mb-1">Cupom</h5>
            <p className="mb-1 fs-7 text-gray-700 mb-0">
              Insira o código do cupom:
            </p>
            <p className="text-primary">XXUTY5</p>
          </div>

          <button className="btn btn-outline-primary">Resgatar cupom</button>
        </div>
      </div>
    </div>
  );
}

export default SidebarCoupon;
