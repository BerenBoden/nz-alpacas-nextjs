"use client";
import * as React from "react";
import { CartContext } from "./cart-context";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = React.useState<any[]>([]);
  const [cart, setCart] = React.useState<boolean>(false);
  return (
    <CartContext.Provider value={{ cart, products, setProducts, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
