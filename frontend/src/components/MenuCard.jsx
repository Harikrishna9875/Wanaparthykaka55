function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="menu-card-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <span className="price">₹ {item.price}</span>
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;