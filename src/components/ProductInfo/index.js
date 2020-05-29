import React, { useState } from "react";
import "./style.css"
import API from "../../utils/API";

export default function ProductInfo(props) {
    const [productState, setProductState] = useState({
        name: '',
        description: '',
        price: '',
        details: '',
        userId: '',
        image: ''
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

        API.updateProduct(productState, props.product.id).then(newProduct => {

            setProductState({
                name: '',
                description: '',
                price: '',
                details: '',
                image: ''
            })
            props.refreshPage()
        })
    }

    const uploadFile = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        // this data/preset is required by cloudinary (named sick fits in the cloudinary settings)
        data.append("upload_preset", "k0kdipbb");
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dw69fw1u3/image/upload",
            {
                method: "POST",
                body: data
            }
        );
        const file = await res.json();
        console.log(file);
        setProductState({
            ...productState, image: file.secure_url
            // largeImage: file.eager[0].secure_url
        });
    }

    if (props.product.name) {

        return (
            <div>

                <div className="columns is-multiline is-centered">

                    <div className="column is-half">
                        <div className="card has-background-light">
                            <header className="card-header">{/* eslint-disable-next-line */}
                                <p className="product card-header-title">{props.product.name}<a onClick={handleDeleteBtn} className="delete"></a></p>

                            </header>
                            <div className="card-image">
                                <figure className="image is-3by2">
                                    <img
                                        src={props.product.image}
                                        alt="Product"
                                        height="200px"
                                        width="200px"
                                    />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="list is-hoverable">
                                    <p className="list-item">{props.product.description}</p>
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
                                        <h5 className="has-text-centered">Update Product Information</h5>
                                        <div className="field">
                                            <label className="label">Name</label>
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="name" value={productState.name} placeholder={props.product.name} required />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Description</label>
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="description" value={productState.description} placeholder={props.product.description} required />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Price</label>
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="price" value={productState.price} placeholder={props.product.price} required />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label className="label">Details</label>
                                            <div className="control">
                                                <input className="input is-hovered" type="text" onChange={handleInputChange} name="details" value={productState.details} placeholder={props.product.details} required />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Product Image</label>
                                            <div className="control">
                                                <input className="input is-hovered" type="file" onChange={uploadFile} name="userId" placeholder="use upload component instead" />



                                                <i className="fas fa-upload uploadicon"></i>
                                            </div>
                                            {productState.image ? (
                                    <div>
                                        <img alt="product" src={productState.image}></img>
                                    </div>
                                ) : ""}
                                        </div>
                                        <button className="button is-link is-light" onClick={handleFormSubmit}>Update</button>

                                    </div>
                                </form>
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