import React from 'react'
import "./style.css";
import {Link} from "react-router-dom"

export default function VendorDetail(props) {
    return (
        <div>

            <div className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">

                        {props.vendors.map((vendor) => (
                            <div className="column">
                                <div className="card  has-background-light">
                                    <header className="card-header">
                                        <p className="card-header-title">{vendor.first_name} </p>
                                        <p className="card-header-title">{vendor.last_name} </p>
                                        <Link to={`/user/${vendor.id}`}>   
                                             <span class="icon">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                        </Link>
                                    </header>

                                    <div className="card-content">
                                        <div class="list is-hoverable">
                                            <p className="list-item">{vendor.vendor_name}</p>
                                            <p className="list-item">{vendor.email}</p>
                                            <p className="list-item">{vendor.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className="buttons">
                        <button className="button is-primary">Update</button>
                        <button className="button is-link">Delete</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
