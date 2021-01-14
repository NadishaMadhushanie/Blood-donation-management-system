//import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Button, View ,Text,TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Profile extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        
        <View style={styles.logoContainer}>
            <Image 
            resizeMode="contain" 
            style={styles.logo}
            source={require('../assets/profile.png')}/>
            
      </View>
      
        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 250,
                                borderRadius: 15
                            }}
                            //onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>View blood donation camps </Text>
                            
        </TouchableOpacity>
        
        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 10,
                                borderRadius: 15
                            }}
                            //onPress={() => this.props.navigation.navigate("Appoint")}
                            onPress={() => this.props.navigation.navigate("ExampleOne")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>Make an appointment</Text>
        </TouchableOpacity>

        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 10,
                                borderRadius: 15
                            }}
                            //onPress={() => this.props.navigation.navigate("Appointment")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>View previous blood donations</Text>
        </TouchableOpacity>

        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 10,
                                borderRadius: 15
                            }}
                            onPress={() => this.props.navigation.navigate("Qrcode")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>QR code</Text>
        </TouchableOpacity>

      </View>
      /*<View>
          <Text>this is profile</Text>
      </View>*/
    );
  }
}
export default Profile
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    logo:{
      width:100,
      height:100,
      
  },
  logoContainer:{
  
      position:'absolute',
      top:80,
      alignItems:"stretch",
  },
  logo2:{
    width:90,
    height:90,
    
  },
  logoContainer2:{
  
    //position:'absolute',
    top:60,
    alignItems:"center",
  },
  textContainer:{
    top:50,
    alignItems:"center",
  padding:15,
  //justifyContent:"space-around",
  //position:"absolute",
  },
  textContainer2:{
    alignItems:"flex-end",
    padding:0,
    //justifyContent:"space-around",
    //position:"absolute",
    },
    boldText:{
      fontWeight:'bold',
      fontSize:40,
      fontFamily:"monospace",
      //fontStyle:'underline',
    },
    boldText2:{
      fontWeight:'bold',
      fontSize:25,
      //fontStyle:'underline',
      fontFamily:"monospace",
    },
  });
