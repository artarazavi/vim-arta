import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Awards from "./components/Awards"
import Experiencee from "./components/Experience/Experience"
import Home from "./components/Home/Home"
import NoMatch from "./components/NoMatch/NoMatch"
import Education from './components/Education/Education';
import { withRouter } from 'react-router-dom'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "stuff"
    }
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.setState((state, props) => ({
        location: props.location.pathname
      }));
      //console.log(this.state.location);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    return (
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/awards" component={Awards} />
            <Route path="/experience" component={Experiencee} />
            <Route path="/education" component={Education} />
            <Route component={NoMatch} />
          </Switch>  
      </React.Fragment>
    );
  }
}
export default withRouter(App);
