var EventTable = React.createClass({
  render: function() {
    var events = [];
    this.props.events.forEach(function(event) {
      events.push(<Event event={event}
                         key={'event' + event.id}/>);
    }.bind(this));
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Team</th>
            <th className="col-md-2">Chance Start</th>
            <th className="col-md-3">Shooter</th>
            <th className="col-md-4">Shot Type</th>
          </tr>
        </thead>
        <tbody>
          {events}
        </tbody>
      </table>
    )
  }
});
