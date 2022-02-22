import React from 'react';
import {format} from 'date-fns'


const Route = ({ segments }) => {
    const { date, origin, destination, duration, stops } = segments
    const dateSplit = date.split('T')[0]
    const timeSplit = date.split('T')[1].slice(0, 5)

    return (
        <div className="route">
            <div className="routeName routeBlock">
                <span className="name">
                    {`${origin} - ${destination}`}
                </span>
                <span className="time">
                    {format(new Date(dateSplit), 'dd.MM.yyyy') + ' ' + timeSplit}
                </span>
            </div>

            <div className="travelTime routeBlock">
                <span className="name">
                    В пути
                </span>
                <span className="time">
                    {Math.floor(duration / 60) + 'ч' + ' ' + duration % 60 + 'м'}
                </span>
            </div>
            <div className="transplants routeBlock">
                <span className="name">
                    {`${stops.length} пересадки`}
                </span>
                <span className="time">
                    {stops.join(', ')}
                </span>
            </div>

        </div>


    )
}

export default Route