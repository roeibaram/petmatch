import PetCard from "../PetCard/PetCard";
import "./PetGrid.css";

export default function PetGrid({ pets, savedPetIds = [], onToggleSavedPet }) {
  return (
    <section className="pet-grid">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
          isSaved={savedPetIds.includes(String(pet.id))}
          onToggleSaved={onToggleSavedPet}
        />
      ))}
    </section>
  );
}
