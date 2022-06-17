import { Link } from "react-router-dom";

function MenuAccount({ selected }) {
  return (
    <div className="shadow-lg p-3 rounded-10 my-5">
      <ul className="list-unstyled d-flex flex-md-row flex-column gap-vertical-8  justify-content-between align-items-center mb-0">
        <li className="w-100">
          <Link
            to="/myaccount"
            className="text-decoration-none btn w-100 rounded-0"
            style={{
              borderBottom: selected == "myaccount" ? "3px solid #EF4000" : "",
              color: selected == "myaccount" ? "#ef4000" : "",
            }}
          >
            Minha conta
          </Link>
        </li>
        <li className="w-100">
          <Link
            to="/myaddress"
            className="text-decoration-none btn w-100 rounded-0"
            style={{
              borderBottom: selected == "myaddress" ? "3px solid #EF4000" : "",
              color: selected == "myaddress" ? "#ef4000" : "",
            }}
          >
            Meus endereços
          </Link>
        </li>
        <li className="w-100">
          <Link
            to="/myrequests"
            className="text-decoration-none btn w-100 rounded-0"
            style={{
              borderBottom: selected == "myrequests" ? "3px solid #EF4000" : "",
              color: selected == "myrequests" ? "#EF4000" : "",
            }}
          >
            Meus pedidos
          </Link>
        </li>
        <li className="w-100">
          <Link
            to="/favorites"
            className="text-decoration-none btn w-100 rounded-0"
            style={{
              borderBottom: selected == "favorites" ? "3px solid #EF4000" : "",
              color: selected == "favorites" ? "#ef4000" : "",
            }}
          >
            Favoritos
          </Link>
        </li>
        <li className="w-100">
          <Link
            to="/wallet"
            className="text-decoration-none btn w-100 rounded-0"
            style={{
              borderBottom: selected == "wallet" ? "3px solid #EF4000" : "",
              color: selected == "wallet" ? "#ef4000" : "",
            }}
          >
            Carteira (<span className="text-primary">Cashback</span>)
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuAccount;
