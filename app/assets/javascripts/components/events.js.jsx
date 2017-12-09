class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
      an_event: {
        name: '',
        description: '',
        owner: '',
        when: ''
      },
      errors: {}
    };
  }
  render() {
    const events = this.state.events.map((an_event) => {
      return(
        <Event an_event={an_event} key={an_event.id} />
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
