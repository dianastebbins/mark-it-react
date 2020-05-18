import React from 'react'

export default function MapCard(props) {
    return (
        <div className="mapResultCard">
            <ul>
    <li>{props.id}{props.name}</li>
            <li>{props.schedule}</li>
            <li>{props.products}</li>
            <li>{props.address}</li>
            </ul>
            <br />

        </div>
    )
}
