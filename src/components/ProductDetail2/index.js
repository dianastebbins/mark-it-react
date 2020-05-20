import React from "react";
import { Link } from "react-router-dom"
import "./style.css"

// try putting classes in an array and picking random indexes??


export default function ProductDetail(props) {
    return (
        <div>

            <div className="section">
                <div className="columns is-variable is-multiline is-centered">

                    {props.products.map((product) => (
                        <div className="column is-4">
                            <div className="card has-background-light">
                                <div class="card-image">
                                    {product.image ? <figure class="image is-4by3">
                                        <img
                                            src={product.image}
                                            alt="the item for sale"
                                        />
                                    </figure> : ''}
                                </div>
                                <header className="card-header">
                                    <p className="card-header-title">{product.name}</p>
                                    
                                </header>


                                <div class="list is-hoverable">
                                    <p className="list-item">{product.description}</p>
                                    <p className="list-item">{product.price}</p>
                                    <p className="list-item">{product.details}</p>
                                    <p className="list-item">
                                        <Link to={`/vendor/${product.userId}`}>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" class="card-footer-item">More Information</a>
                                    </Link></p>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
