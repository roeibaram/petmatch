import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PetGrid from "../../components/PetGrid/PetGrid";
import Preloader from "../../components/Preloader/Preloader";
import "./Home.css";

function doesPetMatchSearch(dog, searchTerm) {
  if (!searchTerm) {
    return true;
  }

  return [dog.name, dog.breed, dog.location].some((field) =>
    field.toLowerCase().includes(searchTerm)
  );
}

export default function Home({ dogs, loading, error, onRetry, savedPetIds, onToggleSavedPet }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [sortMode, setSortMode] = useState("recommended");
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredDogs = dogs.filter((dog) => doesPetMatchSearch(dog, normalizedSearchTerm));
  const sortedDogs = [...filteredDogs].sort((firstDog, secondDog) => {
    if (sortMode === "name") {
      return firstDog.name.localeCompare(secondDog.name);
    }

    if (sortMode === "breed") {
      return firstDog.breed.localeCompare(secondDog.breed)
        || firstDog.name.localeCompare(secondDog.name);
    }

    return 0;
  });

  const handleSearch = (value) => {
    setSearchTerm(value);
    setVisibleCount(3);
  };

  const visiblePets = sortedDogs.slice(0, visibleCount);
  const canViewMore = visibleCount < sortedDogs.length;
  const resultSummary = normalizedSearchTerm
    ? `${filteredDogs.length} match${filteredDogs.length === 1 ? "" : "es"} for "${searchTerm.trim()}"`
    : `${filteredDogs.length} pets ready to meet you`;

  function handleClearSearch() {
    setSearchTerm("");
    setVisibleCount(3);
  }

  return (
    <>
      <main className="home">
        <div className="home__container">
          <h1 className="home__title">Find Your New Best Friend</h1>

          <SearchBar value={searchTerm} onSearch={handleSearch} />

          {loading && <Preloader />}
          {error && (
            <div className="home__status" role="alert">
              <p>{error}</p>
              <button className="home__retry" onClick={onRetry} type="button">
                Try again
              </button>
            </div>
          )}

          {!loading && !error && (
            <>
              <h2 className="home__matches-title">Here Are Your Matches 🐾</h2>
              <div className="home__results-toolbar">
                <p className="home__results-summary" role="status">{resultSummary}</p>
                <label className="home__sort">
                  <span>Sort by</span>
                  <select
                    onChange={(event) => {
                      setSortMode(event.target.value);
                      setVisibleCount(3);
                    }}
                    value={sortMode}
                  >
                    <option value="recommended">Recommended</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="breed">Breed (A-Z)</option>
                  </select>
                </label>
              </div>

              {sortedDogs.length === 0 ? (
                <div className="home__no-results">
                  <p>No dogs found. Try searching by name, breed, or city.</p>
                  <button className="home__clear-search" type="button" onClick={handleClearSearch}>
                    Clear search
                  </button>
                </div>
              ) : (
                <>
                  <PetGrid
                    pets={visiblePets}
                    savedPetIds={savedPetIds}
                    onToggleSavedPet={onToggleSavedPet}
                  />

                  {canViewMore && (
                    <button
                      className="home__view-more"
                      onClick={() => setVisibleCount((count) => count + 3)}
                      type="button"
                    >
                      View More
                    </button>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
