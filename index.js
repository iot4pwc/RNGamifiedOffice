import { AppRegistry } from 'react-native';
import App from './App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import React from 'react';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';

configureStore = (initialState) => {
  const enhancer = compose(applyMiddleware(
  	thunkMiddleware,
  	logger
  ));
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore({});

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('RNGamifiedOffice', () => Root);
