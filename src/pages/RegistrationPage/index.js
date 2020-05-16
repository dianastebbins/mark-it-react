import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API"
import "./style.css"

class RegistrationPage extends React.Component {
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
        })

    }
    render() {

        return (
            <div className="SignupPage section">
                <div className="container">
                    <h1>Signup</h1>
                    <div className="field">
                        <form>
                            <input type="text is-hovered" onChange={this.handleInputChange} name="username" value={this.state.name} placeholder="username" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="password" value={this.state.password} placeholder="password" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="first_name" value={this.state.first_name} placeholder="first_name" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="last_name" value={this.state.last_name} placeholder="last_name" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="email" value={this.state.email} placeholder="email" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_name" value={this.state.vendor_name} placeholder="vendor_name" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_email" value={this.state.vendor_email} placeholder="vendor_email" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="vendor_phone" value={this.state.vendor_phone} placeholder="vendor_phone" />
                            <input type="text is-hovered" onChange={this.handleInputChange} name="bus_lic" value={this.state.bus_lic} placeholder="business license" />
                            <button onClick={this.handleFormSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}
export default RegistrationPage