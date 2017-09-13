window.Cart = React.createClass({
  render() {
    return(
      <div>
        Cart: {JSON.stringify(this.props.chartedActions)}
        <br />
        Pending: {JSON.stringify(this.props.pendingAction)}
      </div>
    )
  }
})
