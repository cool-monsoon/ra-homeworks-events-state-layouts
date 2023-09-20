export default function ShopItem(props) {
    const titleButton = "Add to cart";
    const { item } = props;

  return (
    <div className="item-container">
      <div className="item-image">
        <img className="image" src={item.img} alt={item.name} />
      </div>
      <h3 className="product-title">{item.name}</h3>
      <span className="product-color">{item.color}</span>

      <span className="product-price">{"$" + item.price}</span>
      <button className="addToCart-btn">{titleButton}</button>
    </div>
  );
}