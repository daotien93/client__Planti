import React from 'react';
import './step.scss';

const Step = () => {
  return (
    <div className='steps section container'>
        <div className='steps__bg'>
            <h2 class='section__title-center steps__title'>
                Steps to start your <br/> plants off right
            </h2>

            <div className='steps__container grid'>
                <div class='steps__card'>
                    <div class='steps__card-number'>01</div>
                    <h3 class='steps__card-title'>Choose Plant</h3>
                    <p class='steps__card-description'>
                        We have several varieties plants you can choose from.
                    </p>
                </div>

                <div class='steps__card'>
                    <div class='steps__card-number'>02</div>
                    <h3 class='steps__card-title'>Place an order</h3>
                    <p class='steps__card-description'>
                        Once your order is set, we move to the next step which is the shipping.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Step