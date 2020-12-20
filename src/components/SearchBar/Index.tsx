import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface propsSearchBar {
  placeHolder: string;
}
// import { Container } from './styles';

const SearchBar = (props: propsSeachBar) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          
          justifyContent: 'space-between',
          alignContent: 'space-between',
          flexDirection: 'row',
          height:60,
          alignItems:'center',
          padding:10
        }}>
        <Image source={require('../../pages/assets/icons/search.png')} />
        <TextInput placeholder={props.placeHolder} style={{color:'#828282',fontSize:20}}/>
        <TouchableOpacity onPress={() => Alert.alert('Filtro Selecionado')}>
          <Image source={require('../../pages/assets/icons/filter.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: 60,
    marginTop: -15,
    backgroundColor: '#fff',
    borderTopColor: '#6E6F70',
    borderTopWidth:0.5,
    position:'relative',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
export default SearchBar;
