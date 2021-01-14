//React Essentials
import * as React from 'react';
import { useWindowDimensions, 
         ActivityIndicator,
         View,
         StyleSheet } from 'react-native';

//Navigators 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerNavigator } from 'react-navigation';

//Import Screens
import HomeScreen  from './src/screens/HomeScreen';
import LoginScreen  from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ViewBloodCampsByLocationScreen from './src/screens/ViewBloodCampsByLocationScreen';
import UserRegisterScreen  from './src/screens/UserRegisterScreen';
import SelectTheMapScreen from './src/screens/SelectTheMapScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import InitialScreen from './src/screens/InitialScreen';
import BloodDonationScreen from './src/screens/BloodDonationScreen'; 
import EmailVerificationScreen from './src/screens/EmailVerificationScreen'
import Sidebar from './src/screens/DrawerContentScreen';
import EnterEmailScreen from './src/screens/EnterEmailScreen';
import EnterCodeScreen from './src/screens/EnterCodeScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import ExampleOne1 from './src/screens/ExampleOne1';
import EnterEmailScreenAdress from './src/screens/EnterEmialScreenAdress';
import ChangeAdressScreen from './src/screens/ChangeAdressScreen';
import EnterPhoneScreenEmail from './src/screens/EnterPhoneScreenEmail';
import ChangePhoneNumberScreen from './src/screens/ChangePhoneNumberScreen';
import Qrcode from './src/screens/Qrcode';
import GetUserCoordsScreen from './src/screens/GetUserCoordsScreen';


//Vector Icons
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const mainDrawerNavigator = () => {//component for drawer navigator
  const dimensions = useWindowDimensions();
  return (    
    
      <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}> 

        <Drawer.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ //add an icon to home
            headerLeft:null,
            drawerIcon: ({color,size}) => (
              <Icon 
                name="home" 
                style={{fontSize: size, color: color}}/>
            ),
          }}
        />

        <Drawer.Screen 
          name="Blood Donation Camps" 
          component={SelectTheMapScreen}
          options={{ //add an icon to home
            headerLeft:null,
            drawerIcon: ({color,size}) => (
              <Icon  
                name="map-marker" 
                style={{fontSize: size, color: color}}/>
            ),
          }}
        />

        <Drawer.Screen       
          name="My Profile" 
          component={ProfileScreen}
          options={{ //add an icon to home
            headerLeft:null,
            drawerIcon: ({color,size}) => (
              <Icon 
                name="user" 
                style={{fontSize: size, color: color}}/>
            ),
          }}
        />
        <Drawer.Screen 
          name="About Blood Donation" 
          component={BloodDonationScreen}
          options={{ //add an icon to home
            headerLeft:null,
            drawerIcon: ({color,size}) => (
              <Icon 
                name="address-book"  
                style={{fontSize: size, color: color}}/>
            ),
          }}      
        />
   

        <Drawer.Screen 
          name="Make An Appoinment" 
          component={ExampleOne1}
          options={{ //add an icon to home
            headerLeft:null,
            drawerIcon: ({color,size}) => (
              <Icon 
                name="id-card" 
                style={{fontSize: size, color: color}}/>
            ),
          }}
        />

        <Drawer.Screen 
        name="Bar Code" 
        component={Qrcode}
        options={{ //add an icon to home
          headerLeft:null,
          drawerIcon: ({color,size}) => (
            <Icon 
              name="qrcode"  
              style={{fontSize: size, color: color}}/>
          ),
        }} 
      />

        <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{ //add an icon to home
          headerLeft:null,
          drawerIcon: ({color,size}) => (
            <Icon 
              name="cogs"  
              style={{fontSize: size, color: color}}/>
          ),
        }} 
      />

    

     

      </Drawer.Navigator>
   
  );
}

const App = () => {
  const [isLoading, setisLoading] = React.useState(false);
  const [userToken, setuserToken] = React.useState(null);

  if(isLoading){
    return(
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
        <ActivityIndicator size='small'/>
      </View>
    );
  }
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelCome">
        <Stack.Screen name="WelCome" //Initial Screen
          component={InitialScreen}
        />
        <Stack.Screen name="Sign-In" //UserRegister Screen
          component={UserRegisterScreen} 
        />
        <Stack.Screen name="Log-In" //log-In Screen
          component={LoginScreen} 
        />
         <Stack.Screen name="Home" //Main HOme Screen 
           component={mainDrawerNavigator}
          //  headerLeft={null}  
        />
        <Stack.Screen name="Email Verification"//Email Verification Screen
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="View By Location"//Select location type in maps
          component={ViewBloodCampsByLocationScreen}
        />
        <Stack.Screen name="Enter Email"
          component={EnterEmailScreen}
        />
        <Stack.Screen name="Enter Code"
          component={EnterCodeScreen}
        />
        <Stack.Screen name="Change Password"
          component={ChangePasswordScreen}
        />
        <Stack.Screen name="Enter Email for Change Adress"
          component={EnterEmailScreenAdress}
        />
        <Stack.Screen name="Enter New Adress"
          component={ChangeAdressScreen}
        />
        <Stack.Screen name="Enter Email for Change PhoneNumber"
          component={EnterPhoneScreenEmail} 
        />
        <Stack.Screen name="Enter New Phone Number"
          component={ChangePhoneNumberScreen} 
        />
        <Stack.Screen name="Enter Location"
          component={GetUserCoordsScreen}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});