import * as Redux from 'redux'
import { Provider } from 'react-redux'


window.Charting = React.createClass({
  render() {

    const store = Redux.createStore(window.chanceReducer);
    store.subscribe(
      () =>
        console.log( JSON.stringify(store.getState()) )
      );


    return (
      <Provider store={store}>
          <Chance />
      </Provider>
    )
  }
});
