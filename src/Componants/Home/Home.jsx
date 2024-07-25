import React from 'react';
import './Home.css';

const Home = ({ value1, value2, value3, value4 }) => {
    return (
        <>
            <div className='home'>
                <div className='home1'>
                    <img src={value1} alt="" />
                </div>
                <div className='home2'>
                    <div className='home21'>
                        <h2>{value2}</h2>
                    </div>
                    <div className='home22'>
                        <span>IMDB</span>
                        <p className='home221'>8.2</p>
                        <ul>
                            <li>{value4}</li>
                        </ul>
                        <p className='home222'>|</p>
                        <p className='home223'>{value3}</p>
                        <p className='home224'>|</p>
                        <p className='home225'>Sci</p>
                    </div>
                    <div className='home3'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui unde reprehenderit assumenda atque ex voluptas rerum optio magnam quasi repellendus explicabo ut beatae in incidunt repellat, nobis, eveniet neque?</p>
                    </div>
                    <div className='home4'>
                        <button className='btn1'>Watch Trailer</button>
                        <button className='btn2'><img src="https://icons.veryicon.com/png/o/miscellaneous/common-icons-of-software-interface/triangle-play.png" alt="" />Watch Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
