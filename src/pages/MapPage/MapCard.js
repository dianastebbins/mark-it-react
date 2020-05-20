import React from 'react'

export default function MapCard(props) {
  

    return (
        <div className="mapResultCard">
            <ul >

                <li>{props.name}</li>

                <li>{props.distance} Miles from your search!</li>
                <li>{props.schedule}</li>
                <li>{props.products}</li>
                <li>{props.address}</li>

                <li><button type="submit" onClick={() => props.handleMarketSaveClick({ id: props.USDA_id, market_name: props.name.substr(0) })}>Save to Favs!</button></li>

            </ul>
            <br />

        </div>
    )
}
