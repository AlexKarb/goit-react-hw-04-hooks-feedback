import style from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <p className={style.notification}>{message}</p>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
