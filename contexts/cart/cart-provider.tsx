"use client";
import * as React from "react";
import { CartContext } from "./cart-context";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = React.useState<any[]>(() => {
    // Retrieve products from local storage when initializing
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });
  const [cart, setCart] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Update local storage whenever products change
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider value={{ cart, products, setProducts, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
