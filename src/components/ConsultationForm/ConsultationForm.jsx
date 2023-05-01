import "./ConsultationForm.css";
import Notiflix from "notiflix";

export function ConsultationForm() {
  const notificate = () => {
    Notiflix.Notify.success(
      "Успішно! Лікар зв'яжеться з Вами найближчим часом!"
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = JSON.stringify({
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      tel: e.target.tel.value.trim(),
      text: e.target.text.value.trim(),
    });
    console.log(data);
    e.target.reset();
    notificate();
  };

  return (
    <>
      <form className="consultation-form" onSubmit={submitHandler}>
        <label className="consultation-form-label">
          Ім'я
          <input
            className="consultation-form-input"
            name="name"
            type="text"
            maxLength="30"
            required
          />
        </label>
        <label className="consultation-form-label">
          Електронна пошта
          <input
            className="consultation-form-input"
            name="email"
            type="email"
            maxLength="30"
            required
          />
        </label>
        <label className="consultation-form-label">
          Телефон
          <input
            className="consultation-form-input"
            name="tel"
            type="tel"
            maxLength="30"
            required
          />
        </label>
        <label className="consultation-form-label">
          Опишіть суть вашого питання
          <textarea
            className="consultation-form-text"
            name="text"
            maxLength="3000"
            required
          />
        </label>
        <button className="submit-btn" type="sumbit">
          Записатися
        </button>
      </form>
    </>
  );
}
