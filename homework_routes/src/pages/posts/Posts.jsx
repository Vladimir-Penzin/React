import React from 'react';
import icon1 from './icons/icons8-speech-bubble-50.png'
import icon2 from './icons/icons8-refresh-48.png'
import icon3 from './icons/icons8-favorite-50.png'
import icon4 from './icons/icons8-downloading-updates-48.png'
import UsersData from './UsersData';
import './posts.css'

function GetPost ({name, photo, nickname, tweet, image, date}) {
    const details = {
        postname: name,
        postphoto: photo,
        postnickname: nickname,
        posttweet: tweet,
        postimage: image,
        postdate: date
    }
    
    return (
        <div className="post">
        <div className="author">
            <div className="author_photo">
                <img src={details.postphoto} alt={details.postnickname}/>
            </div>
            <div className="author_name">{details.postname}</div>
            <div className="author_nickname">{details.postnickname}</div>
            <div className="date">{details.postdate}</div>
        </div>
        <div className="content">
            <div className="contect_text">{details.posttweet}</div>
            <div className="content_image">
                <img src={details.postimage} alt='content'/>
            </div>
        </div>
        <div className="iteraction">
            <div className="icon">
                <img src={icon1} alt="icon1"/>
                <span>{Math.ceil(Math.random() * 1000)}</span>
            </div>
            <div className="icon">
                <img src={icon2} alt="icon2"/>
                <span>{Math.ceil(Math.random() * 1000)}</span>
            </div>
            <div className="icon">
                <img src={icon3} alt="icon3"/>
                <span>{Math.ceil(Math.random() * 1000)}</span>
            </div>
            <div className="icon">
                <img src={icon4} alt="icon4"/>
            </div>
        </div>
    </div>
    )
}


const Posts = () => {
    return (
        <div className='posts'>
            {
              UsersData.map((value, i) => (
                <GetPost key={i} {...value} />
                ))
            }
        </div>
    );
};

export default Posts;

