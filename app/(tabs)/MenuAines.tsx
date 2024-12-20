import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const MenuAines = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.Container}>
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name='leftcircleo' size={40} color='#3b3f46' style={styles.BackIcon} />
        </TouchableOpacity>
    </View>

    <Text style={styles.MenuText}>Menu</Text>



    
    </View>

  )
}

export default MenuAines

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
    MenuText: {
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        alignSelf: 'center',
        top: 150,
    },
});
