import * as Redux from 'redux'
import { Provider } from 'react-redux'

const indexReducer = (state = {}, action) => {
  //debugger;
  return {
    pending: window.magnaCartaReducer(state.pending, action),
    items: window.cartReducer(state.items, action)

  }
}


window.Index = React.createClass({
  render() {

    const store = Redux.createStore(indexReducer);
    store.subscribe(
      () =>
        console.log( store.getState() )
      );


    return (
      <Provider store={store}>
          <MagnaCarta />
      </Provider>
    )

  }
});
