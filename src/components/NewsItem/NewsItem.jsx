
import React from 'react'
import { formatDateString } from '../../helpers/formatDate';




const NewsItem = ({ props }) => {
    console.log(props)



    return (
        <div  >
            <img src={props.imgUrl} alt={props.title} style={{ width: "335px", height: "190px", borderRadius: "15px" }} />
            <h3 className='text-lg text-lime-600 mb-4 min-h-14'>{props.title}</h3>
            <p className='text-sm mb-4 min-h-20'>{props.text}</p>
            <p className='mb-4 text-sm'>{formatDateString(props.date)}</p>
            <p className='text-sm'>{props.organizer}</p>


        </div>)
}

export default NewsItem;