import React from 'react';
import { StyleSheet, 
         View ,
         Text,
         TouchableOpacity,
         ScrollView,
         KeyboardAvoidingView} from 'react-native';

const BloodDonationScreen = () => {
    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <View style={styles.container}>

                    <Text style={styles.boldText2}>
                        ජාතික රුධිර පාරවිලයන සේවය{"\n"}
                        රුධිර දායක උපදෙස් මාලාව{"\n"}
                    </Text>
                        <Text style={styles.boldText3}>
                           
                            {"\n"}
                           
                        </Text>
                            <Text style={styles.boldText4}>
                                ඔබත් රුධිර දායකයකු වීමට නම්,
                                {"\n"}
                            </Text>
                                <Text style={styles.boldText5}>
                                    - වයස අවුරුදු 18ත් 60ත් අතර (පළමු වර අවු 55).{"\n"}{"\n"}
                                    - බර කි.ග්. 50 ට වැඩි.{"\n"}{"\n"}
                                    - පෙර අවස්ථාවේ රුධිරය ලබා දී මාස 4 ක් සම්පූර්ණ වී ඇති.{"\n"}{"\n"}
                                    - රුධිර හිමෝග්ලොබීන් ප්‍රමණය 12.5 g/dl හෝ ඊට වඩා වැඩි.{"\n"}{"\n"}
                                    - ගර්භණීභාවයෙන් හෝ රෝග තත්ත්වයකින් නොපෙළෙන.{"\n"}{"\n"}
                                    - විදෙස් ගත වී යළි මෙ රටට පැමිණ අවම මාස 3කට වඩා වැඩි.{"\n"}{"\n"}
                                    - අවදානම් හැසිරීම්වලින් තොර
                                        <Text style={styles.boldText4}> 
                                            පුද්ගලයෙකු විය යුතුය.
                                        </Text>
                                            {"\n"}{"\n"}
                                </Text>
    
                                    <Text style={styles.boldText4}>
                                        අවදානම් හැසිරීම්.
                                        {"\n"}
                                    </Text>
                                        <Text style={styles.boldText5}>
                                            - ලිංගික සම්බන්ධතා එක් අයකුට සීමා නොවීම.{"\n"}{"\n"}
                                            - පිරිමියකු වෙනත් පිරිමියකු සමග ලිංගික සම්බන්ධතා පැවැත්වීම.{"\n"}{"\n"}
                                            - කෙදිනක හෝ ගණිකා වෘත්තියේ යෙදී සිටීම.{"\n"}{"\n"}
                                            - පසුගිය වසර තුළ අවදානම් ලිංගික ඇසුරක් පැවැත්වීම.{"\n"}{"\n"}
                                            - කෙදිනක හෝ එන්නත් ආකාරයෙන් මත්ද්‍රවය ලබා ගෙන තිබීම.{"\n"}{"\n"}
                                        </Text>
    
                                                <Text style={styles.boldText4}>
                                                    ඔබ ලේ දීමට පෙර,
                                                    {"\n"}
                                                </Text>
                                        <Text style={styles.boldText5}>
                                            - පැය හතරක් ඇතුළත ප්‍රධාන ආහාර වේලක් ලබා ගෙන තිබිය යුතුය.{"\n"}{"\n"}
                                            - මත්පැන් නො වන දියරමය පාන වැඩිපුර පානය කරන්න.{"\n"}{"\n"}
                                            - පෙර දිනයේ පැය හයක් හෝ ඊට වැඩි නින්දක් ලබා ගෙන තිබිය යුතුය.{"\n"}{"\n"}
                                            - පහසු සැහැල්ලු ඇඳුමකින් සැරසී සිටීම වඩාත් යෝගය වේ.{"\n"}{"\n"}
                                        </Text>
    
                                            <Text style={styles.boldText4}>
                                                ඔබ ලේ දීමෙන් පසුව,
                                                {"\n"}
                                            </Text>

                                    <Text style={styles.boldText5}>
                                        - අවම වශයෙන් මිනිත්තු 20ක් පමණ රුධිරය පරිත‍යාග කළ ස්ථානයේ රැදී සිටීම වැදගත් වේ.{"\n"}{"\n"}
                                        - සුළු ආහාරයක් හා දියරමය පානයක් ලබා ගත යුතුය.{"\n"}{"\n"}
                                        - ඉදිරි පැය හතර තුළ දී වැඩිපුර දියර පානය කරන්න.{"\n"}{"\n"}
                                        - රුධිරය ලබා ගැනීමට එන්නත් කටුව ඇතුළු කළ ස්ථානයේ ඇලවූ ප්ලාස්ටරය පැය 12ක් පමණ නොගලවා තබා ගන්න.{"\n"}{"\n"}
                                        - අධික වෙහෙසකර වැඩ කිරීමෙන් හෝ රුධිරය ලබා දුන් අතින් බර එසවීමෙන් වළකින්න.{"\n"}{"\n"}
                                    </Text>
    
            <Text style={styles.boldText6}>
            පුද දෙමු ලේ බිඳක් - රැකගමු ජීවිතයක්.{"\n"}
            රෝගී ජීවිත සුවපත් කරමින් ඔබ සිදු කරන ජාතික මෙහෙවර අපි අගය කරමු.{"\n"}{"\n"}{"\n"}
            විමසීම්.{"\n"}
            ජාතික රුධිර මධයස්ථානය.{"\n"}
            අංක 551,ඇල්විටිගල මාවත,නාරාහේන්පිට,කොළඹ 05.{"\n"}
            දුරකථන: 011 23 69 931 - 5 ෆැක්ස් : 011 23 69 937 / 011 23 69 939{"\n"}
            විද්‍යුත් තැපෑල : info@ nbts.health.gov.lk වෙබ් අඩවිය : nbts.health.gov.lk{"\n"}
    
            </Text>
            
            <View//Bottom horizontal line
                style={{
                    borderColor: 'black',
                    borderWidth: 2,
                    width: '90%',
                    marginBottom: 30
                }} 
            >
            </View>
        
    
          </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

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
        top:60,
        alignItems:"center",
  },
  textContainer:{
    top:50,
    alignItems:"center",
    padding:15,
  },
  textContainer2:{
    alignItems:"flex-end",
    padding:0,
    },
    boldText:{
      fontWeight:'bold',
      fontSize:40,
      fontFamily:"monospace",
    },
    boldText2:{
      fontWeight:'bold',
      fontSize:20,
      fontFamily:"monospace",
      textAlign:"center",
    },
    boldText3:{
      fontWeight:'bold',
      fontSize:18,
      fontFamily:"monospace",
      textAlign:"justify",
      margin:8,
    },
    boldText4:{
      fontWeight:'bold',
      fontSize:20,
      fontFamily:"monospace",
      textAlign:"justify",
      color:"red",
      textDecorationLine: 'underline'
    },
    boldText5:{
      fontWeight:'bold',
      fontSize:16,
      fontFamily:"monospace",
      textAlign:"justify",
      margin:8,
    },
    boldText6:{
      fontWeight:'bold',
      fontSize:15,
      fontFamily:"Roboto",
      textAlign:"center",
      margin:8,
    },
  });


export default BloodDonationScreen;