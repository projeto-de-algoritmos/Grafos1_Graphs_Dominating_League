import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import { ChooseChampion } from "./pages/ChooseChampion/ChooseChampion";
import { Home } from "./pages/Home/Home";
import { BestChoices } from "./pages/BestChoices/BestChoices";

export default function App() {
  useEffect(() => {
    WebFont.load({
      
      google: {
        families: ['Fredericka the Great']
      }
    });
   }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chooseChampion" element={<ChooseChampion />} />
        <Route path="/bestChoices" element={<BestChoices />} />
      </Routes>
    </BrowserRouter>
  );
}


