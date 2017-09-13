var EventApplication = React.createClass({
  displayName: 'EventApplication',

  getInitialState: function () {
    return { events: [] };
  },
  componentDidMount: function () {
    this.getDataFromApi();
  },
  getDataFromApi: function () {
    var self = this;
    $.ajax({
      url: '/api/events',
      success: function (data) {
        self.setState({ events: data });
      },
      error: function (xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'div',
        { className: 'jumbotron' },
        React.createElement(
          'h1',
          null,
          'ReactJS Tutorial'
        ),
        React.createElement(
          'p',
          null,
          'by Piotr Jaworski'
        )
      ),
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-md-12' },
          React.createElement(EventTable, { events: this.state.events })
        )
      )
    );
  }
});