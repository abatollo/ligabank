import logo from '../../img/logo.svg';

const HeaderMain = () => {
  return(
    <header className="header-main">
      <div className="container center">
        <nav className="header-main__navigation">
          <a className="header-main__logo-link" href="/">
            <img className="header-main__logo-image" src={logo} alt="Логотип «ЛИГА Банк»"/>
          </a>
          <ul className="header-main__menu">
            <li className="header-main__menu-item">
              <a className="header-main__menu-link" href="/services">
                Услуги
              </a>
            </li>
            <li className="header-main__menu-item">
              <a className="header-main__menu-link" href="/credit-calculator">
                Рассчитать кредит
              </a>
            </li>
            <li className="header-main__menu-item">
              <a className="header-main__menu-link header-main__menu-link--active" href="/currency-converter">
                Конвертер валют
              </a>
            </li>
            <li className="header-main__menu-item">
              <a className="header-main__menu-link" href="/contact-information">
                Контакты
              </a>
            </li>
            <li className="header-main__menu-item">
              <a className="header-main__menu-link" href="/feedback">
                Задать вопрос
              </a>
            </li>
          </ul>
          <a className="header-main__menu-link header-main__menu-link--login" href="/login">
            Войти в Интернет-банк
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
