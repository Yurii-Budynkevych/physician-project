import "./Testimonials.css";
import { TestimonialsForm } from "../../components/TestimonialsForm/TestimonialsForm";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-box">
          <ul></ul>
        </div>
        <TestimonialsForm />
      </section>
    </>
  );
};

export default Testimonials;
