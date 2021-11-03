import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../stylesheets/Router.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import App from '../components/App';
import Quote from '../components/Quote';

const Router = () => (
  <BrowserRouter>
    <div className="Router">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={App} />
        <Route path="/quotes" component={Quote} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
