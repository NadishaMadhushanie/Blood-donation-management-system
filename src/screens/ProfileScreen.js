import React,{useState,useEffect} from 'react';
import { Button, 
         View, 
         Text, 
         StyleSheet,
         ScrollView } from 'react-native';
import { MaterialIcons, AntDesign} from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';
import { Table, Row, Rows } from 'react-native-table-component';

import GLOBAL from '../data/global';


const ProfileScreen = ({navigation}) => {
    const openMenu = () => { // function for open and close the burger menu
        navigation.openDrawer();
    }

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('---');
    const [Address, setAddress] = useState('---');
    const [NIC ,setNIC] = useState('---');
    const [Birthday, setBirthday] = useState('---');
    const [phone, setphone] = useState('---');
    const [Age, setAge] = useState('---');
    const [LastDate, setLastDate] = useState('2020/07/15');
    const [NextDate, setNextDate] = useState('2021/01/15');
    const [blood, setblood] = useState('---'); 

    const [ConnectionError, setConnectionError] = useState('');
    useEffect(
        
        () => {
            fetch('http://192.168.8.165:3000/profile', {
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
            console.log(responseJson);
            setName(responseJson.Name);
            setAddress(responseJson.Address);
            setAge(responseJson.Age);
            setNIC(responseJson.NIC);
            //setBirthday(responseJson.Birthday);
            setLastDate('2020/07/15');
            setNextDate('2021/01/15');
            setphone(responseJson.Mobile);
            setblood(responseJson.Bloodgroup);
        })
            .catch((error) => {
              
        });
        }
        );

        const refresh = () => {
            console.log('refresh');
            fetch('http://192.168.8.165:3000/profile', {
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
            console.log(responseJson);
            setName(responseJson.Name);
            setAddress(responseJson.Address);
            setAge(responseJson.Age);
            setNIC(responseJson.NIC);
            //setBirthday(responseJson.Birthday);
            setLastDate('2020/07/15');
            setNextDate('2021/01/15');
            setphone(responseJson.Mobile);
            setblood(responseJson.Bloodgroup);
        })
            .catch((error) => {
              
        });
        }

    const [tableHead, settableHead] = useState(['ID','DATA','PLACE']);
    const [tableData, settableData] = useState([['234AB1', '2019/01/14', 'University of Ruhuna'],
                                                ['43BG1S', '2020/01/15', 'University of Colombo'],
                                                ['2323GH', '2020/07/15', 'University of Ruhuna'],
                                               ]);
    
            

   return (
    <ScrollView>
       <View style={{backgroundColor: 'white'}}>
            <HeaderComponent//component for burger menu
            openMenu={openMenu}/>

           
                <Text style={styles.Heading}> My Profile </Text>

                    <Text style={{textAlign: 'center', color: 'red'}}>{ConnectionError}</Text>
                    
                        <View style={styles.informationComponent}>
                            <View style={styles.name}//name field
                            >
                                <Text style={styles.lable}>Name  :-  </Text>
                                <Text style={{fontSize: 20}}>{Name}</Text>
                            </View>

                                <View style={styles.address}//Address field
                                >
                                    <Text style={styles.lable}>Address  :-  </Text>
                                    <Text style={{fontSize: 20}}>{Address}</Text>
                                </View>

                                <View style={styles.address}//Address field
                                >
                                    <Text style={styles.lable}>Mobile  :-  </Text>
                                    <Text style={{fontSize: 20}}>{phone}</Text>
                                </View>

                             

                                    <View style={styles.address}//Nic field
                                    >
                                        <Text style={styles.lable}>NIC Number  :-  </Text>
                                        <Text style={{fontSize: 20}}>{NIC}</Text>
                                    </View>

                                            <View style={styles.address}//Age field
                                            >
                                                <Text style={styles.lable}>Age  :-  </Text>
                                                <Text style={{fontSize: 20}}>{Age}</Text>
                                            </View>

                                            <View style={styles.address}//Address field
                                            >
                                                <Text style={styles.lable}>Blood Group  :-  </Text>
                                                <Text style={{fontSize: 20}}>{blood}</Text>
                                            </View>

                                                <View style={styles.address}//Last Donated date field
                                                >
                                                    <Text style={styles.lable}>Last Donated Date  :-  </Text>
                                                    <Text style={{fontSize: 20}}>{LastDate}</Text>
                                                </View>

                                                <View style={styles.address}//Last Donated date field
                                                >
                                                    <Text style={styles.lable}>Next Donate Day :- </Text>
                                                    <Text style={{fontSize: 20,
                                                                 color : 'red',
                                                                 fontWeight: 'bold',}}>{NextDate}</Text>
                                                </View>
                                                <Button
                                                style={{marginTop: 10}}
                                                title='Refresh'
                                                onPress={refresh}
                                              />

                                            <View //horizontal line
                                                style={{
                                                  borderBottomColor: 'black',
                                                  borderBottomWidth: 3,
                                                  marginTop: 50
                                                }}
                                              />
                                             
                            
                                        <Text style={styles.Heading}//Donor history Heading
                                        > 
                                            Donation History 
                                        </Text>

                                    
                                
                                      <View style={styles.container}//blood donation history table
                                      >
              
                                                  <Table 
                                                    borderStyle={{borderWidth: 2, 
                                                                borderColor: '#c8e1ff'}}
                                                  >
                                                      <Row 
                                                        data={tableHead} 
                                                        style={styles.head} 
                                                        textStyle={styles.text}/>
                                                      <Rows 
                                                        data={tableData} 
                                                        textStyle={styles.text}/>
                                                  </Table>
              
                                      </View>
                                
                                      <View //horizontal line
                                        style={{
                                          borderBottomColor: 'black',
                                          borderBottomWidth: 3,
                                          marginTop: 50,
                                          marginBottom: 50
                                        }}
                                      />
                                
                                
                        </View>
                          
                        

           
       </View>
       
    </ScrollView>
   );
};

const styles = StyleSheet.create({
    Heading: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 30,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowRadius: 5,
        textDecorationLine: 'underline',
        textShadowOffset: {width: -1, height: 1}
    },
    lable: {
        fontWeight: 'bold',
        fontSize: 20,
        textShadowRadius: 5,
    },
    informations: {
        marginLeft: 10
    },
    name: {
        flexDirection: 'row', 
        marginTop: 45,
    },
    informationComponent: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    address: {
        marginTop: 10,
        flexDirection: 'row',
    },
    container: { 
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        backgroundColor: '#fff'
    },
    head: { 
        height: 40, 
        backgroundColor: '#f1f8ff' 
    },
    text: { 
        margin: 6 
    }
});

export default ProfileScreen;