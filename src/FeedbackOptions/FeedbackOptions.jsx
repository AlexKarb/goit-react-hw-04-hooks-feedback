import style from './FeedbackOptions.module.css';
import FeedbackButton from './FeedbackButton';
import PropTypes from 'prop-types';

const shortid = require('shortid');

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.button__container}>
    {options.map(name => (
      <FeedbackButton
        key={shortid.generate()}
        name={name}
        onClick={() => onLeaveFeedback(name)}
      />
    ))}
  </div>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
