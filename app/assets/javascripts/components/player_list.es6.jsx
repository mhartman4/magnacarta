import { connect } from 'react-redux';

const PlayerList = React.createClass({
  render: function() {

    const { isEnabled } = this.props;

    return(
      <div>
        <PlayerButton playerInfo={"#23 L. James"} />
        <PlayerButton playerInfo={"#3 I. Thomas"} />
        <PlayerButton playerInfo={"#99 J. Crowder"} />
      </div>
    )
  }
});



function mapStateToProps(state) {
  return {
    isEnabled: state.isEnabled
  };
};

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAction: (actionType) => {
        dispatch({
          type: 'ADD_TO_CART',
          actionType: actionType
        })
    }
  }
}

window.PlayerList = connect(
  mapStateToProps,
    mapDispatchToProps
)(PlayerList);
