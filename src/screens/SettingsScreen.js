import React from 'react';
import { View,
         Text,
         TouchableOpacity,
         StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const SettingsScreen = ({navigation}) => {

    const openMenu = () => {
        navigation.openDrawer(); 
    }

    return(
        <View style={styles.mainComp}>
            <TouchableOpacity//Button For Submit Email
                onPress={() => navigation.navigate('Enter Email for Change Adress')}
            >
                <View style={styles.nextbutton}>
                        <Text style={{fontSize: 20,
                                color: '#eff8ff'}}>Change Address</Text>
                        <Icon
                            name="arrow-right" 
                            style={{fontSize: 27, color: '#eff8ff'}}
                        />
                </View>
            </TouchableOpacity>

            <TouchableOpacity//Button For Submit Email
            onPress={() => navigation.navigate('Enter Email for Change PhoneNumber')}
            >
            <View style={styles.nextbutton}>
                    <Text style={{fontSize: 20,
                            color: '#eff8ff'}}>Change Phonenumber</Text>
                    <Icon
                        name="arrow-right" 
                        style={{fontSize: 27, color: '#eff8ff'}}
                    />
            </View>
        </TouchableOpacity>

        
        </View>
    );
};

const styles = StyleSheet.create({
    mainComp : {
        alignItems: 'center',
        marginTop: 30
    },
    nextbutton : {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#21209c',
        marginVertical: 10
    },
});

export default SettingsScreen;