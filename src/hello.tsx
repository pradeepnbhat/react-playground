declare let mountNode: any

interface HelloMessageProps {
  name: string;
  date: Date;
}

class HelloMessage extends React.Component<HelloMessageProps, any> {

  render() {
    return <div>Hello {this.props.name} ! How are you on {this.props.date.toDateString()} </div>
  }
}

class HelpMessage extends React.Component<{}, {}> {
  render(){
    return (
      <div>
        How can I help you?
      </div>
    );
  }
}

class Greetings extends React.Component<{}, {}> {

  render() {
    return (
      <div>
        <HelloMessage name="Pradeep" date={new Date()} />
        <HelpMessage />
      </div>
    );
  }
}


ReactDOM.render(<Greetings />, mountNode)
