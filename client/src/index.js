import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import Admin from './components/admin'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import reducer from './reducer'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware( sagaMiddleware )
)

sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App} />
      <Route path='/admin' component={Admin} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
