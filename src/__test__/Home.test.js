import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home Component', () => {
  test('Renders home component as intended', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
