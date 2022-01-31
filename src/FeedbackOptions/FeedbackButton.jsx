import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackButton = ({ name, onClick }) => (
  <button type="button" className={style.button} onClick={onClick} name={name}>
    {name}
  </button>
);

export default FeedbackButton;

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
