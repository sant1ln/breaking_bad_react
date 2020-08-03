import React from "react";

import Character from "../components/Character";

import "./styles/Random.css";
import Loader from "../components/Loader";
import Error500 from "../components/Error500";

class Random extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      character: [],
    };
  }

  componentDidMount() {
    this.fetchAllCharacters();
  }

  fetchAllCharacters = async () => {
    this.setState({ loading: true, error: false });
    let randomCharacter = Math.floor(Math.random() * (57 - 1 + 1) + 1);
    try {
      console.log(randomCharacter);
      const characterUrl = `https://breakingbadapi.com/api/characters/${randomCharacter}`;
      const response = await fetch(characterUrl);
      const data = await response.json();
      console.log(data);

      this.setState({
        character: data,
        loading: false,
      });
    } catch (error) {
      console.log("x");
      this.setState({
        loading: false,
        error: true,
      });
    }
  };
  render() {
    return (
      <div className="container_random">
        {this.state.character.map((c) => (
          <Character
            key={c.id}
            name={c.name}
            img={c.img}
            occupation={c.occupation}
            status={c.status}
            nickName={c.nickname}
          />
        ))}

        {this.state.loading && (
          <div className="loader">
            <Loader />
          </div>
        )}
        {this.state.error && <Error500 />}
      </div>
    );
  }
}
export default Random;
