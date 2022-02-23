import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Account";
import CreateStadium from "./pages/CreateStadium";
import Update from "./pages/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:urlId" element={<Detail />} />
        <Route path="/register" element={<Login />} />
        <Route path="/createStadium" element={<CreateStadium />} />
        <Route path="/detail/update/:urlId" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
