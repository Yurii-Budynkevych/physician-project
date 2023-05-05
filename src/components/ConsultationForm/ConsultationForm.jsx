import "./ConsultationForm.css";
import Notiflix from "notiflix";
import { postConsultation } from "../../utils/api";

export function ConsultationForm() {
  const notificateSuccess = () => {
    Notiflix.Notify.success(
      "Успішно! Лікар зв'яжеться з Вами найближчим часом!"
    );
  };
  const notificatePending = () => {
    Notiflix.Notify.warning("Чекаємо у черзі");
  };
  const notificateFailure = () => {
    Notiflix.Notify.failure("Упс, щось пішло не так...");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      tel: e.target.tel.value.trim(),
      text: e.target.text.value.trim(),
    };

    notificatePending();
    const result = await postConsultation(data);
    if (!result) {
      notificateFailure();
      e.target.reset();
      return;
    }
    notificateSuccess();
    e.target.reset();
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
            minLength="1"
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
            minLength="5"
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
            required
          />
        </label>
        <label className="consultation-form-label">
          Опишіть суть вашого питання
          <textarea
            className="consultation-form-text"
            name="text"
            minLength="1"
            maxLength="3000"
            required
          />
        </label>
        <button className="consultation-submit-btn" type="sumbit">
          Записатися
        </button>
      </form>
    </>
  );
}
