import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID R1Og89X6qwG-SV4uuUvVkA9YdVtYMbQ0cVqARJvaPjM",
      },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui medium image" style={{ margin: "0 20px" }}>
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default App;
