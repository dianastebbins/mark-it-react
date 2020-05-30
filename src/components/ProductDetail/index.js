import React from "react";
import { Link } from "react-router-dom"
import "./style.css"
import BrandLogo from "./../../assets/images/brandlogo.png"
// try putting classes in an array and picking random indexes??


export default function ProductDetail(props) {
    return (
        <div>

            <div className="section">
                <div className="columns is-variable is-multiline is-centered">

                    {props.products.map((product) => (
                        <div className="column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
                            <div className="card has-background-light">
                                <div className="card-image">
                                     <figure className="image is-4by3">{product.image ?
                                        <img
                                            src={product.image}
                                            alt="the item for sale"
                                        />:<img className="logoImageAdd" src={BrandLogo} alt="Mark-It Logo"/>}
                                    
                                    
                                    </figure> 
                                </div>
                                <header className="card-header">
                                    <p className="card-header-title">{product.name}</p>
                                    
                                </header>


                                <div className="list is-hoverable">
                                    <p className="list-item">{product.description}</p>
                                    <p className="list-item">{product.price}</p>
                                    <p className="list-item">{product.details}</p>
                                    <p className="list-item">
                                        <Link to={`/vendor/${product.userId}`}>
                                        {/* eslint-disable-next-line */}
                                        <a href="#" className="card-footer-item">More Information</a>
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
