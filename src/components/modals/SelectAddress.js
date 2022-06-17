function SelectAddress({ hidden, closeModal }) {
  return (
    <div
      className={hidden ? "modal" : ""}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      tabIndex="-1"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
          </div>
          <div className="modal-body">
            <div className="text-center">
              <h4 className="fw-light mb-5 mt-5">
                Onde você quer receber seu{" "}
                <span className="text-primary">pedido</span>?
              </h4>

              <input
                type="text"
                id="address-input"
                className="placeholder-primary search-address fs-7 py-3 mx-auto form-control form-control-lg mb-3 rounded-pill w-100 border-primary"
                placeholder="Buscar endereço e número"
                style={{ maxWidth: "530px" }}
              />

              <button
                className="btn border rounded-pill fs-7 w-100 mx-auto d-flex justify-content-start align-items-center "
                style={{ maxWidth: "530px", height: "52px" }}
                data-bs-toggle="modal"
                data-bs-target="#confirm-local-modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  fill="#000000"
                  className="me-3"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                </svg>
                Usar minha localização atual
              </button>

              <h5 className="fw-light mt-5">Possui algum endereço salvo?</h5>

              <p className="mb-5 fs-7">
                Faça{" "}
                <a href="./entrar.html" className="text-decoration-none">
                  login
                </a>{" "}
                para selecionar algum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectAddress;
