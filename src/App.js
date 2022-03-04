import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Login from "./pages/Account/login";
import Recovery from "./pages/Account/recovery";
import Register from "./pages/Account/register";
import Cart from "./pages/Cart";
import ProductProvider from "./utils/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:urlId" element={<Detail />} />
          <Route path="/cart/detail/:urlId" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/recovery" element={<Recovery />} />

          <Route path="/login/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
};

export default App;
