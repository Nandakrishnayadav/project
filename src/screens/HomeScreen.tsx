// HomeScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';

const HomeScreen: React.FC<any> = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to E-Learning App!</Text>
      <Button
        title="Go to Course"
        onPress={() => navigation.navigate('Course')}
      />
    </View>
  );
};

export default HomeScreen;
