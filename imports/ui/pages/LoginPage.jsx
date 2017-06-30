import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Colors from 'material-ui/styles/colors';


const styles = {
  css: {
    backgroundAttachment: 'fixed',
    // backgroundImage: 'url(images/quasar.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: 'Colors.fullWhite',
    height: '100%',
    minHeight: '500px',
  },

  title: {
    css: {
      color: Colors.deepOrange400,
      fontSize: '144px',
    },
  },
  sloganText:{
    color: 'grey',
    textAlign: 'center',
  }

};

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        browserHistory.push('/');
      }
    });
  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">

            <div className="modal-header">
              <h1 style={
                {color: Colors.deepOrange400,
                  textAlign: 'center',
                  fontSize: 100
                }}>/ DAW jam /</h1>

                <h1 style={styles.sloganText}>
                    <br /> A new way of learning music
                    <br /> A new way of earning from music
                    <br />
                </h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
              <form  id="login-form"
                    className="form col-md-12 center-block"
                    onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="email"
                        id="login-email"
                        className="form-control input-lg"
                        placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password"
                        id="login-password"
                        className="form-control input-lg"
                        placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <input type="submit"
                        id="login-button"
                        className="btn btn-primary btn-lg btn-block"
                        value="Login" />
                </div>
                <div className="form-group text-center">
                  <p className="text-center">
                    Don't have a DAW JAM account? Register <Link to="/signup">here</Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
        </div>
      </div>

    );
  }
}
