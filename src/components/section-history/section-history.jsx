import {formatDate} from '../../utils/format-date';

import PropTypes from 'prop-types';

import {ActionCreator} from '../../store/action';

import {connect} from 'react-redux';

const SectionHistory = ({
  convertionHistory, 
  deleteHistory
  }) => {


  const onHistoryResetButtonClick = () => {
    deleteHistory();
  };


  if (convertionHistory.length > 0) {
    return (
      <section className="section-history container center">
        <div className={`section-history__container ${convertionHistory.length > 5 ? `section-history__container--divider` : ``}`}>
          <h2 className="section-history__heading">История конвертаций</h2>
          <ul className="section-history__list">
            {convertionHistory.map((currentHistoryRecord, index) => 
              <li className="section-history__item" key={index}>
                <time className="section-history__item-time" dateTime="2020-11-25">{formatDate(currentHistoryRecord.date)}</time>
                <div className="section-history__item-value-from">{currentHistoryRecord.sourceCurrencyAmount} {currentHistoryRecord.sourceCurrencyCode}</div>
                <div className="section-history__item-value-to">{currentHistoryRecord.targetCurrencyAmount} {currentHistoryRecord.targetCurrencyCode}</div>
              </li>
            )}
          </ul>
          <button 
            className="section-history__button-reset" 
            type="reset"
            onClick={onHistoryResetButtonClick}
          >
            Очистить историю
          </button>
        </div>
      </section>
    );
  } else {
    return null;
  }
}

SectionHistory.propTypes = {
  convertionHistory: PropTypes.array.isRequired,
  deleteHistory: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    convertionHistory: state.convertionHistory
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteHistory() {
    dispatch(ActionCreator.deleteHistory());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionHistory);
