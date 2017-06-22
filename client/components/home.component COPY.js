import { connect } from 'react-redux';
import Browser from 'bowser';
import Colors from 'material-ui/styles/colors';
import PropTypes from 'prop-types';
import Radium from 'radium';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import React from 'react';
import { APP_NAME, COMPANY, GITHUB_URL, DOWNLOAD_URLS } from '../../lib/config';
import * as Actions from '../actions/actions';
import DownloadButtonComponent from './download-button.component';
import FooterComponent from './footer.component';
import GithubComponent from './github.component';
import GlobalStyles from '../styles/global.styles';
import HeaderComponent from './header.component';
import LoadingDialogComponent from './loading-dialog.component';

const styles = {
  css: {
    backgroundAttachment: 'fixed',
    backgroundImage: 'url(images/quasar.jpg)',
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
};

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

  render() {
    return (
      <div style={[styles.css]}>

        {this.state.loading ?
          <LoadingDialogComponent open title="Starting video call" /> : ''
        }
        <div style={[GlobalStyles.stickyFooterPage]}>
          <HeaderComponent showMenuIconButton={true} />
          <div>
            <div className="col-xs-12 text-center">
              <h1 style={[styles.title.css]}>{APP_NAME}</h1>
              <br />

        <h1>
              A new way of learning music
          <br />
            A new way of earning from music
            <br />

            </h1>
              <FlatButton
                onClick={this.createRoom}
                label="Call DAW User"
                secondary
                style={{ marginBottom: '50px' }}
              />

              <br />

              <FloatingActionButton
                onClick={this.createRoom}
                label="2"
                secondary
                style={{ marginBottom: '50px' }}
              />
              <br />

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
