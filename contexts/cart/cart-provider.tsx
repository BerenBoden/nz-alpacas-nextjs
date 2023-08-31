"use client";
import * as React from "react";
import { CartContext } from "./cart-context";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = React.useState<any[]>(() => {
    // Check if localStorage is defined
    if (typeof window !== "undefined" && window.localStorage) {
      const savedProducts = localStorage.getItem("products");
      return savedProducts ? JSON.parse(savedProducts) : [];
    }
    return [];
  });
  const [cart, setCart] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Check if localStorage is defined before setting item
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  return (
    <CartContext.Provider value={{ cart, products, setProducts, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
