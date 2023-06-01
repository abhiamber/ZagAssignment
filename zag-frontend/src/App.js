import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
