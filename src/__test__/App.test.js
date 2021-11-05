import renderer from 'react-test-renderer';
import App from '../components/App';

describe('App Component', () => {
  test('Renders App component as expected', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
