import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3 className="log_in">Sign In</h3>

          <div className="mb-3 ">
            <label className="log_in">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="log_in">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label log_in " htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <button className="sign_up"><Link to="/sign-up">Sign Up</Link></button>
          </p>
        </form>
      </div>
    );
  }
}
