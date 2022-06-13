import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";

function RegisterPage() {
  const [form, setForm] = useState({});

  const { Register } = useAuth();

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Register(form);
  };

  useEffect(() => {
    console.log(form);
    //console.log(signed);
  }, [form]);

  return (
    <div>
      <div id="login" className="min-vh-100">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-6">
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
                <a
                  href="./entrar.html"
                  className="position-absolute"
                  style={{
                    top: "50px",
                    left: "50px",
                  }}
                >
                  <img
                    src="./assets/images/outline_chevron_left_black.png"
                    alt=""
                  />
                </a>

                <div className="mb-4 text-center">
                  <h2>Criar conta</h2>
                  <p className="text-gray-700">
                    Digite seu email e sua senha para continuar!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="w-100 mb-5">
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="form-control rounded-pill mb-3 form-control-lg"
                  />

                  <div className="row">
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="password"
                        onChange={handleChange}
                        placeholder="Senha"
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        name="city"
                        onChange={handleChange}
                        placeholder="Cidade"
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>

                    <div className="col-6">
                      <select
                        className="
                        form-select form-select-lg
                        rounded-pill
                        mb-3
                        form-control-lg
                      "
                        name="state"
                        onChange={handleChange}
                        aria-label="Estado"
                      >
                        <option defaultValue={true}>Estado</option>

                        <option value="1">Acre</option>
                        <option value="2">Alagoas</option>
                        <option value="3">Amazonas</option>
                        <option value="4">Amapá</option>
                        <option value="5">Bahia</option>
                        <option value="6">Ceará</option>
                        <option value="7">Distrito Federal</option>
                        <option value="8">Espírito Santo</option>
                        <option value="9">Goiás</option>
                        <option value="10">Maranhão</option>
                        <option value="11">Minas Gerais</option>
                        <option value="12">Mato Grosso do Sul</option>
                        <option value="13">Mato Grosso</option>
                        <option value="14">Pará</option>
                        <option value="15">Paraíba</option>
                        <option value="16">Pernambuco</option>
                        <option value="17">Piauí</option>
                        <option value="18">Paraná</option>
                        <option value="19">Rio de Janeiro</option>
                        <option value="20">Rio Grande do Norte</option>
                        <option value="21">Rondônia</option>
                        <option value="22">Roraima</option>
                        <option value="23">Rio Grande do Sul</option>
                        <option value="24">Santa Catarina</option>
                        <option value="25">Sergipe</option>
                        <option value="26">São Paulo</option>
                        <option value="27">Tocantins</option>
                      </select>
                    </div>

                    <div className="col-6">
                      <input
                        type="text"
                        name="cpf"
                        onChange={handleChange}
                        placeholder="CPF"
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="date"
                        name="birthdate"
                        onChange={handleChange}
                        placeholder="Data de nascimento"
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>
                    <div className="col-6">
                      <select
                        className="
                        form-select form-select-lg
                        rounded-pill
                        mb-3
                        form-control-lg
                      "
                        name="sex"
                        onChange={handleChange}
                      >
                        <option value="1" defaultValue={true}>
                          Masculino
                        </option>
                        <option value="2">Feminino</option>
                        <option value="3">Outros</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <input
                        type="tel"
                        name="tel"
                        onChange={handleChange}
                        placeholder="(99) 9 9999 9999"
                        className="form-control rounded-pill mb-3 form-control-lg"
                      />
                    </div>
                  </div>

                  <div className="form-check mb-5">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="form-check-input"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      Eu concordo com os
                      <a href="#" className="text-decoration-none">
                        Termos de uso.
                      </a>
                    </label>
                  </div>

                  <button
                    onSubmit={handleSubmit}
                    type="submit"
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

export default RegisterPage;
