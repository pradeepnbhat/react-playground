interface CounterProps {
   init: number;
}

interface CounterState {
  current: number;
  command: string;
}

class Counter extends React.Component<CounterProps, CounterState>
 {
    constructor(props: CounterProps){
      super(props)
      this.state = { current: this.props.init, command: "Start" }
    }

    // Called before the component is mounted
    public componentWillMount(){
      console.log("componentWillMount called");
    }

    public componentDidMount(){
      console.log("componentDidMount called");
    }

    public componentWillUnmount(){
      console.log("componentWillUnmount called");
      if (this._timerId){
        clearInterval(this._timerId);
      }
    }

    public shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState){
      console.log("shouldComponentUpdate called");
      return (this.state.current !== nextState.current || this.state.command !== nextState.command);
    }

    public componentWillUpdate(){
      console.log("componentWillUpdate called");
    }

    public componentDidUpdate(){
      console.log("componentDidUpdate called");
    }

    public render() {
      console.log("render called")
      return (
        <div>
          <div>Counter: {this.state.current}</div>
          <button onClick={this._handleClick}>{this.state.command}</button>
        </div>
      )
    }

    // Notice the delegate.
    private _handleClick = () => {

      // Partial updates. 
      this.setState((prevState: CounterState, props: CounterProps) => {


        if (prevState.command === "Start"){
          this._timerId = window.setInterval(this._handleTick, 1000);  
          return {
              command: "Stop"
          } as CounterState;
        }
        else if (prevState.command === "Stop"){
          window.clearInterval(this._timerId);
          return {
              command: "Start"
          } as CounterState;
        }
      })
    }

    // Notice the delegate.
    private _handleTick = () => {

      // What is the error in this code?
      // How to correct it?
      this.setState({
         current: this.state.current + 1
      } as CounterState);
    }

    private _timerId: number;
}


ReactDOM.render(<Counter init={10} />, mountNode);

/*

this.setState({
          current: this.state.current + 1
        } as CounterState);

this.setState((prevState: CounterState, props: CounterProps) => {
        return {
          current: prevState.current + 1,
          personToWish: prevState.current > 10 ? "Pradeep" : "React" 
        }
      });
*/