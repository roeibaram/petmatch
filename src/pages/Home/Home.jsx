import { useState, useEffect } from "react";
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

export default function Home({ dogs, loading, error, savedPetIds, onToggleSavedPet }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const results = dogs.filter((dog) => doesPetMatchSearch(dog, searchTerm));
    setFilteredDogs(results);
  }, [searchTerm, dogs]);

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
    setVisibleCount(3);
  };

  const visiblePets = filteredDogs.slice(0, visibleCount);
  const canViewMore = visibleCount < filteredDogs.length;
  const resultSummary = searchTerm
    ? `${filteredDogs.length} match${filteredDogs.length === 1 ? "" : "es"} for "${searchTerm}"`
    : `${filteredDogs.length} pets ready to meet you`;

  return (
    <>
      <main className="home">
        <div className="home__container">
          <h1 className="home__title">Find Your New Best Friend</h1>

          <SearchBar onSearch={handleSearch} />

          {loading && <Preloader />}
          {error && <p className="home__status">{error}</p>}

          {!loading && !error && (
            <>
              <h2 className="home__matches-title">Here Are Your Matches 🐾</h2>
              <p className="home__results-summary">{resultSummary}</p>

              {filteredDogs.length === 0 ? (
                <p className="home__no-results">No dogs found. Try searching by name, breed, or city.</p>
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
                      onClick={() => setVisibleCount(visibleCount + 3)}
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
