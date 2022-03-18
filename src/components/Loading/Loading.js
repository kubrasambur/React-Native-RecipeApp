import React from 'react';
import AnimatedLottieViewProps from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieViewProps
      source={require('../../assets/loading.json')}
      autoPlay
    />
  );
};

export default Loading;
