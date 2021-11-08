import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import './App.css';

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hats page!!!</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
