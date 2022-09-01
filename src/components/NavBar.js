import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="#" style={{fontSize:50}}>Golden Shoe</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link"><Link class="text-decoration-none text-light" style={{fontSize:30}} to={'..'}>Shop</Link></a>
            <a class="nav-link"><Link class="text-decoration-none text-light" style={{fontSize:30}} to={'../returns'}>Returns</Link></a>
            <a class="nav-link"><Link class="text-decoration-none text-light" style={{fontSize:30}} to={'../track'}>Track</Link></a>
            <a class="nav-link"><Link class="text-decoration-none text-light" style={{fontSize:30}} to={'../checkout'}>Checkout</Link></a>
          </div>
        </div>
      </div>
      </nav>
    );
  }
  
  export default NavBar;