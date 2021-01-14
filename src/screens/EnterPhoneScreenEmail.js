import React,{useState} from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const EnterPhoneScreenEmail = ({navigation}) => {
    const [Email, setEmail] = useState('');//stste for Email
    const [Password, setPassword] = useState('');//state for password

    const [EmailError, setEmailError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [ConnectionError, setConnectionError] = useState('');

    const submit = () => {

        //Remove This After Fix The Error
        navigation.navigate('Enter New Phone Number', {
            emailParam: Email
        });

        fetch('http://192.168.8.165:3000/changephonenumber', {
            method: 'POST',
            headers: {
                        Accept : 'application/json',
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify({
                email: 'sdilansilva@gmail.com',
                pasword: 'password'
            })
    }).then((response) =>
        response.json()
    )
    .then((responseJson) => {
        console.log(responseJson);
        const res = JSON.stringify(responseJson);
        if(res == '{"Invalid":"InvalidEmail"}'){
            setEmailError('Invalid Email! Try Again');
        }else if(res == '{"Invalid":"InvalidPassword"}'){
            setPasswordError('Invalid Password!Try Again');
        }else if(res == '{"Valid":"ValidPasswordEmail"}'){
            setPasswordError('');
            setEmailError('');

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
                onChangeText={(e) => {setEmail(e.trim()) }}
            />
            <Text style={styles.textError}>{EmailError}</Text>
            <Input
                style={styles.inputPassword}
                placeholder='Input Password Here!'
                secureTextEntry={true}
                onChangeText={(e) => {setPassword(e.trim()) }}
            />
            <Text style={styles.textError}>{PasswordError}</Text>
            
            <TouchableOpacity//Button For Submit Email
            onPress={() => submit()}
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
        <Text style={styles.textError}>{ConnectionError}</Text>
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
    },inputPassword : {
        textAlign: 'center'
    }, nextbutton : {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#21209c',
        marginVertical: 10
    },textError : {
        color: 'red'
    }
});

export default EnterPhoneScreenEmail;