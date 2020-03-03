import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Switch, Route } from 'react-router-dom';

import "../styles/styles.css";
import logo from "../imagenes/logo.png";




function CharacterCard(props) {
  const { character } = props;


  return (
    <div>
   
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
      <button className="btn btn-primary" >Detalles</button>
    </div>
    </div>

  )
}

class App extends React.Component {
  state = {
    loading: true,
    error: null,
    boton:null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();

      this.setState({
        loading: false,
        boton:null,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row">
            {this.state.data.results.map(character => (
              <li className="col-6 col-md-3" key={character.id}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>

          {this.state.loading && <p className="text-center">Loading...</p>}

          {!this.state.loading && this.state.data.info.next && (
            <button onClick={() => this.fetchCharacters()}>Load More</button>
          )}
        </div>
      </div>
    );
  }
}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
export default App;
