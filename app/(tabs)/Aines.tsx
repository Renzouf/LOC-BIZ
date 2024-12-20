import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { AntDesign, FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Aines = () => {
  const navigation = useNavigation();

  const openLocation = () => {
    const latitude = 10.79522; 
    const longitude = 122.02059; 
    const label = 'Aine\'s Place'; 
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}(${label})`; 
    Linking.openURL(mapUrl); 
  };

  return (
    <View style={styles.Container}>
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='leftcircleo' size={40} color='#3b3f46' style={styles.BackIcon} />
            </TouchableOpacity>
        </View>

        <Text style={styles.TextTitle}>RESTAURANT</Text>

        <View>
          <Text style={styles.AinesText}>Aine's Place</Text>
          <Image source={require('../../assets/images/aines.png')} style={styles.Image}/>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('MenuAines')}>
                <Text style={styles.AinesMenu}>Menu Highlights.....</Text>
            </TouchableOpacity>

            <View style={styles.TextBox}>
              <MaterialIcons name='location-on' size={30} color='black'/>
              <View>
                <Text style={styles.AinesAddress}>Sibalom Esplanade,</Text>
                <Text style={styles.AinesAddress}>Sibalom,</Text>
                <Text style={styles.AinesAddress}>Philippines, 5713</Text>
                <TouchableOpacity onPress={openLocation}>
                  <Text style={styles.Views}>View.....</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.AinesTimeBox}>
              <AntDesign name='clockcircle' size={25} color='black'/>
              <View>
                <Text style={styles.AinesTime}>Monday - Thursday: 8:00 AM - 10:00 PM</Text>
                <Text style={styles.AinesTime}>Friday - Saturday: 8:00 AM - 12:00 AM</Text>
              </View>
              </View>

              <View style={styles.AinesNumBox}>
                <FontAwesome name='phone' size={30} color='black'/>
                <Text style={styles.AinesPhone}>+63 926 888 0586</Text>
              </View>

              <View style={styles.AinesRatingBox}>
                <AntDesign name='star' size={30} color='black'/>
                <Text style={styles.AinesRating}>2.2/5</Text>
              </View>

            <TouchableOpacity style={styles.FavBox}>
                <Fontisto name='favorite' size={25} color='black'/>
                <Text style={styles.AinesFav}>Favorites</Text>
            </TouchableOpacity>



            </View>
        </View>
        </View>

    </View>
  )
};

export default Aines

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fed053',
    position: 'absolute',
    width: '100%',
    height: '110%',
},
TextTitle: {
    fontSize:40,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 35,
    marginTop: 150,
},
BackIcon: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: 100,
    left: 35,
},
AinesText: {
  fontSize: 25,
  fontWeight: 'medium',
  position: 'absolute',
  left: 35,
  top: 30,
},
Image: {
  width: 350,
  height: 200,
  alignSelf: 'center',
  borderRadius: 10,
 top: 65,
},
AinesMenu: {
  textAlign: 'left',
  left: 35,
  color: '#007bff',
  fontSize: 16,
  top: 70,
},
TextBox: {
flexDirection: 'row',
position: 'absolute',
top: 120,
left: 35,
},
AinesAddress: {
  fontSize: 20,
},
Views: {
  textAlign: 'left',
  color: '#007bff',
  fontSize: 16,
  top: 5,
},
AinesTimeBox: {
  position: 'absolute',
  flexDirection: 'row',
  top: 110,
  alignItems: 'center',
},
AinesTime: {
  fontSize: 16,
  left: 5,
},
AinesNumBox: {
  position: 'absolute',
  flexDirection: 'row',
  top: 170,
  alignItems: 'center',
},
AinesPhone: {
  fontSize: 18,
  left: 10,
},
AinesRatingBox: {
  position: 'absolute',
 flexDirection: 'row',
 top: 220,
 alignItems: 'center',
},
AinesRating: {
  fontSize: 20,
  left: 10,
},
FavBox: {
  position: 'absolute',
 flexDirection: 'row',
 alignItems: 'center',
 top: 278,
 left: 10,
},
AinesFav: {
  fontSize: 20,
  left: 10,
}
});
