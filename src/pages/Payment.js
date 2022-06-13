function Payment() {
  return (
    <div>

  <div className="offcanvas offcanvas-end shadow-lg" tabIndex="-1" id="offcanvasCoupon" aria-labelledby="offcanvasCouponLabel">
    <div className="offcanvas-header">
      <h6 id="offcanvasCouponLabel">Cupons</h6>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <input type="text" placeholder="Código do Cupom" className="flex-1 form-control rounded-pill me-2"
          style={{ backgroundColor:"#F5F5F5", }}/>

        <button className="btn btn-primary rounded-pill">Adicionar</button>
      </div>

      <ul className="nav app-nav-tabs" role="tablist">
        <li className="app-nav-item" role="presentation">
          <button className="app-nav-link active" aria-current="page" id="coupons-available-tab" data-bs-toggle="tab"
            data-bs-target="#coupons-available" type="button" role="tab" aria-controls="coupons-available"
            aria-selected="true">Disponíveis</button>
        </li>
        <li className="app-nav-item" role="presentation">
          <button className="app-nav-link" id="expired-coupons-tab" data-bs-toggle="tab" data-bs-target="#expired-coupons"
            type="button" role="tab" aria-controls="expired-coupons" aria-selected="false">Expirados</button>
        </li>
      </ul>

      <div className="tab-content mt-2">
        <div className="tab-pane fade show active" id="coupons-available" role="tabpanel"
          aria-labelledby="coupons-available-tab">
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex flex-1 me-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{ width:"54px", height:"54px", }}>
                <img src="./assets/images/outline_confirmation_number_black.png" width="54" height="54"/>
              </div>
              <div className="flex-1">
                <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                <p className="mb-1 fs-7 text-gray-700">Insira o código do cupom:</p>
                <p className="text-primary">XXUTY5</p>

                <div className="collapse" id="couponMoreInfo1">
                  <p className="text-gray-700">Garanta antes que acabe!</p>

                  <p className="text-gray-700 fs-7">
                    <span className="text-black">Estabelecimento:</span> Todos os estabelecimentos <br/>
                    <span className="text-black">Data de validade:</span> Até 04/08/2021 às 19:22 <br/>
                    <span className="text-black">Modo de usar:</span> Adicione o cupom no momento de finalização do pedido.
                    <br/>
                    <span className="text-black">Forma de pagamento:</span> Pague na entrega, pelo app ou retire no
                    estabelecimento. <br/>
                    <span className="text-black">Limite de uso:</span>Limite de uso: 1 vez por usuário. <br/>

                  </p>
                </div>

                <div className="d-flex justify-content-between mt-2">

                  <a className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none" data-bs-toggle="collapse"
                    href="#couponMoreInfo1" role="button" aria-expanded="false" aria-controls="couponMoreInfo1">

                  </a>

                  <p className="text-end fs-7">
                    Válido até <br/> 04/08/2021 às 19:22
                  </p>
                </div>
              </div>
            </div>

            <input type="radio" className="form-check-input" name="coupon"/>
          </div>

          <hr/>

          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex flex-1 me-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{ width:"54px", height:"54px", }}>
                <img src="./assets/images/outline_confirmation_number_black.png" width="54" height="54"/>
              </div>
              <div className="flex-1">
                <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                <p className="mb-1 fs-7 text-gray-700">Insira o código do cupom:</p>
                <p className="text-primary">XXUTY5</p>

                <div className="collapse" id="couponMoreInfo2">
                  <p className="text-gray-700">Garanta antes que acabe!</p>

                  <p className="text-gray-700 fs-7">
                    <span className="text-black">Estabelecimento:</span> Todos os estabelecimentos <br/>
                    <span className="text-black">Data de validade:</span> Até 04/08/2021 às 19:22 <br/>
                    <span className="text-black">Modo de usar:</span> Adicione o cupom no momento de finalização do pedido.
                    <br/>
                    <span className="text-black">Forma de pagamento:</span> Pague na entrega, pelo app ou retire no
                    estabelecimento. <br/>
                    <span className="text-black">Limite de uso:</span>Limite de uso: 1 vez por usuário. <br/>

                  </p>
                </div>

                <div className="d-flex justify-content-between mt-2">

                  <a className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none" data-bs-toggle="collapse"
                    href="#couponMoreInfo2" role="button" aria-expanded="false" aria-controls="couponMoreInfo2">

                  </a>

                  <p className="text-end fs-7">
                    Válido até <br/> 04/08/2021 às 19:22
                  </p>
                </div>
              </div>
            </div>

            <input type="radio" className="form-check-input" name="coupon"/>
          </div>
        </div>
        <div className="tab-pane fade" id="expired-coupons" role="tabpanel" aria-labelledby="expired-coupons-tab">
          <div className="d-flex justify-content-between align-items-center py-3 opacity-25">
            <div className="d-flex flex-1 me-3">
              <div className="ratio ratio-1x1 flex-shrink-0" style={{ width:"54px", height:"54px", }}>
                <img src="./assets/images/outline_confirmation_number_black.png" width="54" height="54"/>
              </div>
              <div className="flex-1">
                <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                <p className="mb-1 fs-7 text-gray-700">Insira o código do cupom:</p>
                <p className="text-primary">XXUTY5</p>

                <div className="collapse" id="couponMoreInfo2">
                  <p className="text-gray-700">Garanta antes que acabe!</p>

                  <p className="text-gray-700 fs-7">
                    <span className="text-black">Estabelecimento:</span> Todos os estabelecimentos <br/>
                    <span className="text-black">Data de validade:</span> Até 04/08/2021 às 19:22 <br/>
                    <span className="text-black">Modo de usar:</span> Adicione o cupom no momento de finalização do pedido.
                    <br/>
                    <span className="text-black">Forma de pagamento:</span> Pague na entrega, pelo app ou retire no
                    estabelecimento. <br/>
                    <span className="text-black">Limite de uso:</span>Limite de uso: 1 vez por usuário. <br/>

                  </p>
                </div>

                <div className="d-flex justify-content-between mt-2">

                  <a className="btn-coupon-more-info me-3 fs-7 text-primary text-decoration-none" data-bs-toggle="collapse"
                    href="#couponMoreInfo2" role="button" aria-expanded="false" aria-controls="couponMoreInfo2">

                  </a>

                  <p className="text-end fs-7">
                    Válido até <br/> 04/08/2021 às 19:22
                  </p>
                </div>
              </div>
            </div>

            <input type="radio" className="form-check-input" name="coupon" disabled/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="confirm-order-modal" tabIndex="-1" aria-labelledby="confirmOrderModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-header border-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <h5 className="fw-light mb-4" style={{ fontWeight:"500", }}>Confirmação de
              compra!</h5>

            <p className="fw-light mb-2">Você tem certeza que deseja comprar: </p>
            <p className="fw-light mb-5"><strong className="text-primary" style={{ fontWeight:"500 !important", }}>1x</strong>
              Gorgonzola Burger + Porção</p>

            <div className="d-flex">
              <button className="btn btn-outline-primary flex-1 me-2" data-bs-dismiss="modal"
                aria-label="Close">Cancelar</button>
              <button className="btn btn-primary flex-1" data-bs-target="#order-success-modal" data-bs-toggle="modal"
                data-bs-dismiss="modal">Sim</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="modal fade" id="order-success-modal" tabIndex="-1" aria-labelledby="orderSuccessModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-header border-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <div className="text-center">
            <h5 className="mb-4" style={{ fontWeight:"500", }}>Confirmação de
              compra!</h5>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
              <circle cx="15.5" cy="15.5" r="15.5" fill="#2FB400" />
              <path d="M10 16.1432C13.7463 19.4578 14.6829 20.0892 14.6829 19.9905L22 12" stroke="white"
                strokeWidth="3" />
            </svg>
            <p className="fw-light mb-2">A compra de:</p>
            <p className="fw-light mb-2"><strong className="text-primary" style={{ fontWeight:"500 !important", }}>1x</strong>
              Gorgonzola Burger + Porção</p>
            <p className="fw-light mb-5">foi confirmada com sucesso!</p>
            <a href="./index.html" className="btn btn-primary flex-1">Fechar</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="pay-modal-overlay" className="app-modal-overlay"></div>
  <div id="pay-modal" className="app-modal" data-screen-name="select-payment-method">
    <div id="select-payment-method" className="screen">
      <div className="mb-4 pb-2 border-bottom">
        <h5 className="fw-light">Selecione um método de <span className="text-primary">pagamento</span></h5>
      </div>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="select-payment-method2"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Pagamento na entrega (<span className="text-primary">Maquininha ou
            dinheiro</span>)</span>
      </label>

    <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="select-card" style={{backgroundColor: '#F5F5F5'}}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Pagar agora (<span className="text-primary">Online</span>)</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill close-modal" style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Retirar no estabelecimento</span>
      </label>
    </div>
    <div id="select-card" className="screen">
      <div className="d-flex mb-4 pb-2 border-bottom">
        <button className="btn" data-screen-target="select-payment-method">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ababab">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </button>
        <h5 className="ms-3 fw-light">Selecione um Cartão</h5>
      </div>

      <div className="border rounded ratio ratio-16x9 mb-4" data-screen-target="card-data" style={{  borderColor: '#000'}}>
        <div className="p-4">
          <div>
            <img src="./assets/images/visa-logo.png" width="75" height="22" className="mb-3"/>
            <p className="fs-7 text-uppercase">WELISON A RIBEIRO</p>
          </div>
          <p className="position-absolute" style={{ bottom:"24px", right:"24px", }}>**** **** **** *259</p>
        </div>
      </div>

      <div className="border rounded ratio ratio-16x9 mb-4" data-screen-target="card-data" style={{borderColor:
        '#000'}}>
        <div className="p-4">
          <div>
            <img src="./assets/images/mastercard-logo.png" width="60" height="46" className="mb-3"/>
            <p className="fs-7 text-uppercase">WELISON A RIBEIRO</p>
          </div>
          <p className="position-absolute" style={{ bottom:"24px", right:"24px", }}>**** **** **** *259</p>
        </div>
      </div>
    </div>
    <div id="select-payment-method2" className="screen">
      <div className="d-flex mb-4 pb-2 border-bottom">
        <button className="btn" data-screen-target="select-payment-method">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ababab">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </button>
        <h5 className="ms-3 fw-light">Selecione um método de <strong className="text-primary">pagamento</strong></h5>
      </div>

      <div className="border border-primary text-center p-4 mb-5">
        <span className="fw-light">Total a pagar: </span><strong className="text-primary">R$ 90,50</strong>
      </div>

      <div className="form-check mb-2">
        <input type="radio" name="payment-method" id="credit-cart" className="form-check-input"
          data-screen-target="credit-card"/>
        <label for="credit-cart" className="form-check-label fw-light">Cartão de crédito</label>
      </div>

      <div className="form-check mb-2">
        <input type="radio" name="payment-method" id="debt-cart" className="form-check-input"
          data-screen-target="debit-card"/>
        <label for="debt-cart" className="form-check-label fw-light">Cartão de débito</label>
      </div>

      <label className="form-check">
        <input type="radio" name="payment-method" id="money" className="form-check-input" data-screen-target="money"/>
        <label for="money" className="form-check-label fw-light">Dinheiro</label>
      </label>
    </div>
    <div id="credit-card" className="screen">
      <div className="d-flex mb-4 pb-2 border-bottom">
        <button className="btn" data-screen-target="select-payment-method2">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ababab">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </button>
        <h5 className="ms-3 fw-light">Informe o cartão (<span className="text-primary">crédito</span>)</h5>
      </div>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Elo</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Mastercard</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Visa</span>
      </label>
    </div>
    <div id="debit-card" className="screen">
      <div className="d-flex mb-4 pb-2 border-bottom">
        <button className="btn" data-screen-target="credit-card">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ababab">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
        </button>
        <h5 className="ms-3 fw-light">Informe o cartão (<span className="text-primary">débito</span>)</h5>
      </div>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">American Express</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Diners Club International</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Elo</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill mb-2" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Mastercard</span>
      </label>

      <label className="w-100 px-4 py-2 rounded-pill" data-screen-target="confirm-purchase"
        style={{ backgroundColor:"#F5F5F5", }}>
        <input className="form-check-input" type="radio" name="card-banner"/>
        <span className="ms-2 fw-light">Visa</span>
      </label>
    </div>
    <div id="money" className="screen">
      <div className="text-center">
        <h5 className="fw-light mb-4">Troco digital +
          <strong className="text-primary">Cashback</strong>!
        </h5>

        <p className="fw-light mb-1">Após efetuar o pagamento em dinheiro na entrega, seu troco (se houver) será
          adicionado ao cashback do seu pedido em até 24 horas.</p>
        <p className="fw-light mb-1">Pode ficar tranquilo, seu troco poderá ser utilizado em seu próximo pedido.
        </p>
        <p className="mb-4" style={{ fontWeight:"500", }}>Se estiver de acordo com esta condição, clique em <span
            className="text-primary">OK</span>!</p>

        <div className="d-flex">
          <button className="btn btn-outline-primary flex-1 me-2 close-modal">Cancelar</button>
          <button className="btn btn-primary flex-1 close-modal">OK</button>
        </div>
      </div>
    </div>
    <div id="confirm-purchase" className="screen">
      <div className="text-center">
        <h5 className="fw-light mb-4" style={{ fontWeight:"500", }}>Confirmação de
          compra!</h5>

        <p className="fw-light mb-2">Você tem certeza que deseja comprar: </p>
        <p className="fw-light mb-5"><strong className="text-primary" style={{ fontWeight:"500 !important", }}>1x</strong>
          Gorgonzola Burger + Porção</p>

        <div className="d-flex">
          <button className="btn btn-outline-primary flex-1 me-2 close-modal">Cancelar</button>
          <button className="btn btn-primary flex-1" data-screen-target="confirmed-purchase">Sim</button>
        </div>
      </div>
    </div>
    <div id="confirmed-purchase" className="screen">
      <div className="text-center">
        <h5 className="mb-4" style={{ fontWeight:"500", }}>Confirmação de
          compra!</h5>
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
          <circle cx="15.5" cy="15.5" r="15.5" fill="#2FB400" />
          <path d="M10 16.1432C13.7463 19.4578 14.6829 20.0892 14.6829 19.9905L22 12" stroke="white" strokeWidth="3" />
        </svg>
        <p className="fw-light mb-2">A compra de:</p>
        <p className="fw-light mb-2"><strong className="text-primary" style={{ fontWeight:"500 !important", }}>1x</strong>
          Gorgonzola Burger + Porção</p>
        <p className="fw-light mb-5">foi confirmada com sucesso!</p>
        <button className="btn btn-primary flex-1 close-modal">Fechar</button>
      </div>
    </div>
    <div id="card-data" className="screen">
      <div className="px-3 px-md-5 py-4">
        <div className="d-flex mb-4 pb-2 border-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#ababab">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
          </svg>
          <h5 className="ms-3 fw-light">Informe os <span className="text-primary">dados do cartão</span></h5>
        </div>

        <form>

          <fieldset>
            <legend className="mb-4">
              <h5 className="fw-normal">Dados pessoais</h5>
            </legend>

            <div className="row">
              <div className="col-4 col-md-3 mb-3">
                <div className="form-floating">
                  <input type="number" name="ddd" id="ddd" className="form-control rounded-pill" placeholder="99"
                    value="62"/>
                  <label for="ddd" className="form-label text-primary opacity-100">DDD</label>
                </div>
              </div>
              <div className="col-8 col-md-9 mb-3">
                <div className="form-floating">
                  <input type="tel" name="phone" id="phone" className="form-control rounded-pill" placeholder="9 9999-9999"
                    value="9 9137-2030"/>
                  <label for="phone" className="form-label text-primary opacity-100">Número</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" name="name" id="name" className="form-control rounded-pill" placeholder="John Doe"
                    value="John Doe"/>
                  <label for="name" className="form-label text-primary opacity-100">Titular do cartão</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="text" name="cpf" id="cpf" className="form-control rounded-pill" placeholder="999.999.999-99"
                    value="999.999.999-99"/>
                  <label for="cpf" className="form-label text-primary opacity-100">CPF</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="date" name="date-nasc" id="date-nasc" className="form-control rounded-pill"
                    placeholder="01/01/2000" value=""/>
                  <label htmlFor="date-nasc" className="form-label text-primary opacity-100">Data de nascimento</label>
                </div>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-4">
              <h5 className="fw-normal">Dados do cartão</h5>
            </legend>

            <div className="row">
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="number" name="card-number" id="card-number" className="form-control rounded-pill"
                    placeholder="99" value="62"/>
                  <label for="card-number" className="form-label text-primary opacity-100">Número do cartão</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <input type="number" name="security-code" id="security-code" className="form-control rounded-pill"
                    placeholder="123" value="123"/>
                  <label for="security-code" className="form-label text-primary opacity-100">COD. de segurança</label>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="form-floating">
                  <select className="form-select rounded-pill" id="card-validity">
                    <option value="1" selected>01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <label for="card-validity" className="form-label text-primary opacity-100">Validade</label>
                </div>
              </div>
              <div className="col-6 mb-3">
                <div className="form-floating">
                  <input type="number" name="year" id="year" className="form-control rounded-pill" placeholder="2021"
                    value="2021"/>
                  <label for="year" className="form-label text-primary opacity-100">Ano</label>
                </div>
              </div>
              <div className="col-12 mb-3">
                <div className="form-floating">
                  <select className="form-select rounded-pill" id="installments">
                    <option value="1">1x de R$ 95,50</option>
                    <option value="2">1x de R$ 95,50</option>
                  </select>
                  <label for="installments" className="form-label text-primary opacity-100">Parcelas</label>
                </div>
              </div>
            </div>
          </fieldset>

          <button type="button" className="btn btn-lg btn-black-pill w-100 mt-5 close-modal">Confirmar
            cartão</button>
        </form>
      </div>
    </div>
  </div>

  <main className="py-4">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-7">
          <img src="./assets/images/logo.png" alt="Logo" className="mb-5"/>

          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex align-items-center">
              <img src="./assets/images/outline_list_alt_black.png" width="40" height="40"/>

              <h3 className="mb-1 ms-3">Endereço para entrega</h3>
            </div>

            <div>
              <a href="#" className="text-primary text-decoration-none" data-bs-toggle="modal"
                data-bs-target="#edit-address-modal">Editar</a>

              <div id="edit-address-modal" className="modal">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title text-primary">Editar endereço</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                      <form action="">
                        <div className="row">
                          <div className="col-6">
                            <input type="text" name="" value="São Paulo" className="form-control rounded-pill mb-3"
                              placeholder="Estado" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-6">
                            <input type="text" name="" value="Campinas" className="form-control rounded-pill mb-3"
                              placeholder="Cidade" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-8">
                            <input type="text" name="" value="Rua 15" className="form-control rounded-pill mb-3"
                              placeholder="Rua" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-4">
                            <input type="text" name="" value="2" className="form-control rounded-pill mb-3"
                              placeholder="Número" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-6">
                            <input type="text" name="" value="Jardim Marista" className="form-control rounded-pill mb-3"
                              placeholder="Bairro" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-6">
                            <input type="text" name="" value="99999-999" className="form-control rounded-pill mb-3"
                              placeholder="CEP" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-6">
                            <input type="text" name="" value="Casa 1" className="form-control rounded-pill mb-3"
                              placeholder="Complemento 1" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                          <div className="col-6">
                            <input type="text" name="" className="form-control rounded-pill mb-3"
                              placeholder="Complemento 2" style={{ backgroundColor:"#F0F0F0", }}/>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary w-100 rounded-pill">Salvar endereço</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <p className="fw-bold fs-5 mb-2">R. Mato Grosso - 36, Alto Paraná</p>
              <p className="text-gray-700 mb-2">Local de entrega: Casa</p>
              <a href="#" className="text-primary text-decoration-none">Adicionar informações de entrega</a>
            </div>
            <div>
              <a href="#" className="text-primary text-decoration-none" data-bs-toggle="modal"
                data-bs-target="#saved-addresses-modal">Trocar endereço</a>
              <div className="modal" id="saved-addresses-modal" tabIndex="-1" aria-labelledby="savedAddressesModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-md-5">
                      <div className="pb-md-5">
                        <div className="my-5 text-center">
                          <h4 className="fw-light">Endereços salvos</h4>
                          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="mb-4">
                          <div
                            className="border border-primary rounded-3 p-4 d-flex justify-content-between align-items-center shadow-lg">
                            <div className="d-flex">
                              <img src="./assets/images/outline_place.png" alt="" width="40" height="40" className="me-3"/>
                              <div>
                                <p className="mb-2">R. Rua Walter Nolli - 169, Redenção PA</p>
                                <p className="fs-7 mb-0 text-gray-600">Local de entrega: Casa</p>
                              </div>
                            </div>

                            <div className="d-flex align-items-center ms-2">
                              <button type="button" className="btn btn-sm p-0">
                                <img src="./assets/images/outline_edit.png" alt="" className="me-1"/>
                              </button>
                              <button type="button" className="btn btn-sm p-0">
                                <img src="./assets/images/outline_delete.png " alt=""/>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="border rounded-3 p-4 d-flex justify-content-between align-items-center">
                            <div className="d-flex">
                              <img src="./assets/images/outline_place.png" alt="" width="40" height="40" className="me-3"/>
                              <div>
                                <p className="mb-2">R. Rua Walter Nolli - 169, Redenção PA</p>
                                <p className="fs-7 mb-0 text-gray-600">Local de entrega: Casa</p>
                              </div>
                            </div>

                            <div className="d-flex align-items-center ms-2">
                              <button type="button" className="btn btn-sm p-0">
                                <img src="./assets/images/outline_edit.png" alt="" className="me-1"/>
                              </button>
                              <button type="button" className="btn btn-sm p-0">
                                <img src="./assets/images/outline_delete.png " alt=""/>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="d-flex justify-content-between align-items-center mt-4 mb-5 border border-primary rounded-10 px-4 py-2">
            <div className="d-flex justify-content-between align-items-center">
              <img src="./assets/images/outline_today_black.png" width="35" height="35"/>

              <div className="ms-4">
                <p className="mb-1">Entrega: Hoje</p>
                <p className="text-gray-700 mb-0">Hoje, 02 ago - 13:45 - 14:00</p>
              </div>
            </div>
            <button className="btn btn-sm">
              <img src="./assets/images/outline_edit.png" alt=""/>
            </button>
          </div>

          <div className="mb-5 d-flex align-items-center">
            <img src="./assets/images/outline_payments_black.png" width="40" height="40"/>
            <h3 className="mb-1 ms-3">
              Pagamento
            </h3>
          </div>

          <button id="btn-pay" type="button" className="btn w-100 d-flex justify-content-between mb-4"
            style={{ backgroundColor:"#f9f9f9", }}>Selecionar uma
            opção

            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
          </button>


          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="cashback"/>
            <label className="form-check-label" for="cashback">Usar meu Cashback (<span className="text-primary">R$
                160,00</span>)</label>
          </div>
        </div>
        <div className="col-12 col-lg-5 ps-lg-5 mt-5 mt-lg-0">
          <div className="shadow-lg rounded-10 p-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3 ratio ratio-1x1 flex-shrink-0" style={{ width:"80px", }}>
                  <img src="./assets/images/burguer.png" alt="Foto do produto" width="80" height="80"
                    className="img-fluid rounded-3" style={{ width:"80px", height:"80px", }}/>
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
                <a href="./estabelecimento-aberto.html" className="text-nowrap text-decoration-none">Ver cardápio</a>

                <button className="btn mt-5">
                  <img src="./assets/images/remove.png" width="30" height="30"/>
                </button>
              </div>
            </div>

            <hr/>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex">
                <img src="./assets/images/outline_confirmation_number_black.png" alt=""/>
                <div>
                  <h5 className="fw-bold text-primary mb-1">Cupom</h5>
                  <p className="mb-1 fs-7 text-gray-700">Insira o código do cupom:</p>
                  <p className="text-primary mb-0">XXUTY5</p>
                </div>
              </div>

              <button className="btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCoupon"
                aria-controls="offcanvasCoupon">
                <img src="./assets/images/chevron-right.png" alt=""/>
              </button>
            </div>

            <hr/>

            <ul className="list-unstyled">
              <li>
                <p className="fw-light mb-1">Cupom: <span className="float-end">R$ 0,00</span></p>
                <p className="fw-light mb-1">Cashback: <span className="float-end">R$ 0,00</span></p>
                <p className="fw-light mb-1">Taxa de entrega: <span className="float-end">R$ 0,00</span></p>
                <p className="fw-light mb-1">Subtotal: <span className="float-end">R$ 0,00</span></p>
                <p className="fw-bold mb-1">Total: <span className="float-end">R$ 0,00</span></p>
              </li>
            </ul>

            <a data-bs-toggle="modal" href="#confirm-order-modal" role="button"
              className="btn w-100 btn-black-pill mt-5">Confirmar pedido</a>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Payment;
