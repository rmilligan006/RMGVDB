import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "tw-elements";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import Developers from "./pages/Developers";
import Search from "./pages/Search";

function App() {
  return (
    <div className="bg-gray-600 w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path="/Developers" element={<Developers />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
