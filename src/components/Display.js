import PropTypes from 'prop-types';
import '../stylesheets/display.css';

const Display = (props) => {
  const { result } = props;
  return (

    <div className="display">
      <h1>
        {result}
      </h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
