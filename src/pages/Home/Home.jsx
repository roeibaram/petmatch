import { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import PetGrid from "../../components/PetGrid/PetGrid";
import mockPets from "../../utils/mockPets";
import "./Home.css";

export default function Home() {
  const [zip, setZip] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedAgeFrom, setSelectedAgeFrom] = useState(0);
  const [selectedAgeTo, setSelectedAgeTo] = useState(20);
  const [selectedBreed, setSelectedBreed] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearch = (value) => {
    setZip(value.toLowerCase());
    setVisibleCount(6);
  };

  const breedOptions = ["All"];
  mockPets.forEach((pet) => {
    const typeMatch =
      selectedType === "all" ||
      (selectedType === "dog" && pet.type === "dog") ||
      (selectedType === "cat" && pet.type === "cat") ||
      (selectedType === "other" && pet.type !== "dog" && pet.type !== "cat");

    if (typeMatch && !breedOptions.includes(pet.breed)) {
      breedOptions.push(pet.breed);
    }
  });

  const filteredPets = mockPets.filter((pet) => {
    const zipMatch = zip === "" || pet.location.toLowerCase().includes(zip);
    const typeMatch =
      selectedType === "all" ||
      (selectedType === "dog" && pet.type === "dog") ||
      (selectedType === "cat" && pet.type === "cat") ||
      (selectedType === "other" && pet.type !== "dog" && pet.type !== "cat");
    const ageMatch =
      pet.ageYears >= selectedAgeFrom && pet.ageYears <= selectedAgeTo;
    const breedMatch = selectedBreed === "All" || pet.breed === selectedBreed;

    return zipMatch && typeMatch && ageMatch && breedMatch;
  });

  const visiblePets = filteredPets.slice(0, visibleCount);
  const canViewMore = visibleCount < filteredPets.length;

  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Find Your New Best Friend</h1>

          <SearchBar onSearch={handleSearch} />

          <div className="home__filters">
            <div className="home__filter-group">
              <p className="home__filter-title">Type</p>
              <div className="home__buttons">
                <button
                  className={`home__button ${
                    selectedType === "dog" ? "home__button--active" : ""
                  }`}
                  onClick={() => {
                    setSelectedType("dog");
                    setVisibleCount(6);
                  }}
                >
                  🐶 Dogs
                </button>

                <button
                  className={`home__button ${
                    selectedType === "cat" ? "home__button--active" : ""
                  }`}
                  onClick={() => {
                    setSelectedType("cat");
                    setVisibleCount(6);
                  }}
                >
                  🐱 Cats
                </button>

                <button
                  className={`home__button ${
                    selectedType === "other" ? "home__button--active" : ""
                  }`}
                  onClick={() => {
                    setSelectedType("other");
                    setVisibleCount(6);
                  }}
                >
                  🐾 Others
                </button>
              </div>
            </div>

            <div className="home__filter-group">
              <p className="home__filter-title">Age (years)</p>
              <div className="home__age-range">
                <select
                  className="home__select"
                  value={selectedAgeFrom}
                  onChange={(e) => {
                    setSelectedAgeFrom(Number(e.target.value));
                    setVisibleCount(6);
                  }}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>

                <span className="home__age-dash">to</span>

                <select
                  className="home__select"
                  value={selectedAgeTo}
                  onChange={(e) => {
                    setSelectedAgeTo(Number(e.target.value));
                    setVisibleCount(6);
                  }}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="home__filter-group">
              <p className="home__filter-title">Breed</p>
              <select
                className="home__select"
                value={selectedBreed}
                onChange={(e) => {
                  setSelectedBreed(e.target.value);
                  setVisibleCount(6);
                }}
              >
                {breedOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="home__matches-title">Here Are Your Matches 🐾</h2>

          {filteredPets.length === 0 ? (
            <p className="home__no-results">
              No pets found. Try different filters.
            </p>
          ) : (
            <>
              <PetGrid pets={visiblePets} />
              {canViewMore && (
                <button
                  className="home__view-more"
                  onClick={() => setVisibleCount(visibleCount + 6)}
                >
                  View More
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
