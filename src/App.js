import "./App.css";
import "./normal.css";
import Header from "./components/Header";
import ChatLog from "./components/ChatLog";
import ChatInputBox from "./components/ChatInputBox";
import ChatlogProvider from "./store/ChatlogProvider";
// import SasyaSasthra from "./components/SasyaSasthra";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
