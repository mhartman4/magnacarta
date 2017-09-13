import { connect } from 'react-redux';

class Chance extends React.Component {
  render() {
    const { chartedActions, pendingAction, chanceId, availableActions, availablePlayers } = this.props;
    return(
      <div className="magna-carta">
        <h1>Chance: {this.props.chanceId}</h1>
        <Cart chartedActions={chartedActions} pendingAction={pendingAction} />
        <ButtonList buttonType="action" available={availableActions} />
        <ButtonList buttonType="player" available={availablePlayers} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      chartedActions: state.chartedActions,
      pendingAction: state.pendingAction,
      chanceId: state.chanceId,
      availableActions: state.availableActions,
      availablePlayers: state.availablePlayers
    }
}


window.Chance = connect(
  mapStateToProps
)(Chance)


// Reducer
initialState = {
  chartedActions: [
    {action: "Stunt", player: "#23 L. James"}
  ],
  pendingAction: {action: null, player: null},
  chanceId: 3,
  availableActions: ["Stunt", "Deflection", "Missed Box Out"],
  availablePlayers: ["#23 L. James", "#3 I. Thomas", "#0 K. Love"]
}


window.chanceReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SELECT":
        if (action.buttonType == "action") {
          if (state.pendingAction.player)
          {
            diff = {pendingAction: initialState.pendingAction,
                    chartedActions:
                      state.chartedActions.concat({action: action.buttonValue, player: state.pendingAction.player})
                    }
            return $.extend(true, {}, state, diff)
          }
          else {
            return $.extend(true, {}, state, {pendingAction: {action: action.buttonValue}})
          }

        }
        else if (action.buttonType == "player") {
          if (state.pendingAction.action)
          {
            diff = {pendingAction: initialState.pendingAction,
                    chartedActions:
                      state.chartedActions.concat({action: state.pendingAction.action, player: action.buttonValue})
                    }
            return $.extend(true, {}, state, diff)
          }
          else {
            return $.extend(true, {}, state, {pendingAction: {player: action.buttonValue}})
          }
        }
      default:
        return state
    }
}
