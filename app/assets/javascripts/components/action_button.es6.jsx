import { connect } from 'react-redux';

const ActionButton = React.createClass({
  render: function() {

    const { onButtonClickAction } = this.props;

    return(
        <button type="button"
                className={"btn btn-danger"}
                onClick={ () => this.props.onButtonClickAction(this.props.actionType)  }>
          {this.props.actionType}
        </button>
    )
  }
});



function mapStateToProps(state) {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAction: (actionType) => {
        dispatch({
          type: 'SELECT_PENDING_ACTION',
          actionType: actionType
        })
    }
  }
}

window.ActionButton = connect(
  mapStateToProps,
    mapDispatchToProps
)(ActionButton);
