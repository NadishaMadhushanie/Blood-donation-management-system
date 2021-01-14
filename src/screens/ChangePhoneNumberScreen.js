import React,{useState} from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,
        Input } from 'react-native-elements';

const ChangePhoneNumberScreen = ({ route, navigation }) => {
    const [phoneNumber, setphoneNumber] = useState(0);
    const [Email, setEmail] = useState(route.params.emailParam);//set a email prev screen
    const [ConnectionError,setConnectionError] = useState('');
    const submit = () => {

        //Remove This After Fix The Error
        //navigation.navigate('Home');

        fetch('http://192.168.8.165:3000/changephonenumber/changephone', {
            method: 'POST',
            headers: {
                        Accept : 'application/json',
                'Content-Type' : 'application/json'
                },
            body: JSON.stringify({
                email: 'sdilansilva@gmail.com',
                telephone: phoneNumber
            })
    }).then((response) =>
        response.json()
    )
    .then((responseJson) => {
        const res = JSON.parse(responseJson); 
    })
        .catch((error) => {
           setConnectionError('Network Error');
    });
    navigation.navigate('Home');
}

    //
    //
    // Enter New Phone Number Screen
    //
    //
    return(
        <View style={styles.mainCmp}>
            <Text 
                style={styles.mainText}
            >Enter New Phone Number!</Text>
            <Input
                style={styles.inputEmail}
                placeholder='Input Phone Number Here!'
                keyboardType = 'numeric'
                onChangeText={(e) => {setphoneNumber(e)}}
            />
            <Text style={{color: 'red'}}>{ConnectionError}</Text>

            <TouchableOpacity//Button For Submit Email
            onPress={submit}
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

export default ChangePhoneNumberScreen;