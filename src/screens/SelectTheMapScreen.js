import React from 'react';
import {Text,
        View,
        Image,
        StyleSheet,
        Dimensions,
        TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SelectTheMapScreen = ({navigation}) => {
    return (
        <View
            style={{alignItems: 'center',
                    backgroundColor: 'white',
                    height: (Dimensions.get('window').height)
                  }}
        >
            <Animatable.Image
            animation="bounceInDown"
            duration={3000}
                source={require('../../assets/Directions-bro.png')}
                style={{
                    height: '40%',
                    width: '65%',
                    resizeMode: 'stretch'
                }}
            />
            
            
            <Animatable.Text 
                animation="bounceInUp" 
                duration={3000}
                style={{ textAlign: 'center',fontSize: 25 }}
            >Search By</Animatable.Text>
            <Animatable.View
                animation="bounceInLeft"
                duration={3000}
                style={{marginTop: 20}}
            >
            
                <TouchableOpacity //Button for Select nearest Blood Donation Camps
                    style={{alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10}}
                    onPress={() => navigation.navigate('View By Location')}
                >
               
                <View style = {styles.viewComponent}>
                    <Text style = {styles.textComponent}>Current Location</Text>
                </View>
                </TouchableOpacity>
            </Animatable.View>
                

            
        </View>
    );
};

const styles = StyleSheet.create({
    viewComponent: {
        backgroundColor: '#16a596', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 100,
        width: (Dimensions.get('window').width)*(0.5),
        height: 50,
        borderWidth : 3, 
    },
    textComponent: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default SelectTheMapScreen;