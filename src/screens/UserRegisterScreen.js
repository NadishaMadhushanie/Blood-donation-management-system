import React, { useState,useEffect } from 'react';
import { View,
         Text, 
         TouchableOpacity,
         StyleSheet,
         Dimensions,
         ScrollView,
         Button,
         Picker } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderComponent from '../components/HeaderComponent';
import {Formik} from 'formik';
import NicValidation from '../jscodes/NicValidation';
import RNPickerSelect from '@react-native-picker/picker';

import * as yup from 'yup';

import GLOBAL from '../data/global';




const ReviewSchema = yup.object({
    name: yup.string()//must be string
        .required(),//need to fill the input

    // nic: yup.string()//should be string
    //     .required()
    //     .min(10),//should fill 

    address: yup.string()//should be string
             .required(),//field is required

    mail: yup.string()
          .required()
          .email(),//email validation
    
    number: yup.string()//phone number validation
            .required()
            .min(10),

    password: yup.string()//pasword validation
              .required('No Password provided')
              .min(8),

    // passwordAgain: yup.string()//password confirmation
    //                .required('Enter your password again')
    //                .oneOf([yup.ref('pasword'), null],'Password must match')
}); 

const UserRegisterScreen = ({navigation}) => {

    const [nicValue, setnicValue] = useState('');//NIC value
    const [nicErrorMsg, setnicErrorMsg] = useState(' ');//Nic Error message
    console.log(yup.name);

    const [bloodgroup, setbloodgroup] = useState('');

    useEffect(() => {
        const value = String(nicValue);
        const status = NicValidation(nicValue);
        console.log(nicErrorMsg);
        if(status == true){
            setnicErrorMsg(' ');//set the error message
        } if(status == false) {
            setnicErrorMsg(' ');
        }
       
    },[nicValue]);

    const [name, setName] = useState('Show');
    const [secureState, setsecureState] = useState(true); 

    const toggle = () => {
        if(name == 'Show'){
            setName('Hide');
            setsecureState(false);
        }else{
            setName('Show');
            setsecureState(true);
        }
    }


    const openMenu = ({navigation}) => {
        navigation.openDrawer(); 
    }

   
    return(
        
        <ScrollView>
         
                <HeaderComponent
                    openMenu={openMenu}
                />
                     
                <Text style={styles.signIn}>Sign In</Text>
               
          
            <Formik
                initialValues={{ name: '',
                                //  nic: '',
                                 address: '',
                                 mail: '',
                                 number: '',
                                 password: '',
                                 passwordAgain: ''
                                }}
                validationSchema={ReviewSchema}
                onSubmit={(values) => {
                    console.log(props.values);
                }}
                >
                {(props) => (
                    <View style={styles.form}>

                    <Text style={styles.errorMessage}>{props.touched.name && props.errors.name}</Text>
                        <Input //Enter Name number here
                            placeholder='Enter Name here'
                            style={styles.name}
                            onChangeText={props.handleChange('name')}
                            value={props.values.name}
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholderTextColor='black'
                            multiline={true}
                            onBlur={props.handleBlur('name')}
                            leftIcon={
                                <Icon
                                  name='user'
                                  size={24}
                                  color='black'
                                />
                              }
                        />

                        <Text style={styles.errorMessage}>{nicErrorMsg}</Text>
                        <Input //Enter NIC here
                            placeholder='Enter national ID number here'
                            style={styles.name}
                            onChangeText={(e) => setnicValue(e)}
                            //onEndEditing={(e) => setnicValue(e)}
                            //value={props.values.nic}
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholderTextColor='black'
                            //onBlur={props.handleBlur('nic')}
                            //onBlur={e => setnicValue(e)}
                            leftIcon={
                                <Icon
                                  name='id-card'
                                  size={24}
                                  color='black'
                                />
                              }
                        />

                        
                        <Text style={styles.errorMessage}>{props.touched.address && props.errors.address}</Text>
                        <Input //Enter Adress here
                            placeholder='Enter Adress here'
                            style={styles.name}
                            onChangeText={props.handleChange('address')}
                            value={props.values.address}
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholderTextColor='black'
                            multiline={true}
                            onBlur={props.handleBlur('address')}
                            leftIcon={
                                <Icon
                                  name='map-marker'
                                  size={24}
                                  color='black'
                                />
                              }
                        />
                        

                        <Text style={styles.errorMessage}>{props.touched.mail &&props.errors.mail}</Text>
                        <Input //Enter Email here
                            placeholder='Enter Email here'
                            style={styles.name}
                            onChangeText={props.handleChange('mail')}
                            value={props.values.mail}
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholderTextColor='black'
                            onBlur={props.handleBlur('mail')}
                            leftIcon={
                                <Icon
                                  name='envelope'
                                  size={24}
                                  color='black'
                                />
                              }
                        />
                        

                        <Text style={styles.errorMessage}>{props.touched.number && props.errors.number}</Text>
                        <Input //Enter Contact number here
                            placeholder='Enter Contact number here'
                            style={styles.name}
                            onChangeText={props.handleChange('number')}
                            value={props.values.number}
                            inputContainerStyle={{borderBottomWidth:0}}
                            placeholderTextColor='black'
                            keyboardType='numeric'
                            onBlur={props.handleBlur('number')}
                            leftIcon={
                                <Icon
                                  name='phone'
                                  size={24}
                                  color='black'
                                />
                              }
                        />

                       
                    
                      <Text style={styles.errorMessage}>{props.touched.password && props.errors.password}</Text>
                     
                      <Input //Enter password here
                      placeholder='  Enter password here'
                      style={{
                       borderWidth : 2,
                       borderRadius : 100,    
                       backgroundColor: '#fff3e2',
                       textAlign: 'center'
                      }}
                      onChangeText={props.handleChange('password')}
                      value={props.values.password}
                      inputContainerStyle={{borderBottomWidth:0}}
                      placeholderTextColor='black'
                      secureTextEntry={secureState}
                      onBlur={props.handleBlur('password')}
                      leftIcon={
                          <Icon
                            name='key'
                            size={24}
                            color='black'
                          />
                        }
                  />
               <Button
                    title={name}
                    onPress={toggle}
               />
                   
                  
                    
                  

                        <TouchableOpacity//Button For Submit Email
                        onPress={() => navigation.navigate('Enter Location')}
                        style={{marginBottom: 30}}
                        >
                        <View style={styles.nextbutton}>
                             <Icon
                                    name="map-marker" 
                                    style={{fontSize: 27, color: '#eff8ff'}}
                            />
                                <Text style={{fontSize: 20,
                                        color: '#eff8ff'}}>                  Add Location                 </Text>
                               
                        </View>
                    </TouchableOpacity>

                    
                   <Text style={{fontSize: 20}}>select Blood Group</Text>
                    <Picker
                      selectedValue={bloodgroup}
                      style={{ height: 20, width: 150 }}
                      onValueChange={(itemValue, itemIndex) => setbloodgroup(itemValue)}
                    >
                      <Picker.Item label="A+" value="A+" />
                      <Picker.Item label="A-" value="A-" />
                      <Picker.Item label="B+" value="B+" />
                      <Picker.Item label="B-" value="B-" />
                      <Picker.Item label="AB+" value="AB+" />
                      <Picker.Item label="AB-" value="AB-" />
                      <Picker.Item label="O+" value="O+" />
                      <Picker.Item label="O-" value="O-" />
                    </Picker>
                  
                        
                        <TouchableOpacity 
                            // onPress={() => navigation.navigate('Email Verification')}//Create Account Button
                            //disabled={/*!(Formik.isValid && Formik.dirty)*/}
                            //onPress={() => console.log(props.values)}
                            
                            onPress = {() => {
                                navigation.navigate('Email Verification');
                                GLOBAL.email = props.values.mail;
                                fetch('http://192.168.8.165:3000/signin', {
                                    method: 'POST',
                                    //mode: 'cors',
                                    headers: {
                                                Accept : 'application/json',
                                        'Content-Type' : 'application/json'
                                        },
                                    body: JSON.stringify({
                                       name: props.values.name,
                                       address: props.values.address,
                                       telephone: props.values.number,
                                       bloodgroup: bloodgroup,
                                       mail: props.values.mail,
                                       nicNumber: nicValue,
                                       password: props.values.password,
                                       longitude: GLOBAL.longitude,
                                       latitude: GLOBAL.latitude
                                    })
                            })
                            }
                            
                        }
                        >
                            <View style = {{backgroundColor: '#16a596', 
                                            alignItems: 'center', 
                                            justifyContent: 'center', 
                                            borderRadius: 100,
                                            marginTop: 30,
                                            borderWidth : 3, 
                                            width: (Dimensions.get('window').width)*(0.5),
                                            height: 50}}
                            >
                                <Text style = {{color: 'black',
                                                fontWeight: 'bold',
                                                fontSize: 20}}>Create Account</Text>
                            </View>
                        </TouchableOpacity>
                    
                    </View>
                )}
            </Formik>
        </ScrollView>
    
    
    );
};

const styles = StyleSheet.create({
    name : {
        borderWidth : 2,
        borderRadius : 100,    
        backgroundColor: '#fff3e2',
        textAlign: 'center',
    },
    form : {
        marginTop : 30,
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 50
    },
    textInput : {
        textAlign : 'center',
        height : 40,
    },
    nameIcon: {
        marginTop: 5,
    },
    signIn: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },
    errorMessage:{
        fontSize: 15,
        color: 'red'
    }, nextbutton : {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 100,
        padding: 5,
        backgroundColor: '#21209c',
        marginVertical: 10
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        borderWidth: 2,
        
      }
  
})

export default UserRegisterScreen;