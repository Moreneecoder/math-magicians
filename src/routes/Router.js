import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import App from '../components/App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
