import { Component } from "react";

type CounterProps = {
  message: string;
};
type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((curState) => ({
      count: curState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count} tin nhắn
      </div>
    );
  }
}
