import "./About.css";
import office from "../../img/office.jpg";
import equipmentOld from "../../img/equipmentOld.jpg";
import tomography from "../../img/tomography.jpg";
import tomographySecond from "../../img/tomographySecond.jpg";

const About = () => {
  return (
    <>
      <section className="about-section">
        <aside className="about-section-aside">
          <img
            className="about-section-img"
            src={office}
            alt="Андрій Шабашов в ординаторській"
          />
          <p className="about-section-img-title">
            Постійне місце роботи Київська обл. м. Березань вул. Михайлівська,
            50 КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО БЕРЕЗАНСЬКА МІСЬКА ЛІКАРНЯ
            БЕРЕЗАНСЬКОЇ МІСЬКОЇ РАДИ
          </p>
        </aside>
        <h1 className="about-section-title">
          Iste tempore magni sunt quas ipsa labore impedit necessitatibus nemo
          fuga suscipit, enim officia eaque. Molestias eius quis inventore,
          consequuntur sint doloribus?
        </h1>
        <ul className="about-section-list">
          <li className="about-section-item">
            <div className="about-section-list-box">
              <img
                className="about-section-list-img"
                src={tomography}
                alt="фото лікара"
              />
              <div className="about-section-text-box">
                <h2 className="about-section-subtitle">Освіта</h2>
                <p className="about-section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  eaque, sapiente ratione repellat quam ad similique culpa
                  aspernatur nemo exercitationem rerum doloribus impedit! Sequi
                  nobis voluptatum nesciunt suscipit ad. Aliquam.
                </p>
              </div>
            </div>
          </li>
          <li className="about-section-item">
            <div className="about-section-list-box">
              <img
                className="about-section-list-img"
                src={equipmentOld}
                alt="фото лікара"
              />
              <div className="about-section-text-box">
                <h2 className="about-section-subtitle">Досвід роботи</h2>
                <p className="about-section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  omnis earum, quis suscipit ullam enim molestiae tempore
                  deleniti corrupti nihil! Ab id dicta nisi, adipisci fuga
                  assumenda mollitia delectus iste?
                </p>
              </div>
            </div>
          </li>
          <li className="about-section-item">
            <div className="about-section-list-box">
              <img
                className="about-section-list-img"
                src={tomographySecond}
                alt="фото лікара"
              />
              <div className="about-section-text-box">
                <h2 className="about-section-subtitle">
                  Професійне удосконалення
                </h2>
                <p className="about-section-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                  sed vitae amet vero laborum impedit aliquid, nisi placeat
                  cumque iste? Omnis, cum iste nam dolor quis delectus eligendi
                  debitis tempore.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
