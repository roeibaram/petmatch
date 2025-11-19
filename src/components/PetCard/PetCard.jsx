import { Link } from "react-router-dom";
const paw = "/petmatch/icons/paw.svg";
import "./PetCard.css";

export default function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <button className="pet-card__save">
        <img src={paw} alt="paw icon" className="pet-card__save-icon" />
      </button>

      <Link to={`/pets/${pet.id}`} className="pet-card__link">
        <img src={pet.img} alt={pet.name} className="pet-card__img" />
        <h3 className="pet-card__name">{pet.name}</h3>
        <p className="pet-card__info">{pet.breed}</p>
        <p className="pet-card__location">{pet.location}</p>
      </Link>
    </div>
  );
}
