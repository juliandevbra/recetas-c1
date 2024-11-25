import "./styles/App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Form from "./Pages/Form";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import { routes } from "./utils/routes";
import Detail from "./Pages/Detail";
import LoboEstepario from "./Clase 13/LoboEstepario";
import ParentComponent from "./Clase 13/ParentComponent";
import Context from "./Clase 13/Context";

function App() {
  return (
    <>
      {/* <Context>
        <ParentComponent />
        <LoboEstepario />
      </Context> */}
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.form} element={<Form />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route
          path={routes.pnf}
          element={<h1>Page not found - Error 404</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
