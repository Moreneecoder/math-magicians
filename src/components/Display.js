import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (

    <div className="Display">
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
