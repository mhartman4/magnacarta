import { connect } from 'react-redux';

const Button = React.createClass({
  render: function() {

    const css_class = this.props.buttonType == "action" ? "danger" : "warning"
    return(
        <button className={"btn btn-" + css_class}
                onClick={ () => this.props.onButtonClickAction(this.props.buttonType, this.props.buttonValue)  }>

                {this.props.buttonValue}
        </button>
    )
  }
})



function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    onButtonClickAction: (buttonType, buttonValue) => {
        dispatch({
          type: 'SELECT',
          buttonType: buttonType,
          buttonValue: buttonValue
        })
    }
  }
}



window.Button = connect(
  mapStateToProps,
    mapDispatchToProps
)(Button);
