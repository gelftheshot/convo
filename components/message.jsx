import React from 'react'

const Message = ({ role, content }) => {
  return (
    <div className='grid grid-cols-[25px_1fr] gap-5 p-5'>
        <div>{role}"-"</div>
        <div>{content}</div>
    </div>
  )
}

export default Message