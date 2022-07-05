import { Link } from 'react-router-dom'

function ConfirmSMS({ hidden, closeModal, setCode, verifyCodeSMS }) {
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
    <div className="modal-dialog modal-dialog-centered modal-lg" style={{width: '498px'}}>
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
          </div>
            <div className="modal-body">
              <p>
                Digite no campo abaixo o código SMS que você recebeu em seu
                celular.
              </p>

              <div id="input-partitioned-outer">
                <div id="input-partitioned-inner">
                  <input id="input-partitioned" type="text" maxlength="6" placeholder="999999" onChange={({target}) => setCode(target.value)} />
                </div>
              </div>

              <button className="btn w-100 bg-black text-white rounded-pill mt-5" onClick={verifyCodeSMS}>Entrar</button>

              <Link to="/register" className="btn w-100">Quero me cadastrar</Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSMS;
