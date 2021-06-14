import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
              ></input>
              <button type="submit">Add Name</button>
            </label>
          </form>
        </div>
      </>
    );
  }
}
export default App;
