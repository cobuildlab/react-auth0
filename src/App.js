import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainView from './modules/main/MainView';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainView} />
        </Switch>
      </BrowserRouter>
    );
  };
};

export default App;