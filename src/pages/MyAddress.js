import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import MenuAccount from "../components/MenuAccount";
import Sidebar from "../components/Sidebar";

import SelectAddress from "../components/modals/SelectAddress";
import RegisterOrEditAddress from "../components/modals/RegisterOrEditAddress";

import { apiWithToken as api } from "../services/api";

function MyAddress() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [hiddenRegister, setHiddenRegister] = useState(true);
  const [hiddenEdit, setHiddenEdit] = useState(true);
  const [addresses, setAddress] = useState([]);

  const fetchAddress = async () => {
    const response = await api.get("/addresses/get");

    console.log(response.data.data.addresses);

    setAddress(response.data.data.addresses);
  };

  useEffect(() => {
    fetchAddress()
  }, [])

  return (
    <div>
      <RegisterOrEditAddress
        hidden={hiddenEdit}
        closeModal={() => setHiddenEdit(true)}
      />
      <SelectAddress
        hidden={hiddenRegister}
        closeModal={() => setHiddenRegister(true)}
      />
      <a
        href="#"
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
      >
        <img src="./assets/images/outline_confirmation_number.png" alt="" />
        Cupons
      </a>

      <button
        href="#"
        className="btn btn-primary text-white d-none d-md-block"
        style={{
          position: "fixed",
          top: "45%",
          right: "-10px",
          transform: "rotate(-90deg)",
        }}
      >
        <img src="./assets/images/outline_shopping_cart.png" alt="" />
      </button>

      <button
        href="#"
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

      <div id="edit-address-modal" className="modal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-primary">Editar endereço</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form action="">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Estado"
                      value="Goiás"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Cidade"
                      value="Goiânia"
                    />
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Rua"
                      value="Rua T63"
                    />
                  </div>
                  <div className="col-4">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Número"
                      value="1345"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Bairro"
                      value="Setor Bueno"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="CEP"
                      value="74000000"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Complemento 1"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name=""
                      className="form-control rounded-pill mb-3"
                      placeholder="Complemento 2"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-primary rounded-pill">
                Salvar endereço
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal"
        id="address-modal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-screen-name="select-address"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-body">
              <div id="select-address" className="screen">
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
                    data-target-screen="confirm-address"
                  />

                  <button
                    className="btn border rounded-pill fs-7 w-100 mx-auto d-flex justify-content-start align-items-center "
                    style={{ maxWidth: "530px", height: "52px" }}
                    data-target-screen="confirm-local"
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

                  <h5 className="fw-light mt-5">
                    Possui algum endereço salvo?
                  </h5>

                  <p className="mb-5 fs-7">
                    Faça{" "}
                    <a href="./entrar.html" className="text-decoration-none">
                      login
                    </a>{" "}
                    para selecionar algum!
                  </p>
                </div>
              </div>
              <div id="confirm-address" className="screen">
                <div
                  className="text-center mx-auto"
                  style={{ maxWidth: "530px" }}
                >
                  <h4 className="fw-light my-4">
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
                      <div className="type-address-block me-3 ">
                        <input
                          type="radio"
                          name="type-address"
                          id="home"
                          checked
                        />
                        <label
                          for="home"
                          className="btn btn-lg w-100 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center border"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="currentColor"
                            className="me-2"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                          </svg>
                          Casa
                        </label>
                      </div>

                      <div className="type-address-block me-3 ">
                        <input type="radio" name="type-address" id="job" />
                        <label
                          for="job"
                          className="btn btn-lg w-100 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center border"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="currentColor"
                            className="me-2"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M18.36 9l.6 3H5.04l.6-3h12.72M20 4H4v2h16V4zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2l-1-5zM6 18v-4h6v4H6z" />
                          </svg>
                          Trabalho
                        </label>
                      </div>

                      <div className="type-address-block">
                        <input type="radio" name="type-address" id="outhers" />
                        <label
                          for="outhers"
                          className="btn btn-lg w-100 rounded-pill fs-6 py-3 d-flex align-items-center justify-content-center border"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="currentColor"
                            className="me-2"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                          </svg>
                          Outro
                        </label>
                      </div>
                    </div>

                    <div className="col-6"></div>
                    <div className="col-6">
                      <button
                        className="btn btn-primary rounded-pill w-100 py-3 fs-6"
                        data-target-screen="confirm-local"
                      >
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
              <div id="confirm-local" className="screen">
                <h5 className="modal-title fw-light text-primary fs-6 text-center my-4">
                  Rua Walter Nolli, nº169 (Casa)
                </h5>

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
                    data-bs-dismiss="modal"
                    aria-label="Close"
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
        </div>
      </div>

      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} logged={true} />
      ) : (
        ""
      )}

      <Header setShowSidebar={setShowSidebar} />

      <main className="mt-4">
        <div className="container">
          <MenuAccount selected={"myaddress"} />
          <div className="row">
            <div className="col-12 col-md-6">
              <form action="" className="py-5">
                <div className="d-flex mb-5">
                  <img
                    src="./assets/images/outline_maps_home_work_black.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">Meus endereços</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <div className="text-end mb-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#address-modal"
                    onClick={() => setHiddenRegister(false)}
                  >
                    Cadastrar mais endereços
                  </button>
                </div>

                {addresses.map((address) => {
                  return (
                    <div className="mb-4">
                      <div className="border border-primary rounded-3 p-4 d-flex justify-content-between align-items-center">
                        <div className="d-flex">
                          <img
                            src="./assets/images/outline_place.png"
                            alt=""
                            width="40"
                            height="40"
                            className="me-3"
                          />
                          <div>
                            <p className="mb-2">
                              {address.endereco} - {address.numero},{" "}
                              {address.cidade} {address.estado}
                            </p>
                            <p className="fs-7 mb-0 text-gray-600">
                              Local de entrega: {address.tipo_local}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex align-items-center ms-2">
                          <button
                            type="button"
                            className="btn btn-sm p-0"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-address-modal"
                            onClick={() => setHiddenEdit()}
                          >
                            <img
                              src="./assets/images/outline_edit.png"
                              alt=""
                              className="me-1"
                            />
                          </button>
                          <button type="button" className="btn btn-sm p-0">
                            <img
                              src="./assets/images/outline_delete.png "
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="col-6 d-none d-md-block text-center">
              <img
                src="./assets/images/mapa.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </main>

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
                      href="#"
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
                      href="#"
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

        <div className="footer-mini py-4">
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

export default MyAddress;
