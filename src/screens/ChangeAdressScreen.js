import React, { useEffect, useState } from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,
        Input } from 'react-native-elements';
import { sub } from 'react-native-reanimated';

import GLOBAL from '../data/global';

const ChangeAdressScreen = ({route,navigation}) => {
    const [Email, setEmail] = useState(GLOBAL.email);
    const [Address, setAddress] = useState('');
    const [ConnectionError, setConnectionError] = useState('');
    const submit = () => {

        //Remove This After Fix The Error
        navigation.navigate('Home');

        fetch('http://192.168.8.165:3000/changeaddress/change', {
            method: 'POST',
            headers: {
                        Accept : 'application/json',
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify({
                email: Email,
                address: Address
            })
    }).then((response) =>
        response.json()
    )
    .then((responseJson) => {
        const res = JSON.stringify(responseJson);
        if(res == '{"valid" : "Changed"}'){
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
            >Enter New Address Here!</Text>
            <Input
                style={styles.inputEmail}
                placeholder='Input Address Here!'
                onChangeText={(e) => setAddress(e.trim())}
            />
            <Text>{ConnectionError}</Text>

            <TouchableOpacity//Button For Submit Email
            onPress={() => submit()}
            >
            <View style={styles.nextbutton}>
                    <Text style={{fontSize: 20,
                            color: '#eff8ff'}}>Changed       </Text>
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
    }
});

export default ChangeAdressScreen;