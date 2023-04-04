//PROPS E COMPONENT


// import React from "react";

// const Equipe = (props) => {
//   return(
//     <div>
//       <Sobre username = {props.nome} cargo = {props.cargp} 
//              idade={props.idade} />

//       <Social/>
//     </div>
//   );
// }
// const Sobre = (props) => {
//   return(
//     <div>
//       <h2>Olá sou o(a) {props.username}</h2>
//       <h3>Cargo:{props.cargo} </h3>
//       <h3>Idade: {props.idade} anos</h3>
//     </div>

//   );
// }

// const Social = () => {
//   return(
//     <div>
//       <a>Facebook</a>
//       <a>Instagram</a>
//       <a>Whats</a>
//     </div>
//   )
// }



// function App( ){
//   return(
//   <div>
//     <h1>Conheça nossa equipe</h1>
//     <Equipe nome = "Mateus" cargo= "Desenvolvedor" idade ="18"/>
//     <Equipe nome = "Cicero" cargo= "Analista" idade ="43"/>
//   </div>
//   );
  
// }
// export default App;


//TRABALHANDO COM STATES

import React, { Component} from 'react';

class App extends Component{
  constructor (props){
    super(props);
    this.state ={
      nome: 'Cicero',
      contador: 0

    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }
  aumentar(){
    let state= this.state;
    state.contador +=1;
    state.nome = 'Jose' ;
    this.setState(state);

  }
  diminuir(){
    let state= this.state;
    if(state.contador ===0){
      alert('Chegou á zero');
      return;

    }
    state.contador -= 1;
    this.setState(state);
  }


  render (){
    return (
      <div>
        <h1>contador</h1>
        {this.state.nome}
        <h3> 
        <button onClick={this.diminuir}>-</button> 
          {this.state.contador} 
        <button onClick={this.aumentar}>+</button>
        </h3>

      </div>
    );

  }
}
export default App;