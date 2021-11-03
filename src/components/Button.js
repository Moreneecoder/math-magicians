import PropTypes from 'prop-types';
import '../stylesheets/button.css';

const Button = (props) => {
  const { name, onClick } = props;

  const getButtonClass = (btnName) => (
    (btnName === '0') ? 'zeroButton' : 'Button'
  );

  return (
    <div className={getButtonClass(name)}>
      <button type="button" onClick={onClick}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
