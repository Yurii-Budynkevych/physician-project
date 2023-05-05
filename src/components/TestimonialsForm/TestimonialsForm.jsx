import "./TestimonialsForm.css";
import Notiflix from "notiflix";

export function TestimonialsForm() {
  const notificate = () => {
    Notiflix.Notify.success("Успішно!");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value.trim(),
      testimonial: e.target.text.value.trim(),
    };
    console.log(data);
    e.target.reset();
    notificate();
  };

  return (
    <>
      <p className="testimonials-form-title">
        Ви знаєте лікаря? Залишіть відгук!
      </p>
      <form className="testimonials-form" onSubmit={submitHandler}>
        <label className="testimonials-form-label">
          Ім'я
          <input
            className="testimonials-form-input"
            name="name"
            type="text"
            minLength="1"
            maxLength="30"
            required
          />
        </label>
        <label className="testimonials-form-label">
          Відгук
          <textarea
            className="testimonials-form-text"
            name="text"
            minLength="1"
            maxLength="3000"
            required
          />
        </label>
        <button className="testimonials-submit-btn" type="sumbit">
          Залишити відгук
        </button>
      </form>
    </>
  );
}
