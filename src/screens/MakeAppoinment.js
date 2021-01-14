import React,{useState} from 'react';
import { Button, 
         View, 
         Text, 
         StyleSheet,
         ScrollView,
         Dimensions,
         Image } from 'react-native';
import { MaterialIcons, AntDesign} from '@expo/vector-icons';

const MakeAppoinment = () => {
    return(
        <View style={{alignItems: 'center',
                      backgroundColor: 'white',
                        height: (Dimensions.get('window').height)}}>
            <Image
                source={require('../../assets/5fb4b597dcc35.jpg')}
                style={styles.image}
            />
            <Text>Make Appoinment</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        marginTop: 80,
        height: (Dimensions.get('window').height)*(0.3),
        width: (Dimensions.get('window').width)*(0.5),
        resizeMode: 'stretch',
        alignItems: 'center'
    }
});
export default MakeAppoinment;