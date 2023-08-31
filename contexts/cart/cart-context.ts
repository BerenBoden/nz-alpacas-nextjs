import { createContext } from "use-context-selector";

type CartContextType = {
  cart: boolean;
  products: any[];
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

export const CartContext = createContext<CartContextType>({
  cart: false,
  products: [],
  setCart: () => {},
  setProducts: () => {},
});
