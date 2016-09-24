declare let mountNode: any

class HelloMessage extends React.Component<any, any> {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

ReactDOM.render(<HelloMessage name="John" />, mountNode)
