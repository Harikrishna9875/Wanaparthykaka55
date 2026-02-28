import { useEffect, useState } from "react";
import MenuCard from "./components/MenuCard";
import "./styles/menu.css";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/menu/", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = async () => {
    const orderData = {
      total_amount: totalAmount.toFixed(2),
      is_free_delivery: totalAmount >= 200,
      payment_method: "COD",
      items: cart.map((item) => ({
        menu_item: item.id,
        quantity: item.quantity,
      })),
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/menu/order/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Order failed");
      }

      await response.json();

      alert("Order placed successfully!");
      setCart([]);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong while placing order.");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">KAKA55 Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      <div className="cart-section">
        <h2>Cart</h2>

        {cart.length === 0 && <p>No items added</p>}

        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>

            <div className="cart-controls">
              <button onClick={() => decreaseQuantity(item.id)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          </div>
        ))}

        <h3>Total: ₹ {totalAmount.toFixed(2)}</h3>

        {totalAmount >= 200 ? (
          <p className="free-delivery">Free Delivery Applied</p>
        ) : (
          <p>
            Add ₹ {(200 - totalAmount).toFixed(2)} more for free
            delivery
          </p>
        )}

        <button
          className="checkout-btn"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default App;