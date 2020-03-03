import React,{Component} from 'react'

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){

        
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">{this.props.nombre}</a>
        <h5 className="item-menu">{this.props.fecha}</h5>
            <a href="/Login" className="item-menu">Iniciar Sesion</a>
            <a href="/RickAndMorty" className="item-menu">RickAndMorty</a>
            <a href="/Registro" className="item-menu">Registrar</a>
          </nav>
        )
    }
}

export default Header;