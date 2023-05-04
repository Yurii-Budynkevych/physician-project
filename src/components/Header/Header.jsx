import "./Header.css";
import logo from "../../img/svg/logo.svg";
import phone from "../../img/svg/phone.svg";
import email from "../../img/svg/email.svg";

export function Header() {
  return (
    <>
      <header className="header">
        <a href="/" className="header-logo">
          <img className="header-logo-img" src={logo} alt="медичний знак" />
          <p className="header-logo-title">Лікар-хірург Шабашов А.Д.</p>
        </a>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <a className="header-nav-link" href="/">
                На головну
              </a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-link" href="/about">
                Про лікаря
              </a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-link" href="/testimonials">
                Відгуки
              </a>
            </li>
            <li className="header-nav-item">
              <a className="header-nav-link" href="/consultation">
                Записатися на консультацію
              </a>
            </li>
          </ul>
        </nav>
        <ul className="header-contacts-list">
          <li className="header-contacts-item">
            <img
              className="header-contacts-icon"
              src={email}
              alt="знак листа"
            />
            <a
              className="header-contacts-link"
              href="mailto:dantax13@gmail.com"
            >
              dantax13@gmail.com
            </a>
          </li>
          <li className="header-contacts-item">
            <img
              className="header-contacts-icon"
              src={phone}
              alt="знак смартфона"
            />
            <a className="header-contacts-link" href="tel:+380637637670">
              +380 63 763 76 70
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
