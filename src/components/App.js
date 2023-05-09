import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Container } from "./Container/Container";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Consultation = lazy(() => import("../pages/Consultation/Consultation"));
const Testimonials = lazy(() => import("../pages/Testimonials/Testimonials"));

export function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<h2 className="suspense">Завантаження...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Suspense>
      <Footer />
    </Container>
  );
}
