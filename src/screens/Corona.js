import React,{Component} from 'react';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left,Right,Body,Icon,Text,Item as FormItem,Input} from 'native-base';
import { TouchableOpacity , CheckBox,ScrollView,KeyboardAvoidingView,StyleSheet,View,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native';

export default class Corona extends Component{
    constructor(props){
        super(props);
        this.state={
            isSelected1 : false,
            isSelected2 : false,
            isSelected3 : false,
            isSelected4 : false,
            isSelected5 : false,
            
           
        };
    }


answers(){
  let ans=[]
  ans.push(this.state.isSelected1)
  ans.push(this.state.isSelected2)
  ans.push(this.state.isSelected3)
  ans.push(this.state.isSelected4)
  ans.push(this.state.isSelected5)
 

  alert(ans)
}

    render(){
        
        return(
        <ScrollView>

            
                

                <Content style={styles.content}>

                <Text style={styles.boldText2}>
                කොරෝනා වෛරස වසන්ගත තත්ත්වය හමුවේ රුධිරයේ සහ{"\n"}
                රුධිර පරිත‍‍යාගශිලීන්ගේ සුරක්‍ෂිත බව තහවුරු කිරීමේ{"\n"}
                රුධිර දායක ප්‍රකාශය.{"\n"}
                </Text>
                

                <View style={styles.container1}>
                <View style={styles.checkboxContainer}>
                <Text style={styles.label}>
                කරුණාකර නිවැරදි තොරතුරු දක්වන්න.නිවැරදි පිළිතුර ඉදිරියේ (√) ලකුණ යොදන්න.{"\n"}
                </Text>
                </View></View>
                
                
                
                <View style={styles.container1}>
                <Text style={styles.label}>1. පසුගිය මාසය ඇතුළත ඔබට උණ, කැස්ස, හුස්ම ගැනීමේ අපහසුතා වැනි රෝග ලක්‍ෂණවලින් පෙළුණේද?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected1}
                onValueChange={(value) => this.setState({ isSelected1: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected1 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                

                <View style={styles.container1}>
                <Text style={styles.label}>2. මේ අවස්ථාවේ ඔබගේ නිවසේ උණ,කැස්ස,හුස්ම ගැනීමේ අපහසුතා සහිත පුද්ගලයෙකු වාසය කරන්නේද?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected2}
                onValueChange={(value) => this.setState({ isSelected2: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected2 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>3. පසුගිය මාසය ඇතුළත විදේශ ගත වූ කෙනෙකු නිවසේ වාසය කළේද?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected3}
                onValueChange={(value) => this.setState({ isSelected3: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected3 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                
                <View style={styles.container1}>
                <Text style={styles.label}>4. පසුගිය මාසය ඇතුළත විදේශ ගතව පැමිණි කෙනෙකු සමග ඔබ සමීප ඇසුරක් පැවැත්වූයේද?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected4}
                onValueChange={(value) => this.setState({ isSelected4: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected4 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                
                <View style={styles.container1}>
                <Text style={styles.label}>5. පසුගිය මාස 3 ඇතුළත ඔබ විදේශගත වී තිබේද?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected5}
                onValueChange={(value) => this.setState({ isSelected5: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected5 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

              <Text>
            {"\n"} නම {"\n"}
            <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"} 
   
        

            {"\n"} ජාතික හැඳුනුම්පත් අංකය:{"\n"}
            <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}              
            

            දුරකථන අංකය: {"\n"}
            <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}         


          

        
            අත්සන​ {"\n"}
            <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}          
            
            </Text>
        </Content>
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
                            //onPress={() => this.props.navigation.navigate("Register")}
                            onPress={()=>this.answers()}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>Submit </Text>
        </TouchableOpacity>

              
</ScrollView>
        );
    }
} 

const styles = StyleSheet.create({
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
      fontSize:17,
      fontFamily:"monospace",
      textAlign:"justify",
      color:"red",
    },
    container1: {
      flex: 1,
      alignItems: "baseline",
      justifyContent:"center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      justifyContent:"center"
      
    },
    checkbox: {
      alignSelf:"flex-end",
      marginLeft:50,
      //position:"relative"
     
    },
    checkbox2: {
      alignSelf:"flex-end",
      marginLeft:30,
      position:"relative"
      //position:"relative"
     
    },
    label: {
      margin: 4,
    },
    label1:{
      margin: 1,
      alignSelf:"center"
    },
    label2: {
      margin: 4,
      fontWeight:"bold"
    },
    input:{
      borderWidth:1,
      borderColor:'#ddd',
      padding:10,
      fontSize:18,
      borderRadius:6,
    },
    container:{
  
        position:"relative",
        flex:1,
        alignItems:"flex-start",
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    },
    container2: {
      flex: 1,
    },
    number:{
      fontWeight:"bold",
      fontSize:17
    },
    content:{
      marginLeft:2,
      marginRight:2
    },
    six:{
      backgroundColor:'#fadadd'
    },
    last:{
      marginLeft:5
    },
    formItemStyle: {
      borderBottomColor: "#EF5350",
      marginTop: 10,
      marginBottom: 5
  },
  lasttext:{
    fontWeight:"bold",
  },
   para:{
     justifyContent:"flex-start"
   } 
  
})