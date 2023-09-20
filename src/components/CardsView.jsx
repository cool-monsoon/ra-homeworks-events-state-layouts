import ShopCard from "./ShopCard";
import uniqid from 'uniqid'

export default function CardsView(props) { 
    return (
      <ul className="cards-view">
        {props.products.map((product) => {
          return (
            <li key={uniqid()} className="cards-view-item">
              <ShopCard item={product} />
            </li>
          );
        })}
      </ul>
    );
  }
  
