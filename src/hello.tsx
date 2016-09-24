declare let mountNode: any

interface HelloWorldProps {
  name: string
}

let HelloMessage = React.createClass<HelloWorldProps, any>({
  render: () => <div>Hello {this.props.name}</div>
})

ReactDOM.render(<HelloMessage name="John" />, mountNode)
