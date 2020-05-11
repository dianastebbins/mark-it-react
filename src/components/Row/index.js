import React from 'react'
import "./style.css"
import { Link } from "react-router-dom";

export default function Row(props) {
    const hits = props.player.singles + props.player.doubles + props.player.triples + props.player.home_runs;
    const average = hits / props.player.at_bats
    return (
        <tr className="Row">
            <td>
                <Link to={`/player/${props.player.id}`}>
                    {props.player.name}
                </Link>
            </td>
            <td>{props.player.team}</td>
            <td>{props.player.at_bats}</td>
            <td>{hits}</td>
            <td>{average.toFixed(3)}</td>
            <td>{props.player.singles}</td>
            <td>{props.player.doubles}</td>
            <td>{props.player.triples}</td>
            <td>{props.player.home_runs}</td>
            <td>{props.player.runs_batted_in}</td>
        </tr>
    )
}
