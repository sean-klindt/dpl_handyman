import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import MainNavbar from './components/shared/MainNavbar';
import Workers from './components/workers/Workers';
import NoMatch from './components/shared/NoMatch';


const App = () => (
  <>
    <MainNavbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workers" component={Workers} />
      <Route component={NoMatch} />
    </Switch>

  </>
)

export default App;
