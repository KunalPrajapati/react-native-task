import React from 'react';
import { View } from 'react-native';
import UserProfileCard from './src/components/UserProfileCard';

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <UserProfileCard />
    </View>
  );
};

export default App;
