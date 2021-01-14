import React,{useEffect, useState} from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,
        Input } from 'react-native-elements';


const EnterEmailScreenAdress = ({navigation}) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const [EmailError, setEmailError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [ConnectionError, setConnectionError] = useState('');

    const submit = () => {
        //Remove This After Fix The Error
        navigation.navigate('Enter New Adress', {email: Email});
      
        fetch('http://192.168.8.165:3000/changeaddress', {
            method: 'POST',
            headers: {
                        Accept : 'application/json',
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify({
                email: 'sdilansilva@gmail.com',
                pasword: 'password'
            })
    })
    // .then((response) =>
    //     response.json()
    // )
    .then((responseJson) => {
        
        //console.log(JSON.stringify(responseJson));
        //const res = JSON.stringify(responseJson);
        const res = JSON.stringify(responseJson);
        console.log(res);
        if(res == '{"Invalid":"InvalidEmail"}'){
            setPasswordError('');
            setConnectionError('');
            setEmailError('Invalid Email! Try Again');
        }else if(res == '{"Invalid":"InvalidPassword"}'){
            setPasswordError('Invalid Password!Try Again');
            setConnectionError('');
            setEmailError('');
        }else if(res == '{"Valid":"ValidPasswordEmail"}'){
            setPasswordError('');
            setEmailError('');
            console.log('Success');

            //Remove this comment after fix the error
            //navigation.navigate('Enter New Phone Number');
        }
    })
        .catch((error) => {
            
           setConnectionError('Network Error');
    });
}

    return(
        <View style={styles.mainCmp}>
            <Text 
                style={styles.mainText}
            >Enter Email And Password</Text>
            <Input
                style={styles.inputEmail}
                placeholder='Input Email Here!'
                onChangeText={(e) => setEmail(e.trim())}
            />
            <Text style={styles.ErrorText}>{EmailError}</Text>
            <Input
                style={styles.inputEmail}
                placeholder='Input Password Here!'
                secureTextEntry={true}
                onChangeText={(e) => setPassword(e.trim())}
            />
            <Text style={styles.ErrorText}>{PasswordError}</Text>
            <Text style={styles.ErrorText}>{ConnectionError}</Text>

            <TouchableOpacity//Button For Submit Email
            onPress={submit}
            >
            <View style={styles.nextbutton}>
                    <Text style={{fontSize: 20,
                            color: '#eff8ff'}}>Next       </Text>
                    <Icon
                        name="arrow-right" 
                        style={{fontSize: 27, color: '#eff8ff'}}
                    />
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainCmp : {
        alignItems: 'center',
        marginTop : 30
    },mainText : {
        fontSize: 30,
        
    },inputEmail : {
        marginTop: 30,
        textAlign: 'center'
    }, nextbutton : {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#21209c',
        marginVertical: 10
    },ErrorText: {
        color: 'red'
    }
});

export default EnterEmailScreenAdress;