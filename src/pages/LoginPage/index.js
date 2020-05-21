import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import "./style.css"
import API from "../../utils/API"
import { toast } from "bulma-toast";


export default function LoginPage(props) {
  const history = useHistory()
  const [loginState, setLoginState] = useState({
    username: "",
    password: ""
  })




  const handleInputChange = event => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]: value
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.login(loginState).then(res => {
      console.log(res.data)
      if (res.data.user) {
        props.submitHandler(res.data.user)
        history.push(`/user/${res.data.user.id}`)
      } else {
        // let user know what went wrong
        toast({
          message: res.data,
          type: "is-danger",
          position: "center",
          duration: 4000,
          dismissible: true
        });
        props.submitHandler(false)
      }
    }).catch((err) => console.log(err));

  }

  const handleSesBtnClick = event => {
    event.preventDefault();
    API.readSessions().then(res => {
      console.log(res.data)
    })

  }

  return (
    <div className="LoginPage">
      <section class="hero is-info is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Login to your Account
            </h1>

          </div>
        </div>
      </section>
      <div className="section">
        <div className="container">
          <div className="box">
            <form>
              <div className="field">
                <div className="control">
                  <label className="label">User Name:</label>
                  <input className="input" type="text" onChange={handleInputChange} name="username" value={loginState.name} placeholder="username" />

                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="label">Password:</label>
                  <input className="input" type="password" onChange={handleInputChange} name="password" value={loginState.password} placeholder="password" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-success" onClick={handleFormSubmit}>
                    Login
                    </button>
                </div>
              </div>
            </form>

          </div>
          {/* <div className="section">
            <button className="button">
              <Link to="/map" >temporary link to MapPage</Link>
            </button>
            <button onClick={handleSesBtnClick} className="button">
              check login status
              </button>
          </div> */}
        </div>

      </div>
    </div>
  )
}


