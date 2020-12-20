import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Sucesso: React.FC = (props: any) => {
  // const navigation = useNavigation();
  function handleNavigateToHome() {
    // navigation.navigate('Home');
  }

  //Oculta a barra de status
  StatusBar.setHidden(true);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/e-sive-blue2286x146.png')}
        />
        <View>
          <Text
            style={{
              color: '#0056A7',
              fontSize: 20,
              letterSpacing: 2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Parabéns Adriana Moura!
          </Text>
          <Text
            style={{
              color: '#305F95',
              fontSize: 15,
              letterSpacing: 2,
              textAlign: 'center',
            }}>
            Sua conta foi ativada com sucesso
          </Text>
        </View>
        <View style={styles.buttonSection}>
          <RectButton 
          style={styles.button} 
          // onPress={props.handleSubmit}
          onPress={() => handleNavigateToHome()}
          >
            <Text style={styles.buttonText}>OK</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: '100%',
  },
  buttonSection: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  enviarNovamente: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 0,
    paddingTop: 0,
    marginBottom:120
  },
  avisoSenha: {fontSize: 16, color: '#FFEEE5', marginBottom: 10},
  submit: {},
  button: {
    backgroundColor: '#3F548B',
    height: 50,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
    width: 248,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
export default Sucesso;
