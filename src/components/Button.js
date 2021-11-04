import PropTypes from 'prop-types';
import '../stylesheets/button.css';

const Button = (props) => {
  const { name, onClick, addColor } = props;

  const getButtonClass = (btnName) => {
    const classes = [];
    classes.push((btnName === '0') ? 'zeroButton' : 'Button');
    classes.push(addColor ? 'defaultBg' : '');
    return classes;
  };

  return (
    <div className={getButtonClass(name).join(' ')}>
      <button type="button" onClick={onClick}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  addColor: PropTypes.func.isRequired,
};

export default Button;
