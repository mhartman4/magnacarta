var EagleVideoPlayer = React.createClass({
  displayName: "EagleVideoPlayer",

  render: function () {
    return React.createElement(
      "div",
      { className: "eagle-video-player" },
      React.createElement("iframe", { id: "eagle-iframe", src: "https://eagle.secondspectrum.com/video/segments?res=high&filters=%7B%22game%22%3A%222017042729%22%2C%22period%22%3A%221%22%2C%22gameClock%22%3A%22715%22%7D" })
    );
  }
});