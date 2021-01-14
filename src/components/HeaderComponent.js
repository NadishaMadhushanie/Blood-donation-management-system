import React from 'react';
import { View, 
         Text, 
         StyleSheet,
         Image,
         Dimensions,
         StatusBar } from 'react-native';
import {  Entypo} from '@expo/vector-icons';


const HeaderComponent = () => {
    
    return(
       <View style={styles.header}>

            <Image
                source={require('../../assets/5fb4ea5a886ab.jpg')}
                style={styles.bloodDrop}
            />     

            <View style={{justifyContent: 'center'}}>
                <Text style={styles.bloodBankHeading}>
                    Blood Bank  
                </Text>

                <Text style={styles.bloodBanHeading2}>
                    Donate Blood Save Lives
                </Text>
            </View>

            
            <StatusBar style="auto" />
       </View> 
    ); 
};


  
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#E64C4C',
        width: Dimensions.get('window').width
    }, 
    bloodDrop: {
        width: (Dimensions.get('window').width)*(0.2777),
        height: (Dimensions.get('window').width)*(0.2777),
        resizeMode: 'stretch',
        marginLeft: '2.7%', // get the dimensions
        marginBottom: '2.7%',
        marginRight: '2.7%',
        marginTop: '2.7%',
        borderRadius: 10000,
        overflow: "hidden"
    },
    bloodBankHeading: {
        fontSize: 40,
        fontWeight: "bold",
        borderBottomWidth: 2,
        letterSpacing: 2
    },
    icon: {
        marginTop: 30
    },
    bloodBanHeading2: {
        letterSpacing: 2,
        fontSize: 15
    }
});

export default HeaderComponent;