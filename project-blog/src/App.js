import React, { Component } from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import firebase from './firebase';

import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import './global.css';

class App extends Component{
  state ={
    firebaseInitialized: false
  };
  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      //devolve o usuario
      this.setState({ firebaseInitialized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
      </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando..</h1>
    );
  }
}

export default App;
