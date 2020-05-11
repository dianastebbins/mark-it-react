import React from 'react'
import "./style.css"
import Row from '../Row';

export default function StatsTable(props) {
    return (
        <div className="StatsTable">
            <table>
                <thead>
                    <tr>
                        <th onClick={()=>props.sorting("name")}>Name</th>
                        <th onClick={()=>props.sorting("team")}>Team</th>
                        <th onClick={()=>props.sorting("at_bats")}>At Bats</th>
                        <th onClick={()=>props.sorting("hits")}>Hits</th>
                        <th onClick={()=>props.sorting("avg")}>Avg</th>
                        <th onClick={()=>props.sorting("singles")}>Singles</th>
                        <th onClick={()=>props.sorting("doubles")}>Doubles</th>
                        <th onClick={()=>props.sorting("triples")}>Triples</th>
                        <th onClick={()=>props.sorting("home_runs")}>Home Runs</th>
                        <th onClick={()=>props.sorting("runs_batted_in")}>RBI</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map(player=><Row key={player.id} player={player}/>)}
                    
                </tbody>
            </table>
        </div>
    )
}
