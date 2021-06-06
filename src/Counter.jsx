import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = () => {
      this.setState((prevValue) => {
        return { counter: prevValue.counter + 1 };
      });
    };

    this.decrement = this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log("Component did mount");
    console.log("--------------------------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.ignoreProp && this.props.ignoreProp === nextProps.ignoreProp){
    //   return false;
    // }
    return true;
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }

  componentDidUpdate() {
    console.log("Component update");
    console.log("----------------------------------------------");
  }

  componentWillUnmount() {
    console.log("Component unmounted..!");
    console.log("------------------------------------------------");
  }
}

export default Counter;
