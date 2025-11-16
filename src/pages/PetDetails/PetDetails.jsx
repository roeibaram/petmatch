import { useParams } from "react-router-dom";
import mockPets from "../../utils/mockPets";
import "./PetDetails.css";

export default function PetDetails() {
  const { id } = useParams();
  const pet = mockPets.find((p) => p.id === Number(id));

  if (!pet) return <main className="petdetails">Pet not found.</main>;

  return (
    <main className="petdetails">
      <h1 className="petdetails__header">{pet.name} 🐶</h1>

      <p className="petdetails__subheader">
        {pet.location} • Aged {pet.ageYears} • {pet.breed} • {pet.type}
      </p>

      <section className="petdetails__layout">
        <div className="petdetails__left">
          <img src={pet.img} alt={pet.name} className="petdetails__image" />

          <h3 className="petdetails__section-title">Description</h3>
          <p className="petdetails__text">
            This is a wonderful {pet.breed.toLowerCase()} available for
            adoption. They are looking for a loving home.
          </p>

          <h3 className="petdetails__section-title">Gender</h3>
          <p className="petdetails__text">Unknown (placeholder)</p>

          <h3 className="petdetails__section-title">Age</h3>
          <p className="petdetails__text">
            {pet.age} ({pet.ageYears} years)
          </p>

          <h3 className="petdetails__section-title">Breed</h3>
          <p className="petdetails__text">{pet.breed}</p>
        </div>

        <aside className="petdetails__right">
          <div className="petdetails__actions">
            <button className="petdetails__icon-btn">
              <img
                src={import.meta.env.BASE_URL + "icons/call.svg"}
                alt="call icon"
              />
            </button>
            <button className="petdetails__icon-btn">
              <img
                src={import.meta.env.BASE_URL + "icons/star.svg"}
                alt="favorite icon"
              />
            </button>
            <button className="petdetails__icon-btn">
              <img
                src={import.meta.env.BASE_URL + "icons/share.svg"}
                alt="share icon"
              />
            </button>
          </div>

          <h3 className="petdetails__section-title">Personality</h3>
          <ul className="petdetails__list">
            <li>Loyal</li>
            <li>House-trained</li>
            <li>Good with kids</li>
          </ul>

          <h3 className="petdetails__section-title">Shelter Contact</h3>
          <p className="petdetails__text">Brooklyn Animal Rescue</p>
          <p className="petdetails__text">📞 (718) 555-0192</p>
          <p className="petdetails__text">✉️ contact@bkrescue.org</p>
          <p className="petdetails__text">M–F 11am–6pm</p>
          <p className="petdetails__text">📍 Brooklyn, NY</p>

          <h3 className="petdetails__section-title">Health</h3>
          <ul className="petdetails__list">
            <li>Vaccinated</li>
            <li>Microchipped</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
