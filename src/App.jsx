import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PetDetails from "./pages/PetDetails/PetDetails";
import SavedPets from "./pages/SavedPets/SavedPets";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets/:id" element={<PetDetails />} />
      <Route path="/saved-pets" element={<SavedPets />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
