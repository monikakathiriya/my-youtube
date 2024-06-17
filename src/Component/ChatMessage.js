import React from 'react'
import Avatar from 'react-avatar'

const ChatMessage = ({item}) => {
  return (
    <div className='flex items-center'>
        <div>
      <Avatar src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg' size={'30px'} round={true} />
    </div>
    <div className='flex items-center'>
        <h1 className='ml-2 text-sm font-bold'>{item.name}</h1>
        <p className='py-2 ml-2 text-sm'>{item.massage}</p>
    </div>
    </div>
  )
}

export default ChatMessage
