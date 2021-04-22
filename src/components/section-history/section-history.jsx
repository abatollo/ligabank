const SectionHistory = () => {
  const history = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(history.length);
  return (
    <section className="section-history container center">
      <div className="section-history__container section-history__container--divider">
        <h2 className="section-history__heading">История конвертаций</h2>
        <ul className={`section-history__list ${history.length > 5 ? `section-history__list--divider` : ``}`}>
          {history.map(() => 
            <li className="section-history__item">
              <time className="section-history__item-time" datetime="2020-11-25">25.11.2020</time>
              <div className="section-history__item-value-from">1000 RUB</div>
              <div className="section-history__item-value-to">13,1234 USD</div>
            </li>
          )}
        </ul>
        <button className="section-history__button-reset" type="reset">Очистить историю</button>
      </div>
    </section>
  );
}

export default SectionHistory;
