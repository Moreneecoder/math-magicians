// import { render, screen } from "@testing-library/react"
import renderer from 'react-test-renderer';
import Home from '../components/Home'

// test(`on render, page should contain h1 of 'Where Magic Of Maths Is Stripped Bare'`, () => {
//     render(<Home />)

//     // screen.debug();
//     expect(screen.getByRole('heading',
//     {name: /Where The Magic Of Math Is Stripped Bare/}))
//     .toBeInTheDocument()

// })

describe('Home Component', () => {
    test('Renders home component as intended', () => {
      const tree = renderer.create(<Home />).toJSON();
      expect(tree).toMatchSnapshot();
    });
});