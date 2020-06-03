import React from 'react'

export default function MapCard(props) {
  

    return (
        <div className="mapResultCard container">
            <ul>
                <li>{props.name}</li>
                <li>{props.distance} Miles from your search!</li>
                <li>{props.schedule}</li>
                <li>{props.products}</li>
                <li>{props.address}</li>
                <li><button className="button is-small is-info" type="submit" onClick={() => props.handleMarketSaveClick({ id: props.USDA_id, market_name: props.name.substr(0) })}>Mark-It!</button></li>

            </ul>
            <br />

        </div>
    )
}
