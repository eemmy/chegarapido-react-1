function RestaurantInformation({ hidden, closeModal }) {
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
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h2 className="mb-4 fw-bold">Sobre</h2>

                  <div className="mb-4">
                    <h6 style={{ fontWeight: "500" }}>Endereço</h6>
                    <p className="text-gray-700 mb-1">
                      R Segismundo Mendes, 77 - Centro
                    </p>
                    <p className="text-gray-700">Uberaba - MG</p>
                  </div>

                  <div className="mb-4">
                    <h6 style={{ fontWeight: "500" }}>CEP</h6>
                    <p className="text-gray-700">00000-000</p>
                  </div>

                  <div className="mb-4">
                    <h6 style={{ fontWeight: "500" }}>Outras informações</h6>
                    <p className="text-gray-700">CNPJ: 00.000.000/0001-00</p>
                  </div>

                  <h2 className="mb-4 fw-bold">Horário</h2>

                  <ul className="list-unstyled mb-4">
                    <li className="text-gray-700">
                      <strong className="text-black">Seg</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Ter</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Qua</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Qui</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Sex</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Sáb</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                    <li className="text-gray-700">
                      <strong className="text-black">Dom</strong> - 10:30 às
                      16:30 - 17:00 às 23:59
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6">
                  <h2 className="mb-4">Avaliações</h2>

                  <ul className="list-unstyled">
                    <li>
                      <h6
                        className="d-inline-block"
                        style={{ fontWeight: "500" }}
                      >
                        Nome da pessoa
                      </h6>
                      <span className="float-end" style={{ color: "#D2CA00" }}>
                        <img src="./assets/images/star.png" /> 4,8
                      </span>

                      <div className="mb-2">
                        <img
                          src="./assets/images/outline_today_black.png"
                          width="18"
                          height="18"
                        />
                        <span className="me-2">02/08/2021</span>

                        <img
                          src="./assets/images/outline_schedule_black.png"
                          width="18"
                          height="18"
                        />
                        <span>15:14h</span>
                      </div>

                      <p className="text-gray-700">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec condimentum imperdiet quam, ut dignissim
                        orci molestie sed.”
                      </p>

                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <h6
                            className="d-inline-block text-primary"
                            style={{ fontWeight: "500" }}
                          >
                            Jac Burger
                          </h6>
                          <span
                            className="float-end"
                            style={{ color: "#D2CA00" }}
                          >
                            <img src="./assets/images/star.png" /> 4,8
                          </span>

                          <div className="mb-2">
                            <img
                              src="./assets/images/outline_today_black.png"
                              width="18"
                              height="18"
                            />
                            <span className="me-2">02/08/2021</span>

                            <img
                              src="./assets/images/outline_schedule_black.png"
                              width="18"
                              height="18"
                            />
                            <span>15:14h</span>
                          </div>

                          <p className="text-gray-700">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec condimentum imperdiet quam, ut dignissim
                            orci molestie sed.”
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <h6
                        className="d-inline-block"
                        style={{ fontWeight: "500" }}
                      >
                        Nome da pessoa
                      </h6>
                      <span className="float-end" style={{ color: "#D2CA00" }}>
                        <img src="./assets/images/star.png" /> 4,8
                      </span>

                      <div className="mb-2">
                        <img
                          src="./assets/images/outline_today_black.png"
                          width="18"
                          height="18"
                        />
                        <span className="me-2">02/08/2021</span>

                        <img
                          src="./assets/images/outline_schedule_black.png"
                          width="18"
                          height="18"
                        />
                        <span>15:14h</span>
                      </div>

                      <p className="text-gray-700">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec condimentum imperdiet quam, ut dignissim
                        orci molestie sed.”
                      </p>
                    </li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>
                      <h6
                        className="d-inline-block"
                        style={{ fontWeight: "500" }}
                      >
                        Nome da pessoa
                      </h6>
                      <span className="float-end" style={{ color: "#D2CA00" }}>
                        <img src="./assets/images/star.png" /> 4,8
                      </span>

                      <div className="mb-2">
                        <img
                          src="./assets/images/outline_today_black.png"
                          width="18"
                          height="18"
                        />
                        <span className="me-2">02/08/2021</span>

                        <img
                          src="./assets/images/outline_schedule_black.png"
                          width="18"
                          height="18"
                        />
                        <span>15:14h</span>
                      </div>

                      <p className="text-gray-700">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Donec condimentum imperdiet quam, ut dignissim
                        orci molestie sed.”
                      </p>

                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <h6
                            className="d-inline-block text-primary"
                            style={{ fontWeight: "500" }}
                          >
                            Jac Burger
                          </h6>
                          <span
                            className="float-end"
                            style={{ color: "#D2CA00" }}
                          >
                            <img src="./assets/images/star.png" /> 4,8
                          </span>

                          <div className="mb-2">
                            <img
                              src="./assets/images/outline_today_black.png"
                              width="18"
                              height="18"
                            />
                            <span className="me-2">02/08/2021</span>

                            <img
                              src="./assets/images/outline_schedule_black.png"
                              width="18"
                              height="18"
                            />
                            <span>15:14h</span>
                          </div>

                          <p className="text-gray-700">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec condimentum imperdiet quam, ut dignissim
                            orci molestie sed.”
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInformation;
