var Event = React.createClass({
  propTypes: {
    teamAbbr: React.PropTypes.string,
    chanceStartType: React.PropTypes.string,
    shooter: React.PropTypes.string,
    shotType: React.PropTypes.string
  },
  render: function() {
    var event = this.props.event;
    return(
      <tr>
        <td>{event.teamAbbr}</td>
        <td>{event.chanceStartType}</td>
        <td>{event.shooter}</td>
        <td>{event.shotType}</td>
      </tr>
    )
  }
});
