const ShopCard = ({ card }) => {
  const { name, price, color, img } = card;

  return (
    <div className="card">
      <div className="header">
        <h2>{name}</h2>
        <div className="color">{color}</div>
      </div>
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="footer">
        <div className="price">${price}</div>
        <button type="button" className="btn">ADD TO CART</button>
      </div>
    </div>
  )
}

function CardsView({ cards }) {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  )
}

export default CardsView