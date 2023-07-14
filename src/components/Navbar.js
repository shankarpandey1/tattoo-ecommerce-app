import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> &nbsp;
              </li>
              <li>
                <Link to="/products">Products</Link> &nbsp;
              </li>
              <li>
                <Link to="/contact">Contact</Link> &nbsp;
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar;