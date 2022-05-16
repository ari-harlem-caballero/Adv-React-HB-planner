import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Planner from './views/Planner';
import Header from './components/Header/Header';
import Entry from './views/Entry';

import './App.css';

export default function App() {
  return (
    <> {/* TODO: Add PlannerProvider */}
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/entries/:id">
            <Entry />
          </Route>
          <Route path="/entries">
            <Planner />
          </Route>
          <Route path="/">
            <Redirect to="/entries" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
