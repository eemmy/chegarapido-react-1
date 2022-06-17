function ConfirmAddress({ hidden, closeModal }) {
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
            <div className="container px-md-5">
              <div className="text-center">
                <h4 className="fw-light mb-5">
                  Informe o <span className="text-primary">número</span> e o{" "}
                  <span className="text-primary">complemento</span>!
                </h4>

                <p className="text-gray-700 mb-5">Rua Walter Nolli</p>

                <div className="row">
                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        className="form-control rounded-pill border-primary"
                        placeholder="0"
                        required
                      />
                      <label for="number" className="form-label text-primary">
                        Número*
                      </label>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="complement"
                        id="complement"
                        className="form-control rounded-pill border-primary"
                        placeholder="Casa"
                      />
                      <label
                        for="complement"
                        className="form-label text-primary"
                      >
                        Complemento
                      </label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-around align-items-center mt-4 mb-5">
                    <button className="btn btn-primary btn-lg w-100 me-3 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                        className="me-2"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                      </svg>
                      Casa
                    </button>
                    <button className="btn border btn-lg w-100 me-3 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        className="me-2"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" />
                      </svg>
                      Trabalho
                    </button>
                    <button className="btn border btn-lg w-100 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                        className="me-2"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                      </svg>
                      Outro
                    </button>
                  </div>

                  <div className="col-6"></div>
                  <div className="col-6">
                    <button className="btn btn-primary rounded-pill w-100 py-3 fs-6">
                      Buscar endereço
                    </button>
                  </div>
                </div>

                <h5 className="fw-light mt-5">Possui algum endereço salvo?</h5>

                <p className="fs-7">
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
    </div>
  );
}

export default ConfirmAddress;
