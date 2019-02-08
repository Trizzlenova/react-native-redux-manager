import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBNjHel0E5LicaDKi-_WsxGOanUm3TEmmw',
      authDomain: 'manager-9f0fd.firebaseapp.com',
      databaseURL: 'https://manager-9f0fd.firebaseio.com',
      projectId: 'manager-9f0fd',
      storageBucket: 'manager-9f0fd.appspot.com',
      messagingSenderId: '231460749246'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
