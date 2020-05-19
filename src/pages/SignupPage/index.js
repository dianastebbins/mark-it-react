
import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API"
import "./style.css"
import { toast } from "bulma-toast";

class SignUpPage extends React.Component {
    state = {
        username: '',
        password: '',
        first_name: "",
        last_name: "",
        email: "",
        vendor_name: "",
        vendor_email: "",
        vendor_phone: "",
        bus_lic: ""
    }




    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.createUser(this.state).then(newUser => {
            if (newUser.status !== 200) {
                console.log(newUser.status)

                // there was an error, notify user
                toast({
                    message: "New account not created. Please check that you have completed all required fields and try again.",
                    type: "is-danger",
                    position: "center",
                    duration: 4000,
                    dismissible: true
                });
            } else {
                console.log(this.state)
                this.setState({
                    username: '',
                    password: '',
                    first_name: "",
                    last_name: "",
                    email: "",
                    vendor_name: "",
                    vendor_email: "",
                    vendor_phone: "",
                    bus_lic: ""
                })
            }
        })

    }
    render() {

        return (
            <div className="SignupPage section">
                <div className="container">
                    <div className="box">


                        <h1>Signup</h1>
                        <div className="field">
                            <form>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="username" value={this.state.name} placeholder="username" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="password" value={this.state.password} placeholder="password" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="first_name" value={this.state.first_name} placeholder="first_name" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="last_name" value={this.state.last_name} placeholder="last_name" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="email" value={this.state.email} placeholder="email" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_name" value={this.state.vendor_name} placeholder="vendor_name" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_email" value={this.state.vendor_email} placeholder="vendor_email" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_phone" value={this.state.vendor_phone} placeholder="vendor_phone" />
                                <br></br>
                                <input type="text is-hovered" onChange={this.handleInputChange} name="bus_lic" value={this.state.bus_lic} placeholder="business license" />
                                <br></br>
                                <button onClick={this.handleFormSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}
export default SignUpPage