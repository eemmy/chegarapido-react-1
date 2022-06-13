function ForgotPassword() {
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
                position-relative
              "
              >
                <a
                  href="./entrar-com-email.html"
                  className="position-absolute"
                  style={{ top: "50px", left: "50px" }}
                >
                  <img
                    src="./assets/images/outline_chevron_left_black.png"
                    width="40"
                    height="40"
                  />
                </a>

                <div className="mb-4 text-center">
                  <h2>Esqueci minha senha</h2>
                  <p className="text-gray-700">
                    Digite seu email para recuperar sua senha
                  </p>
                </div>

                <form action="" className="w-100 mb-5">
                  <div className="input-group input-group-rounded-pill mb-4">
                    <span className="input-group-text">
                      <img
                        src="./assets/images/outline_email.png"
                        width="30"
                        height="30"
                      />
                    </span>
                    <input
                      type="text"
                      placeholder="email@email.com.br"
                      className="form-control form-control-lg rounded-end"
                    />
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
                  "
                    style={{ borderColor: "#000 !important" }}
                  >
                    Enviar link
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
