import PetGrid from "../../components/PetGrid/PetGrid";
import "./SavedPets.css";

export default function SavedPets({ pets, savedPetIds, onToggleSavedPet, onClearSavedPets }) {
  const savedLocationCount = new Set(pets.map((pet) => pet.location)).size;
  const savedBreedCount = new Set(pets.map((pet) => pet.breed)).size;

  function handleClearSavedPets() {
    const shouldClear = window.confirm("Remove all saved pets from your shortlist?");

    if (shouldClear) {
      onClearSavedPets();
    }
  }

  return (
    <main className="savedpets">
      <div className="savedpets__container">
        <div className="savedpets__header">
          <div>
            <h1 className="savedpets__title">Saved Pets</h1>
            <p className="savedpets__copy">
              Keep your favorite matches in one place before you reach out.
            </p>
          </div>

          {pets.length ? (
            <button className="savedpets__clear" type="button" onClick={handleClearSavedPets}>
              Clear shortlist
            </button>
          ) : null}
        </div>

        {pets.length ? (
          <>
            <p className="savedpets__summary">
              {pets.length} saved match{pets.length === 1 ? "" : "es"} ready to review.
            </p>
            <ul className="savedpets__stats" aria-label="Saved pet shortlist summary">
              <li>
                <span>{pets.length}</span>
                Saved
              </li>
              <li>
                <span>{savedBreedCount}</span>
                Breed{savedBreedCount === 1 ? "" : "s"}
              </li>
              <li>
                <span>{savedLocationCount}</span>
                Location{savedLocationCount === 1 ? "" : "s"}
              </li>
            </ul>
            <PetGrid
              pets={pets}
              savedPetIds={savedPetIds}
              onToggleSavedPet={onToggleSavedPet}
            />
          </>
        ) : (
          <p className="savedpets__empty">
            Save pets from the home page to build a shortlist here.
          </p>
        )}
      </div>
    </main>
  );
}
