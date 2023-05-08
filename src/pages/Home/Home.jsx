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
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            iure perspiciatis ratione nisi debitis voluptatum saepe, accusamus
            cumque ipsa iste atque alias!
          </h1>
        </section>

        <section
          className={`hero-section-second ${pageCount === 2 ? "active" : ""}`}
        >
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            iure perspiciatis ratione nisi debitis voluptatum saepe, accusamus
            cumque ipsa iste atque alias!
          </h1>
        </section>

        <section
          className={`hero-section-third ${pageCount === 3 ? "active" : ""}`}
        >
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            iure perspiciatis ratione nisi debitis voluptatum saepe, accusamus
            cumque ipsa iste atque alias!
          </h1>
        </section>

        <ul>
          <li>qwe</li>
          <li>qwe</li>
          <li>qwe</li>
          <li>qwe</li>
        </ul>

        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </main>
    </>
  );
};
export default Home;
