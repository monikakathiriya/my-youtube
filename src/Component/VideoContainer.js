import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { YOUTUBE_VIDEO_API } from '../Constant/Youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fatchYoutubeVideo = async () => {
      try {
        const res = await axios.get(`${YOUTUBE_VIDEO_API}`)
        console.log(res?.data?.items)
        setVideo(res?.data?.items)
      } catch (error) {
        console.log(error)
      }
    }
    fatchYoutubeVideo();
  }, [])
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        video && video.length > 0 && video.map((item) => {
          console.log(item.id)
          return (
            <Link to={`/VideoWatch?V=${item.id}`} key={item.id}>
              <VideoCard item={item} />
            </Link>

          )
        })
      }
    </div>
  )
}

export default VideoContainer
