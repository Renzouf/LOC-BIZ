import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ResetPass = () => {
    const navigation = useNavigation();
    const [searchTerm, setSearchTerm] = useState('');
    const [isValid, setIsvalid] = useState(true);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const registeredEmailsAndPhones = [
        'user@example.com',
        '09289893472',
        'mayora@gmail.com',
        '09123456789',
    ];

    const handleSearch = () => {
        if (registeredEmailsAndPhones.includes(searchTerm)) {
            Alert.alert('Success', 'Reset instructions have been sent to your email or phone',
            [
                {
                    text: 'Continue',
                    onPress: () => setShowPasswordFields(true),
                },
            ],
            { cancelable: false }
            );
        } else {
            setIsvalid(false);
            alert('Email or phone number not found. Please try again.');
        }
    };

    const handleSubmitNewPassword = () => {
        if (newPassword === confirmPassword) {
            Alert.alert('Success', 'Your password has been reset successfully',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('LogIn'),
                },
            ],
            { cancelable: false }
            );
            
        } else {
            Alert.alert('Error', 'Passwords do not match. Please try again.');
        }
    }


  return (
    <View style={styles.Container}>
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name='leftcircleo' size={40} color='#3b3f46' style={styles.BackIcon} />
            </TouchableOpacity>
        </View>

        <Text style={styles.TextTitle}>Reset Password</Text>

        <Text style={styles.Texttwo}>Search your Email or Phone No.</Text>

        <View style={styles.InputContainer}>
            <TextInput
                placeholder='Email or Phone'
                placeholderTextColor='rgba(59, 63, 70, 0.3)'
                style={styles.Input}
                onChangeText={setSearchTerm}
                value={searchTerm}
                autoCapitalize="none"
            />
            <TouchableOpacity onPress={handleSearch} style={styles.SearchIconContainer}>
                    <AntDesign name="search1" size={24} color="#3b3f46" />
            </TouchableOpacity>
        </View>

        {showPasswordFields && (
                <View style={styles.PasswordFieldsContainer}>
                    <Text style={styles.TextTwo}>Enter New Password</Text>
                    <TextInput
                        placeholder="New Password"
                        placeholderTextColor="rgba(59, 63, 70, 0.3)"
                        style={styles.Input}
                        secureTextEntry
                        onChangeText={setNewPassword}
                        value={newPassword}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor="rgba(59, 63, 70, 0.3)"
                        style={styles.Input}
                        secureTextEntry
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                    <TouchableOpacity onPress={handleSubmitNewPassword} style={styles.SubmitButton}>
                        <Text style={styles.SubmitButtonText}>Submit New Password</Text>
                    </TouchableOpacity>
                </View>
            )}



    </View>
  )
}

export default ResetPass;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fed053',
        position: 'absolute',
        width: '100%',
        height: '110%',
    },
    TextTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 170,
    },
    BackIcon: {
        alignItems: 'flex-start',
        position: 'absolute',
        top: 100,
        left: 30,
    },
    Texttwo: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 50,
    },
    InputContainer: {
        marginTop: 20,
        marginLeft: 30,
        position: 'relative',
    },
    Input: {
        height: 60,
        borderColor: '#3b3f46',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
        paddingRight: 40,
        fontSize: 18,
        width: 350,

    },
    SearchIconContainer: {
        position: 'absolute',
        right: 50,
        top: '40%',
        transform: [{ translateY: -12 }],
    },
    ErrorText: {
        color: 'red',
        fontSize: 16,
        marginBottom: 10,
        alignSelf: 'center',
    },
    SearchButton: {
        backgroundColor: '#3b3f46',
        paddingVertical: 12,
        borderRadius: 10,
        width: 350,
        alignSelf: 'center',
    },
    SearchButtonText: {
        color: '#f5b301',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    PasswordFieldsContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    TextTwo: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: 30,
        bottom: 10,
    },
    SubmitButton: {
        backgroundColor: '#3b3f46',
        paddingVertical: 12,
        borderRadius: 10,
        width: 350,
        height: 60,
        alignSelf: 'center',
        top: 50,
    },
    SubmitButtonText: {
        color: '#f5b301',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        top: 10,
    },
})
