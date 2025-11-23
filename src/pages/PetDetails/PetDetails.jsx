import { useParams } from "react-router-dom";
import callIcon from "/icons/call.svg";
import starIcon from "/icons/star.svg";
import shareIcon from "/icons/share.svg";
import Preloader from "../../components/Preloader/Preloader";
import "./PetDetails.css";

export default function PetDetails({ dogs, loading, error }) {
  const { id } = useParams();

  if (loading)
    return (
      <main className="petdetails">
        <Preloader />
      </main>
    );

  if (error)
    return (
      <main className="petdetails">
        <p className="petdetails__notfound">{error}</p>
      </main>
    );

  const pet = dogs.find((d) => String(d.id) === String(id));

  if (!pet)
    return (
      <main className="petdetails">
        <p className="petdetails__notfound">Pet not found.</p>
      </main>
    );

  return (
    <main className="petdetails">
      <div className="petdetails__header">{pet.name}</div>

      <div className="petdetails__subheader">
        {pet.location} • {pet.breed} • {pet.age}
      </div>

      <div className="petdetails__layout">
        <div className="petdetails__left">
          <img src={pet.img} alt={pet.name} className="petdetails__image" />

          <h3 className="petdetails__section-title">Description</h3>
          <p className="petdetails__text">
            This {pet.breed.toLowerCase()} has a gentle, loving personality and
            enjoys spending time around people. They are friendly, affectionate,
            and looking for a calm, caring home where they can feel safe and
            loved.
          </p>

          <h3 className="petdetails__section-title">Breed</h3>
          <p className="petdetails__text">{pet.breed}</p>

          <h3 className="petdetails__section-title">Age</h3>
          <p className="petdetails__text">{pet.age}</p>
        </div>

        <div className="petdetails__right">
          <div className="petdetails__actions">
            <button className="petdetails__icon-btn">
              <img src={callIcon} alt="call" />
            </button>

            <button className="petdetails__icon-btn">
              <img src={starIcon} alt="save" />
            </button>

            <button className="petdetails__icon-btn">
              <img src={shareIcon} alt="share" />
            </button>
          </div>

          <h3 className="petdetails__section-title">Health</h3>
          <p className="petdetails__text">Vaccinations up to date</p>

          <h3 className="petdetails__section-title">Good With</h3>
          <p className="petdetails__text">Kids • Families • Other dogs</p>

          <h3 className="petdetails__section-title">Shelter</h3>
          <p className="petdetails__text">Happy Tails Rescue</p>
          <p className="petdetails__text">{pet.location}</p>
          <p className="petdetails__text">(718) 555-0192</p>
          <p className="petdetails__text">contact@happytails.org</p>
          <p className="petdetails__text">Mon–Fri 11am–6pm</p>
        </div>
      </div>
    </main>
  );
}
