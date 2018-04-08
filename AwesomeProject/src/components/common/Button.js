import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (

    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <LinearGradient 
      onPress={onPress} 
      colors={['#17C8FF', '#329BFF', '#4C64FF']}
      start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
      style={styles.linearGradient}
  >
      <Text style={textStyle}>
        {children}
      </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    height: 48, 
    width: 150,
    paddingTop: 5,
  }
};

export { Button };
