import { createContext } from "use-context-selector";

type CartContextType = {
  cart: boolean;
  products: any[]; // You can specify the type of the product if known
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>; // Replace any with your specific type if known
};


export const CartContext = createContext<CartContextType>({
  cart: false,
  products: [],
  setCart: () => {}, // Default empty function
  setProducts: () => {}, // Default empty function
});
