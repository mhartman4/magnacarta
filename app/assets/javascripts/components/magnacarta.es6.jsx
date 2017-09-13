import { connect } from 'react-redux';

class MagnaCarta extends React.Component {
  render() {
    const { items } = this.props;
    return(
      <div className="magna-carta">
        <Cart items={items} />
        <div className="container">
          <ActionButton actionType="Stunt"  />
          <ActionButton actionType="Deflection"  />
          <ActionButton actionType="Missed Box Out" />
        </div>
        <PlayerList />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      items: state.items,
      pending: state.pending
    }

}

window.MagnaCarta = connect(
  mapStateToProps
)(MagnaCarta)


// Reducer
window.magnaCartaReducer = (state = {action: null, player: null}, action) => {
  switch (action.type) {

    case "SELECT_PENDING_ACTION":
      return Object.assign({},state,{action: action.actionType})
    case "SELECT_PENDING_PLAYER":
      return Object.assign({},state,{player: action.playerInfo})
    default:
      return state
  }
}
