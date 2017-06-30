import { connect } from 'react-redux';
import Browser from 'bowser';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import PropTypes from 'prop-types';
import * as Actions from '../actions/actions';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import FlatButton from 'material-ui/FlatButton';


const styles = {
  css: {

    height: 'inherit',
  },
};

export class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);

    this.constructor.childContextTypes = {
      muiTheme: PropTypes.object,
    };
    console.log("AppComponent constructor:", Meteor.userId())
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount(){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/signup');
    }
    console.log("componentWillMount:", Meteor.userId())
  }

  componentDidUpdate(prevProps, prevState){
    if (!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
    console.log("componentDidUpdate:", Meteor.userId())
  }

  componentDidMount() {
    const { mobile, tablet } = Browser;
    if (!this.props.user && !mobile && !tablet) {
      //this.props.dispatch(Actions.loginAsGuest());
    }
  }

  componentWillReceiveProps(nextProps) {
    const { mobile, tablet } = Browser;
    if (!nextProps.user && !mobile && !tablet) {
      //this.props.dispatch(Actions.loginAsGuest());
    }
  }

  getChildContext() {
    return {
      muiTheme: getMuiTheme(lightBaseTheme),
    };
  }

  logout(e){
    e.preventDefault();
    Meteor.logout( (err) => {
        if (err) {
            console.log( err.reason );
        } else {
            browserHistory.push('/login');
        }
    });
  }



  render() {
    return (
      // <div style={styles.css}>
      //   {this.props.children}
      // </div>
      <div style={styles.css}>
              <ul className="nav navbar-nav navbar-right">
                  <FlatButton
                    onClick={this.logout}
                    label="LOGOUT"/>
              </ul>
        {this.props.children}
      </div>

    );
  }
}

AppComponent.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  children: PropTypes.element,
};

const mapStateToProps = ({
  users: { user },
}) => ({
  user,
});

export default connect(
  mapStateToProps,
)(AppComponent);
