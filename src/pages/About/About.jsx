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
            Постійне місце роботи Київська обл., м. Березань, вул. Михайлівська,
            50 КОМУНАЛЬНЕ НЕКОМЕРЦІЙНЕ ПІДПРИЄМСТВО БЕРЕЗАНСЬКА МІСЬКА ЛІКАРНЯ
            БЕРЕЗАНСЬКОЇ МІСЬКОЇ РАДИ
          </p>
        </aside>
        <h1 className="about-section-title">
          Практикуючий лікар хірург з 6-ти річним досвідом роботи. У своїй
          лікарській практиці використовую новітні методи профілактики та
          лікування хірургічних патологій. Для кожного пацієнта обираю
          індивідуальну стратегію лікування (консервативне чи оперативне).
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
                <ul className="about-section-sublist">
                  <li className="about-section-sublist-item">
                    Національний медичний університет імені О.О.Богомольця.
                    Повна вища освіта Спеціальність: лікувальна справа,
                    2011-2017р
                  </li>
                  <li className="about-section-sublist-item">
                    Українська військово-медична академія. Присвоєне офіцерське
                    звання «молодший лейтенант медичної служби» наказом МО
                    України від 19.07.2017р №489
                  </li>
                  <li className="about-section-sublist-item">
                    Національна академія післядипломної освіти ім. П.Л. Шупика
                    Кафедра «хірургії та проктології», 2017-2020р
                  </li>
                </ul>
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
                <ul className="about-section-sublist">
                  <li className="about-section-sublist-item">
                    КНП КОР «Київська обласна клінічна лікарня» 2017-2020р
                  </li>
                  <li className="about-section-sublist-item">
                    Київська обл., м. Березань, вул. Михайлівська, 50 комунальне
                    некомерційне підприємство "БЕРЕЗАНСЬКА МІСЬКА ЛІКАРНЯ
                    БЕРЕЗАНСЬКОЇ МІСЬКОЇ РАДИ" 2020-сьогодні
                  </li>
                </ul>
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
                <ul className="about-section-sublist">
                  <li className="about-section-sublist-item">
                    2021р – Кваліфікаційний рівень «транспоант – координатор
                    №26112100052»
                  </li>
                  <li className="about-section-sublist-item">
                    2023р – Стаціонарна та амбулаторна паліативна допомога
                    важкохворим пацацієнтам № ту-23/589
                  </li>
                  <li className="about-section-sublist-item">
                    2020-2023р. - Активний учасник багатьох наукових хірургічних
                    конференцій, майстер класів із живої хірургії.
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default About;
