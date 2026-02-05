import { Routes, Route } from "react-router-dom";

import Home from "../screens/HomeScreen";
import About from "../screens/AboutScreen";
import Guide from "../screens/GuideScreen";
import Contact from "../screens/ContactScreen";
import Policy from "../screens/PolicyScreen";
import Terms from "../screens/TermsScreen";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
