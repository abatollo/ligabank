const SectionConverter = () => {
  return (
    <section className="section-converter container center">
      <h1 className="section-converter__heading">Конвертер валют</h1>
      <form className="section-converter__form" action="">
        <div className="section-converter__column">
          <label className="section-converter__label" htmlFor="section-converter__source-currency-input">У меня есть</label>
          <input className="section-converter__input-text" id="section-converter__source-currency-input" name="source-currency-input" type="text" value="1000"/>
          <select className="section-converter__select" id="source-currency-select" name="">
            <option value="rub">RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbr">GBR</option>
            <option value="cny">CNY</option>
          </select>
        </div>
        <div className="section-converter__column section-converter__column--second">
          <label className="section-converter__label" htmlFor="section-converter__target-currency-input">Хочу приобрести</label>
          <input className="section-converter__input-text" type="text" name="" id="section-converter__target-currency-input" value="1000"/>
          <select className="section-converter__select" id="source-currency-select" name="">
            <option value="rub">RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbr">GBR</option>
            <option value="cny">CNY</option>
          </select>
        </div>
        <input className="section-converter__input-date" type="date"></input>
        <button className="section-converter__button-submit" type="submit">Сохранить результат</button>
      </form>
    </section>
  );
}

export default SectionConverter;
