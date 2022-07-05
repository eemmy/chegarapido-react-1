import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function LoginEmail() {
  const [form, setForm] = useState({});

  const { Login } = useAuth();
  let navigate = useNavigate();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const err = await Login(form, 'email');

    if (err) {
      alert("Ocorreu um erro durante o login, tente novamente mais tarde");
      return;
    }

    return navigate("/myaccount");
  };

  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <div>
      <div id="login" className="min-vh-100">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-6">
              <img
                src="./assets/images/logo.png"
                className="mt-4"
                style={{
                  marginBottom: "20vh",
                }}
              />

              <div>
                <h2 className="fs-1 mb-4 text-white">
                  Quem tem <span className="text-primary fw-bold">fome</span>
                  <br />
                  tem <span className="text-primary fw-bold">pressa</span>!
                </h2>
                <p
                  className="text-white opacity-75 mb-5"
                  style={{
                    maxWidth: "540px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  condimentum imperdiet quam, ut dignissim orci molestie sed.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                className="
                bg-white
                min-vh-100
                d-flex
                flex-column
                justify-content-center
                align-items-center
                p-5
                position-relative
              "
              >
                <Link
                  to="/login"
                  className="position-absolute"
                  style={{ top: "50px", left: "50px" }}
                >
                  <img
                    src="./assets/images/outline_chevron_left_black.png"
                    alt=""
                  />
                </Link>

                <div className="mb-4 text-center">
                  <h2>Entrar</h2>
                  <p className="text-gray-700">
                    Digite seu email e sua senha para continuar!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="w-100 mb-5">
                  <div className="input-group input-group-rounded-pill mb-3">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_email.png"
                        width="30"
                        height="30"
                      />
                    </span>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      placeholder="email@email.com.br"
                      className="form-control form-control-lg rounded-end"
                    />
                  </div>

                  <div className="input-group input-group-rounded-pill mb-3">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_lock.png"
                        width="30"
                        height="30"
                      />
                    </span>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      placeholder="***************"
                      className="form-control form-control-lg rounded-end"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        name="remember-password"
                        id="remember-password"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="remember-password"
                      >
                        Lembrar-me.
                      </label>
                    </div>
                    <Link
                      to="/forgotpassword"
                      className="text-decoration-none text-black"
                    >
                      Esqueci minha senha
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="
                    btn btn-lg
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                    bg-white
                    text-black
                    mb-3
                  "
                    style={{
                      borderColor: "#000 !important",
                    }}
                  >
                    Entrar
                  </button>

                  <Link
                    to="/register"
                    className="
                    btn btn-lg
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                    bg-black
                    text-white
                  "
                  >
                    Criar uma conta
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginEmail;
