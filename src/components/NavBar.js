import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <div>
        <div class="LogoName">Golden Shoe</div>
        <Link to={'..'}>Shop</Link>
        <Link to={'../checkout'}>Checkout</Link>
        <Link to={'..'}>Return</Link>
      </div>
    );
  }
  
  export default NavBar;