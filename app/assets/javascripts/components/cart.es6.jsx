window.Cart = React.createClass({
  render() {
    return(
      <div>
        {this.props.items}
      </div>
    )
  }
});

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

window.cartReducer = (state = [], action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      return state.concat(action.actionType);

    default:
      return state;
  }
}
