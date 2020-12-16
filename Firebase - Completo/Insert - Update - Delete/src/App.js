import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nomeInput: '',
      idadeInput: '',
      token: 'Carregando...',
      nome: '',
      idade: ''
    };
    this.cadastrar = this.cadastrar.bind(this);

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
    
    /* Olheiro 
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });
    */

    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });


  }


  cadastrar(e){
     // Inserindo um novo dado!
    //firebase.database().ref('token').set(this.state.tokenInput);
    
    //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)

    //Removendo um dado especifico
    //firebase.database().ref('token').remove();

    let usuarios = firebase.database().ref('usuarios');
    let chave = usuarios.push().key;
    usuarios.child(chave).set({
      nome: this.state.nomeInput,
      idade: this.state.idadeInput
    })

    e.preventDefault();
  }

  render(){
    const { token, nome, idade } = this.state;
    return(
      <div>

        <form onSubmit={this.cadastrar}>
          <label>Nome</label>
          <input type="text" value={this.state.nomeInput} 
                 onChange={(e)=> this.setState({nomeInput: e.target.value})} /><br/>

          <label>Idade</label>                 
          <input type="text" value={this.state.idadeInput} 
                 onChange={(e)=> this.setState({idadeInput: e.target.value})} /><br/>
          <button type="submit">Cadastrar</button>
        </form>

        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}