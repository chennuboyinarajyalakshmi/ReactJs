import React from "react";

class MyclassComponentmethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor: component is being created");
  }

  // Mount
  componentDidMount() {
    console.log("componentDidMount: Component is mounted to the DOM");

    // Example: Set up a timer
    this.timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);
  }

  // Update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate: Count updated to", this.state.count);
    }
  }

  // Unmount
  componentWillUnmount() {
    console.log("componentWillUnmount: Component is being removed");

    // Clear interval
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>class life cycle methods</h1>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default MyclassComponentmethods;
