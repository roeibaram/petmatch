const paw = "/petmatch/icons/paw.svg";
import "./SearchBar.css";

export default function SearchBar({ value, onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(value.trim());
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        placeholder="Search breed, name, or city"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />

      <button className="search__button" type="submit" aria-label="Search pets">
        <img src={paw} alt="" className="search__icon" />
      </button>
    </form>
  );
}
