import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Restaurant = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='leftcircleo' size={40} color='#3b3f46' style={styles.BackIcon} />
            </TouchableOpacity>
        </View>

        <Text style={styles.TextTitle}>Restaurant</Text>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <TouchableOpacity onPress={() => navigation.navigate('Aines')}>
                <View>
                    <Image source={require('../../assets/images/aines.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.PlaceText}>Aine's Place</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Badots')}>
                <View>
                    <Image source={require('../../assets/images/badots.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.PlaceText}>Badots Place</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>

                <View>
                    <Image source={require('../../assets/images/sarimanok.jpg')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.SariText}>Sarimanok</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>

            <TouchableOpacity onPress={() => navigation.navigate('Island_Choice')}>
                <View>
                    <Image source={require('../../assets/images/island.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.IslandText}>Island's Choice</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Pak_Pak')}> 
                <View>
                    <Image source={require('../../assets/images/pakpak.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.PakText}>Pak-Pak</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>    
                
            </ScrollView> 
       

    </View>
  )
}

export default Restaurant

const styles = StyleSheet.create({
Container: {
    backgroundColor: '#fed053',
    position: 'relative',
    flex: 1,
    width: '100%',
    height: '110%',
},
TextTitle: {
    fontSize:40,
    fontWeight: 'bold',
    alignSelf: 'center',
    top: 150,
    position: 'absolute'
    
},
BackIcon: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: 100,
    left: 35,
},
ScrollView: {
    marginBottom: 300,
    alignSelf: 'center',
    top: 200,
},
Footer: {
    alignSelf: 'center',
    top: 70,
    position: 'absolute',
},
TouchView: {
    backgroundColor: 'rgba(255, 255, 255, 0.6 )',
    width: 80,
    height: 200,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
},
Sulat: {
    fontSize: 20,
    fontWeight: 'medium',
},
Sulat1: {
    fontSize: 20,
    fontWeight: 'medium',
    left: 10,
},
Restxt:{
    fontSize: 25,
    alignSelf: 'flex-start',
    marginTop: 30,
    marginLeft: 30,
}, 
Image: {
    width: 350,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 20,
    
},
Bastagroup: {
    position: 'absolute',
    top: 158,
    backgroundColor: 'rgba(255, 255, 255, 0.6 )',
    width: 350,
    
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
},
PlaceText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    right: 100,
    top: 8,
    
},
Locicon: {
    alignSelf: 'center',
    marginTop: 10,
    right: 15,
},
TextLocation: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
    right: 10,
},
Box: {
    flexDirection: 'row',
    bottom: 5,
    alignSelf: 'center',
    right: 40,
},
ResContainer: {
    marginTop: 20,
    flexDirection: 'row',
},
SariText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    right: 110,
    top: 8,
},
IslandText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    right: 90,
    top: 8,
},
PakText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    right: 120,
    top: 8,
},
});
