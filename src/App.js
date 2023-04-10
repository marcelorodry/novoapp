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

// 

import React,{Componet} from "react";

class App extends Componet{

  constructor (props){
    super(props);
    this.state = {
      hora: '00:00:00'
    }; 
  }
    componentDidMount(){
      setInterval(()=>{
        this.setInterval({hora: new Date().toLocaleDateString()})

      },1000);

    

  }
  componetDidUpdate(){
    console.log('atualizou');
  }
  
  render(){
    return(
      <div>
        <h1>Meu Projeto</h1>
      </div>

    );
  }
  
}
export default App;