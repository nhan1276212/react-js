import React from 'react'
import ReactDOM, {createRoot} from 'react-dom/client'
import './styles/global.scss'
import App from './views/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import reportWebVitals from './reportWebVitals'

const reduxStore = createStore(rootReducer)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={reduxStore}>
          <App />
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
