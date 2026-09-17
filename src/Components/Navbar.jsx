import { Link } from "react-router-dom";

function Navbar({cartCount}) {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="logo">
          <Link to="/">MyStore</Link>
        </div>


        {/* <div className="search-box">
          <input type="text"placeholder="Search products..."/>

          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div> */}

        <div className="nav-links">
          {/* <Link to="/home">Home</Link> */}
          <Link to="/shop">Shop</Link>

          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
            <span className="cart-count">
              {cartCount}
            </span>
          </Link>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;