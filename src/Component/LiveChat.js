import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { setMassage } from '../Utils/ChatSlice';
import { generateRandomMassage, generateRandomName } from '../Utils/helper';

const LiveChat = () => {

  const massage = useSelector((store) => store.chat.massage);

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setMassage({ name:generateRandomName(), massage:generateRandomMassage(16) }))
    }, 1000)

    return(()=>{
      clearInterval(timer)
    })
  }, [])
  return (
    <div className='px-4 py-2'>
      <div>
        {
          massage.map((item, idx) => {
            return (
              <ChatMessage key={idx} item={item} />
            )
          })
        }

      </div>
    </div>
  )
}

export default LiveChat
