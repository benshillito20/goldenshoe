import {Link} from 'react-router-dom'

function ShopItem({Product}) {
    return (
    <Link to={`/product/${Product.name}`}>
      <div class="card" style={{minWidth:"30%", maxWidth:"40%"}}>
        <div class="card-body">
          <h5 class="card-title">
            {Product.name}
          </h5>
        </div>
      </div>
    </Link>
  );
}
  
export default ShopItem;