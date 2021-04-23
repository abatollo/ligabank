import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';

import "react-datepicker/dist/react-datepicker.css";

const SectionConverter = () => {
  const [startDate, setStartDate] = useState(new Date());
  registerLocale('ru', ru);

  const [sourceCurrency, setSourceCurrency] = useState(1000);

  const onSourceCurrencyChange = (evt) => {
    const {value} = evt.target;
    setSourceCurrency(Number(value));
  };

  const [targetCurrency, setTargetCurrency] = useState(13.1254);

  const onTargetCurrencyChange = (evt) => {
    const {value} = evt.target;
    setTargetCurrency(Number(value));
  };

  return (
    <section className="section-converter container center">
      <h1 className="section-converter__heading">Конвертер валют</h1>
      <form className="section-converter__form" action="">
        <div className="section-converter__column">
          <label className="section-converter__label" htmlFor="section-converter__source-currency-input">У меня есть</label>
          <input className="section-converter__input-text" id="section-converter__source-currency-input" name="source-currency-input" type="text" value={sourceCurrency} onChange={onSourceCurrencyChange}/>
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
          <input className="section-converter__input-text" id="section-converter__target-currency-input" name="target-currency-input" type="text" value={targetCurrency} onChange={onTargetCurrencyChange}/>
          <select className="section-converter__select" id="target-currency-select" name="">
            <option value="rub">RUB</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbr">GBR</option>
            <option value="cny">CNY</option>
          </select>
        </div>
        <div className="section-converter__datepicker-container">
          <DatePicker 
          className="section-converter__input-date" 
          locale="ru" 
          dateFormat="dd.MM.yyyy"
          selected={startDate} 
          onChange={date => setStartDate(date)} />
        </div>
        <button className="section-converter__button-submit" type="submit">Сохранить результат</button>
      </form>
    </section>
  );
}

export default SectionConverter;
