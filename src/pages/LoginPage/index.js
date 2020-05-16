import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom";
import "./style.css"
import API from "../../utils/API"



export default function LoginPage(props) {
  const params = useParams()
  const history = useHistory()
  const [loginState, setLoginState] = useState({
      username:"",
      password:""
  })




  const handleInputChange = event => {
    const { name, value } = event.target;

    setLoginState({
      ...loginState,
      [name]:value
  })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.login(loginState).then(res => {
      console.log(res.data)
      if(res.data.user){
        props.submitHandler(res.data.user)
        history.push(`/user/${res.data.user.id}`)
    } else {
        props.submitHandler(false)
    }
    }).catch((err) => console.log(err));

  }

  const handleSesBtnClick = event => {
    event.preventDefault();
    API.readSessions().then(res=>{
      console.log(res.data)
    })

  }

    return (

      <div className="section">
        <div className="body">

          <div className="container">
            <div className="card">
              <div className="card-header">
                <p className="card-header-title">
                  Please Login:
            </p>
              </div>
              <div className="card-content">
                <form>
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="text" onChange={handleInputChange} name="username" value={loginState.name} placeholder="username"/>
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
                      <input className="input" type="text" onChange={handleInputChange} name="password" value={loginState.password} placeholder="password" />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control">
                      <button className="button is-success" onClick={handleFormSubmit}>
                        Login
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
              <button onClick={handleSesBtnClick} className="button">
                check login status
              </button>
            </div>
          </div>

        </div>

      </div>
    )
  }


