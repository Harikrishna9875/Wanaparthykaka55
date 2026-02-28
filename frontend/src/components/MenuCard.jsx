function MenuCard({ item, addToCart }) {
  return (
    <div className="menu-card">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="menu-image"
        />
      )}

      <div className="menu-card-content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <div className="menu-card-footer">
          <span className="price">₹ {item.price}</span>
          <button className="add-btn" onClick={() => addToCart(item)}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;