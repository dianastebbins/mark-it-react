import React from "react";
import {Link} from "react-router-dom"


// try putting classes in an array and picking random indexes??


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
                                        <Link to={`/vendor/${product.userId}`}>
                                            <span class="icon">
                                                <i class="fas fa-heart" aria-hidden="true"></i>
                                            </span>
                                            </Link>
                                    </header>
                                    <div class="card-image">
                                    {product.image ? <figure class="image is-3by2">
                                            <img
                                                src={product.image}
                                                alt="the item for sale"
                                            />
                                        </figure>:''}
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
