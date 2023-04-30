import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Consultation = lazy(() => import("../pages/Consultation/Consultation"));

export function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h2 className="suspense">Завантаження...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
