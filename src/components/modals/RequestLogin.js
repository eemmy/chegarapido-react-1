function RequestLogin({ hidden, closeModal }) {
  return (
    <div
      className={hidden ? "modal" : ""}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      tabIndex="-1"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
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
              <h5 className="fw-light mb-4">
                Para continuar, você precisa estar{" "}
                <span className="text-primary">logado</span>!
              </h5>

              <p className="fw-light mb-4">
                Entre ou crie uma conta para continuar!
              </p>

              <div className="d-flex">
                <button className="btn btn-outline-primary flex-1 me-2">
                  Criar conta
                </button>
                <button className="btn btn-primary flex-1">Entrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestLogin;
