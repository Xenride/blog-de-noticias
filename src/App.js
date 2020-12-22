import React, { Component } from 'react';

//componentes propios 
import Header from './componentes/Header';
import Noticias from './componentes/Noticias';
import './App.css'

class App extends Component {
  
  state = {
    noticias : [] 
  }
  
  componentDidMount(){
    this.consultaNoticias();
  }

  consultaNoticias = () => {
    let url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=ff34651b80964e12b6e947a3b97a9d26'
    fetch(url) 
    .then(respuesta => {
      return respuesta.json();
    }).then(noticias => {
      this.setState({
        noticias: noticias.articles
      }, function() {
        console.log(this.state.noticias)
      })
    })

  }
  
  render() {
    return(
      <div>
        <Header />
        <div className="container">
        <Noticias 
        noticias={this.state.noticias}/>
        </div>
      </div>
    )
  }
}

export default App;
