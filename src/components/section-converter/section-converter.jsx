import React from 'react';
import {connect} from 'react-redux';
import DatePicker from 'react-datepicker';
import { registerLocale } from  'react-datepicker';
import ru from 'date-fns/locale/ru';

import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {convertFromSourceToTarget, convertFromTargetToSource} from '../../store/api-actions';

import "react-datepicker/dist/react-datepicker.css";

const SectionConverter = ({
    sourceCurrencyValue,
    changeSourceCurrencyValue,
    sourceCurrency,
    changeSourceCurrency,
    targetCurrencyValue,
    changeTargetCurrencyValue,
    targetCurrency,
    changeTargetCurrency,
    date,
    changeDate
  }) => {

  const onSourceCurrencyValueChange = (evt) => {
    changeSourceCurrencyValue(Number(evt.target.value));
  };

  const onSourceCurrencyChange = (evt) => {
    changeSourceCurrency(evt.target.value);
  };

  const onTargetCurrencyValueChange = (evt) => {
    changeTargetCurrencyValue(Number(evt.target.value));
  };

  const onTargetCurrencyChange = (evt) => {
    changeTargetCurrency(evt.target.value);
  };

  registerLocale('ru', ru);

  const onDatePickerChange = (date) => {
    changeDate(date);
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
            <option value="GBP">GBP</option>
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
            <option value="GBP">GBP</option>
            <option value="CNY">CNY</option>
          </select>
        </div>
        <div className="section-converter__datepicker-container">
          <DatePicker 
            className="section-converter__input-date" 
            locale="ru" 
            dateFormat="dd.MM.yyyy"
            selected={date} 
            onChange={onDatePickerChange} 
          />
        </div>
        <button className="section-converter__button-submit" type="submit">Сохранить результат</button>
      </form>
    </section>
  );
}

SectionConverter.propTypes = {
  sourceCurrencyValue: PropTypes.number.isRequired,
  sourceCurrency: PropTypes.string.isRequired,
  changeSourceCurrency: PropTypes.func.isRequired,

  targetCurrencyValue: PropTypes.number.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  changeTargetCurrency: PropTypes.func.isRequired,

  date: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sourceCurrencyValue: state.sourceCurrencyValue,
    sourceCurrency: state.sourceCurrency,
    targetCurrencyValue: state.targetCurrencyValue,
    targetCurrency: state.targetCurrency,
    date: state.date
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSourceCurrencyValue(value) {
    dispatch(ActionCreator.changeSourceCurrencyValue(value));
    dispatch(convertFromSourceToTarget());
  },
  changeSourceCurrency(value) {
    dispatch(ActionCreator.changeSourceCurrency(value));
    dispatch(convertFromSourceToTarget());
  },
  changeTargetCurrencyValue(value) {
    dispatch(ActionCreator.changeTargetCurrencyValue(value));
    dispatch(convertFromTargetToSource());
  },
  changeTargetCurrency(value) {
    dispatch(ActionCreator.changeTargetCurrency(value));
    dispatch(convertFromTargetToSource());
  },
  changeDate(value) {
    dispatch(ActionCreator.changeDate(value));
    dispatch(convertFromSourceToTarget());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionConverter);
