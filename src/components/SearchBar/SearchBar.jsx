import { useState } from "react";
const paw = "/petmatch/icons/paw.svg";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Normalize the query so we do not search with accidental spaces.
    onSearch(input.trim());
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        placeholder="Search breed, name, or city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="search__button" type="submit" aria-label="Search pets">
        <img src={paw} alt="" className="search__icon" />
      </button>
    </form>
  );
}
