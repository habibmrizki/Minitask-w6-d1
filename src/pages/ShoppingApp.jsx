// import React, { useState } from "react";
// import Product from "../components/Product.jsx";
// import CartSummary from "../components/CartSummary.jsx";

// const products = [
//   { id: 1, name: "Topi", price: 150000 },
//   { id: 2, name: "Baju", price: 75000 },
//   { id: 3, name: "Celana", price: 1200000 },
// ];

// function ShoppingApp() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex((item) => item.id === productId);
//       if (itemIndex > -1) {
//         const newItems = [...prevItems];
//         newItems.splice(itemIndex, 1);
//         return newItems;
//       }
//       return prevItems;
//     });
//   };

//   return (
//     <div className="shopping-app-container text-center">
//       <h1 className="text-3xl">Aplikasi E-Commerce Sederhana</h1>
//       <div className="content">
//         <Product products={products} addToCart={addToCart} />
//         <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
//       </div>
//     </div>
//   );
// }

// export default ShoppingApp;

// ShoppingApp.jsx
import React, { useState } from "react";
import Product from "../components/Product.jsx";
import CartSummary from "../components/CartSummary.jsx";
// Impor semua gambar di sini
import Topi from "../assets/Topi.jpg";
import Baju from "../assets/Baju.jpg";
import Celana from "../assets/celana.jpg";

const products = [
  // Tambahkan properti 'image' dan 'alt' untuk setiap produk
  { id: 1, name: "Topi", price: 150000, image: Topi, alt: "Topi" },
  { id: 2, name: "Baju", price: 75000, image: Baju, alt: "Baju" },
  { id: 3, name: "Celana", price: 1200000, image: Celana, alt: "Celana" },
];

function ShoppingApp() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === productId);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems.splice(itemIndex, 1);
        return newItems;
      }
      return prevItems;
    });
  };

  return (
    <div className="shopping-app-container text-center">
      <h1 className="text-3xl">Aplikasi E-Commerce Sederhana</h1>
      <div className="content">
        <Product products={products} addToCart={addToCart} />
        <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}

export default ShoppingApp;

// import React, { useState } from "react";
// import Product from "../components/Product.jsx";
// import CartSummary from "../components/CartSummary.jsx";

// const products = [
//   { id: 1, name: "Buku React", price: 150000, alt: "Buku React" },
//   { id: 2, name: "Topi Merah", price: 75000, alt: "Topi Merah" },
//   { id: 3, name: "Keyboard Mekanik", price: 1200000, alt: "Keyboard Mekanik" },
// ];

// function ShoppingApp() {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => [...prevItems, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCartItems((prevItems) => {
//       const itemIndex = prevItems.findIndex((item) => item.id === productId);
//       if (itemIndex > -1) {
//         const newItems = [...prevItems];
//         newItems.splice(itemIndex, 1);
//         return newItems;
//       }
//       return prevItems;
//     });
//   };

//   return (
//     <div className="shopping-app-container p-8 bg-gray-200 min-h-screen">
//       <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
//         Aplikasi E-Commerce Sederhana
//       </h1>
//       <div className="content grid grid-cols-1 md:grid-cols-2 gap-8">
//         <Product products={products} addToCart={addToCart} />
//         <CartSummary cartItems={cartItems} removeFromCart={removeFromCart} />
//       </div>
//     </div>
//   );
// }

// export default ShoppingApp;
