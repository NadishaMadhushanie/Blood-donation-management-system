import React from 'react';
import { 
         View, 
         Text, 
         StyleSheet,
         TouchableOpacity } from 'react-native';

const FlatButton = ({ text, navigation }) => {
    return( 
        <TouchableOpacity  
            style={styles.touchableOpacity} 
            onPress={() => navigation.navigate('profile')}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Log In</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: '#E64C4C', 
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    touchableOpacity: {
        width: 100,

        marginVertical: 10
    }
});

export default FlatButton;