import "./Header.css";
import { useState } from "react";
import logo from "../../img/svg/logo.svg";
import phone from "../../img/svg/phone.svg";
import email from "../../img/svg/email.svg";
import burger from "../../img/svg/burger-menu.svg";
import cross from "../../img/svg/cross.svg";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (menuOpen) {
      return setMenuOpen(false);
    }
    setMenuOpen(true);
  };

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
        <button
          onClick={openMenu}
          className={`header-burger ${menuOpen ? "passive" : ""}`}
          type="button"
        >
          <img src={burger} alt="кнопка відкриття меню" />
        </button>
        <button
          onClick={openMenu}
          className={`header-burger ${menuOpen ? "" : "passive"}`}
          type="button"
        >
          <img src={cross} alt="кнопка закриття меню" />
        </button>
        <div className={`header-burger-menu ${menuOpen ? "is-open" : ""}`}>
          <nav className="header-nav-burger">
            <ul className="header-nav-list-burger">
              <li className="header-nav-item-burger">
                <a className="header-nav-link-burger" href="/">
                  На головну
                </a>
              </li>
              <li className="header-nav-item-burger">
                <a className="header-nav-link-burger" href="/about">
                  Про лікаря
                </a>
              </li>
              <li className="header-nav-item-burger">
                <a className="header-nav-link-burger" href="/testimonials">
                  Відгуки
                </a>
              </li>
              <li className="header-nav-item-burger">
                <a className="header-nav-link-burger" href="/consultation">
                  Записатися на консультацію
                </a>
              </li>
            </ul>
          </nav>
          <ul className="header-contacts-list-burger">
            <li className="header-contacts-item-burger">
              <img
                className="header-contacts-icon-burger"
                src={email}
                alt="знак листа"
              />
              <a
                className="header-contacts-link-burger"
                href="mailto:dantax13@gmail.com"
              >
                dantax13@gmail.com
              </a>
            </li>
            <li className="header-contacts-item-burger">
              <img
                className="header-contacts-icon-burger"
                src={phone}
                alt="знак смартфона"
              />
              <a
                className="header-contacts-link-burger"
                href="tel:+380637637670"
              >
                +380 63 763 76 70
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
