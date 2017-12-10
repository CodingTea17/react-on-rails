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

  handleNewName(e) {
    var newEvent = this.state.an_event;
    newEvent.name = e.target.value;
    this.setState({an_event: newEvent});
  }

  handleNewDescription(e) {
    var newEvent = this.state.an_event;
    newEvent.description = e.target.value;
    this.setState({an_event: newEvent});
  }

  handleNewOwner(e) {
    var newEvent = this.state.an_event;
    newEvent.owner = e.target.value;
    this.setState({an_event: newEvent});
  }

  handleNewEvent() {
    var that = this;
    $.ajax({
      method: 'POST',
      data: {
        event: that.state.an_event,
      },
      url: '/events.json',
      success: function(res) {
        var newEventList = that.state.events;
        newEventList.push(res);
        that.setState({
          events: newEventList,
          an_event: {
            name: '',
            description: '',
            owner: ''
          },
          errors: {}
        });
      },
      error: function(res) {
        that.setState({errors: res.responseJSON.errors})
      }
    });
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
              <tr>
                <td>
                  <input type="text" onChange={this.handleNewName.bind(this)} value={this.state.an_event.name} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.name}</span>
                </td>
                <td>
                  <input type="text" onChange={this.handleNewDescription.bind(this)} value={this.state.an_event.description} /><br />
                  <span style={{color: 'red'}}>{this.state.errors.description}</span>
                </td>
                <td>
                  <input type="text" onChange={this.handleNewOwner.bind(this)} value={this.state.an_event.owner}/><br />
                  <span style={{color: 'red'}}>{this.state.errors.owner}</span>
                </td>
                <td><button onClick={this.handleNewEvent.bind(this)}>Add</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
