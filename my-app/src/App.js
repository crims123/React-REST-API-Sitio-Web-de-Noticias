import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componentes/Header";
import Noticias from "./componentes/Noticias";
import Formulario from "./componentes/Formulario";
import ReactTransitionGroup from "react-transition-group";  // importar las animaciones de react

class App extends Component {

//estado inicial

state = {
  noticias: [],
  categoria:{categoria:"general"},
}

//metodo para recibir la categoria
Categoria = (categoria)=>{
  // ya recibiendo la categoria la actualizamos al estado

  this.setState({
      categoria:categoria,
  })
}

componentDidMount(){
 this.consultarNoticias();
  
}


//vamos a crear el metodo para consultar la api

componentDidUpdate(prevProps,prevState){

  if (prevState.categoria != this.state.categoria) {
  this.consultarNoticias();

  }

}

consultarNoticias=()=>{
  // creamos la url  de la api y la guardamos en una variable

  //llamamos al estado categoria 



  
  const {categoria} =this.state.categoria;
  

  let url=`https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=82ed5995237a438583400157a8c56bc2`;
  //console.log(url);

  //consumimos la api con fetch api

  fetch(url)  // le enviamos la url de la informacion que solicitamos con la url de la api

  .then(respuesta=>{
    //pedimos el archivo json que nos da la api
      return respuesta.json();
  })
  .then(noticias=>{
      // recuperamos el archivo json en un objeto devuelto con la info que queremos
      //en este caso nos envio un arreglo por eso denesitamos que nuestro state sea un arreglo
      //console.log(noticias.articles);
      this.setState({
        noticias:noticias.articles,
      })
  })

}




  render() {
    return (
    <div>
      <div className="contenedor-app">
        <Header titulo="Noticias Colombia" />
         </div>
        <div className="container white contenedor-noticias">
        <Formulario categoria={this.Categoria} />
        <Noticias noticias={this.state.noticias} />
         </div>
      </div>
    );
  }
}

export default App;
