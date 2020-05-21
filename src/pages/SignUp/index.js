
import React from 'react'
import API from "../../utils/API"
import "./style.css"
import { toast } from "bulma-toast";

// convert to rfc


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
            <div className="SignUpPage">
                <section class="hero is-info is-bold">
                    <div class="hero-body">
                        <div class="container">
                            <h1 class="title">
                                Register as a User
                            </h1>

                        </div>
                    </div>
                </section>
                <div className="section">
                    <div className="container">
                        <div className="box">



                            <div className="field">
                                <form>

                                    <div className="field">
                                        <label className="label">User Name:</label>
                                        <div className="control">

                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="username" value={this.state.name} placeholder="username" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password:</label>
                                        <div className="control">
                                            <input type="password" className="input" onChange={this.handleInputChange} name="password" value={this.state.password} placeholder="password" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">First Name:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="first_name" value={this.state.first_name} placeholder="first_name" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Last Name:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="last_name" value={this.state.last_name} placeholder="last_name" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Email:</label>
                                        <div className="control">
                                            <input type="email" className="input" onChange={this.handleInputChange} name="email" value={this.state.email} placeholder="email" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Name:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="vendor_name" value={this.state.vendor_name} placeholder="vendor_name" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Email:</label>
                                        <div className="control">
                                            <input type="email" className="input" onChange={this.handleInputChange} name="vendor_email" value={this.state.vendor_email} placeholder="vendor_email" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Vendor Phone:</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="vendor_phone" value={this.state.vendor_phone} placeholder="vendor_phone" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Business License #</label>
                                        <div className="control">
                                            <input type="text is-hovered" className="input" onChange={this.handleInputChange} name="bus_lic" value={this.state.bus_lic} placeholder="business license" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button class="button is-primary" onClick={this.handleFormSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










        )
    }
}
export default SignUpPage