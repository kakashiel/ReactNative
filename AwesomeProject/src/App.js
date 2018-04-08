import React, { Component } from 'react';
import firebase from 'firebase';
import { Header, Button, Spinner, BackgroundImage } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

//Connexion à la base de donées firebase

    componentWillMount() {
        firebase.initializeApp({
      apiKey: '',
      authDomain: '',
      databaseURL: '',
      storageBucket: '',
      messagingSenderId: '',
    });

      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <BackgroundImage>
          <Header headerText="Creation profil" />
          {this.renderContent()}
       </BackgroundImage>
    );
  }

}

export default App;
