import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

const Message = ({ role, content }) => {
  return (
    <div className={`grid grid-cols-[25px_1fr] gap-5 p-5 rounded-lg ${role === 'user' ? 'bg-blue-100' : 'bg-green-100'}`}>
        <div className="flex items-center justify-center">
          {role === 'user' ? 
            <IoIosPerson className="text-2xl text-blue-600" /> : 
            <SiGooglegemini className="text-2xl text-green-600" />
          }
        </div>
        <div className="text-gray-800">{content}</div>
    </div>
  )
}

export default Message