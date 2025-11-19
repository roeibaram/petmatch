import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PetDetails from "./pages/PetDetails/PetDetails";
import SavedPets from "./pages/SavedPets/SavedPets";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { fetchDogs } from "./utils/dogApi";
import { mapDogData } from "./utils/dogMapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home dogs={dogs} loading={loading} error={error} />}
        />

        <Route
          path="/pets/:id"
          element={<PetDetails dogs={dogs} loading={loading} error={error} />}
        />

        <Route path="/saved-pets" element={<SavedPets />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </>
  );
}
