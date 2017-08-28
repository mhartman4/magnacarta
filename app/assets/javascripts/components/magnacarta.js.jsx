var MagnaCarta = React.createClass({
  propTypes: {
    chanceId: React.PropTypes.string
  },
  getInitialState: function() {
    return { chance: {} };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
    $.ajax({
      url: "/api/chances/" + this.props.chanceId,
      success: function(data) {
        console.log(data);
        self.setState({ chance: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  },
  render: function() {
    return(
      <div className="magna-carta">
          <Cart />
          {/*<div>{JSON.stringify(this.state.chance)}</div>*/}
          <EagleVideoPlayer statsGameCode={this.state.chance.statsGameCode} period={this.state.chance.period} startGameClock={this.state.chance.startGameClock}
          chanceStartType={this.state.chance.chanceStartType}
          shooter={this.state.chance.shooter}
          shotType={this.state.chance.shotType}
          startScore={this.state.chance.startScoreHome + "-" + this.state.chance.startScoreAway}/>
      </div>

    )
  }
});
