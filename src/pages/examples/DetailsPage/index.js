import React, { useState, useEffect } from 'react'
import "./style.css"
import { useParams, useHistory } from "react-router-dom"


export default function DetailsPage() {
    const params = useParams(); // for retrieving id from .../path/:id apis
    const history = useHistory(); // to save page visited, can return back
    const [atBatState, setAtBatState] = useState({
        result: "none",
        RBIS: 0
    })


    const randomNum = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }
    console.log(randomNum(4))

    const handleInputChange = event => {
        const { name, value } = event.target;
        setAtBatState({
            ...atBatState,
            [name]: value
        })
    }




    return (
        <div className="DetailsPage">
            <div className="columns is-multiline">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                <div class="tile is-parent is-4">
                    <article class="tile is-child box">
                        <p class="title">Hello World</p>
                        <p class="subtitle">What is up?</p>
                    </article>
                </div>
                
                </div>
            </div>
        </div>
    )
}
