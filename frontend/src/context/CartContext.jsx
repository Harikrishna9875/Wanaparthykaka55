import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    // item = { id, name, price, size, qty, image }
    setCartItems((prev) => {
      const key = `${item.id}-${item.size}`;
      const existing = prev.find((x) => x.key === key);

      if (existing) {
        return prev.map((x) =>
          x.key === key ? { ...x, qty: x.qty + item.qty } : x
        );
      }

      return [...prev, { ...item, key }];
    });
  };

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((x) => x.key !== key));
  };

  const updateQty = (key, qty) => {
    setCartItems((prev) =>
      prev.map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x))
    );
  };

  const clearCart = () => setCartItems([]);

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, x) => sum + x.price * x.qty, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
