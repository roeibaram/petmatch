import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PetGrid from "../../components/PetGrid/PetGrid";
import Preloader from "../../components/Preloader/Preloader";
import "./Home.css";

export default function Home({ dogs, loading, error }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const results = dogs.filter((dog) =>
      dog.breed.toLowerCase().includes(searchTerm)
    );
    setFilteredDogs(results);
  }, [searchTerm, dogs]);

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
    setVisibleCount(3);
  };

  const visiblePets = filteredDogs.slice(0, visibleCount);
  const canViewMore = visibleCount < filteredDogs.length;

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

              {filteredDogs.length === 0 ? (
                <p className="home__no-results">No dogs found.</p>
              ) : (
                <>
                  <PetGrid pets={visiblePets} />

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
