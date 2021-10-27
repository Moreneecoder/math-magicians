import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, onClick } = props;

  return (
    <div className="Button">
      <button type="button" onClick={onClick}>{name}</button>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
