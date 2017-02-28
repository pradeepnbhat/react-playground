
interface Customer{
  id: string;
  name: string;
}

let customers1 = [
  {
  name: "A",
  id: "101",
},
{
  name: "B",
  id: "102",
},
{
  name: "C",
  id: "103",
},
{
  name: "D",
  id: "104",
  }]

interface ListProps {
  customers: Customer[];
  onChange: () => void;
}

class CustomerComponent extends React.Component<{text: string}, {}> {

  constructor(props){
    super(props);
  }

  render(){
    return (
       <div>
        {this.props.text}
      </div>);
  }
}


class List extends React.Component<ListProps, any> {

  render() {
    let customerElements: JSX.Element[] = [];
    this.props.customers.forEach((customer) => {
        customerElements.push(<CustomerComponent text={customer.name} />);
    });

    return (
      <div>
        {customerElements}
        <button onClick={this._handleClick}>Change List</button>
      </div>);
  }

  _handleClick = () => {
    this.props.onChange();
  }
}

interface ListParentState {
  customers: Customer[];
}

class ListParent extends React.Component<{}, ListParentState> {

  constructor(props){
    super(props);
    this.state = { customers: customers1};
  }

  render() {
    return <List customers={this.state.customers} onChange={this._handleChange} />;
  }

  _handleChange = () => {
    customers1.pop();
    customers1.push({
      name: "E",
      id: "104"
    });
    this.setState({
      customers: customers1
    });
  }
}

ReactDOM.render(<ListParent  />, mountNode);

