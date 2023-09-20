import ShopItem from "./ShopItem";
import uniqid from 'uniqid'

export default function ListView(props) { 
    return (
      <ul className="list-view">
        {props.products.map((product) => {
          return (
            <li key={uniqid()} className="list-view-item">
              <ShopItem item={product} />
            </li>
          );
        })}
      </ul>
    );
  }

