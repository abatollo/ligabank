import logo from '../../img/logo.svg';
import facebookIcon from '../../img/facebook-icon.svg';
import instagramIcon from '../../img/instagram-icon.svg';
import twitterIcon from '../../img/twitter-icon.svg';
import youtubeIcon from '../../img/youtube-icon.svg';

const FooterMain = () => {
  return(
    <footer className="footer-main">
      <div className="footer-main__container container center">
        <div className="footer-main__address-container">
          <a className="footer-main__logo-link" href="/">
            <img className="footer-main__logo-image" src={logo} width="150" height="27" alt="Логотип «ЛИГА Банк»"/>
          </a>
          <address className="footer-main__address">
            150015, г. Москва, ул. Московская, д. 32
            Генеральная лицензия Банка России №1050
            &copy; Лига Банк, 2019
          </address>
        </div>
        <ul className="footer-main__menu">
          <li className="footer-main__menu-item">
            <a className="footer-main__menu-link" href="/services">
              Услуги
            </a>
          </li>
          <li className="footer-main__menu-item">
            <a className="footer-main__menu-link" href="/credit-calculator">
              Рассчитать кредит
            </a>
          </li>
          <li className="footer-main__menu-item">
            <a className="footer-main__menu-link" href="/contact-information">
              Контакты
            </a>
          </li>
          <li className="footer-main__menu-item">
            <a className="footer-main__menu-link" href="/feedback">
              Задать вопрос
            </a>
          </li>
        </ul>
        <div className="footer-main__tel-container footer-main__tel-container--celluar">
          <a className="footer-main__tel-link" href="tel:*0904">*0904</a>
          <div className="footer-main__tel-text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</div>
        </div>
        <div className="footer-main__tel-container footer-main__tel-container--federal">
          <a className="footer-main__tel-link" href="tel:88001112233">8 800 111 22 33</a>
          <div className="footer-main__tel-text">Бесплатный для всех городов России</div>
        </div>
        <ul className="footer-main__social-menu">
          <li>
            <a className="footer-main__social-menu-link" href="https://www.facebook.com/">
              <img className="footer-main__social-menu-icon" src={facebookIcon} alt="Логотип Facebook"/>
            </a>
          </li>
          <li>
            <a className="footer-main__social-menu-link" href="https://www.instagram.com/">
              <img className="footer-main__social-menu-icon" src={instagramIcon} alt="Логотип Instagram"/>
            </a>
          </li>
          <li>
            <a className="footer-main__social-menu-link" href="https://twitter.com/">
              <img className="footer-main__social-menu-icon" src={twitterIcon} alt="Логотип Twitter"/>
            </a>
          </li>
          <li>
            <a className="footer-main__social-menu-link" href="https://www.youtube.com/">
              <img className="footer-main__social-menu-icon" src={youtubeIcon} alt="Логотип YouTube"/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterMain;
