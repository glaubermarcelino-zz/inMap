import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'react-native';

import { Container } from './styles';

export default class Splash extends React.Component {
  // constructor(props) {
  //   super(props);
  //   setTimeout(() => {
  //     this.props.navigation.navigate('Login');
  //   }, 8000);
  // }

  render() {
    //Oculta a barra de status
    StatusBar.setHidden(true);
    return (
      <Container>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Image
            style={{
              width: 499,
              height: 225,
              alignSelf: 'center',
              marginLeft: 65,
              marginBottom:10
            }}
            source={require('../../assets/images/e-sive-white.png')}
          />
          <Text style={{color:'#fff'}}>Sistema Inteligente de Vistoria Eletrônica</Text>
        </View>
      </Container>
    );
  }
}
