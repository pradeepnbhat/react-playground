declare let mountNode: any

class HelloMessage extends React.Component<HelloMessageProps, any> {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

interface HelloMessageProps {
  name: string
}

ReactDOM.render(<HelloMessage name="John" />, mountNode)
