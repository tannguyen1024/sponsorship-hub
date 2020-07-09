import React, {Component} from 'react';
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
//components
import Footer from '../Footer/Footer';
import ProtectedRoute from '../Structure/ProtectedRoute/ProtectedRoute';
import LandingPage from '../LandingPage/LandingPage';
import ResultPage from '../LandingPage/ResultPage';
import CreateSponsor from '../Create/CreateSponsor';
import CreateEvent from '../Create/CreateEvent';
import CreateDemo from '../Create/CreateDemo';
import EditDemo from '../Create/EditDemo';
import EditEvent from '../Create/EditEvent';
import EditSponsor from '../Create/EditSponsor';
import Event from '../Event/Event';
import ErrorPage from '../Error/Error';
//style for app
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/';
import { createMuiTheme } from '@material-ui/core/styles';
import Admin from '../Admin/Admin';


const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F45255', // Coral
    },
    secondary: {
      main: '#FFFFFF', // White
    }
  }
});

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <MuiThemeProvider theme={mainTheme}>
      <Router>
        <div>
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <Route exact path="/home" component={LandingPage}/>
            <ProtectedRoute exact path="/home/login" component={LandingPage}/>
            <ProtectedRoute exact path={"/results"} component={ResultPage}/>
            <ProtectedRoute exact path="/create-sponsor/:id" component={CreateSponsor}/>
            <ProtectedRoute exact path="/sponsor/edit/:id" component={EditSponsor} />
            <ProtectedRoute exact path="/create-demo/:id" component={CreateDemo} />
            <ProtectedRoute exact path="/demo/edit/:id" component={EditDemo} />
            <ProtectedRoute exact path="/event/:id" component={Event} />
            <ProtectedRoute exact path="/event/edit/:id" component={EditEvent} />
            <ProtectedRoute path="/create-event" component={CreateEvent} />
            <ProtectedRoute exact path="/admin" component={Admin} />
            <Route exact path="/error" component={ErrorPage} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
        </Router></MuiThemeProvider>
  )}
}

export default connect()(App);
