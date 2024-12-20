import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LogIn = () => {

    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === '' && password === '') {
            Alert.alert('Error', 'Please fill in both username and password');
        } else {
            Alert.alert('Success', 'Login Successful');
        }
    };

    const handleForgotPassword = () => {
        Alert.alert(
            'Forgot Password', 
            'Please follow the instructions to reset your password',
        [
            {
                text: 'OK',
                onPress: () => navigation.navigate('ResetPass'),
            },
        ],
        { cancelable: false }
);
      
    }




  return (
    <View style={styles.Container}>
        <View>
            <Text style={styles.TextTitle}>Log In</Text>
        </View>
        

        <View style={styles.InputContainer}>
            <TextInput
                placeholder='Username'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText= {setUsername}
                value={username}
                autoCapitalize="none"
            />
            <TextInput
                placeholder='Password'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText= {setPassword}
                value={password}
                secureTextEntry
            />
        </View>

        <View>
            <TouchableOpacity style={styles.LoginButton} onPress={() => navigation.navigate('BusinessCategory')}>
                <Text style={styles.LoginButtonText}>Log In</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={styles.ForgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={styles.Text2}>Don't have an account?</Text>
        </View>

        <View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.SignUpText}>Sign Up</Text>
            </TouchableOpacity>
        </View>




    </View>
  )
}

export default LogIn;

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
InputContainer: {
    marginBottom: 30,
    alignSelf: 'center',
    top: 70,
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
LoginButton: {
    backgroundColor: '#3b3f46',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    top: 100,
    width: 350,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
  },
LoginButtonText: {
    color: '#f5b301',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
ForgotPasswordText: {
    textAlign: 'right',
    right: 40,
    color: '#007bff',
    bottom: 10,
    fontSize: 16,
  },
Text2: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3b3f46',
    top: 290,
},
SignUpText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#3b3f46',
    top: 300,
    textDecorationLine: 'underline',
}
})
