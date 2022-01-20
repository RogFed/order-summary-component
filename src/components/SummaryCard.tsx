import React from 'react'

import '../styles/summary_card.scss'

//@ts-ignore
import heroIllustration from '../images/illustration-hero.svg';
//@ts-ignore
import musicIcon from '../images/icon-music.svg';

const SummaryCard = () => {
    return (
        <section className='SummaryCard'>
            <header className='SummaryCard__header' style={{backgroundImage: `url(${heroIllustration})`}} />
            <div className='SummaryCard__content'>
                <h1 className='SummaryCard__title'>Order Summary</h1>
                <p className="SummaryCard__text">
                    You can now listen to millions of songs, audiobooks, and podcast on any device anywhere you like!
                </p>
                <div className="SummaryCard__plan">
                    <div className="SummaryCard__plan__info">
                        <div className="SummaryCard__plan__icon" style={{backgroundImage: `url(${musicIcon})`}} />
                        <div className="SummaryCard__plan__cost">
                            <p className="SummaryCard__plan__cost__name">Annual Plan</p>
                            <p className="SummaryCard__plan__cost__value">$59.99/year</p>
                        </div>
                    </div>
                    <a className="SummaryCard__plan__change" href='#'>Change</a>
                </div>
                <div className="SummaryCard__plan__actions">
                    <button className="SummaryCard__plan__button SummaryCard__plan__button--proceed">Proceed to Payment</button>
                    <button className="SummaryCard__plan__button SummaryCard__plan__button--cancel">Cancel Order</button>
                </div>
            </div>
        </section>
    )
}

export default SummaryCard

