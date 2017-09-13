var Event = React.createClass({
  displayName: "Event",

  propTypes: {
    teamAbbr: React.PropTypes.string,
    chanceStartType: React.PropTypes.string,
    shooter: React.PropTypes.string,
    shotType: React.PropTypes.string
  },
  render: function () {
    var event = this.props.event;
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        event.teamAbbr
      ),
      React.createElement(
        "td",
        null,
        event.chanceStartType
      ),
      React.createElement(
        "td",
        null,
        event.shooter
      ),
      React.createElement(
        "td",
        null,
        event.shotType
      )
    );
  }
});