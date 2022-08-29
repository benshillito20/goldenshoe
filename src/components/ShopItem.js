import {Link} from 'react-router-dom'

function ShopItem({Product}) {
    console.log("Product")
    return (
    <Link to={`/product/${Product.name}`}>
      {Product.name}
    </Link>
  );
}
  
export default ShopItem;