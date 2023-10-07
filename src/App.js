import React, { useState } from 'react';

import "./App.css";
import "./normal.css";
import Header from "./components/Header";
import ChatLog from "./components/ChatLog";
import ChatInputBox from "./components/ChatInputBox";
import ChatlogProvider from "./store/ChatlogProvider";
import { LanguageContext } from "./contexts/LanguageContext";
// import SasyaSasthra from "./components/SasyaSasthra";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // Language States
  const [languages, setLanguages] = useState([
    { code: 'en', label: 'English' },
    { code: 'sa', label: 'Sanskrit' },
    { code: 'ml', label: 'Malayalam' },
    { code: 'ta', label: 'Tamil' },
    { code: 'mr', label: 'Marathi' },
    { code: 'bn', label: 'Bengali' },
    { code: 'or', label: 'Oriya' },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);
  // Language States
  return (
    <LanguageContext.Provider value={{languages,setLanguages,selectedLanguage,setSelectedLanguage,showDropdown,setShowDropdown}}>
    <ChatlogProvider>
      <div className="App">
        <Header />
        <div className="Main">
          <aside className="sidemenu">
            <div className="brand-name">
              <p>AyurGPT</p>
            </div>
            <div className="side-button-menu">New chat</div>
          </aside>
          <section className="chatbox">
            <ChatLog />
            <ChatInputBox />
          </section>
        </div>
      </div>
    </ChatlogProvider>
    </LanguageContext.Provider>
  );
}

export default App;
