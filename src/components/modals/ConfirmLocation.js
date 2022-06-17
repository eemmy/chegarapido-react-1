function ConfirmLocation({ hidden, closeModal }) {
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
            <div className="flex-1 text-center">
              <h5
                className="modal-title fw-light text-primary fs-6"
                id="confirmLocalModalLabel"
              >
                Rua Walter Nolli, nº169 (Casa)
              </h5>
            </div>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
          </div>
          <div className="position-relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1049.108496823066!2d-49.27229496406594!3d-16.69864948643013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef138f7fe3835%3A0xa8c712a9ecd1b754!2sPontal%20Ecolife%20Bueno!5e0!3m2!1spt-BR!2sbr!4v1629213595399!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>

            <button
              className="btn btn-primary rounded-pill py-md-3 px-md-5 fs-6 position-absolute text-nowrap"
              style={{
                bottom: "30px",
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              Confirmar localização
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmLocation;
