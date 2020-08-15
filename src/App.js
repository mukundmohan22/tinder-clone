import React from 'react';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import TinderCards from './Component/TinderCards';
import SwipeButtons from './Component/SwipeButtons';
import Chats from './Component/Chats';
import ChatScreen from "./Component/ChatScreen"


function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
