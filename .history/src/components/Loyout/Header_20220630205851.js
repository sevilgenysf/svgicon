import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Menü from '../../icons/menü';

let {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Menü />
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={'#333'}
          style={styles.searchBox}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 40,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: '90%',
    height: width / 7 - 20,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
  },
});
