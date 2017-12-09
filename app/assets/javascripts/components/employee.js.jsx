class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      an_event: this.props.an_event,

    };
  }
  render() {
    return (
      <tr>
        <td>{this.state.an_event.name}</td>
        <td>{this.state.an_event.description}</td>
        <td>{this.state.an_event.owner}</td>
        <td>{this.state.an_event.when}</td>
      </tr>
    );
  }
};
