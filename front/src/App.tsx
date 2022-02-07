import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import VerifyCode from "./pages/verifycode/VerifyCode";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/my-irancell" element={<Login />} />
        <Route path="/my-irancell/verifycode" element={<VerifyCode />} />
        <Route path="/my-irancell/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
