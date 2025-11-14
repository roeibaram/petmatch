import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">PetMatch</h1>

        <nav className="header__nav">
          <button className="header__btn">Saved Pets</button>
          <button className="header__btn">Find Pets</button>
          <button className="header__btn header__btn--outline">Sign In</button>
          <button className="header__btn header__btn--solid">Sign Up</button>
        </nav>
      </div>
    </header>
  );
}
