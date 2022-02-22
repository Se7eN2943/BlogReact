import React from 'react';
import { connect } from 'react-redux'
import { setSlice } from '../../../actions'
import Ticket from './Ticket/Ticket';
import { Alert } from 'antd';

const TicketList = ({ tickets, filterList, sortFlag, sliced, setSlice }) => {

    let filteredTickets = []

    if (filterList.length === 4) filteredTickets = tickets

    if (filterList.some(filter => filter === 'Без пересадок')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0
            )
        )
    }
    if (filterList.some(filter => filter === '1 пересадка')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1
            )
        )
    }
    if (filterList.some(filter => filter === '2 пересадки')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2
            )
        )
    }
    if (filterList.some(filter => filter === '3 пересадки')) {
        filteredTickets = filteredTickets.concat(
            tickets.filter(
                ticket => ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3
            )
        )
    }

    const sorted = () => {

        switch (sortFlag) {

            case 'fast':
                return filteredTickets.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })

            case 'optimal':
                const discount = filteredTickets.sort((prev, next) => prev.price - next.price)
                return discount.sort((prev, next) => {
                    if (prev.segments[0].duration > next.segments[0].duration && prev.segments[1].duration > next.segments[1].duration) return 1
                    if (prev.segments[0].duration < next.segments[0].duration && prev.segments[1].duration < next.segments[1].duration) return -1
                    return 0;
                })
            // const arifmPrice = Math.floor(tickets.reduce((acc, ticket) => {
            //     acc += ticket.price
            //     return acc
            // }, 0) / tickets.length)

            // const arifmDuration = Math.floor(tickets.reduce((acc, ticket) => {
            //     acc += ticket.segments[0].duration + ticket.segments[1].duration
            //     return acc
            // }, 0) / tickets.length / 2)
            default:
                return filteredTickets.sort((prev, next) => prev.price - next.price)
        }
    };

    const elements = sorted().map((ticket, i) => {
        return <Ticket
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
            key={i}
        />
    })

    const onGetFive = () => {
        setSlice(sliced + 5)
    }


    return (
        < React.Fragment >
            {elements.length === 0
                ? <Alert
                    message="Ничего не найдено"
                    description="Попробуйте изменить фильтры или обновите страницу"
                    type="info"
                    showIcon
                />
                :
                < React.Fragment >
                    <div className="tickets">
                        {elements.slice(0, sliced)}
                    </div>
                    <button onClick={onGetFive} className="allTicketsBtn active">
                        Показать еще 5 билетов!
                    </button>
                </React.Fragment >
            }
        </React.Fragment >
    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        filterList: state.filterList,
        sortFlag: state.sortFlag,
        sliced: state.sliced,
    }
}

export default connect(mapStateToProps, { setSlice })(TicketList)


// <Alert
//   message="Informational Notes"
//   description="Additional description and information about copywriting."
//   type="info"
//   showIcon
// />

