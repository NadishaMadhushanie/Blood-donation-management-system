import React, 
      { useState, 
        useEffect } from 'react';
import { Text, 
         View, 
         StyleSheet,
         Dimensions,
         ActivityIndicator,
         Image } from 'react-native';
import * as Location from 'expo-location';
import MapView, 
       {Marker, 
       PROVIDER_GOOGLE,
       Callout,
       OverlayComponent}  from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { getDistance } from 'geolib';

import * as Animatable from 'react-native-animatable';
import { Animated } from 'react-native';

import {markers} from '../data/mapData';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import GLOBAL from '../data/global';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;



const GetUserCoordsScreen = ({navigation}) => {

  const {width, height} = Dimensions.get('window');//get width and height of screen
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const [location, setLocation] = useState(0);
  const [errorMsg, setErrorMsg] = useState(0);

  const [currLatitude, setcurrLatitude] = useState(0);
  const [currLongitude, setcurrLongitude] = useState(0);

  const [tapLatitude, settaplatitude] = useState(0);//get the clicked location
  const [taplongitude, settaplongitude] = useState(0);
  

  
  
  


  const CloserCamps = [];

  useEffect(() => {
    
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});//get current location as an arrays
      setcurrLatitude(Number(JSON.stringify(location.coords.latitude)));//Get the current latitude and typecaste to number
      setcurrLongitude(Number(JSON.stringify(location.coords.longitude)));//Get the current longitude and typecaste to number

    })();
  }, []);



  return (
    <View style={styles.container}> 
      <MapView
            //onDoublePress={ (event) => console.log(event.nativeEvent.coordinate) }
            onDoublePress={ (event) => {settaplatitude(event.nativeEvent.coordinate.latitude);
                                        settaplongitude(event.nativeEvent.coordinate.longitude);
                                        GLOBAL.latitude = event.nativeEvent.coordinate.latitude;
                                        GLOBAL.longitude = event.nativeEvent.coordinate.longitude;
                                        navigation.navigate('Sign-In');
                                        } }
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
              latitude: currLatitude,
              longitude: currLongitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA 
                          }}
      >
      <MapView.Marker//add marker when user click
              
      coordinate={{
        latitude: currLatitude,
        longitude: currLongitude
      }}
      title="Your Location"
      discription="Your Current Location"
  />
     

  
         

          

         
              
      </MapView>
     
    </View>
  );
}

export default GetUserCoordsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: '100%',
    width: '100%'
    },
  scrollview: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2},
    height: 200,
    width: 300,
    overflow: 'hidden'
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center'
  },
  textContent: {
    flex: 2,
    padding: 10
  },
  cardtitle: {
    fontSize: 12,
    color: '#444'
  },
  cardDescription: {
    fontSize: 12,
    color: "#444"
  },
    container: {
      flex: 1,
    },
    searchBox: {
      position:'absolute', 
      marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
      width: '90%',
      alignSelf:'center',
      borderRadius: 5,
      padding: 10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    chipsScrollView: {
      position:'absolute', 
      top:Platform.OS === 'ios' ? 90 : 80, 
      paddingHorizontal:10
    },
    chipsIcon: {
      marginRight: 5,
    },
    chipsItem: {
      flexDirection:"row",
      backgroundColor:'#fff', 
      borderRadius:20,
      padding:8,
      paddingHorizontal:20, 
      marginHorizontal:10,
      height:35,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 10,
    },
    scrollView: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      paddingVertical: 10,
    },
    endPadding: {
      paddingRight: width - CARD_WIDTH,
    },
    card: {
      // padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: CARD_HEIGHT,
      width: CARD_WIDTH,
      overflow: "hidden",
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
    textContent: {
      flex: 2,
      padding: 10,
    },
    cardtitle: {
      fontSize: 12,
      // marginTop: 5,
      fontWeight: "bold",
    },
    cardDescription: {
      fontSize: 12,
      color: "#444",
    },
    markerWrap: {
      alignItems: "center",
      justifyContent: "center",
      width:50,
      height:50,
    },
    marker: {
      width: 30,
      height: 30,
    },
    button: {
      alignItems: 'center',
      marginTop: 5
    },
    signIn: {
        width: '100%',
        padding:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
  });
