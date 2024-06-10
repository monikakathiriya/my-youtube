import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import API_KEY from '../Constant/Youtube'

const VideoCard = ({ item }) => {
    const [yticon, setYticon] = useState("");
    const getYoutubeChannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id= ${item.snippet.channelId}&key= ${API_KEY}`)
            console.log(res);
            setYticon(res.data.items[0].snippet.thumbnails.high.url)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getYoutubeChannelName();
    },)
    return (
        <div className='my-2 cursor-pointer w-98'>
            <img className='w-full rounded-xl' src={item.snippet.thumbnails.medium.url} alt='video' />
            <div>
                <div className='flex mt-2'>
                    <Avatar src={yticon} size={'40px'} round={true} />
                    <div className='ml-4'>
                        <h1 className='font-bold'>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default VideoCard
