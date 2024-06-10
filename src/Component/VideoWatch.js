import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import API_KEY from '../Constant/Youtube';

const VideoWatch = () => {
  const [singlevideo, setSingleVideo] = useState("");
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('V');

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      const resData = await res.json()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getSingleVideo();
  })

  return (
    <div className='ml-4'>
      <div>
        <iframe width="750" height="420"
          src={`https://www.youtube.com/embed/${videoId}?si=NXBvsBqN_Yr_fbb5" `}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
        <h1 className='mt-2 text-lg font-bold'>Title</h1>
      </div>
      <div></div>

    </div>
  )
}

export default VideoWatch
