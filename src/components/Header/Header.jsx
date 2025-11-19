import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">
          <Link to="/" className="header__logo-link">
            PetMatch
          </Link>
        </p>

        <nav className="header__nav">
          <Link to="/saved-pets" className="header__btn">
            Saved Pets
          </Link>
          <Link to="/" className="header__btn">
            Find Pets
          </Link>
          <Link to="/signin" className="header__btn header__btn--outline">
            Sign In
          </Link>
          <Link to="/signup" className="header__btn header__btn--solid">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
