import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import App from '../components/App';
import Quote from '../components/Quote';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route path="/quotes" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Router;
