import renderer from 'react-test-renderer';
import Quote from '../components/Quote'

describe('Quote Component', () => {
    test('Renders Quote component as expected', () => {
      const tree = renderer.create(<Quote />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});