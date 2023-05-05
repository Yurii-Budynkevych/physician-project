import "./Testimonials.css";
import { useState, useEffect } from "react";
import { Loader } from "../../components/Loader/Loader";
import { TestimonialsList } from "../../components/TestimonialsList/TestimonialsList";
import { TestimonialsForm } from "../../components/TestimonialsForm/TestimonialsForm";
import { getTestimonials, postTestimonials } from "../../utils/api";

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const testimonialsUpdater = (testimonial) => {
    setLoading(true);
    postTestimonials(testimonial)
      .then((res) => setData([...data, res]))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getTestimonials()
      .then((res) => setData(res))
      .catch((err) => console.log(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="testimonials-section">
        <Loader />
      </section>
    );
  }
  if (!data) {
    return (
      <section className="testimonials-section">
        <h2 className="suspense">Помилка підключення до сервера</h2>
      </section>
    );
  }
  return (
    <section className="testimonials-section">
      <TestimonialsList arr={data} />
      <TestimonialsForm onSubmit={testimonialsUpdater} />
    </section>
  );
};

export default Testimonials;
