import React from 'react';
import './contentPage.css';
import two from './images/2.png';
import code from './images/code.png';
import bg from './images/bg.png';
import bg2 from './images/bg2.png';
import rock1 from './images/rock1.png';
import rock2 from './images/rock2.png';
import rock3 from './images/rock3.png';

function ContentOfWeb() {
    return (
        <div className="content">
            
            {/* Body Of The Website */}
            <div className="banner">
                <div className="product">
                    <div className="soda" style={{ '--url': `url(${bg})` }}></div>
                    <div className="soda" style={{ '--url':  `url(${bg2})` }}></div>
                </div>
                <div className="rock">
                    <img src={rock1} alt="Rock 1"/>
                    <img src={rock2} alt="Rock 2"/>
                    <img src={rock3} alt="Rock 3"/>
                </div>
            </div>

        </div>
    );
}

export default ContentOfWeb;


