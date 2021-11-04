import '../stylesheets/home.css';
import Math from '../images/math.svg';

const Home = () => (
  <div className="Home">
    <img className="mathImg" src={Math} alt="math" />
    <h1 className="center-align">Where The Magic Of Math Is Stripped Bare</h1>

    <div className="desc main-bg-color">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui o!cia deserunt mollit anim id est laborum. Ipsu
      </p>
    </div>

  </div>
);

export default Home;
