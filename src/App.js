import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Detail from "./pages/Detail";
import CreateStadium from "./pages/CreateStadium";
import Update from "./pages/Update";
import Login from "./pages/Account/login";
import Recovery from "./pages/Account/recovery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:urlId" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/recovery" element={<Recovery />} />
        <Route path="/createStadium" element={<CreateStadium />} />
        <Route path="/detail/update/:urlId" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
