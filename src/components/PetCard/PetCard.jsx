import { Link } from "react-router-dom";
import { PAW_ICON_URL } from "../../utils/constants";
import "./PetCard.css";

export default function PetCard({ pet }) {
  return (
    <article className="pet-card">
      <button className="pet-card__save">
        <img
          src={PAW_ICON_URL}
          alt="save pet"
          className="pet-card__save-icon"
        />
      </button>

      <Link to={`/pets/${pet.id}`} className="pet-card__link">
        <img src={pet.img} alt={pet.name} className="pet-card__img" />

        <h3 className="pet-card__name">{pet.name}</h3>

        <p className="pet-card__info">
          {pet.age} • {pet.breed}
        </p>

        <p className="pet-card__location">{pet.location}</p>
      </Link>
    </article>
  );
}
