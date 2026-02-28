import { useEffect, useState } from "react";
import MenuCard from "./components/MenuCard";
import "./styles/menu.css";

function App() {
  const [menuItems, setMenuItems] = useState([]);

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

  return (
    <div className="app-container">
      <h1 className="app-title">KAKA55 Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;