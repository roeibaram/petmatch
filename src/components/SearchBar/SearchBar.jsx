import { useState } from "react";
import { PAW_ICON_URL } from "../../utils/constants";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  return (
    <div className="search">
      <input
        className="search__input"
        placeholder="Enter a US Zipcode (e.g., 10001)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="search__button" onClick={() => onSearch(input)}>
        <img src={PAW_ICON_URL} alt="" className="search__icon" />
      </button>
    </div>
  );
}
