import Button from './Button';

const renderButton = (name) => (
  <Button name={name} />
);

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div>
      {renderButton('AC')}
      {renderButton('+/-')}
      {renderButton('%')}
      {renderButton('÷')}
    </div>

    <div>
      {renderButton('7')}
      {renderButton('8')}
      {renderButton('9')}
      {renderButton('X')}
    </div>

    <div>
      {renderButton('4')}
      {renderButton('5')}
      {renderButton('6')}
      {renderButton('-')}
    </div>

    <div>
      {renderButton('1')}
      {renderButton('2')}
      {renderButton('3')}
      {renderButton('+')}
    </div>

    <div>
      {renderButton('0')}
      {renderButton('.')}
      {renderButton('=')}
    </div>
  </div>
);

export default ButtonPanel;
