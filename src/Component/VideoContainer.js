import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY, { YOUTUBE_VIDEO_API } from '../Constant/Youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHomeVideo } from '../Utils/appSlice';


const VideoContainer = () => {
  // const [video, setVideo] = useState(null);
  const { video, category } = useSelector((store) => store.app.video)
  const dispatch = useDispatch();

  useEffect(() => {
    const fatchYoutubeVideo = async () => {
      try {
        const res = await axios.get(`${YOUTUBE_VIDEO_API}`)
        // setVideo(res?.data?.items)
        dispatch(setHomeVideo(res?.data?.items))
      } catch (error) {
        console.log(error);
      }
    }
    const fatchVideoByCategory = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
        dispatch(setHomeVideo(res?.data?.items))
      } catch (error) {
        console.log(error)
      }
    }
    if (category == "All") {
      fatchVideoByCategory();
    } else {
      fatchYoutubeVideo();
    }


  }, [category])
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        video && video.length > 0 && video.map((item) => {
          return (
            <Link to={`/VideoWatch?V=${typeof item.id === "'object" ? item.id.videoId : item.id}`} key={typeof item.id === "'object" ? item.id.videoId : item.id}>
              <VideoCard item={item} />
            </Link>

          )
        })
      }
    </div>
  )
}

export default VideoContainer
