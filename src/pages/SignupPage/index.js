import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API"
import "./style.css"

export default function SignupPage(props) {
    const [signupState, setSignupState] = useState({
        username:"",
        password:""
    })




    const handleInputChange = event => {
        const { name, value } = event.target;

        setSignupState({
            [name]: value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        API.createUser(signupState).then(newUser => {
            console.log(signupState)
            setSignupState({
                username: '',
                password: '',
               
            })
        })

    }

        return (
            <div className="section">
            <div className="body">
    
              <div className="container">
                <div className="card">
                  <div className="card-header">
                    <p className="card-header-title">
                      Sign up!!!!!!
                </p>
                  </div>
                  <div className="card-content">
                    <form>
                      <div className="field">
                        <p className="control has-icons-left has-icons-right">
                          <input className="input" type="text" onChange={handleInputChange} name="username" value={signupState.name} placeholder="username"/>
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control has-icons-left">
                          <input className="input" type="text" onChange={handleInputChange} name="password" value={signupState.password} placeholder="password" />
                          <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                          </span>
                        </p>
                      </div>
                      <div className="field">
                        <p className="control">
                          <button className="button is-success" onClick={handleFormSubmit}>
                            Signup
                        </button>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="section">
                  <button className="button">
                    <Link to="/map" >temporary link to MapPage</Link>
                  </button>
    
                </div>
              </div>
    
            </div>
    
          </div>


        )
    }
