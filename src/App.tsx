import * as React from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import axios from 'axios';

import { IMAGE_API_KEY } from '@env';

const App: React.FC = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = React.useState('');

  React.useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?client_id=${IMAGE_API_KEY}&query=recipe&orientation=portrait`,
      )
      .then(response => setBackgroundImageUrl(response.data.urls.full));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      {backgroundImageUrl !== '' && (
        <Image
          style={StyleSheet.absoluteFillObject}
          source={{
            uri: backgroundImageUrl,
          }}
        />
      )}
    </View>
  );
};

export default App;
