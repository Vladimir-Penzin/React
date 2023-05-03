import user from './components/user.js';
import content from './components/content.js';
import './App.css';
import icon1 from './icons/icons8-speech-bubble-50.png';
import icon2 from './icons/icons8-refresh-48.png';
import icon3 from './icons/icons8-favorite-50.png';
import icon4 from './icons/icons8-downloading-updates-48.png';

function post() {
  
  return (
    <div className="post">
        <div className="author">
            <div className="author_photo">
                <img src={user.photo} alt={user.nickname}/>
            </div>
            <div className="author_name">{user.name}</div>
            <div className="author_nickname">{user.nickname}</div>
            <div className="date">{content.date}</div>
        </div>
        <div className="content">
            <div className="contect_text">{content.tweet}</div>
            <div className="content_image">
                <img src={content.image} alt="Ray"/>
            </div>
        </div>
        <div className="iteraction">
            <div className="icon">
                <img src={icon1} alt="icon1"/>
                <span>482</span>
            </div>
            <div className="icon">
                <img src={icon2} alt="icon2"/>
                <span>146</span>
            </div>
            <div className="icon">
                <img src={icon3} alt="icon3"/>
                <span>887</span>
            </div>
            <div className="icon">
                <img src={icon4} alt="icon4"/>
            </div>
        </div>
    </div>
    
  );
}

export default post;
