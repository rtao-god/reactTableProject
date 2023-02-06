import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './components/state'
import { HashRouter } from 'react-router-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

let renderTree = (state) => {
  root.render(
    <HashRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </HashRouter>
  )
}

renderTree(store.getState())

store.subscride(renderTree)
