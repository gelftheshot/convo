"use client";
import { useState, useRef, useEffect } from "react";
import { MdOutlineSettingsVoice } from "react-icons/md";
import { IoIosAttach } from "react-icons/io";
import { useCompletion } from 'ai/react';
import { v4 as uuidv4 } from 'uuid';
import Message from "./message";


const Chat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [streamingMessage, setStreamingMessage] = useState(null);
  const textareaRef = useRef(null);
  const chatWindowRef = useRef(null);
  const { completion, complete, isLoading } = useCompletion({
    api: '/api/completion',
  });

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 150);
      textareaRef.current.style.height = newHeight + "px";
      const borderRadius = newHeight > 40 ? "1rem" : "9999px";
      textareaRef.current.style.borderRadius = borderRadius;
    }
  }, [message]);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatMessages, streamingMessage]);


  useEffect(() => {
    if (completion) {
      setStreamingMessage((prev) => 
        prev ? { ...prev, text: completion } : null
      );
    }
  }, [completion]);

  useEffect(() => {
    if (!isLoading && streamingMessage) {
      setChatMessages((prev) => [...prev, streamingMessage]);
      setStreamingMessage(null);
    }
  }, [isLoading, streamingMessage]);
  return (
<div className="flex-1 flex flex-col bg-gray-100">
  <div ref={chatWindowRef} className="flex-1 overflow-y-auto p-4 space-y-6">
    {chatMessages.map(message => (
      <Message key={message._id} role={message.role} content={message.text} />
    ))}
    {streamingMessage && (
      <Message role={streamingMessage.role} content={streamingMessage.text || "Thinking..."} />
    )}
  </div>
      <footer className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="relative">
            <textarea
              ref={textareaRef}
              className="w-full p-3 pr-24 text-gray-700 border border-gray-300 rounded-lg resize-none transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ maxHeight: "150px", minHeight: "50px", overflowY: "auto" }}
              rows="1"
              placeholder="Type your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="absolute right-3 bottom-3 flex items-center space-x-2">
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <IoIosAttach size={20} />
              </button>
              <button type="button" className="text-gray-500 hover:text-gray-700">
                <MdOutlineSettingsVoice size={20} />
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        </form>
      </footer>
    </div>
  );
};

export default Chat;