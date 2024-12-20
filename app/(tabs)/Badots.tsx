import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { AntDesign, FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Aines = () => {
  const navigation = useNavigation();

  const openLocation = () => {
    const latitude = 10.789199; 
    const longitude = 122.016194; 
    const label = 'Badot\'s Sizzling House'; 
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
          <Text style={styles.BadotsText}>Badots Sizzling House</Text>
          <Image source={require('../../assets/images/badots.png')} style={styles.Image}/>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('MenuAines')}>
                <Text style={styles.BadotsMenu}>Menu Highlights.....</Text>
            </TouchableOpacity>

            <View style={styles.TextBox}>
              <MaterialIcons name='location-on' size={30} color='black'/>
              <View>
                <Text style={styles.BadotsAddress}>Mayor Santiago A Lotilla,</Text>
                <Text style={styles.BadotsAddress}>District 2, Sibalom</Text>
                <Text style={styles.BadotsAddress}>5713, Antique</Text>
                <TouchableOpacity onPress={openLocation}>
                  <Text style={styles.Views}>View.....</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.BadotsTimeBox}>
              <AntDesign name='clockcircle' size={25} color='black'/>
              <View>
                <Text style={styles.BadotsTime}>Monday - Sunday: 9:00 AM - 9:00 PM</Text>
              </View>
              </View>

              <View style={styles.BadotsNumBox}>
                <FontAwesome name='phone' size={30} color='black'/>
                <Text style={styles.BadotsPhone}>+63 976 530 9916</Text>
              </View>

              <View style={styles.BadotsRatingBox}>
                <AntDesign name='star' size={30} color='black'/>
                <Text style={styles.BadotsRating}>5/5</Text>
              </View>

            <TouchableOpacity style={styles.FavBox}>
                <Fontisto name='favorite' size={25} color='black'/>
                <Text style={styles.BadotsFav}>Favorites</Text>
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
BadotsText: {
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
BadotsMenu: {
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
BadotsAddress: {
  fontSize: 20,
},
Views: {
  textAlign: 'left',
  color: '#007bff',
  fontSize: 16,
  top: 5,
},
BadotsTimeBox: {
  position: 'absolute',
  flexDirection: 'row',
  top: 120,
  alignItems: 'center',
},
BadotsTime: {
  fontSize: 18,
  left: 10,
},
BadotsNumBox: {
  position: 'absolute',
  flexDirection: 'row',
  top: 170,
  alignItems: 'center',
},
BadotsPhone: {
  fontSize: 18,
  left: 10,
},
BadotsRatingBox: {
  position: 'absolute',
 flexDirection: 'row',
 top: 225,
 alignItems: 'center',
},
BadotsRating: {
  fontSize: 20,
  left: 10,
},
FavBox: {
 position: 'absolute',
 flexDirection: 'row',
 alignItems: 'center',
 top: 280,
 left: 10,
},
BadotsFav: {
  fontSize: 20,
  left: 10,
}
});
