import React, { useState} from 'react';
import {View, 
        Text, 
        StyleSheet,
        TouchableOpacity, 
        Dimensions} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import GLOBAL from '../data/global';

const LoginScreen = ({navigation}) => {

   const[email,setemail] = useState('');//state for email
   const[password,setpassword] = useState('');//state for password

   const[emailError, setemailError] = useState('');
   const[passwordError, setpasswordError] = useState('');
   const[connectionError, setconnectionError] = useState(' ');

   

    const openMenu = () => {//Navigate
        navigation.openDrawer(); 
    }
    

  const submit = () => {

    
    fetch('http://192.168.8.165:3000/login', {
        method: 'POST',
        //mode: 'cors',
        headers: {
                    Accept : 'application/json',
            'Content-Type' : 'application/json'
            },
        body: JSON.stringify({
            email: email,
            password: password
        })
})
    .then((response) => /*response.json()*/
        response.json()
    )
    .then((responseJson) => {
        console.log(responseJson);
        const res = JSON.stringify(responseJson);
        if(res == '{"Invalid":"InvalidEmail"}'){
            setpasswordError('');
            setconnectionError('');
            setemailError('Invalid Email');
            console.log('invalid email');
        }else if(res == '{"Invalid":"InvalidPassword"}'){
            setemailError('');
            setpasswordError('Invalid Password!');
            console.log('invalid password');
        }else if(res == '{"Valid":"Loggedin"}'){
            GLOBAL.email = email;
            navigation.navigate('Home');
            
        }
    })
        .catch((error) => {
            setconnectionError('Connection Error');
            console.log(error);
            console.log('error');
    });

    //navigation.navigate('Home');

  };

    return(
       
        <View>
                <HeaderComponent
                    openMenu={openMenu}
                />
        <View
            style={styles.viewComponent}>

            <Animatable.Image
                animation="bounceIn"
                duration={2000}
                source={require('../../assets/Login-pana.png')}
                style={{
                    height: 120,
                    width: 120,
                    resizeMode: 'stretch'
                }}
            />

            <Text style={styles.errorMsg}>{emailError}</Text>
            <Input //Input for Email
               
                placeholder='Enter Email Here'
                style={styles.email}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholderTextColor='black'
                onChangeText={(e) => {setemail(e.trim()) }}
                
                leftIcon={
                <Icon
                    name='user'
                    size={24}
                    color='black'
                />
                        }
            />
        
            <Text style={styles.errorMsg}>{passwordError}</Text>
            <Input
                placeholder='Enter Password here'
                style={styles.email}
                secureTextEntry={true}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholderTextColor='black'
                onChangeText={(e) => {setpassword(e.trim())}}
                leftIcon={
                <Icon
                    name='lock'
                    size={24}
                    color='black'
                />
                    }
            />
            <Text style={styles.errorMsg}>{connectionError}</Text>

            <TouchableOpacity 
            onPress={() => {submit()}}//Create Account Button
            
            >
            <View style = {{backgroundColor: '#f05454', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            borderWidth : 3, 
                            borderRadius: 100,
                            width: (Dimensions.get('window').width)*(0.55),
                            height: 50}}
            >
                <Text style = {{color: 'black',
                                fontWeight: 'bold',
                                fontSize: 20}}>Log-In</Text>
            </View>
        </TouchableOpacity>
        </View>
        
            <TouchableOpacity
                onPress={() => navigation.navigate('Enter Email')}
            >
                <Text 
                    style={{color: 'blue',
                            marginTop : 20,
                            textAlign: "center",
                            textDecorationLine: 'underline',
                            fontSize: 15
                        }}
                >
                Forget password?
                </Text>
            </TouchableOpacity>

            </View>          
         
    )
}

const styles = StyleSheet.create({
   
    viewComponent : {
        paddingTop : 100,
        marginTop : 90
    },
   
   email : {
       marginHorizontal : (Dimensions.get('window').width)*(0.001),
       borderWidth : 2,
       borderRadius : 100,    
       backgroundColor: '#fff3e2',
       textAlign: 'center',
   },
   viewComponent : {
    alignItems : 'center'   
   },
   errorMsg : {
       color : 'red'
   }
});

export default LoginScreen;
