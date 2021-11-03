import Button from './Button';
import '../stylesheets/ButtonPanel.css';

const renderButton = (name, params) => (
  <Button
    name={name}
    onClick={() => params.handleClick(name)}
  />
);

const ButtonPanel = (props) => (
  <div className="ButtonPanel">
    <div>
      {renderButton('AC', props)}
      {renderButton('+/-', props)}
      {renderButton('%', props)}
      {renderButton('÷', props)}
    </div>

    <div>
      {renderButton('7', props)}
      {renderButton('8', props)}
      {renderButton('9', props)}
      {renderButton('X', props)}
    </div>

    <div>
      {renderButton('4', props)}
      {renderButton('5', props)}
      {renderButton('6', props)}
      {renderButton('-', props)}
    </div>

    <div>
      {renderButton('1', props)}
      {renderButton('2', props)}
      {renderButton('3', props)}
      {renderButton('+', props)}
    </div>

    <div>
      {renderButton('0', props)}
      {renderButton('.', props)}
      {renderButton('=', props)}
    </div>
  </div>
);

export default ButtonPanel;
