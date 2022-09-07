import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

// ReactDOM.render(
//   <Context.Provider value={{
//     user: new UserStore(),
//     device: new DeviceStore()
//   }}>
//     <App />
//   </Context.Provider>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore()
  }}>
    <App />
  </Context.Provider>
);