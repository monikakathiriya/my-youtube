import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API_KEY from '../Constant/Youtube';
import Avatar from 'react-avatar';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { FiDownload } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import { useDispatch } from 'react-redux';
import { setMassage } from '../Utils/ChatSlice';

const VideoWatch = () => {
  const [input, setInput] = useState("");
  const [singlevideo, setSingleVideo] = useState(null);
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('V');
  const dispatch = useDispatch();

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const sendMassage = () => {
    dispatch(setMassage({name:'patel',massage: input}));
    setInput("");
  }
  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className='flex justify-between ml-4 w-[100%] mt-5'>
      <div className='flex w-[88%]'>
        <div>
          <iframe width="750" height="420"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1 `}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
          </iframe>
          <h1 className='mt-2 text-lg font-bold'>{singlevideo?.snippet?.title}</h1>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-between w-[38%]'>
              <div className='flex items-center'>
                <Avatar src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg' size={'40px'} round={true} />
                <h1 className='font-bold'>{singlevideo?.snippet?.channelTitle}</h1>
              </div>
              <button className='px-4 py-1 font-medium text-white bg-black rounded-full'>Subscribe</button>
            </div>
            <div className='flex items-center w-[45%] justify-between mt-2 '>
              <div className='flex items-center px-5 py-2 bg-gray-200 rounded-full cursor-pointer'>
                <AiOutlineLike size='22px' className='mr-5' />
                < AiOutlineDislike size='22px' />
              </div>
              <div className='flex items-center px-5 py-2 bg-gray-200 rounded-full cursor-pointer'>
                <PiShareFat size='22px' className='mr-2' /><span>Share</span>
              </div>
              <div className='flex items-center px-5 py-2 bg-gray-200 rounded-full cursor-pointer'>
                <FiDownload size='20px' className='mr-2' /><span>Download</span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[100%] border border-gray-300 rounded-lg h-fit ml-8 p-4'>
          <div className='flex items-center justify-between'>
            <h1 className=''>Top Chat</h1>
            <BsThreeDotsVertical className='' />
          </div>
          <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
            <LiveChat />
          </div>
          <div className='flex items-center justify-between p-2 border-t'>
            <div className='flex items-center w-[90%]'>
              <div>
                <Avatar src='https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?cs=srgb&dl=pexels-bertellifotografia-3792581.jpg&fm=jpg' size={'40px'} round={true} />
              </div>
              <input value={input} onChange={(e) => setInput(e.target.value)} className='ml-2 border-b border-gray-300 outline-none' type='text' placeholder='Send Message...' />
              <div className='p-2 bg-gray-200 rounded-full cursor-pointer '>
                <LuSendHorizonal onClick={sendMassage} size='20px' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default VideoWatch
