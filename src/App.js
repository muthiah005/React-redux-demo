import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UserContainer from './components/UserContainer';

function App () {
  return (
    <Provider store={store} >
      <div className="App">
        <UserContainer></UserContainer>
        <IceCreamContainer></IceCreamContainer>
        <CakeContainer></CakeContainer>
      </div>
    </Provider>

  );
}

export default App;
