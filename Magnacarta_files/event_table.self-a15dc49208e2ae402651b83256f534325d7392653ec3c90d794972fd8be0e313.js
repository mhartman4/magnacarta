var EventTable = React.createClass({
  displayName: "EventTable",

  render: function () {
    var events = [];
    this.props.events.forEach((function (event) {
      events.push(React.createElement(Event, { event: event,
        key: 'event' + event.id }));
    }).bind(this));
    return React.createElement(
      "table",
      { className: "table table-striped" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { className: "col-md-3" },
            "Team"
          ),
          React.createElement(
            "th",
            { className: "col-md-2" },
            "Chance Start"
          ),
          React.createElement(
            "th",
            { className: "col-md-3" },
            "Shooter"
          ),
          React.createElement(
            "th",
            { className: "col-md-4" },
            "Shot Type"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        events
      )
    );
  }
});