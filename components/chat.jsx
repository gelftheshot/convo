import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import ChatForm from "./ChatForm";

const Chat = () => {
  return (
    <div className=" text-white flex flex-col ">
        <div className="bg-slate-500 flex-1">
            first section
        </div>
        <footer className="bg-red-500 p-12">
            <ChatForm />
        </footer>
    </div>
  )
}

export default Chat