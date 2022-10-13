import React, { Component } from "react";
class App extends Component {
  state = { isActive: false };

  handleToggle = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    const isActive = this.state.isActive;
    console.log(isActive)
    return (
      <div >
        <button onClick={this.handleToggle} className={isActive ? "active" : "no"}>Toggle class</button>
        {/* css ex... */}
      </div>
    );
  }
}

export default App;