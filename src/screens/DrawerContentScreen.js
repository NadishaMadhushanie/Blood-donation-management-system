import React,{useState,useEffect} from 'react';
import {DrawerContentScrollView,
        DrawerItemList,
        DrawerItem} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import {DraweActions} from '@react-navigation/native';
import {Container,
        Header,
        Content,
        Footer,
        Body,
        ListItem,
        Left,
        Thumbnail,
        H3,
        Text,
        List,
        Button,
        Right} from 'native-base';
import Animated from 'react-native-reanimated';
import { Switch } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Avatar,Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import GLOBAL from '../data/global';


function SideBar({progress,...props}) {
    const translatex = Animated.interpolate(progress,{
        inputRange: [0, 1],
        outputRange: [-100,0]
    });

    const [name, setName] = useState('');
    const [nextdate, setnextdate] = useState('2021/01/15');
    const [title, settitle] = useState('BB');

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
         setName(responseJson.Name);
         settitle(responseJson.Name.substr(0, 2));
      })
          .catch((error) => {
            
      });
      }
        ,[]);

    return(
        <Container>
            <Header style={{    backgroundColor: '#fff', 
                                borderBottomWidth: 0,
                                height: 0
                          }}
            />
                
          

                <Content>
                    <ListItem thumbnail style={{borderBottomWidth: 2,
                                                borderBottomColor: '#222831'
                    }}>
                        <Left>
                            <Avatar
                                size= "large"
                                title={title}
                                rounded
                                source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                            }}
                      />
                       
                        </Left>
                        <Body>
                            <H3>{name}</H3>
                            <Text note>Next Day to donate : {nextdate}</Text>
                        </Body>
                    </ListItem>
                    <DrawerContentScrollView {...props}>
                        <Animated.View style={{transform: [{translatex}]}}>
                            <DrawerItemList {...props}/>
                                <DrawerItem
                                    label="Log Out"
                                    icon={({color, size}) => (
                                <Icon name="sign-out" style={{fontSize: size,color: color}}/>
                               
                                )}
                                onPress={() => {props.navigation.navigate('WelCome');
                                                GLOBAL.email = null;
                                                GLOBAL.name = null;
                                                GLOBAL.longitude= null;
                                                GLOBAL.latitude = null;
                            }}
                             />
                         </Animated.View>
                    </DrawerContentScrollView>
                    
                </Content>
            <Footer style={{backgroundColor: '#ffff',  
                            borderBottomWidth: 0,
                            height: 0,
                            borderTopColor: 'balck',
                            borderTopWidth: 1
                          }}
            >                            
            </Footer>
        </Container>

        
    );
}


export default SideBar;