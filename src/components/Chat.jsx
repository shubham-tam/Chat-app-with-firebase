import Camera from "../assets/icons/cam.png";
import Add from "../assets/icons/add.png";
import More from "../assets/icons/more.png";

import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-info">
        <span>Jane</span>
        <div className="chat-icons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
