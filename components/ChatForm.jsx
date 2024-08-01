"use client";

import { useState, useRef, useEffect } from "react";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";

const ChatForm = () => {

  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 150); // Max height of 150px
      textareaRef.current.style.height = newHeight + "px";
      
      // Adjust border radius based on height
      const borderRadius = newHeight > 40 ? "1rem" : "9999px";
      textareaRef.current.style.borderRadius = borderRadius;
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted message:", message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <fieldset className="flex items-end">
        <div className="relative flex-grow">
          <textarea
            ref={textareaRef}
            className="w-full p-2 pr-24 text-black resize-none transition-all duration-200 ease-in-out"
            style={{ maxHeight: "150px", overflowY: "auto" }}
            rows="1"
            placeholder="Type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="absolute right-2 bottom-2 flex items-center">
            <button type="button" className="mr-2 text-gray-500 hover:text-gray-700">
              <IoIosAttach size={20} />
            </button>
            <button type="button" className="mr-2 text-gray-500 hover:text-gray-700">
              <MdOutlineSettingsVoice size={20} />
            </button>
            <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Send</button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ChatForm;