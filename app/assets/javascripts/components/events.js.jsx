class Events extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    events = this.props.events.map( (an_event) => {
      return (
        <tr key={an_event.id}>
          <td>{an_event.name}</td>
          <td>{an_event.description}</td>
          <td>{an_event.owner}</td>
          <td>{an_event.when}</td>
        </tr>
      );
    });
    return (
      <div>
        <h1>Events</h1>
        <div id="events">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Owner</th>
                <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
              {events}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
