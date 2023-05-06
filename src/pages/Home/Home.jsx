import "./Home.css";
import { useState } from "react";

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
      <section className="home-section">
        <button type="button" className="home-section-btn-incr" onClick={incr}>
          +
        </button>
        <button type="button" className="home-section-btn-decr" onClick={decr}>
          -
        </button>

        <section className="hero-section">
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
      </section>
    </>
  );
};
export default Home;
