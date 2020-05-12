import React from 'react'
import "./style.css";


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
                                        <p className="card-header-title">{vendor}</p>
                                        <a href="#" class="card-header-icon" aria-label="favorite">
                                            <span class="icon">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </header>

                                    <div className="card-content">
                                        <div class="list is-hoverable">
                                            <p className="list-item">Business Name</p>
                                            <p className="list-item">Email</p>
                                            <p className="list-item">Phone</p>
                                            <p className="list-item">Website</p>
                                            <p className="list-item">Chat</p>
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
