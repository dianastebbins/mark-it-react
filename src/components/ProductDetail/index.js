import React from "react";

export default function ProductDetail(props) {
    return (
        <div>

            <div className="section">
                <div className="container">
                    <div className="columns is-multiline is-centered">

                        {props.products.map((product) => (
                            <div className="column">
                                <div className="card  has-background-light">
                                    <header className="card-header">
                                        <p className="card-header-title">{product}</p>
                                        <a href="#" class="card-header-icon" aria-label="favorite">
                                            <span class="icon">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </header>
                                    <div class="card-image">
                                        <figure class="image is-3by2">
                                            <img
                                                src="https://images.unsplash.com/photo-1568471173242-461f0a730452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2530&q=80"
                                                alt="Placeholder image"
                                            />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div class="list is-hoverable">
                                            <p className="list-item">Levain</p>
                                            <p className="list-item">A loaf of bread</p>
                                            <p className="list-item">$5.00</p>
                                            <p className="list-item">By the loaf</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
    </div>
    )
}
