var EagleVideoPlayer = React.createClass({
  propTypes: {
    statsGameCode: React.PropTypes.number,
    period: React.PropTypes.number,
    startGameClock: React.PropTypes.number,
    chanceStartType: React.PropTypes.string,
    shooter: React.PropTypes.string,
    shotType: React.PropTypes.string,
    startScore: React.PropTypes.string
  },


  render: function() {
    return(
      <div className="eagle-video-player" id="eagle-video-player">
        {/*<iframe id="eagle-iframe"
                src={"https://eagle.secondspectrum.com/video/segments?res=high&filters=%7B%22game%22%3A%22"
                  + this.props.statsGameCode
                  + "%22%2C%22period%22%3A%22" + this.props.period
                  + "%22%2C%22gameClock%22%3A%22" + this.props.startGameClock
                  + "%22%7D"}>
        </iframe>*/}
        {/*}<div className="row">
          <div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Panel heading without title
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
          </div>*/}
            <div className="start-end-labels">
              <div>
                Start: {this.props.chanceStartType}
              </div>
              <br />
              <div>
                End: {this.props.shooter} {this.props.shotType}
              </div>
              <br />
              <div className="scoreboard" >
                {Math.floor(this.props.startGameClock / 60)}
                :
                {Math.floor(this.props.startGameClock % 60)}
                &nbsp;{this.props.startScore}
              </div>
            </div>
            <iframe id="eagle-iframe"
                    src={"https://eagle.secondspectrum.com/video/segments?res=high&filters=%7B%22game%22%3A%22"
                      + this.props.statsGameCode
                      + "%22%2C%22period%22%3A%22" + this.props.period
                      + "%22%2C%22gameClock%22%3A%22" + this.props.startGameClock
                      + "%22%7D"}>
            </iframe>
            <div className="start-end-labels">
              <div>
                Start: {this.props.chanceStartType}
              </div>
              <br />
              <div>
                End: {this.props.shooter} {this.props.shotType}
              </div>
              <br />
              <div className="scoreboard" >
                {Math.floor(this.props.startGameClock / 60)}
                :
                {Math.floor(this.props.startGameClock % 60)}
                &nbsp;{this.props.startScore}
              </div>
            </div>

          {/*}<div className="col-xs-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                Panel heading without title
              </div>
              <div className="panel-body">
                Panel content
              </div>
            </div>
          </div>*/}

        {/*</div>*/}

    </div>
    )
  }
});

function checkFocus() {

  iframe = document.getElementsByTagName("iframe")[0];

  if(document.activeElement == iframe) {
    iframe.classList.add("focused");
  } else {
    iframe.classList.remove("focused");
  }
}
window.setInterval(checkFocus, 500);
