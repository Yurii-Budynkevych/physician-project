import "./Home.css";
import { useState } from "react";
import rightArrow from "../../img/svg/right-arrow.svg";
import leftArrow from "../../img/svg/left-arrow.svg";

const Home = () => {
  const [pageCount, setpageCount] = useState(1);

  const incr = () => {
    if (pageCount >= 3) {
      return;
    }
    setpageCount(pageCount + 1);
  };

  const decr = () => {
    if (pageCount <= 1) {
      return;
    }
    setpageCount(pageCount - 1);
  };

  return (
    <>
      <main className="home-section">
        <button type="button" className="home-section-btn-incr" onClick={incr}>
          <img src={rightArrow} alt="стрілочка вправо" />
        </button>
        <button type="button" className="home-section-btn-decr" onClick={decr}>
          <img src={leftArrow} alt="стрілочка вліво" />
        </button>

        <section className={`hero-section ${pageCount === 1 ? "active" : ""}`}>
          <h1 className="hero-section-title">
            Малі хірургічні операції в амбулаторних умовах, консультація
            паліативних хворих хірургічного профілю, консультація у
            лікаря-хірурга.
          </h1>
        </section>

        <section
          className={`hero-section-second ${pageCount === 2 ? "active" : ""}`}
        >
          <h1 className="hero-section-title">
            Без госпіталізаї ✔ В день звернення ✔ Місцевий наркоз ✔ Відсутність
            тривалої реабілітації ✔ Мінімальні ризики виникнення ускладнень ✔
          </h1>
        </section>

        <section
          className={`hero-section-third ${pageCount === 3 ? "active" : ""}`}
        >
          <h1 className="hero-section-title">
            Хірургія одного дня – це малоінвазивні операції, з мінімальною
            травмататизацією, що економлять ваш час та швидко повернуть Вас до
            повсякденного життя.
          </h1>
        </section>
        <h2 className="home-section-list-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          minima voluptatibus eos soluta! Accusantium, laborum distinctio velit
          voluptates neque veniam ex nostrum quasi explicabo iste quos, delectus
          numquam mollitia debitis?
        </h2>
        <ul className="home-section-list">
          <li className="home-section-list-item">
            <p className="home-section-list-subtitle">
              Гнійні захворювання – Пункція; Cанація та дренуваня; Некректомія.
            </p>
            <ul className="home-section-sublist">
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%A4%D1%83%D1%80%D1%83%D0%BD%D0%BA%D1%83%D0%BB%D1%8C%D0%BE%D0%B7"
                >
                  Фурункули
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B1%D1%83%D0%BD%D0%BA%D1%83%D0%BB_(%D1%85%D0%B2%D0%BE%D1%80%D0%BE%D0%B1%D0%B0)"
                >
                  Карбункули
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%90%D0%B1%D1%81%D1%86%D0%B5%D1%81"
                >
                  Абсцеси
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%A4%D0%BB%D0%B5%D0%B3%D0%BC%D0%BE%D0%BD%D0%B0"
                >
                  Флегмони
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%93%D1%96%D0%B4%D1%80%D0%B0%D0%B4%D0%B5%D0%BD%D1%96%D1%82"
                >
                  Гідраденіт
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9B%D1%96%D0%BC%D1%84%D0%B0%D0%B4%D0%B5%D0%BD%D1%96%D1%82"
                >
                  Лімфаденіт
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BD%D0%B0%D1%80%D0%B8%D1%86%D1%96%D0%B9"
                >
                  Панариції
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D1%80%D0%BE%D0%BD%D1%96%D1%85%D1%96%D1%8F"
                >
                  Пароніхії
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D0%BC%D0%B0%D1%82%D0%BE%D0%BC%D0%B0"
                >
                  Гематоми (напружені або що нагноїлися)
                </a>
              </li>
            </ul>
          </li>
          <li className="home-section-list-item">
            <p className="home-section-list-subtitle">
              Доброякісні новоутворення – Висічення ураженої ділянки шкіри.
            </p>
            <ul className="home-section-sublist">
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%90%D1%82%D0%B5%D1%80%D0%BE%D0%BC%D0%B0"
                >
                  Атероми
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9B%D1%96%D0%BF%D0%BE%D0%BC%D0%B0"
                >
                  Ліпоми
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%A4%D1%96%D0%B1%D1%80%D0%BE%D0%BC%D0%B0"
                >
                  Фіброми
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B7%D0%B0%D0%BB%D0%B8%D0%BE%D0%BC%D0%B0"
                >
                  Базаліоми
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BF%D1%96%D0%BB%D0%BE%D0%BC%D0%B0"
                >
                  Папіломи
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%A0%D0%BE%D0%B4%D0%B8%D0%BC%D0%BA%D0%B0"
                >
                  Родимки
                </a>
              </li>
              <li className="home-section-sublist-item">
                <a
                  className="hero-section-link"
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://uk.wikipedia.org/wiki/%D0%93%D0%B0%D0%BD%D0%B3%D0%BB%D1%96%D0%BE%D0%BD_(%D0%B3%D1%96%D0%B3%D1%80%D0%BE%D0%BC%D0%B0)"
                >
                  Гігроми
                </a>
              </li>
            </ul>
          </li>
          <li className="home-section-list-item">
            <p className="home-section-list-subtitle">
              Врослий ніготь – Висічення врослого нігтя (повне); Крайова
              резекція нігтьової пластинки.
            </p>
          </li>
          <li className="home-section-list-item">
            <p className="home-section-list-subtitle">
              Хірургічна обробка ран – Накладання та зняття швів; Обробка ран та
              накладання язок; Видалення стороннього тіла із шкіри.
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};
export default Home;
