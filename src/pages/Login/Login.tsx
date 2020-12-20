import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

import { withFormik } from 'formik';


const Login = (props: any) => {
  const navigation = useNavigation();
  function handleNavigateToNewAccount() {
    navigation.navigate('Cadastro');
  }
  function handleNavigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <StatusBar Hide={true}/>
      <View style={styles.container}>
        <View style={styles.container}>
          <View>
            <View>
              <Image
                style={styles.logo}
                source={require('../../assets/images/inMap-white.png')}
              />
            </View>
            <Text style={styles.label}>CPF</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              value={props.values.cpf}
              onChangeText={(text) => props.setFieldValue('cpf', text)}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput
              keyboardType="visible-password"
              style={styles.input}
              value={props.values.senha}
              onChangeText={(text) => props.setFieldValue('senha', text)}
            />
            <Text style={styles.avisoSenha}>Esqueceu sua senha?</Text>
            <RectButton
              style={styles.button}
              // onPress={props.handleSubmit}>
              onPress={() => handleNavigateToHome()}>
              <Text style={styles.buttonText}>Continuar</Text>
            </RectButton>
            <View style={styles.criarConta}>
              <TouchableOpacity onPress={() => handleNavigateToNewAccount()}>
                <Text style={{ fontSize: 16, color: '#FFEEE5', textAlign: 'center' }}>
                  Novo?
                  <Text style={{ color: '#fff', fontSize: 16, marginLeft: 2 }}>
                    Crie uma conta agora
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
  },
  titulo: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
  criarConta: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  logo: {
    width: 400,
    height: 225,
    alignSelf: 'center',
    marginLeft: 65
  },
  avisoSenha: { fontSize: 16, color: '#FFEEE5', marginBottom: 10 },
  submit: {},
  button: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});
export default withFormik({
  mapPropsToValues: () => ({ cpf: '', senha: '' }),

  handleSubmit: (values) => {
    // navigation.navigate('Home');
    console.log(values);
  },
})(Login);
