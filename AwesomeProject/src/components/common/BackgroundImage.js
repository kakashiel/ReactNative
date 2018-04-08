import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <ImageBackground
                source={require('../../../doc/images/background.jpg')}
                style={styles.backgroundImage}
            >
                <ImageBackground 
                    style={styles.filter}
                >
                    {this.props.children}
                </ImageBackground>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    },
    filter: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
    }

});
 export { BackgroundImage };
