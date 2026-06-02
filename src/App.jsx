import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PetDetails from "./pages/PetDetails/PetDetails";
import SavedPets from "./pages/SavedPets/SavedPets";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { fetchDogs } from "./utils/dogApi";
import { mapDogData } from "./utils/dogMapper";
import { readSavedPetIds, savePetIds } from "./utils/savedPets";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [dogs, setDogs] = useState([]);
  const [savedPetIds, setSavedPetIds] = useState(() => readSavedPetIds());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    savePetIds(savedPetIds);
  }, [savedPetIds]);

  useEffect(() => {
    fetchDogs()
      .then((data) => {
        setDogs(mapDogData(data));
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load dogs. Try again later.");
        setLoading(false);
      });
  }, []);

  const savedPets = useMemo(() => {
    return dogs.filter((dog) => savedPetIds.includes(String(dog.id)));
  }, [dogs, savedPetIds]);

  function handleToggleSavedPet(pet) {
    const petId = String(pet.id);

    setSavedPetIds((currentIds) => {
      if (currentIds.includes(petId)) {
        return currentIds.filter((id) => id !== petId);
      }

      return [petId, ...currentIds];
    });
  }

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              dogs={dogs}
              loading={loading}
              error={error}
              savedPetIds={savedPetIds}
              onToggleSavedPet={handleToggleSavedPet}
            />
          }
        />

        <Route
          path="/pets/:id"
          element={
            <PetDetails
              dogs={dogs}
              loading={loading}
              error={error}
              savedPetIds={savedPetIds}
              onToggleSavedPet={handleToggleSavedPet}
            />
          }
        />

        <Route
          path="/saved-pets"
          element={
            <SavedPets
              pets={savedPets}
              savedPetIds={savedPetIds}
              onToggleSavedPet={handleToggleSavedPet}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}
