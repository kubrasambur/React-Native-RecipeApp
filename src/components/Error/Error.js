import React from 'react';
import AnimatedLottieViewProps from 'lottie-react-native';

const Error = () => {
  return (
    <AnimatedLottieViewProps
      source={require('../../assets/error.json')}
      autoPlay
      resizeMode="cover"
      style={{width: '100%'}}
    />
  );
};

export default Error;
