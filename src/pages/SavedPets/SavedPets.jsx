import PetGrid from "../../components/PetGrid/PetGrid";
import "./SavedPets.css";

export default function SavedPets({ pets, savedPetIds, onToggleSavedPet, onClearSavedPets }) {
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
