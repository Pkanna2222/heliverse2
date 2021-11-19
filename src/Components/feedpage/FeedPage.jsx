import React, { useEffect, useState } from 'react'
import './feedpage.css'
import axios from 'axios'
import {ShareOutlined, ThumbUpOutlined, VisibilityOutlined} from '@mui/icons-material';

const FeedPage = () => {

    const [videos, setVideos] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const listOfPaginationURLs = ['http://www.mocky.io/v2/59b3f0b0100000e30b236b7e', 
                                  "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236",
                                  "http://www.mocky.io/v2/59ac293b100000d60bf9c239"]


    const fetchData = async (url) => {
        const response = await axios.get(url)
        .catch((err) => {
            setIsPending(false)
            setError(err.message)
        })
        setVideos(response.data.posts)
        setIsPending(false)
        setError(null)
    }
    
    useEffect(() => {
        fetchData(listOfPaginationURLs[0])
    }, [])

    const sorting = (ele) => {
        if (ele === "event_date"){
            const sorted = [...videos].sort((a,b) =>
            a.event_data > b.event_data ? 1 : -1
        )
            setVideos(sorted)
        }else if (ele === "views"){
            const sorted = [...videos].sort((a,b) =>
                a.views > b.views ? 1 : -1
            )
            setVideos(sorted)
            console.log(sorted)
        }else if (ele === "likes"){
            const sorted = [...videos].sort((a,b) =>
                a.likes > b.likes ? 1 : -1
            )
            setVideos(sorted)   
        }else if(ele === "shares"){
            const sorted = [...videos].sort((a,b) =>
                a.shares > b.shares ? 1 : -1
            )
            setVideos(sorted)   
        }
    }

    return (
        <div>
            <div className="sortVideos">
                <span className="sortTitle">Sort By</span>
                <select name="sortOptions" className="sortOptions" onChange={e => sorting(e.target.value)}>
                    <option value='event_date'>event_date</option>
                    <option value='views'>views</option>
                    <option value='likes'>likes</option>
                    <option value='shares'>shares</option>
                </select>
            </div>
            <div className='feedpage'>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {
                    videos.map((video) => (
                        <div className="feedVideos" key={video.event_date}>
                            <img src={video.thumbnail_image} alt="" className="videoThumbnail" />
                            <h2 className="videoName">{video.event_name}</h2>
                            <div className="videoDetails">
                                <span className="videoDate"> Date: {video.event_date}</span>
                                <div className="videoMoreInfo">
                                    <span className="videoViews"> <VisibilityOutlined className='icon' /> {video.views}</span>
                                    <span className="videoLikes"> <ThumbUpOutlined className='icon' /> {video.likes}</span>
                                    <span className="videoShares"> <ShareOutlined className='icon' /> {video.shares}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="pageBtns">{
                listOfPaginationURLs.map((paginationURL, index) => (
                    <button className="btn1" onClick={() => fetchData(paginationURL)}>{index + 1}</button>
                ))
             }
            </div>
        </div>
    )
}

export default FeedPage
