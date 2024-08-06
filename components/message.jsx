import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

const Message = ({ role, content }) => {
  return (
    <div className={`flex flex-col ${role === 'user' ? 'items-end' : 'items-start'}`}>
      <div className={`flex items-center ${role === 'user' ? 'flex-row-reverse' : 'flex-row'} mb-2`}>
        {role === 'user' ? 
          <IoIosPerson className="text-2xl text-blue-600 ml-2" /> : 
          <SiGooglegemini className="text-2xl text-green-600 mr-2" />
        }
        <span className="text-sm text-gray-500">{role === 'user' ? 'You' : 'AI Assistant'}</span>
      </div>
      <div className={`max-w-3/4 p-3 rounded-lg ${role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
        <div className="text-gray-800">{content}</div>
      </div>
    </div>
  )
}

export default Message