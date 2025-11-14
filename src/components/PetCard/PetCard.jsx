import { Link } from "react-router-dom";
import { PAW_ICON_URL } from "../../utils/constants";
import "./PetCard.css";

export default function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <button className="pet-card__save">
        <img src={PAW_ICON_URL} alt="" className="pet-card__save-icon" />
      </button>

      <Link to={`/pets/${pet.id}`}>
        <img src={pet.img} alt={pet.name} className="pet-card__img" />
        <h3 className="pet-card__name">{pet.name}</h3>
        <p className="pet-card__info">
          {pet.age} • {pet.breed}
        </p>
        <p className="pet-card__location">{pet.location}</p>
      </Link>
    </div>
  );
}
