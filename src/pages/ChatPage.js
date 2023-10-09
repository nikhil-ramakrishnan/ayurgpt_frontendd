import ChatLog from "../components_ayurgpt/ChatLog";
import ChatInputBox from "../components_ayurgpt/ChatInputBox";

const chatPage = () => {
  return (
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
  );
};
export default chatPage;
