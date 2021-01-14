import React,{useState} from 'react';
import {View,
        Image,
        StyleSheet,
        Text,
        Dimensions,
        Button,
        TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import GLOBAL from '../data/global';


const ChangePasswordScreen = ({navigation}) => {

    const [buttonState, setbuttonState] = useState('Hide');
    const [secureText, setSecureText] = useState(true);
    
    const toggleHideShow = () => {
        if(buttonState == 'Hide'){
            setbuttonState('Show');
            setSecureText(true);
        }else{
            setbuttonState('Hide');
            setSecureText(false);
        }
    };    

    const [password, setPassword] = useState('');
    
    const submit = () => {
        navigation.navigate('Home');
        fetch('http://192.168.8.165:3000/resettwo', {
                method: 'POST',
                headers: {
                            Accept : 'application/json',
                    'Content-Type' : 'application/json'
                    },
                body: JSON.stringify({
                    mail: 'sdilansilva@gmail.com',
                    password : password
                })
        })
        }
    


    return(
        <View style={styles.mainCom}>
        <Image
            source={require('../../assets/changepassword.png')}
            style={styles.image}
        />
        <Text
            style={styles.entermail}
        >
           Enter A New Password
        </Text>

   
    <View style={{flexDirection:'row',
                 marginVertical: 20}}>
        <TextInput
            style={{
                    borderWidth: 1,
                    width: '80%',
                    height: 40,
                    borderRadius: 100,
                    textAlign: 'center',
                    marginHorizontal: 5
                }}
            placeholder='Enter Password Here'
            secureTextEntry={secureText}
            onChangeText={(e) => {setPassword(e)}}
        />
        <Button
            title={buttonState}
            color='#21209c'
            onPress={toggleHideShow}
        />
    </View> 
            
                <TouchableOpacity//Button For Submit Email
                    // onPress={() => navigation.navigate('Home')}
                    onPress={submit}
                >
                    <View style={styles.nextbutton}>
                            <Text style={{fontSize: 20,
                                color: '#eff8ff'}}>Change Password </Text>
                            <Icon
                                name="arrow-right" 
                                style={{fontSize: 27, color: '#eff8ff'}}
                            />
                    </View>
                </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    mainCom: {
        alignItems: 'center'
    },
    image: {
        height: '60%',
        width: '60%',
        resizeMode: 'stretch',
        marginTop: 10
    },
    entermail: {
        fontSize: 20,
        fontWeight: 'bold'
    },
        nextbutton : {
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 100,
            padding: 5,
            backgroundColor: '#21209c'
        },
    email : {
        marginRight: 50,
        borderWidth : 2,
        borderRadius : 100,    
        backgroundColor: '#0000',
        textAlign: 'center',
        marginTop: 20
    },
    buttons: {
        flexDirection: 'row'
    },
   
})
export default ChangePasswordScreen;