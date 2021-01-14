import React from 'react';
import {View,
        Image,
        StyleSheet,
        Text,
        Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const EnterCodeScreen = ({navigation}) => {
    return(
        <View style={styles.mainCom}>
        <Image
            source={require('../../assets/Email.png')}
            style={styles.image}
        />
        <Text
            style={styles.entermail}
        >
           Check Your Email!
        </Text>

        <Input //Input for Email
            placeholder='Enter The Code Here'
            style={styles.email}
            inputContainerStyle={{borderBottomWidth:0}}
            placeholderTextColor='black'
        />

            <TouchableOpacity//Button For Submit Email
                onPress={() => navigation.navigate('Change Password')}
            >
                <View style={styles.nextbutton}>
                    <Text style={{fontSize: 20,
                                color: '#eff8ff'}}>Next </Text>
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
        backgroundColor: '#ff8585'
    },
    email : {
        marginHorizontal : (Dimensions.get('window').width)*(0.001),
        borderWidth : 2,
        borderRadius : 100,    
        backgroundColor: '#0000',
        textAlign: 'center',
        marginTop: 20
    }
});

export default EnterCodeScreen;