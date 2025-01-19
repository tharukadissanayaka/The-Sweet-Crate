import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Banner from "./components/Banner";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ImageButton from "./components/ImageButton";
import PageChocolates from "./pages/PageChocolates";
import AddToCart from "./components/AddToCart";
import PageCakes from "./pages/PageCakes";
import PageBrownies from "./pages/PageBrownies";
import PageToffees from "./pages/PageToffees";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // Apply unique body class based on the current route
    if (location.pathname === "/PageChocolates") {
      document.body.classList.add("body-chocolates");
    } else {
      document.body.classList.remove("body-chocolates");
    }

    return () => {
      document.body.classList.remove("body-chocolates"); // Cleanup when unmounting
    };
  }, [location]);

  useEffect(() => {
    // Apply unique body class based on the current route
    if (location.pathname === "/PageCakes") {
      document.body.classList.add("body-cakes");
    } else {
      document.body.classList.remove("body-cakes");
    }

    return () => {
      document.body.classList.remove("body-cakes"); // Cleanup when unmounting
    };
  }, [location]);

  useEffect(() => {
    // Apply unique body class based on the current route
    if (location.pathname === "/PageBrownies") {
      document.body.classList.add("body-brownies");
    } else {
      document.body.classList.remove("body-brownies");
    }

    return () => {
      document.body.classList.remove("body-brownies"); // Cleanup when unmounting
    };
  }, [location]);

  useEffect(() => {
    /* Apply unique body class based on the current route*/
    if (location.pathname === "/PageToffees") {
      document.body.classList.add("body-toffees");
    } else {
      document.body.classList.remove("body-toffees");
    }

    return () => {
      document.body.classList.remove("body-toffees"); 
    };
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/LoginForm" element={<LoginForm />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/ImageButton" element={<ImageButton />} />

       

        <Route path="/PageChocolates" element={<PageChocolates cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/cart"element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} />
        
        
        <Route path="/PageCakes" element={<PageCakes cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/cart"element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} />

        
        <Route path="/PageBrownies" element={<PageBrownies cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/cart"element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} />

        
        <Route path="/PageToffees" element={<PageToffees cartItems={cartItems} setCartItems={setCartItems} />}/>
        <Route path="/cart"element={<AddToCart cartItems={cartItems} setCartItems={setCartItems} />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;




