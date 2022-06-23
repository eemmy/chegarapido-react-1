import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div id="login" className="min-vh-100">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-6">
              <img
                src="assets/images/logo.png"
                className="mt-4"
                style={{ marginBottom: "20vh" }}
              />

              <div>
                <h2 className="fs-1 mb-4 text-white">
                  Quem tem <span className="text-primary fw-bold">fome</span>
                  <br />
                  tem <span className="text-primary fw-bold">pressa</span>!
                </h2>
                <p
                  className="text-white opacity-75 mb-5"
                  style={{ maxWidth: "540px" }}
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
              "
              >
                <div className="mb-4 text-center">
                  <h2>Entrar</h2>
                  <p className="text-gray-700">Como deseja prosseguir?</p>
                </div>

                <div className="w-100 gap-vertical-10">
                  <Link
                    className="
                    btn btn-lg
                    fs-6
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                  "
                    to="/loginCel"
                  >
                    <img
                      src="./assets/images/phone.png"
                      alt="Entrar com o celular"
                      width="30"
                      height="30"
                      className="me-2"
                    />
                    Entrar com o celular
                  </Link>
                  <Link
                    className="
                    btn btn-lg
                    fs-6
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                  "
                    to="/loginEmail"
                  >
                    <img
                      src="./assets/images/outline_email_black.png"
                      alt="Entrar com o email"
                      width="30"
                      height="30"
                      className="me-2"
                    />
                    Entrar com o email
                  </Link>
                  <button
                    className="
                    btn btn-lg
                    fs-6
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                    text-white
                    disabled
                  "
                    to="#"
                    style={{
                      backgroundColor: "#3b5998",
                      borderColor: "#3b5998",
                    }}
                  >
                    <img
                      src="./assets/images/outline_facebook_white.png"
                      alt="Entrar com o Facebook"
                      width="30"
                      height="30"
                      className="me-2"
                    />
                    Entrar com o Facebook
                  </button>
                  <button
                    className="
                    btn btn-lg
                    fs-6
                    rounded-pill
                    d-block
                    shadow-lg
                    w-100
                    border
                    disabled
                  "
                    to="#"
                  >
                    <img
                      src="./assets/images/logo-google.png"
                      alt="Entrar com o Google"
                      className="me-2"
                    />
                    Entrar com o Google
                  </button>
                  <Link className="btn btn-lg fs-6 b-block w-100" to="/">
                    Entrar como convidado
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
