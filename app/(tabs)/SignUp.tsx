import { AntDesign } from '@expo/vector-icons';
import React, {useState} from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailOrPhone, setEmailOrPhone] = useState('');

    const handleSignUp = () => {
        if (username === '' && password === '' && emailOrPhone === '') {
            Alert.alert('Error', 'Please fill in all fields');
        } else {
            Alert.alert('Success', 'Sign Up Successful');
    }
};

  return (
    <View style={styles.Container}>
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='leftcircleo' size={40} color='#3b3f46' style={styles.BackIcon} />
            </TouchableOpacity>
        </View>

        <Text style={styles.TextTitle}>Sign Up</Text>

        <View style={styles.InputContainer}>
            <Text style={styles.Texttwo}>Username:</Text>
            <TextInput
                placeholder='Username'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText= {setUsername}
                value={username}
                autoCapitalize="none"
            />
            <Text style={styles.Texttwo}>Password:</Text>
            <TextInput
                placeholder='Password'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText= {setPassword}
                value={password}
                secureTextEntry
            />
            <Text style={styles.Texttwo}>Email/Phone No.:</Text>
            <TextInput
                placeholder='Email or Phone'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText= {setEmailOrPhone}
                value={emailOrPhone}
                autoCapitalize="none"
            />
        </View>

        <View>
            <TouchableOpacity style={styles.SignupButton} onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.SignupButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp;

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
        marginTop: 170,
    },
    BackIcon: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: 100,
        left: 35,
    },
    InputContainer: {
        marginBottom: 30,
        alignSelf: 'center',
        top: 20,
      },
    Input: {
        height: 60,
        borderColor: '#3b3f46',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 15,
        width: 350,
        fontSize: 18,
      },
    Texttwo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 15,
      },
    SignupButton: {
        backgroundColor: '#3b3f46',
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        top: 100,
        width: 350,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
      },
    SignupButtonText: {
        color: '#f5b301',
        fontSize: 20,
        fontWeight: 'bold',
        top: 8,
      },
})