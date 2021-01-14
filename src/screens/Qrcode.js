import React, { useEffect, useState } from 'react';
import { StyleSheet, 
         View, 
         Dimensions} from 'react-native';
import {
    Text,
    Item as FormItem,
} from 'native-base';
const screen = Dimensions.get('window');
import axios from 'axios';

import QRCode from 'react-native-barcode-builder';
import { sub } from 'react-native-reanimated';

import GLOBAL from '../data/global';


const Qrcode = () => {
    const [ID, setID] = useState('00000000');

    useEffect(
        () => {
          fetch('http://192.168.8.165:3000/qrcode', {
              method: 'POST',
              headers: {
                          Accept : 'application/json',
                  'Content-Type' : 'application/json'
                  },
              body: JSON.stringify({
                  email: GLOBAL.email
              })
      }).then((response) =>
          response.json()
      )
      .then((responseJson) => {
         setID(responseJson.NIC);
      })
          .catch((error) => {
            
      });
      }
        ,[]);

    return(
        <View style={styles.Container}>
            <Text style={styles.TextTitle}>{}</Text>

        <QRCode
            value={ID.toString()}
            //value='978621511v'
            size={100}
            bgColor='#000'
            fgColor='#fff'/>
    </View>
    );
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        margin:10,
        alignItems:'center',
        paddingTop:20
    },

    TextTitle:{
        color:'#c41f27',
        textAlign:'center',
        fontSize:18,
    },
});

export default Qrcode;