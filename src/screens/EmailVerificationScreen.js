import React,{useEffect, useState} from 'react';
import {View,
        Text,
        Image,
        StyleSheet,
        } from 'react-native';
import { Button,
         Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import GLOBAL from '../data/global';

const EmailVerificationScreen = ({navigation}) => {

    const [code, setCode] = useState();

    const sendAgain = () => {
        
            fetch('http://192.168.8.165:3000/resetone', {
                method: 'POST',
                //mode: 'cors',
                headers: {
                            Accept : 'application/json',
                    'Content-Type' : 'application/json'
                    },
                body: JSON.stringify({
                    message : 'Send Again',
                    emailAgain : GLOBAL.email
                })
        })
    }
    

    useEffect(
       () => {
        fetch('http://192.168.8.165:3000/resetone', {
            method: 'POST',
            //mode: 'cors',
            headers: {
                        Accept : 'application/json',
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify({
                email: GLOBAL.email
            })
    })
       }
        ,[]);

    const submit = () => {
       
        fetch('http://192.168.8.165:3000/resetone', {
        method: 'POST',
        //mode: 'cors',
        headers: {
                    Accept : 'application/json',
            'Content-Type' : 'application/json'
            },
        body: JSON.stringify({
            code : code
        })
})
    .then((response) => /*response.json()*/
        response.json()
    )
    .then((responseJson) => {
       console.log(responseJson);
    })
    .catch((error) => {
           
    });
  
    }

    return(
    <ScrollView>
        <View style={styles.mainComponent}>
            <Image
                source={require('../../assets/Confirmed-bro.png')}
                style={styles.mainImage}
            />

                <View style={styles.mailAgain}>
                    <Text style={{marginBottom: 10}}>Didn't get code yet?chech your mails</Text>
                    <Button
                        title="Send verification code again"
                        onPress={() => {sendAgain}}
                    />
                    <Text style={{marginTop: 40}}>
                        enter the verification code here!
                    </Text>
                   
                </View>

                <Input
                    placeholder='Enter the code here'
                    style={{textAlign: 'center'}}
                    onChangeText={(e) => setCode(e)}
                    leftIcon={
                        <Icon
                          name='lock'
                          size={24}
                          color='black'
                        />
                      }
                />

                <Button
                    title="Create an account"
                    onPress={() => {submit;
                        navigation.navigate('Home');
                    }}
                />
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainImage: {
        width : 200,
        height: 200,
        resizeMode: 'stretch'
    },
    mainComponent: {
        alignItems: 'center',
        marginBottom: 100
    },
    mailAgain: {
        marginTop: 50
    }
});
export default EmailVerificationScreen;
