import { useState } from "react";

import SelectAddress from "../components/modals/SelectAddress";
import ConfirmAddress from "../components/modals/ConfirmAddress";
import ConfirmLocation from "../components/modals/ConfirmLocation";
import RequestLogin from "../components/modals/RequestLogin";
import ProductInformation from "../components/modals/ProductInformation";
import RestaurantInformation from "../components/modals/RestaurantInformation";
import DigitalChange from "../components/modals/DigitalChange";

function Modals() {
  const [hidden, setHidden] = useState(true);

  return (
    <div
      className="p-4"
      style={{
        position: "relative",
        display: "flex",
        justifyItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      {/*
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#select-address-modal"
        onClick={() => setHidden(false)}
        style={{ width: "452px" }}
      >
        Selecionar endereço
      </button>
      <SelectAddress hidden={hidden} closeModal={() => setHidden(true)} />
        
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#confirm-address-modal"
        style={{ width: "452px" }}
        onClick={() => setHidden(false)}
      >
        Confirmar endereço
      </button>

      <ConfirmAddress hidden={hidden} closeModal={() => setHidden(true)} />

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#confirm-address-modal"
        style={{ width: "452px" }}
        onClick={() => setHidden(false)}
      >
        Confirmar localização
      </button>
      <ConfirmLocation hidden={hidden} closeModal={() => setHidden(true)} />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#confirm-address-modal"
        style={{ width: "452px" }}
        onClick={() => setHidden(false)}
      >
        Solicitar login
      </button>

      <RequestLogin hidden={hidden} closeModal={() => setHidden(true)} />

      <ProductInformation hidden={hidden} closeModal={() => setHidden(true)} />
      */}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#confirm-address-modal"
        style={{ width: "452px" }}
        onClick={() => setHidden(false)}
      >
        Troco digital
      </button>

      <ProductInformation hidden={hidden} closeModal={() => setHidden(true)} />
    </div>
  );
}

export default Modals;
