import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Header from '../../components/Header/Index';
import SearchBar from '../../components/SearchBar/Index';
import {Title} from '../Cadastro/styles';

// import { Container } from './styles';
import {withFormik} from 'formik';

const Comunidades: React.FC = (props: any) => {
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  return (
    <>
      <Header />
      <SearchBar />
      <View style={{margin: 10}}>
        <View>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={props.values.endereco}
            onChangeText={(text) => props.setFieldValue('endereco', text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={styles.input}
            value={props.values.numero}
            onChangeText={(text) => props.setFieldValue('numero', text)}
          />
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View>
          <Text style={styles.label}>Bairro</Text>
          <Picker
            selectedValue={bairro}
            style={{height: 50, width: 150,borderColor:'#305F95',borderWidth:5}}
            onValueChange={(itemValue, itemIndex) => {
              setBairro(itemValue);
              props.setFieldValue('bairro', itemValue);
            }}>
            <Picker.Item label="Jabutiana" value="0" />
            <Picker.Item label="Olaria" value="2" />
          </Picker>
        </View>
        <View>
          <Text style={styles.label}>Cidade</Text>
          <Picker
            selectedValue={cidade}
            style={{height: 50, width: 150,borderColor:'#305F95',borderWidth:5}}
            onValueChange={(itemValue, itemIndex) => {
              setCidade(itemValue);
              props.setFieldValue('cidade', itemValue);
            }}>
            <Picker.Item label="Aracaju" value="0" />
            <Picker.Item label="São Paulo" value="1" />
            <Picker.Item label="Goias" value="2" />
          </Picker>
        </View>
        <View>
          <Text style={styles.label}>Estado</Text>
          <Picker
            selectedValue={estado}
            style={{height: 50, width: 150,borderColor:'#305F95',borderWidth:5}}
            onValueChange={(itemValue, itemIndex) => {
              setEstado(itemValue);
              props.setFieldValue('estado', itemValue);
            }}>
            <Picker.Item label="Sergipe" value="0" />
            <Picker.Item label="São Paulo" value="1" />
            <Picker.Item label="Goias" value="2" />
          </Picker>
        </View>
        </View>
        <View style={styles.textAreaContainer}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={props.values.descricao}
            multiline={true}
            numberOfLines={8}
            underlineColorAndroid="transparent"
            onChangeText={(text) => props.setFieldValue('descricao', text)}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    height: '100%',
    lineHeight: 0,
  },
  textAreaContainer: {
    borderColor: '#dedede',
    borderWidth: 1,
    padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
  },
  titulo: {
    fontSize: 16,
    color: '#305F95',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    color: '#305F95',
    borderBottomWidth: 1,
    borderColor: '#305F95',
    padding: 0,
  },
  label: {
    fontSize: 16,
    color: '#305F95',
    fontWeight: 'bold',
    padding: 0,
  },
  criarConta: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    marginLeft: 5,
  },
  logo: {
    width: 165,
    height: 73,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  avisoSenha: {fontSize: 16, color: '#305F95', marginBottom: 10},
  submit: {},
  button: {
    backgroundColor: '#305F95',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 20,
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
  mapPropsToValues: () => ({
    endereco: '',
    numero: '',
    cidade: '',
    bairro: '',
    estado: '',
  }),

  handleSubmit: (values) => {
    console.log(values);
  },
})(Comunidades);
