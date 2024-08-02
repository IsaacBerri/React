import { Link } from "react-router-dom";

const Navbar = () => {

  const num1 = 12;
  return (
      <nav>
        <ul>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/product"}><li>Product</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
          <Link to={"/about"}><li>About</li></Link>
        </ul>
      </nav>
  );
};

export default Navbar;
