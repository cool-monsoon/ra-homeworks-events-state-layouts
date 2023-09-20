export default function ShopCard(props) {
  const {item} = props;
return (
  <div className="card-container">
    <header className="card-header">
      <h3 className="product-title">{item.name}</h3>
      <span className="product-color">{item.color}</span>
    </header>
      
    <main className="card-content">
      <img className="image" src={item.img} alt={item.name} />
    </main>
    <footer className="card-footer">
      <span className="product-price">{"$"+ item.price}</span>
      <button className="addToCart-btn">add to cart</button>
    </footer>
  </div>
);
}

