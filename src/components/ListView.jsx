const ShopItem = ({ item }) => {
  const { name, price, color, img } = item;

  return (
    <div className="item">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="color">{color}</div>
      <div className="price">${price}</div>
      <button type="button" className="btn">
        ADD TO CART
      </button>
    </div>
  );
};

function ListView({ items }) {
  return (
    <div className="list">
      {items.map((item, index) => (
        <ShopItem key={index} item={item} />
      ))}
    </div>
  );
}

export default ListView;
