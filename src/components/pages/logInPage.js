import React, { Component } from 'react';

class LogInPage extends Component {
  render() {
    return (
        <div className="container">
            <div className="login-form-container">
                <h2 className="form-title">Login Form</h2>
                
                <form action="/action_page.php">
                
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" id="username" placeholder="Enter Username" name="uname" required/>
                
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                        
                    <button type="submit">Login</button>
                    <input type="checkbox" checked="checked"/> Remember me
                </div>
                </form>
            </div>
        </div>
    );
  }
}

export default LogInPage;
