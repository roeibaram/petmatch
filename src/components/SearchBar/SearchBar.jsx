import { useState } from "react";
const paw = "/petmatch/icons/paw.svg";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Search by breed (e.g., Husky)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="search__button" onClick={() => onSearch(input)}>
        <img src={paw} alt="" className="search__icon" />
      </button>
    </div>
  );
}
