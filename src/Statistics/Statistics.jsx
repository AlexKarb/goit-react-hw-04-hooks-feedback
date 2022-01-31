import style from './Statistics.module.css';
import PropTypes from 'prop-types';
const { stats__list, stats__item } = style;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={stats__list}>
    <li className={stats__item}>good : {good}</li>
    <li className={stats__item}>neutral : {neutral}</li>
    <li className={stats__item}>bad : {bad}</li>
    <li className={stats__item}>total : {total}</li>
    <li className={stats__item}>Positive feedback : {positivePercentage}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
