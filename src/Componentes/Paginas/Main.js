import React,{Component} from 'react'
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Inicio from './Inicio'
import Register from './Register'
import RickAndMorty from './RickAndMorty'

const Navegacion = (
 // <Router>
 <BrowserRouter>
   <Switch>
    <Route path="/Login" component={Inicio} />
    <Route path="/Registro" component={Register} />
    <Route path="/RickAndMorty" component={RickAndMorty}/>
    </Switch>
    </BrowserRouter>
  //</Router>
)

class Main extends Component{

    render(){
      return (
        <div className="main-container">
           {
             Navegacion
           }
        </div>
      )
    }
}

export default Main;