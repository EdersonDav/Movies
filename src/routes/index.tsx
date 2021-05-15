import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movie from 'pages/Movie';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:id" component={Movie} />
  </Switch>
);

export default Routes;
