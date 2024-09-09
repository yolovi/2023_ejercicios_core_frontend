import { Link } from "react-router-dom";

const Header = () => {
  return ( 
      <header className="header-container"> 
        <nav>
          <Link to = "/" > Home /</Link>
          <Link to = "/Bookings" > Bookings /</Link>
          <Link to="/Club/"> Club/</Link>
        </nav>
      </header>
  );
};

export default Header;

  





  