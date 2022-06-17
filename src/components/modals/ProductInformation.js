function ProductInformation({ hidden, closeModal }) {
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
      <div className="modal-dialog modal-dialog-centered modal-lg" style={{}}>
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
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="w-100 d-block mb-5">
                  <div id="primary-slider" className="splide mb-4">
                    <div className="splide__track">
                      <ul className="splide__list">
                        <li className="splide__slide">
                          <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg"
                            className="img-fluid"
                          />
                        </li>
                        <li className="splide__slide">
                          <img
                            src="https://blog.duogourmet.com.br/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1200x675.jpg"
                            className="img-fluid"
                          />
                        </li>
                        <li className="splide__slide">
                          <img
                            src="https://uploads.metropoles.com/wp-content/uploads/2018/09/12120812/pink-burguer.jpeg"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div id="secondary-slider" className="splide">
                    <div className="splide__track">
                      <ul className="splide__list">
                        <li className="splide__slide">
                          <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cf29c385555335.5d7fb3c164383.jpg"
                            className="img-fluid"
                          />
                        </li>
                        <li className="splide__slide">
                          <img
                            src="https://blog.duogourmet.com.br/wp-content/uploads/2020/05/mafe-studio-LV2p9Utbkbw-unsplash-1200x675.jpg"
                            className="img-fluid"
                          />
                        </li>
                        <li className="splide__slide">
                          <img
                            src="https://uploads.metropoles.com/wp-content/uploads/2018/09/12120812/pink-burguer.jpeg"
                            className="img-fluid"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <h2 className="mb-3">Gorgonzola Burger + Porção</h2>
                <a href="#" className="text-decoration-none fw-light">
                  Jac Burger
                </a>
                <p className="fw-light mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  varius pellentesque pulvinar. Lorem ipsum dolor sit .
                </p>

                <div className="mb-3">
                  <button
                    id="btn-collapse-choose-drink"
                    className="btn btn-primary rounded-0 w-100 d-flex justify-content-between"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-choose-drink"
                    aria-expanded="false"
                    aria-controls="collapse-choose-drink"
                  >
                    <span>Escolha o sabor do refrigerante</span>
                  </button>

                  <div className="collapse py-3" id="collapse-choose-drink">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="coca-cola"
                      />
                      <label className="form-check-label" for="coca-cola">
                        Coca-Cola
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="coca-cola-zero"
                      />
                      <label className="form-check-label" for="coca-cola-zero">
                        Coca-Cola Zero
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="fanta"
                      />
                      <label className="form-check-label" for="fanta">
                        Fanta
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="guarana"
                      />
                      <label className="form-check-label" for="guarana">
                        Guaraná
                      </label>
                    </div>
                  </div>
                </div>

                <p>Alguma observação?</p>

                <textarea
                  className="form-control mb-5"
                  cols="30"
                  rows="2"
                  placeholder="Exemplo: Adicionar mais sal na carne, tirar o tomate e etc ..."
                  style={{ backgroundColor: "#F4F4F4" }}
                ></textarea>

                <div className="d-flex">
                  <div className="quantity-wrap flex-shrink-0 border border-primary rounded me-3 d-flex justify-content-between">
                    <button id="decrease" className="btn shadow-none">
                      -
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      value="1"
                      min="1"
                      className="border-0 form-control shadow-none"
                    />
                    <button id="increase" className="btn shadow-none">
                      +
                    </button>
                  </div>

                  <button className="btn btn-outline-primary d-flex justify-content-between flex-shrink-1 flex-1">
                    <span>Adicionar</span>
                    <span>R$ 90,50</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
