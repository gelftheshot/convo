import React from 'react'
import { IoIosPerson } from "react-icons/io";
import { SiGooglegemini } from "react-icons/si";

const Message = ({ role, content }) => {
  return (
    <div className='grid grid-cols-[25px_1fr] gap-5 p-5'>
        <div>
          {role === 'user' ? <IoIosPerson /> : <SiGooglegemini />}
        </div>
        <div>{content}</div>
    </div>
  )
}

export default Message