import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




const BusinessCategory = () => {
const navigation = useNavigation();         
  return (
   <View style={styles.Container}>
        <Text style={styles.TextTitle}>Business Categories</Text>
        

        <ScrollView style={styles.ScrollView}>
        <View>
            <Text style={styles.Restxt}>RESTAURANTS</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10,}} showsHorizontalScrollIndicator={false} style={styles.BoxRes}>
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
                    <Text style={styles.TextLocation}>District 2, Sibalom, Antique</Text>
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
                    <Text style={styles.SariText}>Island Choice</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 2 Meyor Santiago Lotilla St, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Pak_pak')}>
                    <View>
                        <Image source={require('../../assets/images/pakpak.png')} style={styles.Image} />
                        <View style={styles.Bastagroup}>
                        <Text style={styles.SariText}>Pak Na Pak</Text>
                        <View style={styles.Box}>
                        <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                        <Text style={styles.TextLocation}>Sibalom Esplanade, Sibalom, Antique</Text>
                        </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </ScrollView>

            
            <TouchableOpacity style={styles.TouchView} onPress={() => navigation.navigate('Restaurant')}>
                <View style={styles.Footer}>
                <Text style={styles.Sulat}>View</Text>
                <Text style={styles.Sulat1}>All</Text>
                </View>
                </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.Restxt}>GROCERY STORES</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10,}} showsHorizontalScrollIndicator={false} style={styles.BoxRes}>
                <View>
                    <Image source={require('../../assets/images/krismarket.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.KrisText}>Kris Marketing</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>

                <View>
                    <Image source={require('../../assets/images/ella.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.EllaText}>ELLA</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.TouchView} onPress={() => navigation.navigate('Restaurant')}>
                <View style={styles.Footer}>
                <Text style={styles.Sulat}>View</Text>
                <Text style={styles.Sulat1}>All</Text>
                </View>
                </TouchableOpacity>
        </View>

        <View>  
            <Text style={styles.Restxt}>PHARMACIES</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10,}} showsHorizontalScrollIndicator={false} style={styles.BoxRes}>
                <View>
                    <Image source={require('../../assets/images/drugmart.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.SisText}>4 Sister's Drugmart</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>

                <View>
                    <Image source={require('../../assets/images/ashir.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.AshText}>Ashir Pharmacy</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.TouchView} onPress={() => navigation.navigate('Restaurant')}>
                <View style={styles.Footer}>
                <Text style={styles.Sulat}>View</Text>
                <Text style={styles.Sulat1}>All</Text>
                </View>
                </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.Restxt}>FARM SUPPLIES STORES</Text>
            <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 10, paddingVertical: 10,}} showsHorizontalScrollIndicator={false} style={styles.BoxRes}>
                <View>
                    <Image source={require('../../assets/images/lime.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.LimeText}>Lime Orange Agrium Inc.</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>

                </View>

                <View>
                    <Image source={require('../../assets/images/pacificaagri.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.PacText}>Pacifica Agrivet Supply</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>

                <View>
                    <Image source={require('../../assets/images/mciagri.png')} style={styles.Image} />
                    <View style={styles.Bastagroup}>
                    <Text style={styles.mciText}>MCI Agriventure</Text>
                    <View style={styles.Box}>
                    <MaterialIcons name='location-on' size={30} color='black' style={styles.Locicon} />
                    <Text style={styles.TextLocation}>District 4, Sibalom, Antique</Text>
                    </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.TouchView} onPress={() => navigation.navigate('Restaurant')}>
                <View style={styles.Footer}>
                <Text style={styles.Sulat}>View</Text>
                <Text style={styles.Sulat1}>All</Text>
                </View>
                </TouchableOpacity>
                
        </View>
        </ScrollView>


 
 
   </View>
  );
};



export default BusinessCategory

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fed053',
        position: 'absolute',
        width: '100%',
        height: '110%',
    },
    ScrollView: {
        marginBottom: 90,
    },
    Footer: {
        alignSelf: 'center',
        top: 70,
    },
    TouchView: {
        backgroundColor: 'rgba(255, 255, 255, 0.8 )',
        width: 80,
        height: 200,
        borderRadius: 10,
        alignSelf: 'flex-end',
        top: 68,
        right: 45,
        position: 'absolute',
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
    TextTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 100,
    },
    Restxt:{
        fontSize: 25,
        alignSelf: 'flex-start',
        marginTop: 30,
        marginLeft: 30,
    }, 
    Image: {
        width: 300,
        height: 200,
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 20,
    },
    Bastagroup: {
        position: 'absolute',
        top: 158,
        backgroundColor: 'rgba(255, 255, 255, 0.6 )',
        width: 300,
        left: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    PlaceText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        right: 80,
        top: 8,
        
    },
    Locicon: {
        alignSelf: 'center',
        marginTop: 10,
    },
    TextLocation: {
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 10,
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
    BoxRes: {
        bottom: 20,
        marginRight: 35,
        marginLeft: 35,
    },
    SariText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        right: 90,
        top: 8,
    },
    KrisText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        right: 70,
        top: 8,
    },
    EllaText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
    SisText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
    AshText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
    LimeText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
    PacText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
    mciText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        left: 10,
        top: 8,
    },
   

})
