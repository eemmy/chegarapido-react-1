import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Register from "./pages/Register";
import RegisterDeliveryman from "./pages/RegisterDeliveryman";
import RegisterFranchised from "./pages/RegisterFranchised";
import RegisterEstablishments from "./pages/RegisterEstablishments";
import Login from "./pages/Login";
import LoginCel from "./pages/LoginCel";
import LoginEmail from "./pages/LoginEmail";
import Home from "./pages/Home";
import MyRequests from "./pages/MyRequests";
import Favorites from "./pages/Favorites";
import MyAddress from "./pages/MyAddress";
import MyAccount from "./pages/MyAccount";
import Payment from "./pages/Payment";
import Wallet from "./pages/Wallet";
import ForgotPassword from "./pages/ForgotPassword";
import Establishments from "./pages/Establishments";
import EstablishmentsOpen from "./pages/EstablishmentsOpen";
import EstablishmentsClose from "./pages/EstablishmentsClose";
import Modals from "./pages/Modals";

import "./index.css";

function RequireAuth({ children }) {
  let { signed } = useAuth();
  let location = useLocation();

  if (!signed()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/registerdeliveryman"
            element={<RegisterDeliveryman />}
          />
          <Route path="/registerfranchised" element={<RegisterFranchised />} />
          <Route
            path="/registerestablishment"
            element={<RegisterEstablishments />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/loginCel" element={<LoginCel />} />
          <Route path="/loginEmail" element={<LoginEmail />} />
          <Route path="/" element={<Home />} />
          <Route path="/myrequests" element={<MyRequests />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/myaddress" element={<MyAddress />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/establishments" element={<Establishments />} />
          <Route path="/establishmentsopen" element={<EstablishmentsOpen />} />
          <Route
            path="/establishmentsclose"
            element={<EstablishmentsClose />}
          />
          <Route path="/testModal" element={<Modals />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
