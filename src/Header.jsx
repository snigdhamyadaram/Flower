import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="navbar">
        {/* <h1 className="h1">🌷 Lily Flower Store 🌷</h1> */}
        <div className="logo">
                🌸 Lily Blossom 🌸
           </div>

        <div className="nav-link">
          <Link to="/" style={{ fontSize: "30px", margin: "20px" }}>
            Home
          </Link>

          <Link to="/login" style={{ fontSize: "30px", margin: "20px" }}>
            Login
          </Link>

          <Link to="/order" style={{ fontSize: "30px", margin: "20px" }}>
            Place Order
          </Link>

          <Link to="/contact" style={{ fontSize: "30px", margin: "20px" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

 export default Header;
