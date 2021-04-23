import React, { useState } from "react";
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';

import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';

import "react-datepicker/dist/react-datepicker.css";

const SectionConverter = ({sourceCurrency, targetCurrency, changeSourceCurrency, changeTargetCurrency}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [sourceCurrencyValue, setSourceCurrencyValue] = useState(1000);
  const [targetCurrencyValue, setTargetCurrencyValue] = useState(13.1254);

  registerLocale('ru', ru);

  const onSourceCurrencyValueChange = (evt) => {
    setSourceCurrencyValue(Number(evt.target.value));
  };

  const onSourceCurrencyChange = (evt) => {
    changeSourceCurrency(evt.target.value)
  };

  const onTargetCurrencyValueChange = (evt) => {
    setTargetCurrencyValue(Number(evt.target.value));
  };

  const onTargetCurrencyChange = (evt) => {
    changeTargetCurrency(evt.target.value)
  };

  return (
    <section className="section-converter container center">
      <h1 className="section-converter__heading">Конвертер валют</h1>
      <form className="section-converter__form" action="">
        <div className="section-converter__column">
          <label className="section-converter__label" htmlFor="section-converter__source-currency-input">У меня есть</label>
          <input 
            className="section-converter__input-text" 
            id="section-converter__source-currency-input" 
            name="source-currency-input" 
            type="text" 
            value={sourceCurrencyValue} 
            onChange={onSourceCurrencyValueChange}
          />
          <select 
            className="section-converter__select" 
            id="source-currency-select" 
            name="" 
            value={sourceCurrency} 
            onChange={onSourceCurrencyChange}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
        <div className="section-converter__column section-converter__column--second">
          <label className="section-converter__label" htmlFor="section-converter__target-currency-input">Хочу приобрести</label>
          <input 
            className="section-converter__input-text" 
            id="section-converter__target-currency-input" 
            name="target-currency-input" 
            type="text" 
            value={targetCurrencyValue} 
            onChange={onTargetCurrencyValueChange}
          />
          <select 
            className="section-converter__select" 
            id="target-currency-select" 
            name="" 
            value={targetCurrency} 
            onChange={onTargetCurrencyChange}
          >
            <option value="RUB">RUB</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBR">GBR</option>
            <option value="CNY">CNY</option>
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

SectionConverter.propTypes = {
  sourceCurrency: PropTypes.string.isRequired,
  changeSourceCurrency: PropTypes.func.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  changeTargetCurrency: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sourceCurrency: state.sourceCurrency,
    targetCurrency: state.targetCurrency
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSourceCurrency(value) {
    dispatch(ActionCreator.changeSourceCurrency(value));
  },
  changeTargetCurrency(value) {
    dispatch(ActionCreator.changeTargetCurrency(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionConverter);
