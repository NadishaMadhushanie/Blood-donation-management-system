
import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,TouchableOpacity,Dimensions,Image,ToastAndroid} from 'react-native';
import MapView from 'react-native-maps';
//import markerImg from './assets/bnew.jpeg';
import {
  
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';


class Locations extends React.Component {

  constructor(props){
    super(props);
    this.state={
      initialRegion:{
        latitude:6.414308,
        longitude:80.82326,
        latitudeDelta:0.0122,
        longitudeDelta:Dimensions.get('window').width/Dimensions.get('window').height,
      },
      marginBottom:1,
      //email:null
  }
}

componentDidMount(){
  this.handleUserLocation();
  setTimeout(()=>this.setState({marginBottom:0}),100)
}

handleUserLocation=()=>{
  navigator.geolocation.getCurrentPosition(pos=>{
    //alert(JSON.stringify(pos))
    this.map.animateToRegion({
      ...this.state.initialRegion,
      latitude:pos.coords.latitude,
      longitude:pos.coords.longitude
    })

    this.setState({
      
      ...this.state.initialRegion,
      latitude:pos.coords.latitude,
      longitude:pos.coords.longitude
    })
    
  },
  err=>{
    console.log(err);
    alert('something went wrong!please select location manually')
  }
  )

}


onChangeValue=initialRegion=>{
  //ToastAndroid.show(JSON.stringify(initialRegion),ToastAndroid.SHORT)
 ToastAndroid.show(JSON.stringify(initialRegion),ToastAndroid.SHORT)
  this.setState({
    initialRegion
  })
 // alert(JSON.stringify(initialRegion),ToastAndroid.SHORT);
}


  render(){
  
    return(
      <View style={{flex:1}}>
        <MapView 
        style={{flex:1,marginBottom:this.state.marginBottom}}
        showsUserLocation={true}
        showsMyLocationButton={true}
        initialRegion={this.state.region}
        onRegionChangeComplete={this.onChangeValue}
        ref={ref=>this.map=ref}
        />

      <View style={{top:'50%',left:'50%',marginLeft:-24,marginTop:-48,position:'absolute'}}>
        <Image style={{height:48,width:48}} source={require('../assets/bnew.jpeg')}/>
      </View>
    

      <View>
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
                            //onPress={this.registerUser}
                            onPress={() => this.props.navigation.navigate("Register")}
                        >
              
        <Text style={{fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3}}>
	Confirm Location
	</Text>
                        
	</TouchableOpacity>
        </View>
      
      </View>

      

    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#EF5350',
      alignItems: 'center',
      justifyContent: 'space-around',
  },
  heading: {
      color: "white",
      fontSize: 65,
      fontWeight: "600",
      letterSpacing: 2
  },
  icon: {
      color: "white", marginTop: 15, marginLeft: 10
  },
  formItemStyle: {
      borderBottomColor: "#EF5350",
      marginTop: 10,
      marginBottom: 5
  },
  labelStyle: {
      color: "white", fontSize: 20, marginLeft: 25
  },
  inputStyle: {
      backgroundColor: "white", borderRadius: 20, paddingLeft: 20, fontSize: 20
  }
});

export default Locations
