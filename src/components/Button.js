import PropTypes from 'prop-types';
import '../stylesheets/button.css';

const Button = (props) => {
  const { name, onClick } = props;

  return (
    <div className={name === '0' ? 'zeroButton' : 'Button'}>
      <button type="button" onClick={onClick}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
