var MagnaCarta = React.createClass({
  displayName: "MagnaCarta",

  render: function () {
    return React.createElement(
      "div",
      { className: "magna-carta" },
      React.createElement(Cart, null),
      React.createElement(EagleVideoPlayer, null)
    );
  }
});