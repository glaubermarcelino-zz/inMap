import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {Container} from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <View>
          <Image
            style={{marginBottom: 10}}
            source={require('../../pages/assets/images/inMap-header.png')}
          />
        </View>
      </Container>
    </>
  );
};

export default Header;
