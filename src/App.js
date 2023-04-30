import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Auth from "./routes/auth/Auth";
import Home from "./routes/home/Home";
import Categories from "./routes/categories/Categories";
import Product from "./routes/product/Product";
import Register from "./routes/auth/register/Register";
import Login from "./routes/auth/login/Login";
import Cart from "./routes/cart/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path="/categories/:id" element={<Categories />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
