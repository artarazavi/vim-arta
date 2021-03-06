import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Awards from "./components/Awards/Awards"
import Experiencee from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import NoMatch from "./components/NoMatch/NoMatch"
import Education from './components/Education/Education';
import Workshops from './components/Workshops/Workshops';
import Info from './components/Info/info';
import { withRouter } from 'react-router-dom'
import AdMsg from './components/AdMsg/AdMsg';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/awards" component={Awards} />
            <Route path="/experience" component={Experiencee} />
            <Route path="/education" component={Education} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/info" component={Info} />
            <Route path="/admsg" component={AdMsg} />
            <Route component={NoMatch} />
          </Switch>  
      </React.Fragment>
    );
  }
}
export default withRouter(App);
