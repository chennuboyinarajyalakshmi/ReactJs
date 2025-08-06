import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <Fragment>
      <Routes>
        {/* Redirect root ("/") to "/products" */}
        <Route path="/" element={<Navigate to="/products" />} />

        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartListPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
