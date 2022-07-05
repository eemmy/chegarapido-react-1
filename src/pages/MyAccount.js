import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import InputMask from "react-input-mask";

import Header from "../components/Header";
import MenuAccount from "../components/MenuAccount";
import Sidebar from "../components/Sidebar";

import { useAuth } from "../contexts/AuthContext";

import { apiWithToken as api } from "../services/api";

function MyAccount() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [form, setForm] = useState({});

  const { user } = useAuth();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user.data)

    const data = {...form, password: user.data.password}

    const response = await api.put("/users/update", data);

    console.log(response.data.data);
  };

  const fetchUser = async () => {
    const response = await api.get('/users/get')

    console.log(response);

    setForm(response.data.data)
  };

  useEffect(() => {
    //console.log(user.data)
    //let a = {}
    //a.nome = user.nome
    //a.email = user.email
    //a.cpf = user.cpf
    //a.telefone = user.telefone
    //a.password = user.password
  fetchUser()
    //setForm(user)
  }, []);

  return (
    <div>
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

      {showSidebar ? (
        <Sidebar setShowSidebar={setShowSidebar} logged={true} />
      ) : (
        ""
      )}

      <Header setShowSidebar={setShowSidebar} />

      <main className="mt-4">
        <div className="container">
          <MenuAccount selected={"myaccount"} />
          <div className="row">
            <div className="col-12 col-md-6">
              <form action="" className="py-5">
                <div className="d-flex mb-5">
                  <img
                    src="./assets/images/outline_person_black.png"
                    alt=""
                    width="50"
                    height="50"
                    className="me-3"
                  />

                  <div>
                    <h3 className="fw-light">Minha conta</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Cras facilisis risus nibh.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <img
                    src="./assets/images/user-profile.png"
                    alt=""
                    width="112"
                    height="112"
                    className="rounded-circle border me-4"
                  />

                  <label
                    for="profile-avatar"
                    type="button"
                    className="btn btn-primary rounded-pill me-3"
                  >
                    Upload
                  </label>
                  <input
                    type="file"
                    name="profile-avatar"
                    id="profile-avatar"
                    className="d-none"
                  />

                  <button className="btn btn-outline-primary rounded-pill">
                    Remover
                  </button>
                </div>

                <hr className="my-5" />

                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="nome"
                        onChange={handleChange}
                        id="name"
                        className="form-control rounded-pill"
                        placeholder="John Doe"
    value={form.nome}
                      />
                      <label for="name" className="form-label">
                        Nome e sobrenome
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <InputMask
                        mask="999.999.999-99"
                        name="cpf"
                        value={form.cpf}
                        onChange={handleChange}
                      >
                        {(inputProps) => (
                          <input
                            className="form-control rounded-pill mb-3 form-control-lg"
                            type="text"
                            placeholder="99999999999"
                            required={true}
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                      <label for="cpf" className="form-label">
                        CPF
                      </label>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="row">
                  <div className="col">
                    <div className="form-floating">
                      <InputMask
                        mask="(99) 9.9999-9999"
                        name="phone"
                        value={form.telefone}
                        onChange={handleChange}
                      >
                        {(inputProps) => (
                          <input
                            className="form-control rounded-pill mb-3 form-control-lg"
                            type="text"
                            placeholder="(99) 9.9999-9999"
                            required={true}
                            {...inputProps}
                          />
                        )}
                      </InputMask>
                      <label for="phone" className="form-label">
                        Celular
                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control rounded-pill"
                        placeholder="name@example.com"
    value={form.email}
                        onChange={handleChange}
                      />
                      <label for="email" className="form-label">
                        Email
                      </label>
                    </div>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="form-floating">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control rounded-pill"
                    placeholder="**********"
                    onChange={handleChange}
                  />
                  <label for="password" className="form-label">
                    Senha
                  </label>
                </div>

                <hr className="my-5" />

                <h3 className="fw-light">Conectar contas</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  facilisis risus nibh.
                </p>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <span>
                    <img
                      src="./assets/images/logo-facebook.png"
                      alt=""
                      width="30"
                      height="30"
                    />
                    <span className="ms-3">Entrar com o Facebook</span>
                  </span>

                  <button className="btn btn-outline-primary rounded-pill shadow-lg" disabled>
                    Desconectar
                  </button>
                </div>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <span>
                    <img
                      src="./assets/images/logo-google.png"
                      alt=""
                      width="30"
                      height="30"
                    />{" "}
                    <span className="ms-3">Entrar com o Facebook</span>{" "}
                  </span>

                  <button className="btn btn-outline-primary rounded-pill shadow-lg" disabled>
                    Desconectar
                  </button>
                </div>

                <hr className="my-5" />

                <button
                  type="submit"
                  className="btn btn-lg btn-outline-primary rounded-pill shadow-lg w-100 mb-5"
                  onClick={handleSubmit}
                >
                  Salvar
                </button>
              </form>
            </div>
            <div className="col-6 d-none d-md-block text-center">
              <img
                src="./assets/images/minhaconta.png"
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

export default MyAccount;
