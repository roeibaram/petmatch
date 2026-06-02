import PetGrid from "../../components/PetGrid/PetGrid";
import "./SavedPets.css";

export default function SavedPets({ pets, savedPetIds, onToggleSavedPet }) {
  return (
    <main className="savedpets">
      <div className="savedpets__container">
        <h1 className="savedpets__title">Saved Pets</h1>

        {pets.length ? (
          <>
            <p className="savedpets__copy">
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
