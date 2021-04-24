import React from 'react';

import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import {connect} from 'react-redux';

const SectionHistory = ({convertionHistory}) => {
  return (
    <section className="section-history container center">
      <div className={`section-history__container ${convertionHistory.length > 5 ? `section-history__container--divider` : ``}`}>
        <h2 className="section-history__heading">История конвертаций</h2>
        <ul className="section-history__list">
          {convertionHistory.length ? convertionHistory.map((currentHistoryRecord, index) => 
            <li className="section-history__item" key={index}>
              <time className="section-history__item-time" dateTime="2020-11-25">{currentHistoryRecord.date.toISOString().slice(0,10)}</time>
              <div className="section-history__item-value-from">{currentHistoryRecord.sourceCurrencyAmount} {currentHistoryRecord.sourceCurrencyCode}</div>
              <div className="section-history__item-value-to">{currentHistoryRecord.targetCurrencyAmount} {currentHistoryRecord.targetCurrencyCode}</div>
            </li>
          ) : ``}
        </ul>
        <button className="section-history__button-reset" type="reset">Очистить историю</button>
      </div>
    </section>
  );
}

SectionHistory.propTypes = {
  convertionHistory: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    convertionHistory: state.convertionHistory
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveToHistory(newHistoryRecord) {
    dispatch(ActionCreator.saveToHistory(newHistoryRecord));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionHistory);
