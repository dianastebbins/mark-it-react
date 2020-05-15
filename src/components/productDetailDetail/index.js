import React from "react";
import {Link} from "react-router-dom"

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
                                        <p className="card-header-title">{product.name}</p>
                                        <Link to={`/product/${product.userId}`}>
                                            <span class="icon">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                            </Link>
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
                                            <p className="list-item">{product.description}</p>
                                            <p className="list-item">{product.price}</p>
                                            <p className="list-item">{product.details}</p>
                                            <p className="list-item"></p>
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
