import { useEffect, useState } from "react";

function App() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/menu/")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1 style={{ color: "#ff6b00" }}>KAKA55 Menu</h1>

      {menuItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #eee",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <strong>₹ {item.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;