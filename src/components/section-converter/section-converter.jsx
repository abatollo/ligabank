import {DEFAULT_SOURCE_CURRENCY_AMOUNT} from '../../const/default-source-currency-amount';

import {CurrencyCode} from '../../const/currency-code';

import DatePicker from 'react-datepicker';
import {registerLocale} from  'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';

import {substractDays} from '../../utils/substract-days';

import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';
import {convertFromSourceToTarget, convertFromTargetToSource} from '../../store/api-actions';

import {connect} from 'react-redux';
import {useEffect} from 'react';

const SectionConverter = ({
    sourceCurrencyAmount,
    changeSourceCurrencyAmount,
    sourceCurrencyCode,
    changeSourceCurrencyCode,

    targetCurrencyAmount,
    changeTargetCurrencyAmount,
    targetCurrencyCode,
    changeTargetCurrencyCode,

    date,
    changeDate,

    saveToHistory
  }) => {


  useEffect(() => {
    changeSourceCurrencyAmount(DEFAULT_SOURCE_CURRENCY_AMOUNT);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const onSourceCurrencyAmountChange = (evt) => {
    changeSourceCurrencyAmount(Number(evt.target.value));
  };

  const onSourceCurrencyCodeChange = (evt) => {
    changeSourceCurrencyCode(evt.target.value);
  };


  const onTargetCurrencyAmountChange = (evt) => {
    changeTargetCurrencyAmount(Number(evt.target.value));
  };

  const onTargetCurrencyCodeChange = (evt) => {
    changeTargetCurrencyCode(evt.target.value);
  };


  registerLocale('ru', ru);

  const onDatePickerChange = (date) => {
    changeDate(date);
  };

  const onConverterFormSubmit = (evt) => {
    evt.preventDefault();
    saveToHistory({date, sourceCurrencyAmount, sourceCurrencyCode, targetCurrencyAmount, targetCurrencyCode});
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
            value={sourceCurrencyAmount} 
            onChange={onSourceCurrencyAmountChange}
          />
          <select 
            className="section-converter__select" 
            id="source-currency-select" 
            name="" 
            value={sourceCurrencyCode} 
            onChange={onSourceCurrencyCodeChange}
          >
          {CurrencyCode.map((currencyCode, index) => 
            <option value={currencyCode} key={index}>{currencyCode}</option>
          )}
          </select>
        </div>
        <div className="section-converter__column section-converter__column--second">
          <label className="section-converter__label" htmlFor="section-converter__target-currency-input">Хочу приобрести</label>
          <input 
            className="section-converter__input-text" 
            id="section-converter__target-currency-input" 
            name="target-currency-input" 
            type="text" 
            value={targetCurrencyAmount} 
            onChange={onTargetCurrencyAmountChange}
          />
          <select 
            className="section-converter__select" 
            id="target-currency-select" 
            name="" 
            value={targetCurrencyCode} 
            onChange={onTargetCurrencyCodeChange}
          >
          {CurrencyCode.map((currencyCode, index) => 
            <option value={currencyCode} key={index}>{currencyCode}</option>
          )}
          </select>
        </div>
        <div className="section-converter__datepicker-container">
          <DatePicker 
            className="section-converter__input-date" 
            locale="ru" 
            dateFormat="dd.MM.yyyy"
            selected={date} 
            minDate={substractDays(new Date(), 7)}
            maxDate={new Date()}
            onChange={onDatePickerChange} 
          />
        </div>
        <button 
          className="section-converter__button-submit" 
          type="submit"
          onClick={onConverterFormSubmit}
        >
          Сохранить результат
        </button>
      </form>
    </section>
  );
}

SectionConverter.propTypes = {
  sourceCurrencyAmount: PropTypes.number.isRequired,
  sourceCurrencyCode: PropTypes.string.isRequired,
  changeSourceCurrencyCode: PropTypes.func.isRequired,

  targetCurrencyAmount: PropTypes.number.isRequired,
  targetCurrencyCode: PropTypes.string.isRequired,
  changeTargetCurrencyCode: PropTypes.func.isRequired,

  date: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired,

  saveToHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sourceCurrencyAmount: state.sourceCurrencyAmount,
    sourceCurrencyCode: state.sourceCurrencyCode,
    targetCurrencyAmount: state.targetCurrencyAmount,
    targetCurrencyCode: state.targetCurrencyCode,
    date: state.date
  };
};

const mapDispatchToProps = (dispatch) => ({
  changeSourceCurrencyAmount(value) {
    dispatch(ActionCreator.changeSourceCurrencyAmount(value));
    dispatch(convertFromSourceToTarget());
  },
  changeSourceCurrencyCode(value) {
    dispatch(ActionCreator.changeSourceCurrencyCode(value));
    dispatch(convertFromSourceToTarget());
  },
  changeTargetCurrencyAmount(value) {
    dispatch(ActionCreator.changeTargetCurrencyAmount(value));
    dispatch(convertFromTargetToSource());
  },
  changeTargetCurrencyCode(value) {
    dispatch(ActionCreator.changeTargetCurrencyCode(value));
    dispatch(convertFromSourceToTarget());
  },
  changeDate(value) {
    dispatch(ActionCreator.changeDate(value));
    dispatch(convertFromSourceToTarget());
  },
  saveToHistory(newHistoryRecord) {
    dispatch(ActionCreator.saveToHistory(newHistoryRecord));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionConverter);
