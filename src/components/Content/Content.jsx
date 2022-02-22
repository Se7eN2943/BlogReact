import React from 'react';
import TicketList from './TicketList/TicketList'
import Nav from './Nav/Nav'

const Content = () => {
    return (
        <section className="content">
            <Nav />
            <TicketList />
        </section>
    )
}

export default Content 