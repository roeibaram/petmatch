import PetCard from "../PetCard/PetCard";
import "./PetGrid.css";

export default function PetGrid({ pets }) {
  return (
    <section className="pet-grid">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </section>
  );
}
