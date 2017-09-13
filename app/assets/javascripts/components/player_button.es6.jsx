import { connect } from 'react-redux';

const PlayerButton = React.createClass({
  render: function() {

    return(
        <button type="button"
                className={"btn btn-warning"}
                onClick={ () => this.props.onButtonClickAction(this.props.playerInfo)  }>
      {this.props.playerInfo}
        </button>
    )
  }
});



function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAction: (playerInfo) => {
        dispatch({
          type: 'SELECT_PENDING_PLAYER',
          playerInfo: playerInfo
        })
    }
  }
}

window.PlayerButton = connect(
  mapStateToProps,
    mapDispatchToProps
)(PlayerButton);
