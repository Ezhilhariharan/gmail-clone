import React from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar.js';
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import SendMail from './SendMail.js';
import Login from './Login.js';
import {selectsendMsgIsOpen} from './features/mailSlice.js';

import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const sendMsgIsOpen = useSelector(selectsendMsgIsOpen);
  

  return (
    <Router>
      
      <div className="app">
        <Header/>

      <div className="app-body">
      <SideBar/>

        <Switch>
         <Route path="/Mail"> <Mail/> </Route>
          <Route path="/"> <EmailList/> </Route>
        </Switch>

      </div>
      {sendMsgIsOpen && <SendMail/>}
   
        </div>
                  </Router>
  );
}

export default App;
