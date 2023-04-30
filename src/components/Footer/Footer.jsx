import "./Footer.css";
import facebook from "../../img/svg/facebook.svg";
import linkedin from "../../img/svg/linkedin.svg";
import telegram from "../../img/svg/telegram.svg";

export function Footer() {
  return (
    <>
      <footer className="footer">
        <ul className="footer-socials-list">
          <li className="footer-socials-item">
            <a
              className="footer-socials-link"
              href="https://www.facebook.com/andriy.shabashov"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-socials-img"
                src={facebook}
                alt="іконка Фейсбук"
              />
            </a>
          </li>
          <li className="footer-socials-item">
            <a
              className="footer-socials-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-socials-img"
                src={linkedin}
                alt="іконка Лінкедін"
              />
            </a>
          </li>
          <li className="footer-socials-item">
            <a
              className="footer-socials-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-socials-img"
                src={telegram}
                alt="іконка Телеграм"
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
