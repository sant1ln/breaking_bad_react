import React from "react";

import Card from "../components/Card";
import Loader from "../components/Loader";
import Error500 from '../components/Error500';

import "../components/styles/Loader.css";
import "./styles/Home.css";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: null,
      characters: [],
    };
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const urlCharacters = "https://breakingbadapi.com/api/characters";
      const response = await fetch(urlCharacters);
      const data = await response.json();
      this.setState({
        characters: data,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container_cards">
        {this.state.characters.map((character) => (
          <Card
            key={character.char_id}
            id={character.char_id}
            name={character.name}
            alias={character.nickname}
            status={character.status}
            img={character.img}
            occupation={character.ocupation}
          />
        ))}

        {this.state.loading && (
          <div className="loader">
            <Loader />
          </div>
        )}
        {this.state.error && (
          <Error500 />
        )}
      </div>
    );
  }
}
export default Home;
