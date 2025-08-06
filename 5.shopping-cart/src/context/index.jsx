import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listOfProducts, setListOfProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch product list from API
  async function fetchListOfProducts() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/products");
      const result = await apiResponse.json();
      if (result?.products) {
        setListOfProducts(result.products);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  // ✅ Add product to cart
  function handleAddToCart(getProductDetails) {
    let cpyExistingCartItems = [...cartItems];
    const findIndex = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (findIndex === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: 1,
        totalPrice: getProductDetails.price,
      });
    } else {
      const existing = cpyExistingCartItems[findIndex];
      cpyExistingCartItems[findIndex] = {
        ...existing,
        quantity: existing.quantity + 1,
        totalPrice: (existing.quantity + 1) * existing.price,
      };
    }

    setCartItems(cpyExistingCartItems);
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    navigate("/cart");
  }

  // ✅ Remove product from cart
  function handleRemoveFromCart(getProductDetails, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndex = cpyExistingCartItems.findIndex(
      (item) => item.id === getProductDetails.id
    );

    if (findIndex !== -1) {
      if (isFullyRemoveFromCart || cpyExistingCartItems[findIndex].quantity === 1) {
        cpyExistingCartItems.splice(findIndex, 1);   
      } else {
        const existing = cpyExistingCartItems[findIndex];
        cpyExistingCartItems[findIndex] = {
          ...existing,
          quantity: existing.quantity - 1,
          totalPrice: (existing.quantity - 1) * existing.price,
        };
      }

      setCartItems(cpyExistingCartItems);
      localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    }
  }

  // ✅ here we to two things -- Load cart items from localStorage and fetch product list
  useEffect(() => {
    
    //fetch product list
    fetchListOfProducts();

  //Load cart items from localStorage
    try {
      const storedCart = localStorage.getItem("cartItems");
      const parsed = storedCart ? JSON.parse(storedCart) : [];
      setCartItems(parsed);
    } catch (err) {
      console.error("Invalid cartItems in localStorage:", err);
      setCartItems([]);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listOfProducts,
        loading,
        setLoading,
        productDetails,
        setProductDetails,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
