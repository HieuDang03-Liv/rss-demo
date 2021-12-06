import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../styles/RoutePage.css'

const RoutePage = () => {
    //useParams to get route string
    const { type } = useParams()

    //all news after being fetch, is stored in newsState array
    const [news, setNews] = useState([])

    //ONLY fetch data when the component first mounted
    useEffect(() => {
        axios.get(`http://localhost:8000/rss/${type}`).then((res) => {
            setNews(res.data)
        })
    }, [])

    return (
        <React.Fragment>
            <div className='route-page'>
                {news.map((item) => (
                    <div className='article'>
                        <div className='title'>{item.title}</div>
                        <div className='quick-content'>{item.quickContent}</div>
                        <a href={item.link} target='_blank'>
                            (Chi tiết)
                        </a>
                        <div className='pub-time'>{item.pubTime}</div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default RoutePage
