import { connect } from 'react-redux';

const Cart = React.createClass({
  render() {

    var {onRemoveChartedAction} = this.props
    chartedActions = this.props.chartedActions.map( (chartedAction) => {

      return (
        <li className="list-group-item" key={chartedAction.action + chartedAction.player}>
          {JSON.stringify(chartedAction)}
          <button className="close" onClick={() => onRemoveChartedAction(chartedAction)}>
            <span>&times;</span>
          </button>
        </li>
      )

    })


    return(
      <div>
        Cart:
        <ul className="list-group horizontal-list-group">
          {chartedActions}
        </ul>
        <br />
        Pending: {JSON.stringify(this.props.pendingAction)}
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {

    }
}

function mapDispatchToProps(dispatch) {
  return {
    onRemoveChartedAction: (chartedAction) => {
        dispatch({
          type: 'DELETE',
          chartedAction: chartedAction
        })
    }
  }
}

window.Cart = connect(
  mapStateToProps,
    mapDispatchToProps
)(Cart)
