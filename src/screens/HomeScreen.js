import React , {useEffect} from 'react';
import { Button,
         Image, 
         View, 
         StyleSheet,
         Dimensions,
         ScrollView,
         ActivityIndicator } from 'react-native';
import { MaterialIcons, AntDesign} from '@expo/vector-icons';
import HeaderComponent from '../components/HeaderComponent';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';






const HomeScreen = ({route, navigation}) =>  {

  const openMenu = () => {
    navigation.openDrawer();
  };

  

  return (
    <View>
     
          <ScrollView>
          <HeaderComponent
          openMenu={openMenu}
          />
              <Image 
                source={require('../../assets/unnamed.jpg')}
                style={styles.unamed}
              />
              <View style={styles.ABDComponent} //About Blood 
                >
                <View style={styles.ABDView}>
                  <Text h1 
                    style={styles.ABD}
                    > About Blood 
                     Groups</Text>
             
                </View>
                <Text h4 style={styles.ABDD}>
                    The ABO blood group system was discovered
                    by Karl Landsteiner in 1900. 46 years later 
                    (1946) the Blood Transfusion Service was formed. 
                    In 1996 the National Blood Service was formed to 
                    collect and provide blood supplies for all the hospitals in Sri
                  Lanka. 
                </Text>
              </View>

              <View style={styles.ABDComponent} //About Component of Blood
              >
                <View style={styles.ABDView}>
                  <Text h1 
                    style={styles.ABD}
                    >Components of Blood</Text>
             
                </View>
                <Text h4 style={styles.ABDD}>
                  When we receive your donation we
                  separate it into individual 
                  components by spinning it in a machine
                  called a centrifuge. The individual 
                  components are red cells, white cells, 
                  platelets and plasma. These can all be put to different uses.
                </Text>
              </View>

              <View style={styles.ABDComponent} //About Component of Blood
              >
                <View style={styles.ABDView}>
                  <Text h1 
                    style={styles.ABD}
                    >How does the Body Replace Blood</Text>
             
                </View>
                <Text h4 style={styles.ABDD}>
                During a whole blood donation we 
                aim to take just under a pint 
                (about 470mls) of blood, which 
                works out at no more than 13 per cent
                 of your blood volume. After donation, 
                 your body has an amazing capacity to replace
                  all the cells and fluids that have been lost.
                </Text>
              </View>


          </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  unamed : {
    resizeMode : 'stretch',
    width : (Dimensions.get('window').width),
    height : 300,
    marginHorizontal : 5
  },
  ABD : {
    textDecorationLine : 'underline',
    textAlign : 'center',
    marginBottom : 5,
    color : '#ec524b'
  },  
  ABDD : {
    textAlign : 'center',
    marginBottom : 20,
    marginHorizontal : 3,
    
  },
  ABDView : {
    flexDirection : 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  ABDComponent : {
    borderColor : 'red',
    borderWidth : 3,
    borderRadius : 50,
    marginVertical : 10,
    marginHorizontal : 5,
    textAlign : "center"
  }
}); 

export default HomeScreen;
