import { connect } from 'react-redux';

const ButtonList = React.createClass({
  render: function() {

    buttons = this.props.available.map( (item) => { return <Button key={item} buttonType={this.props.buttonType} buttonValue={item} /> });
    return(

      <div>
        {buttons}
      </div>
    )
  }
});



function mapStateToProps(state) {
  return {

  };
};

window.ButtonList = connect(
  mapStateToProps
)(ButtonList);
