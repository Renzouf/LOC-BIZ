import { Image, StyleSheet, Platform, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <View>
        <Image source={require('../../assets/images/LOGO.png')} style={styles.Logo} />
      </View>

      <View>
        <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.TextLog}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
Container: {
  backgroundColor: '#fed053',
  position: 'absolute',
  width: '100%',
  height: '110%',
},
Logo: {
  width: 400,
  height: 400,
  alignSelf: 'center',
  marginTop: Platform.OS === 'ios' ? 200 : 100,
  resizeMode: 'contain',
},
Button: {
  backgroundColor: '#3b3f46',
  width: 300,
  height: 50,
  alignSelf: 'center',
  marginTop: 100,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 2,
  shadowRadius: 3.84,
  elevation: 5,
},
TextLog: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#f5b301',
}
});
