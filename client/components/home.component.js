import { connect } from 'react-redux';
import Browser from 'bowser';
import Colors from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import AVVideoCall from 'material-ui/svg-icons/AV/video-call';
import React from 'react';
import { APP_NAME, COMPANY, GITHUB_URL, DOWNLOAD_URLS } from '../../lib/config';
import * as Actions from '../actions/actions';
import DownloadButtonComponent from './download-button.component';
import FooterComponent from './footer.component';
import GithubComponent from './github.component';
import GlobalStyles from '../styles/global.styles';
import HeaderComponent from './header.component';
import LoadingDialogComponent from './loading-dialog.component';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import Form from './form.component';
import { render } from 'react-dom';



const styles = {
  css: {
    backgroundAttachment: 'fixed',
    // backgroundImage: 'url(images/quasar.jpg)',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: Colors.fullWhite,
    height: '100%',
    minHeight: '500px',
  },

  title: {
    css: {
      color: Colors.deepOrange400,
      fontSize: '144px',
    },
  },

  largeIcon: {
    width: 100,
    height: 100,
    color: 'black',
    display: 'flex',
  },
    sloganText:{
      color: 'black',
    }
};

// import { createContainer } from 'meteor/react-meteor-data';
// import MainPage from '../pages/MainPage.jsx';
//
// export default MainContainer = createContainer(({params}) => {
//   const currentUser = Meteor.user();
//   return {
//     currentUser,
//   };
// }, MainPage);




export class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,

    };

    this.createRoom = this.createRoom.bind(this);
  }

  createRoom() {
    this.props.dispatch(Actions.createRoom());

    this.setState({
      loading: true,
    });
  }

  clicked() {
    console.log('the button was clicked');

  }

  render() {
    return (

      <div style={[styles.css]}>

        {this.state.loading ?
          <LoadingDialogComponent open title="Starting video call" /> : ''
        }
        {this.state.text}

        <div style={[GlobalStyles.stickyFooterPage]}>
          <HeaderComponent showMenuIconButton={false} />
          <div>
            <div className="col-xs-12 text-center">
              <h1 style={[styles.title.css]}>{"/ DAW jam /"}</h1>
              <br />
          <div id="target"></div>

      <h1 style={styles.sloganText}>______________________
        <br />
          <br />
              A new way of learning music
          <br />
            A new way of earning from music
            <br />
            <br />
            <button onClick={ (e) => this.clicked() }>TheButton</button>
            <br />

        </h1>
            { Meteor.userId() !== null ?
              <div>
                <div>
              <FlatButton
                onClick={this.createRoom}
                label="Call DAW User"
                style={{ marginBottom: '10px' }}
              />

              <br />


              <IconButton
              iconStyle={styles.largeIcon}
              style={styles.large}
              onClick={this.createRoom}

              style={{ marginBottom: '50px' }}
              >
              <AVVideoCall />

              <br />

              <br />
              <div className="form"><Form /></div>
              <br />
              </IconButton>
            </div>
            </div>
                : '' }
            </div>
          </div>
        </div>

      </div>
    );
  }
}




HomeComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Radium(HomeComponent));
