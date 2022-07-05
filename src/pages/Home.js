import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiWithoutToken as api } from "../services/api";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarCoupon from "../components/SidebarCoupon";
import SidebarCart from "../components/SidebarCart";

function Home() {
  const [search, setSearch] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarCoupon, setShowSidebarCoupon] = useState(false);
  const [showSidebarCart, setShowSidebarCart] = useState(false);

  const handleSearch = async () => {
    const response = api.get(
      `/home/search?cityId=1&latitude?=21&longitude=312&term=${search}`
    );
    console.log(search);
    console.log(response);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  //useEffect(() => {
  //setShowSidebar(false);
  //}, [])

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "50%",
          left: "-35px",
          transform: "rotate(90deg)",
          borderEndEndRadius: "0",
          borderEndStartRadius: "0",
          zIndex: "10",
        }}
        onClick={() => setShowSidebarCoupon(true)}
      >
        <img src="./assets/images/outline_confirmation_number.png" alt="" />
        Cupons
      </button>

      <button
        type="button"
        data-quantity="10"
        className="btn btn-primary text-white d-none d-md-block btn-cart-float"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasCart"
        aria-controls="offcanvasCart"
        onClick={() => setShowSidebarCart(true)}
      >
        <img src="./assets/images/outline_shopping_cart.png" alt="" />
      </button>

      <button
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "65%",
          right: "-25px",
          transform: "rotate(-90deg)",
          borderEndEndRadius: "0",
          borderEndStartRadius: "0",
          zIndex: "10",
        }}
      >
        Express
      </button>

      <div
        className="d-flex justify-content-around align-items-center bg-primary d-md-none position-fixed bottom-0 start-0 end-0 py-2"
        style={{ zIndex: "10", height: "60px" }}
      >
        <button
          className="btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <span className="text-white">
            <img
              src="./assets/images/outline_shopping_cart.png"
              width="24"
              height="24"
            />{" "}
            Carrinho
          </span>
        </button>
        <button
          className="btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCoupon"
          aria-controls="offcanvasCoupon"
        >
          <span className="text-white">
            <img
              src="./assets/images/outline_confirmation_number.png"
              width="24"
              height="24"
            />
            Cupons
          </span>
        </button>
        <button className="btn">
          <span className="text-white">Express</span>
        </button>
      </div>

      <div
        className="offcanvas offcanvas-end shadow-lg"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h6 id="offcanvasCartLabel">Confira seu pedido:</h6>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div
                className="me-3 ratio ratio-1x1 flex-shrink-0"
                style={{ width: "80px" }}
              >
                <img
                  src="./assets/images/burguer.png"
                  alt="Foto do produto"
                  width="80"
                  height="80"
                  className="img-fluid rounded-3"
                  style={{ width: "80px", height: "80px" }}
                />
              </div>

              <div className="me-2">
                <p className="mb-1">
                  <span className="text-primary fw-bold">1x</span>
                  Gorgonzola Burger + Porção
                </p>

                <p className="text-primary">Jac Burger</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <div className="text-end">
              <a href="#" className="text-nowrap text-decoration-none">
                Ver cardápio
              </a>

              <button className="btn mt-5">
                <img src="./assets/images/remove.png" width="30" height="30" />
              </button>
            </div>
          </div>

          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <img
                src="./assets/images/outline_confirmation_number_black.png"
                alt=""
              />
              <div>
                <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                <p className="mb-1 fs-7 text-gray-700">
                  Insira o código do cupom:
                </p>
                <p className="text-primary mb-0">XXUTY5</p>
              </div>
            </div>

            <button
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#coupon-modal"
              aria-controls="offcanvasCoupon"
            >
              <img src="./assets/images/chevron-right.png" alt="" />
            </button>
          </div>

          <hr />

          <ul className="list-unstyled">
            <li>
              <p className="fw-light mb-1">
                Cupom: <span className="float-end">R$ 0,00</span>
              </p>
              <p className="fw-light mb-1">
                Cashback: <span className="float-end">R$ 0,00</span>
              </p>
              <p className="fw-light mb-1">
                Taxa de entrega: <span className="float-end">R$ 0,00</span>
              </p>
              <p className="fw-light mb-1">
                Subtotal: <span className="float-end">R$ 0,00</span>
              </p>
              <p className="fw-bold mb-1">
                Total: <span className="float-end">R$ 0,00</span>
              </p>
            </li>
          </ul>

          <a href="./pagamento.html" className="btn w-100 btn-black-pill mt-5">
            Ir para pagamento
          </a>
        </div>
      </div>

      <div className="modal" id="coupon-modal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-between align-items-center mb-5">
                <input
                  type="text"
                  placeholder="Código do Cupom"
                  className="flex-1 form-control rounded-pill me-2"
                  style={{ backgroundColor: "#F5F5F5" }}
                />

                <button className="btn btn-primary rounded-pill">
                  Adicionar
                </button>
              </div>

              <ul className="nav app-nav-tabs" role="tablist">
                <li className="app-nav-item" role="presentation">
                  <button
                    className="app-nav-link active"
                    aria-current="page"
                    id="coupons-available-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#coupons-available"
                    type="button"
                    role="tab"
                    aria-controls="coupons-available"
                    aria-selected="true"
                  >
                    Disponíveis
                  </button>
                </li>
                <li className="app-nav-item" role="presentation">
                  <button
                    className="app-nav-link"
                    id="expired-coupons-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#expired-coupons"
                    type="button"
                    role="tab"
                    aria-controls="expired-coupons"
                    aria-selected="false"
                  >
                    Expirados
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-2">
                <div
                  className="tab-pane fade show active"
                  id="coupons-available"
                  role="tabpanel"
                  aria-labelledby="coupons-available-tab"
                >
                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex flex-1 me-3">
                      <div
                        className="ratio ratio-1x1 flex-shrink-0"
                        style={{ width: "54px", height: "54px" }}
                      >
                        <img
                          src="./assets/images/outline_confirmation_number_black.png"
                          width="54"
                          height="54"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                        <p className="mb-1 fs-7 text-gray-700">
                          Insira o código do cupom:
                        </p>
                        <p className="text-primary">XXUTY5</p>

                        <div className="collapse" id="couponMoreInfo1">
                          <p className="text-gray-700">
                            Garanta antes que acabe!
                          </p>

                          <p className="text-gray-700 fs-7">
                            <span className="text-black">Estabelecimento:</span>{" "}
                            Todos os estabelecimentos <br />
                            <span className="text-black">
                              Data de validade:
                            </span>{" "}
                            Até 04/08/2021 às 19:22 <br />
                            <span className="text-black">
                              Modo de usar:
                            </span>{" "}
                            Adicione o cupom no momento de finalização do
                            pedido.
                            <br />
                            <span className="text-black">
                              Forma de pagamento:
                            </span>{" "}
                            Pague na entrega, pelo app ou retire no
                            estabelecimento. <br />
                            <span className="text-black">Limite de uso:</span>
                            Limite de uso: 1 vez por usuário. <br />
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                          <a
                            className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none"
                            data-bs-toggle="collapse"
                            href="#couponMoreInfo1"
                            role="button"
                            aria-expanded="false"
                            aria-controls="couponMoreInfo1"
                          ></a>

                          <p className="text-end fs-7">
                            Válido até <br /> 04/08/2021 às 19:22
                          </p>
                        </div>
                      </div>
                    </div>

                    <input
                      type="radio"
                      className="form-check-input"
                      name="coupon"
                    />
                  </div>

                  <hr />

                  <div className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex flex-1 me-3">
                      <div
                        className="ratio ratio-1x1 flex-shrink-0"
                        style={{ width: "54px", height: "54px" }}
                      >
                        <img
                          src="./assets/images/outline_confirmation_number_black.png"
                          width="54"
                          height="54"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                        <p className="mb-1 fs-7 text-gray-700">
                          Insira o código do cupom:
                        </p>
                        <p className="text-primary">XXUTY5</p>

                        <div className="collapse" id="couponMoreInfo2">
                          <p className="text-gray-700">
                            Garanta antes que acabe!
                          </p>

                          <p className="text-gray-700 fs-7">
                            <span className="text-black">Estabelecimento:</span>{" "}
                            Todos os estabelecimentos <br />
                            <span className="text-black">
                              Data de validade:
                            </span>{" "}
                            Até 04/08/2021 às 19:22 <br />
                            <span className="text-black">
                              Modo de usar:
                            </span>{" "}
                            Adicione o cupom no momento de finalização do
                            pedido.
                            <br />
                            <span className="text-black">
                              Forma de pagamento:
                            </span>{" "}
                            Pague na entrega, pelo app ou retire no
                            estabelecimento. <br />
                            <span className="text-black">Limite de uso:</span>
                            Limite de uso: 1 vez por usuário. <br />
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                          <a
                            className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none"
                            data-bs-toggle="collapse"
                            href="#couponMoreInfo2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="couponMoreInfo2"
                          ></a>

                          <p className="text-end fs-7">
                            Válido até <br /> 04/08/2021 às 19:22
                          </p>
                        </div>
                      </div>
                    </div>

                    <input
                      type="radio"
                      className="form-check-input"
                      name="coupon"
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="expired-coupons"
                  role="tabpanel"
                  aria-labelledby="expired-coupons-tab"
                >
                  <div className="d-flex justify-content-between align-items-center py-3 opacity-25">
                    <div className="d-flex flex-1 me-3">
                      <div
                        className="ratio ratio-1x1 flex-shrink-0"
                        style={{ width: "54px", height: "54px" }}
                      >
                        <img
                          src="./assets/images/outline_confirmation_number_black.png"
                          width="54"
                          height="54"
                        />
                      </div>
                      <div className="flex-1">
                        <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                        <p className="mb-1 fs-7 text-gray-700">
                          Insira o código do cupom:
                        </p>
                        <p className="text-primary">XXUTY5</p>

                        <div className="collapse" id="couponMoreInfo2">
                          <p className="text-gray-700">
                            Garanta antes que acabe!
                          </p>

                          <p className="text-gray-700 fs-7">
                            <span className="text-black">Estabelecimento:</span>{" "}
                            Todos os estabelecimentos <br />
                            <span className="text-black">
                              Data de validade:
                            </span>{" "}
                            Até 04/08/2021 às 19:22 <br />
                            <span className="text-black">
                              Modo de usar:
                            </span>{" "}
                            Adicione o cupom no momento de finalização do
                            pedido.
                            <br />
                            <span className="text-black">
                              Forma de pagamento:
                            </span>{" "}
                            Pague na entrega, pelo app ou retire no
                            estabelecimento. <br />
                            <span className="text-black">Limite de uso:</span>
                            Limite de uso: 1 vez por usuário. <br />
                          </p>
                        </div>

                        <div className="d-flex justify-content-between mt-2">
                          <a
                            className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none"
                            data-bs-toggle="collapse"
                            href="#couponMoreInfo2"
                            role="button"
                            aria-expanded="false"
                            aria-controls="couponMoreInfo2"
                          ></a>

                          <p className="text-end fs-7">
                            Válido até <br /> 04/08/2021 às 19:22
                          </p>
                        </div>
                      </div>
                    </div>

                    <input
                      type="radio"
                      className="form-check-input"
                      name="coupon"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="select-address-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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

      <div
        className="modal"
        id="confirm-address-modal"
        tabIndex="-1"
        aria-labelledby="confirmAddressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
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
                        <label
                          htmlFor="number"
                          className="form-label text-primary"
                        >
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
                          htmlFor="complement"
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

                  <h5 className="fw-light mt-5">
                    Possui algum endereço salvo?
                  </h5>

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

      <div
        className="modal"
        id="confirm-local-modal"
        tabIndex="-1"
        aria-labelledby="confirmLocalModalLabel"
        aria-hidden="true"
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
              ></button>
            </div>
            <div className="position-relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1049.108496823066!2d-49.27229496406594!3d-16.69864948643013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef138f7fe3835%3A0xa8c712a9ecd1b754!2sPontal%20Ecolife%20Bueno!5e0!3m2!1spt-BR!2sbr!4v1629213595399!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
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

      {showSidebar ? <Sidebar setShowSidebar={setShowSidebar} /> : ""}

      {showSidebarCoupon ? (
        <SidebarCoupon setShowSidebar={setShowSidebarCoupon} />
      ) : (
        ""
      )}

      {showSidebarCart ? (
        <SidebarCart setShowSidebar={setShowSidebarCart} />
      ) : (
        ""
      )}

      <section id="hero">
        <Header setShowSidebar={setShowSidebar} />

        <div
          className="hero-content"
          style={{ paddingTop: "92px", paddingBottom: "156px" }}
        >
          <div className="container">
            <h2 className="fs-1 mb-4 text-white">
              Quem tem <span className="text-primary fw-bold">fome</span>
              <br /> tem <span className="text-primary fw-bold">pressa</span>!
            </h2>
            <p
              className="text-white opacity-75 mb-5"
              style={{ maxWidth: "540px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              condimentum imperdiet quam, ut dignissim orci molestie sed.
            </p>
            <a
              href="#"
              className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg"
              style={{ padding: "18px 60px" }}
            >
              Baixar app
            </a>
          </div>
        </div>

        <form action="" method="get">
          <div
            className="container d-flex justify-content-between"
            style={{ transform: "translateY(-50%)" }}
          >
            <div className="input-group input-group-rounded-pill shadow-lg me-4">
              <span className="input-group-text">
                <img
                  src="./assets/images/outline_place.png"
                  width="30"
                  height="30"
                />
              </span>
              <input
                type="text"
                placeholder="Endereço de entrega e número"
                className="form-control form-control-lg bg-with fs-5"
                value={search}
                onChange={({ target }) => setSearch(target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary rounded-pill text-white btn-lg fs-6 shadow-lg px-3 py-2  py-md-4 px-md-5 text-center"
            >
              <span className="d-none d-md-block">Pesquisar</span>
              <img
                className="d-inline-block d-md-none"
                src="./assets/images/search.svg"
                alt=""
              />
            </button>
          </div>
        </form>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-block d-md-flex justify-content-between">
          <div className="col-sm-12 col-md-3 col-lg-4">
            <h2 className="mb-4">
              <span className="fw-bold">#</span>Categorias
            </h2>

            <ul className="list-unstyled">
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 0 24 24"
                    width="30px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" />
                  </svg>
                  #supermercados
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 0 24 24"
                    width="30px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z" />
                  </svg>
                  #restaurantes
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <img
                    src="./assets/images/outline_medication.png"
                    alt="icon farmacias"
                    width="30"
                    height="30"
                  />
                  #farmacias
                </button>
              </li>
              <li className="mb-2">
                <button className="btn btn-primary rounded-pill text-white text-start w-100 px-4 fw-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 20 20"
                    height="30px"
                    viewBox="0 0 20 20"
                    width="30px"
                    fill="#FFFFFF"
                  >
                    <rect fill="none" height="20" width="20" />
                    <path d="M15.5,7.5h-1.27C14.47,7.05,14.6,6.54,14.6,6c0-1.79-1.46-3.25-3.25-3.25c-0.24,0-0.47,0.03-0.69,0.07 C10.05,2.31,9.26,2,8.4,2C6.95,2,5.7,2.89,5.17,4.15C3.91,4.55,3,5.73,3,7.12c0,1.51,1.07,2.77,2.5,3.06V17H14v-1.5h1.5 c0.83,0,1.5-0.67,1.5-1.5V9C17,8.17,16.33,7.5,15.5,7.5z M12.5,15.5H7v-5.37c0.51-0.15,0.97-0.43,1.34-0.8l1.39-1.39 c0.28-0.28,0.66-0.44,1.06-0.44h1.71V15.5z M10.79,6c-0.8,0-1.55,0.31-2.12,0.88L7.28,8.27C6.96,8.59,6.51,8.78,6.02,8.75 C5.2,8.7,4.54,8.02,4.5,7.2C4.46,6.27,5.2,5.5,6.12,5.5c0,0,0,0,0,0c0.14,0,0.27-0.1,0.29-0.24C6.53,4.26,7.39,3.5,8.4,3.5 c0.71,0,1.34,0.37,1.69,0.93c0.07,0.12,0.23,0.15,0.34,0.08c0.27-0.16,0.58-0.26,0.92-0.26c0.96,0,1.75,0.79,1.75,1.75H10.79z M15.5,14H14V9h1.5V14z" />
                  </svg>
                  #bebidas
                </button>
              </li>
              <li className="mb-2">
                <button className="btn rounded-pill text-start w-100 px-4 fw-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 0 24 24"
                    width="30px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                  </svg>
                  #express
                </button>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-9 col-lg-8 ps-md-5 ps-0">
            <div
              id="myCarousel"
              className=" carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="0"
                  className="active rounded-circle"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="1"
                  className="rounded-circle bg-white"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to="2"
                  className="rounded-circle bg-white"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <img src="./assets/images/star.svg" alt="Icon Star" />
                    <p className="mb-0 d-inline-block ms-2">4,9</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // Sao Paulo - SP //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <img src="./assets/images/star.svg" alt="Icon Star" />
                    <p className="mb-0 d-inline-block ms-2">4,9</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // São Paulo - SP //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="bg-primary text-white px-5 py-1 text-center position-absolute rating">
                    <img src="./assets/images/star.svg" alt="Icon Star" />
                    <p className="mb-0 d-inline-block ms-2">4,9</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center flex-column rounded px-5"
                    style={{
                      backgroundImage: "url(./assets/images/banner.png)",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "100px",
                      paddingBottom: "150px",
                    }}
                  >
                    <h3 className="fw-bold mb-4 text-white">Bravo Beer</h3>
                    <p className="mb-5 text-white opacity-75 text-center">
                      Rua Santa Isabel, 57 - Vila Buarque // Goiânia - GO //
                      CEP: 01221-010
                    </p>
                    <a
                      href="./estabelecimento-aberto.html"
                      className="btn btn-primary rounded-pill text-white btn-lg fs-5 shadow-lg py-2 px-5"
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              </div>

              <button
                className="carousel-control-prev opacity-100"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
                style={{ marginLeft: "-1px", width: "70px" }}
              >
                <div
                  className="bg-white"
                  style={{
                    borderRadius: "0 35px 35px 0",
                    width: "35px",
                    height: "70px",
                    transform: "translateX(-50%)",
                  }}
                >
                  <span
                    style={{ marginTop: "20px", marginLeft: "-20px" }}
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                </div>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button
                className="carousel-control-next opacity-100"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
                style={{ marginRight: "-1px", width: "70px" }}
              >
                <div
                  className="bg-white"
                  style={{
                    borderRadius: "35px 0 0 35px",
                    width: "35px",
                    height: "70px",
                    transform: "translateX(50%)",
                  }}
                >
                  <span
                    style={{ marginTop: "20px", marginLeft: "10px" }}
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                </div>
                <span className="visually-hidden">Próximo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-md-flex align-items-center">
          <div className="col-12 col-md-5 text-center text-md-end mb-5 mb-md-0">
            <div className="bg-primary rounded-pill d-inline-block px-4 py-2 text-white mb-4">
              <img src="./assets/images/outline_delivery_dining.png" alt="" />
              #entregadores
            </div>
            <h2 className="mb-4">
              Seja um entregador
              <br /> <span className="text-primary fw-bold">Chegarápido</span>
            </h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis mauris dui. In accumsan scelerisque justo, a lacinia sapien
              finibus porttitor.
            </p>
            <a
              href="./cadastro-entregador.html"
              className="btn btn-outline-primary btn-lg shadow-lg"
            >
              Registrar-se
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.37114e-08 4.5L20 4.5L20 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="col-1"></div>

          <div className="col-12 col-md-6">
            <img
              src="./assets/images/deliveryman.png"
              alt="Imagem de um entregador"
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-flex md-flex-row flex-column-reverse align-items-center">
          <div className="col-12 col-md-6">
            <img
              src="./assets/images/store.png"
              alt="Imagem de um Estabelecimento"
              className="img-fluid"
            />
          </div>

          <div className="col-1"></div>

          <div className="col-12 col-md-5 text-center text-md-start  mb-5">
            <div className="bg-primary rounded-pill d-inline-block px-4 py-2 text-white mb-4">
              <img
                src="./assets/images/outline_storefront.png"
                alt="Icone de um Estabelecimento"
              />
              #estabelecimentos
            </div>
            <h2 className="mb-4">
              Cadastre seu
              <br />{" "}
              <span className="text-primary fw-bold">Estabelecimento</span>
            </h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis mauris dui. In accumsan scelerisque justo, a lacinia sapien
              finibus porttitor.
            </p>
            <a
              href="./cadastro-estabelecimento.html"
              className="btn btn-outline-primary btn-lg shadow-lg"
            >
              Cadastrar
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.37114e-08 4.5L20 4.5L20 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-md-flex align-items-center">
          <div className="col-12 col-md-5 text-center text-md-end mb-5 mb-md-0">
            <div className="bg-primary rounded-pill d-inline-block px-4 py-2 text-white mb-4">
              <img src="./assets/images/outline_delivery_dining.png" alt="" />
              #franqueado
            </div>
            <h2 className="mb-4">
              Seja um franqueado
              <br /> <span className="text-primary fw-bold">Chegarápido</span>
            </h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mollis mauris dui. In accumsan scelerisque justo, a lacinia sapien
              finibus porttitor.
            </p>
            <a
              href="./cadastro-franqueado.html"
              className="btn btn-outline-primary btn-lg shadow-lg"
            >
              Registrar-se
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.37114e-08 4.5L20 4.5L20 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <div className="col-1"></div>

          <div className="col-12 col-md-6">
            <img
              src="./assets/images/franchise.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container d-md-flex align-items-center">
          <div className="col-12 col-md-6 text-center text-md-end">
            <h2 className="mb-4 fw-bold">
              Baixe nosso
              <br /> <span className="text-primary">Aplicativo</span>!
            </h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>

            <div className="d-flex align-items-center justify-content-center md-justify-content-end mb-5">
              <div className="me-4">
                <a href="#" className="d-block">
                  <img src="./assets/images/google_play.png" alt="" />
                </a>
                <a href="#">
                  <img src="./assets/images/app_store.png" alt="" />
                </a>
              </div>

              <img src="./assets/images/qr_code.png" alt="" />
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-12 col-md-5 text-center text-md-start">
            <img
              src="./assets/images/iphone.png"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </section>

      <section className="my-middle my-md-large">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3>
              Encontre sua <br />
              <span className="fw-bold">Cidade</span>
            </h3>

            <div>
              <a href="#" className="text-black">
                Ver todas
              </a>
              <svg
                width="21"
                height="8"
                viewBox="0 0 21 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3536 4.35356C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464468C16.9763 0.269205 16.6597 0.269205 16.4645 0.464468C16.2692 0.65973 16.2692 0.976312 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53554C16.6597 7.7308 16.9763 7.7308 17.1716 7.53554L20.3536 4.35356ZM-4.37114e-08 4.5L20 4.5L20 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z"
                  fill="#000"
                />
              </svg>
            </div>
          </div>

          <ul className="list-unstyled cities">
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Bauru
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Belo Horizonte
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Cabreúva
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Cachoeira Paulista
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Franca
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Guarujá
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Guarulhos
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Hortolândia
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Itapevi
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Ituverava
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Redenção
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Rio de Janeiro
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Sales
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                São Bernardo do Campo
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                São José dos Campos
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                São Paulo
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Uberaba
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Uberlândia
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                União de Minas
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="fw-light text-black text-decoration-none">
                Viçosa
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15291.732988170907!2d-49.3390953540802!3d-16.630119021342065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e8b29d4dee3a9%3A0x9d08d31813181f11!2sCasa%20China%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1628765809900!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <footer className="position-relative">
        <div className="bg-black">
          <div className="container">
            <div
              className="d-sm-block d-md-flex justify-content-between align-items-center"
              style={{ borderBottom: "1px solid #131313" }}
            >
              <img src="./assets/images/logo_footer.png" alt="Logo" />

              <div className="p-5 py-md-4 p-md-0">
                <div className="d-inline-block me-5">
                  <a href="#" className="text-decoration-none">
                    <img
                      src="./assets/images/google_play.png"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#" className="text-decoration-none">
                    <img src="./assets/images/app_store.png" alt="App Stote" />
                  </a>
                </div>

                <a
                  href="#"
                  className="text-decoration-none position-absolute right-0"
                  style={{ top: "30px" }}
                >
                  <img src="./assets/images/outline_chevron_top.png" alt="" />
                </a>
              </div>
            </div>

            <div className="py-5 px-5 d-flex flex-wrap">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">
                  Chegarápido Delivery
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Compre pelo site
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="./minha-conta.html"
                    >
                      Minha conta
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Termos e condições de uso
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Políticas de Privacidade
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Entregador</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="./cadastro-entregador.html"
                    >
                      Seja um entregador
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Baixar aplicativo
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Entregador Express
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Parceiro</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Seja um parceiro
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Painel financeiro
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Painel operacional
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <h5 className="fw-bold text-white fs-6 mb-4">Franqueado</h5>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Seja um franqueado
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Conheça o chegarápido express
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      className="text-white text-decoration-none fw-light fs-7"
                      href="#"
                    >
                      Trabalhe com a gente
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-mini py-4 mb-md-0"
          style={{ marginBottom: "60px" }}
        >
          <div className="container">
            <div className="d-block d-md-flex justify-content-between align-items-center">
              <p className="text-white mb-md-0 col-12 col-md-4">
                00.000.000/0000-00
              </p>
              <p className="text-white mb-md-0 col-12 col-md-4">
                © Copyright 2021 - <strong>Chegarápido Delivery</strong>.
              </p>
              <div className="col-12 col-md-4 footer-social">
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/facebook.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/instagram.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="#"
                  className="d-inline-block p-3 rounded-circle text-decoration-none bg-black"
                >
                  <img
                    src="./assets/images/whatsapp.svg"
                    alt=""
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
