import PropTypes from 'prop-types';

const Button = (props) => {
    const {name} = props

    return (
        <div className="Button">
            <button>{name}</button>
        </div>
    )
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;