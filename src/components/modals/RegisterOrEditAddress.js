import { Link } from 'react-router-dom'

function ConfirmSMS({ hidden, closeModal }) {
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
            <h5 class="modal-title text-primary">Cadastrar endereço</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => closeModal()}
            ></button>
          </div>

            <div className="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Estado"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Cidade"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-8">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Rua"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-4">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Número"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Bairro"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="CEP"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Complemento 1"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                  <div className="col-6">
                    <input type="text" name="" className="form-control rounded-pill mb-3" placeholder="Complemento 2"
                      style={{ backgroundColor:"#F0F0F0", }}/>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary w-100 rounded-pill">Salvar endereço</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmSMS;
