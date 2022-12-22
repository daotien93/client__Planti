import React from 'react';
import homeImage from '../../assets/img/home.png';

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container container grid'>
            <img src={homeImage} alt='home__img' />

            <div className='home__data'>
                <h1 className='home__title'>
                    Plants will make <br/> your life better
                </h1>
                <p className='home__description'>
                    Create incredible plant design for your offices or apastaments. 
                    Add fresness to your new ideas.
                </p>
                <a href='#about' className='button button--flex'>
                Explore <i class='ri-arrow-right-down-line button__icon'></i>
                </a>
            </div>

            <div className='home__social'>
                <span className='home__social-follow'>Follow Us</span>
                <div class='home__social-links'>
                    <a href='https://www.facebook.com/' class='home__social-link'>
                        <i class='ri-facebook-fill'></i>
                    </a>
                    <a href='https://www.instagram.com/' class='home__social-link'>
                        <i class='ri-instagram-line'></i>
                    </a>
                    <a href='https://twitter.com/' class='home__social-link'>
                        <i class='ri-twitter-fill'></i>
                     </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home