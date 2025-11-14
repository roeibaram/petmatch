import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PetDetails from "./pages/PetDetails/PetDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pets/:id" element={<PetDetails />} />
    </Routes>
  );
}

export default App;
