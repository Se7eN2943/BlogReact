import React, { useState } from 'react';
import logo from './S7Logo.png';
import Route from './Route/Route';

const Ticket = ({ price, segments }) => {
    const [animate, setAnimate] = useState()

    return (
        <div onClick={async () => {
            await setAnimate('animate__pulse')
            setTimeout(() => setAnimate(' '), 600)
        }}
            className={`ticket block-shadow animate__animated ${animate}`}>
            <div className="priceAndCompany">
                <div className="price">
                    {price + 'Р'}
                </div>
                <div className="company">
                    <img src={logo} alt="CompanyLogo" />
                </div>
            </div>
            <Route segments={segments[0]} />
            <Route segments={segments[1]} />
        </div>
    )
}

export default Ticket

