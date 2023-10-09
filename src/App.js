import React, { useState } from "react";

import "./App.css";
import "./normal.css";
import Header from "./Header";
import ChatLog from "./components_ayurgpt/ChatLog";
import ChatInputBox from "./components_ayurgpt/ChatInputBox";
import ChatlogProvider from "./store/ChatlogProvider";
import { LanguageContext } from "./contexts/LanguageContext";
import ChatPage from "./pages/ChatPage";
// import SasyaSasthra from "./components/SasyaSasthra";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideMenu from "./SideMenu";
import AyurHub from "./pages/AyurHub";

function App() {
  // Language States
  const [languages, setLanguages] = useState([
    { code: "en", label: "English" },
    { code: "sa", label: "Sanskrit" },
    { code: "ml", label: "Malayalam" },
    { code: "ta", label: "Tamil" },
    { code: "mr", label: "Marathi" },
    { code: "bn", label: "Bengali" },
    { code: "or", label: "Oriya" },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showDropdown, setShowDropdown] = useState(false);
  // Language States
  return (
    <LanguageContext.Provider
      value={{
        languages,
        setLanguages,
        selectedLanguage,
        setSelectedLanguage,
        showDropdown,
        setShowDropdown,
      }}
    >
      <ChatlogProvider>
        <div className="App">
          <BrowserRouter>
            <div className="fixed-items">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<ChatPage />} />
              <Route path="/ayurhub" element={<AyurHub />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ChatlogProvider>
    </LanguageContext.Provider>
  );
}

export default App;
