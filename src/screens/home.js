import React from 'react';
import { StyleSheet, Button, View ,Text,TouchableOpacity,Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.logoContainer}>
            <Image 
            resizeMode="contain" 
            style={styles.logo}
            source={require('../assets/first.jpg')}/>
            
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.boldText}>Blood Bank</Text>
      </View>
      
      <View style={styles.textContainer2}>
      <Text style={styles.boldText2}>Donate Blood Save Lives</Text>
      </View>

      <View style={styles.logoContainer2}>
            <Image 
            resizeMode="contain" 
            style={styles.logo2}
            source={require('../assets/second.jpg')}/>
            
      </View>
        
        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 30,
                                borderRadius: 15
                            }}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>Register <AntDesign name="adduser" size={20} /></Text>
        </TouchableOpacity>
        
        <TouchableOpacity
                            activeOpacity={0.7}
                            style=
                            {{
                                backgroundColor: "#fff",
                                color: "#EF5350",
                                padding: 10,
                                margin: 10,
                                marginTop: 30,
                                borderRadius: 15
                            }}
                            onPress={() => this.props.navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>Login <AntDesign name="login" size={20} /></Text>
        </TouchableOpacity>

      </View>
    );
  }
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo:{
    width:70,
    height:70,
    
},
logoContainer:{

    position:'absolute',
    top:20,
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
