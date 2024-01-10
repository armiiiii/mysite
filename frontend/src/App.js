import {BrowserRouter, Route, Routes} from "react-router-dom";

import Mainpage from "./pages/Mainpage";
import Aboutmepage from "./pages/Aboutmepage";
import Contactpage from "./pages/Contactpage";
import Header from './ui/header/Header';
import Footer from "./ui/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<Mainpage />} path="/" />
          <Route element={<Aboutmepage />} path="/aboutme" />
          <Route element={<Contactpage />} path="/contact" />
        </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
