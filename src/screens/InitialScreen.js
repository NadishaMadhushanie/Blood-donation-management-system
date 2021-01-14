import React from 'react';
import {View,
        Text,
        TouchableOpacity,
        StyleSheet,
        Dimensions,
         } from 'react-native';
import * as Animatable from 'react-native-animatable';



const InitialScreen= ({navigation}) => {
    return(
        <View  style={{
                        alignItems: 'center',
                        backgroundColor: 'white',
                        height: (Dimensions.get('window').height),
                    
        }}>
        
            <Animatable.Image
                animation="bounceInDown"
                duration={3000}
                source={require('../../assets/5fb4b597dcc35.jpg')}
                style={styles.image}
            />
            <Animatable.View 
                animation="bounceInUp"
                duration={3000}
                style={styles.mainComponent}
            >
                <TouchableOpacity //Button for Sign-In button
                    onPress={() => navigation.navigate('Sign-In')}
                    style={{alignItems: 'center',
                            justifyContent: 'center'}}
                >
                     <View style = {styles.viewComponent}>
                        <Text style = {styles.textComponent}>Sign-In</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity //Button for Log-In Button
                    onPress={()=> navigation.navigate('Log-In')}
                    style={{alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 10}}
                >
                    <View style = {styles.viewComponent}>
                        <Text style = {styles.textComponent}>Log-In</Text>
                    </View>
                </TouchableOpacity>
    </Animatable.View>
        </View>
    );
}

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
    },
    mainComponent : {
        marginTop: (Dimensions.get('window').height)*(0.1)
    },
    image: {
            marginTop: 80,
            height: (Dimensions.get('window').height)*(0.3),
            width: (Dimensions.get('window').width)*(0.5),
            resizeMode: 'stretch',
            alignItems: 'center'
    }
});
export default InitialScreen;