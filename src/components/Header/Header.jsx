import "./Header.css";
import logo from "../../img/svg/logo.svg";

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
                Про лікара
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
          <li className="header-contacts-item">qweqwe</li>
          <li className="header-contacts-item">asdasd</li>
        </ul>
      </header>
    </>
  );
}
