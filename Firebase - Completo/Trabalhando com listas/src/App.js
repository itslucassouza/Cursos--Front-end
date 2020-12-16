import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
     lista: []
    };

    let firebaseConfig = {
      apiKey: "AIzaSyC9w9EMSf4sLuuWC_meLNzM-GQ1NHeSCNI",
      authDomain: "reactapp-2e4d7.firebaseapp.com",
      databaseURL: "https://reactapp-2e4d7.firebaseio.com",
      projectId: "reactapp-2e4d7",
      storageBucket: "reactapp-2e4d7.appspot.com",
      messagingSenderId: "836048674983",
      appId: "1:836048674983:web:1384e61fba790f4e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.database().ref('usuarios').on('value', (snapshot) => {
      let state = this.state;
      state.lista = [];


      snapshot.forEach((childItem) => {
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          idade: childItem.val().idade
        })
      });

      this.setState(state);

    });



  }



  render(){

    return(
      <div>
        {this.state.lista.map((item) => {
          return(
            <div key={item.key}>
              <h3>ID: {item.key}</h3>
              <h1>Olá {item.nome} </h1>
              <h2>Idade: {item.idade} anos </h2>
            </div>
          );
        })}

      </div>
    );
  }
}