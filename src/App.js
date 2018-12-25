import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css'
import Weather from './containers/Weather'
import Images from './containers/Images'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <header>
          <ul>
            <li><Link to="/images">Images</Link></li>
            <li><Link to="/weather">Weather</Link></li>
          </ul>
        </header>
        <Route path="/images" component={Images} />
        <Route path="/weather" component={Weather} />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App