function DigitalChange({ hidden, closeModal }) {
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
                Troco digital +
                <strong className="text-primary">Cashback</strong>!
              </h5>

              <p className="fw-light mb-1">
                Após efetuar o pagamento em dinheiro na entrega, seu troco (se
                houver) será adicionado ao cashback do seu pedido em até 24
                horas.
              </p>
              <p className="fw-light mb-1">
                Pode ficar tranquilo, seu troco poderá ser utilizado em seu
                próximo pedido.
              </p>
              <p className="mb-4" style={{ fontWeight: "500" }}>
                Se estiver de acordo com esta condição, clique em{" "}
                <span className="text-primary">OK</span>!
              </p>

              <div className="d-flex">
                <button
                  className="btn btn-outline-primary flex-1 me-2"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancelar
                </button>
                <button className="btn btn-primary flex-1">OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalChange;
