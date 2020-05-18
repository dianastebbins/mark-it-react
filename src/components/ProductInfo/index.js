import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import "./style.css"
import API from "../../utils/API";

export default function ProductInfo(props) {
    const history = useHistory();
    const [productState, setProductState] = useState({
        name: '',
        description: '',
        price: '',
        details: '',
        userId: ''
    })

    

    const handleDeleteBtn = event => {
        API.deleteProduct(props.product.id).then(res => {
            props.refreshPage();
        })
    }

    const handleInputChange = event => {
        const { name, value } = event.target;

        setProductState({
            ...productState, [name]: value
        })
    }


    const handleFormSubmit = event => {
        event.preventDefault();
        console.log(productState);

        API.updateProduct(productState, props.product.id).then(newProduct => {
            console.log(productState)
            setProductState({
                name: '',
                description: '',
                price: '',
                details: '',
            }) 
            props.refreshPage()
        })
    }



    if (props.product.name) {

        return (
            <div>

                <div className="section">
                    <div className="container">
                        <div className="columns is-multiline is-centered">

                            <div className="column is-half">
                                <div className="card has-background-light">
                                    <header className="card-header">
                                        <p className="product card-header-title">{props.product.name}<a onClick={handleDeleteBtn} class="delete"></a></p>

                                    </header>
                                    <div class="card-image">
                                        <figure class="image is-3by2">
                                            <img
                                                src={props.product.image}
                                                alt="Product"
                                                height="200px"
                                                width="200px"
                                            />
                                        </figure>
                                    </div>
                                    <div className="card-content">
                                        <div class="list is-hoverable">
                                            <p contentEditable="true" className="list-item">{props.product.description}</p>
                                            <p className="list-item">{props.product.price}</p>
                                            <p className="list-item">{props.product.details}</p>
                                            <p className="list-item"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card has-background-light">
                                    <div className="card-content">
                                <form>
                                    <div className="field">
                                        <h5>Update Product Information</h5>
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="name" value={productState.name} placeholder="Product Name" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="description" value={productState.description} placeholder="Description" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder="Price" />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="details" value={productState.details} placeholder="details" />
                                            </div>
                                        </div>
                                        </div>
                                        <button className="button is-success is-light" onClick={handleFormSubmit}>Update</button>

                                 </form>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}