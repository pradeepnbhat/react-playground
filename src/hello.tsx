declare let mountNode: any

interface HelloMessageProps {
  name: string;
  date: Date;
}

class HelloMessage extends React.Component<HelloMessageProps, any> {

  render() {
    return (
      <div>
        <div>Hello {this.props.name} ! How are you on {this.props.date.toDateString()} 
        </div>
        <HelpMessage {...this.props} />
      </div>);
  }
}

class HelpMessage extends React.Component<HelloMessageProps, {}> {
  render(){
    return (
      <div>
        Hi {this.props.name} !! How can I help you? 
      </div>
    );
  }
}

class Greetings extends React.Component<{}, {}> {

  render() {
    let props: HelloMessageProps = {
      name: "A",
      date: new Date()
    };

    return (
      <div>
        <HelloMessage name="Pradeep" date={new Date()} />
      </div>
    );
  }
}


ReactDOM.render(<Greetings />, mountNode)
