
import React,{Component} from 'react';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left,Right,Body,Icon,Text,Item as FormItem,Input} from 'native-base';
import { TouchableOpacity , CheckBox,ScrollView,KeyboardAvoidingView,StyleSheet,View,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
//import FlatButton from './button';
import DatePicker from 'react-native-datepicker';

import GLOBAL from '../data/global';

const Diseasesdata = require('./Diseases.json')

const ReviewSchema = yup.object({
    times:yup.string()
    .required()
    .test('is-num>0','Times must be a number > 0',(val) => {
    return parseInt(val) > 0;
    })
  })

  

//export default class Report extends Component{
  class Report extends Component{
    constructor(props){
        super(props);
        this.state={
            //Selected:[],
            data:Diseasesdata,
            date:"2020-11-15",
            isSelected1 : false,
            isSelected2 : false,
            isSelected3 : false,
            isSelected4 : false,
            isSelected5 : false,
            isSelected6 : false,
            isSelected7 : false,
            isSelected8 : false,
            isSelected9 : false,
            isSelected10 : false,
            isSelected11 : false,
            isSelected12 : false,
            isSelected13 : false,
            isSelected14 : false,
            isSelected15 : false,
            isSelected16 : false,
            isSelected17 : false,
            isSelected18 : false,
            isSelected19 : false,
            isSelected20 : false,
            isSelected21 : false,
            isSelected22 : false,
            isSelected23 : false,
            isSelected24 : false,
            isSelected25 : ' ',
            isSelected26 : false,
            isSelected27 : false,
            isSelected28 : false,
            Name : '',
            idNumber : '',
            age : '',
            address : '',
            email : '',
            bloodgroup : '',
            phone : '',

        };
    }

//     componentDidMount(){
//       fetch('http://192.168.8.165:3000/appoinment', {
//         method: 'POST',
//         headers: {
//                     Accept : 'application/json',
//             'Content-Type' : 'application/json'
//             },
//         body: JSON.stringify({
//             email: 'sdilansilva@gmail.com'
//         })
// }).then((response) =>
//     response.json()
// )
// .then((responseJson) => {
//     this.setState({
//       Name: responseJson.Name,
//       idNumber: responseJson.NIC
//     })
//     this.state.age = responseJson.Age,
//     this.state.address = responseJson.Address,
//     this.state.email = responseJson.Email,
//     this.state.bloodgroup = responseJson.Bloodgroup,
//     this.state.phone = responseJson.Mobile
//     console.log(this.state.Name);
// })
//     }

    onchecked(id){
        const data=this.state.data
        const index=data.findIndex(x=> x.id === id);
        data[index].checked = !data[index].checked
        this.setState(data)
    }
    renderFruits(){
        return this.state.data.map((item,key)=>{
            return(
              <ScrollView>
                
                <TouchableOpacity style={{flexDirection:"row",alignItems:"center"}} key={key} onPress={()=>{this.onchecked(item.id);}}>     
            <Text style={{fontWeight:'bold'}}>{"\t"}{"\t"}{"\t"}{item.key}</Text>
                    <CheckBox value={item.checked} onValueChange={()=>{this.onchecked(item.id)}} 
                    style={styles.checkbox2}
                    />
                    
                </TouchableOpacity>
                
                </ScrollView>
            )
        })
    }

    getSelectedFruits(){
        var keys=this.state.data.map((t)=> t.key)
        var checks= this.state.data.map((t) => t.checked)
        let Selected = []
        for(let i=0;i<checks.length;i++)
        {
  
                Selected.push(checks[i])
           
           
        }

        return Selected;
        //alert(Selected)
        //alert(this.state.isSelected)
    }


    abc(){
      if(this.state.isSelected1==true)
      
      return(
        <ScrollView>
        <View style={styles.container}>
        <Formik
        initialValues={{times:'',body:'',rating:''}}
        validationSchema={ReviewSchema}
        onSubmit={(values,actions) => {
        actions.resetForm();
        console.log(values);
         }}
         >
        {(props)=>(
          <View>
            <Text style={styles.label}>ආ) එසේ නම් කී වරක්ද​?{"\n"}</Text>
            <TextInput
            style={styles.input}
            placeholder='enter number of times'
            onChangeText={props.handleChange('times')}
            value={props.values.times}
            keyboardType='numeric'
            onBlur={props.handleBlur('times')}
            />
            <Text style={styles.errorText}>{props.touched.times && props.errors.times}</Text>

            <Text style={styles.label}>ඇ) අවසන් වරට ලේ දුන් දිනය​{"\n"}{"\n"}</Text>
            <DatePicker
            style={{width: 200}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2010-11-15"
            maxDate="2030-11-15"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
              position: 'absolute',
              left: 20,
              top: 2,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 50
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
          />

          </View>
          
        )}
       
      </Formik>
                <View style={styles.container1}>
                <Text style={styles.label}>ඈ) කලින් ලේ දුන් අවස්ථාවල ඔබට යම් අපහසුවක් වී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected24}
                onValueChange={(value) => this.setState({ isSelected24: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected24 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                {this.def()}

            
          </View>
</ScrollView>
);
      
      //alert(this.state.isSelected)
}

def()
{
  if(this.state.isSelected24==true)
  
  return(
    <ScrollView>
      <View>
      <Text style={styles.label}>ඉ) අපහසුවක් වී නම් එය සඳහන් කරන්න{"\n"}{"\n"}</Text>
      <TextInput
            style={styles.input}
            value={this.state.isSelected25}
            onChangeText={isSelected25 => this.setState({isSelected25})}
          
            />
      </View>
    </ScrollView>
  );
}


 answers=()=>{
  let ans=[]
  ans.push(this.state.isSelected1)
  ans.push(this.state.isSelected24)
  ans.push(this.state.isSelected25)
  ans.push(this.state.isSelected2)
  ans.push(this.state.isSelected3)
  ans.push(this.state.isSelected4)
  ans.push(this.getSelectedFruits())
  ans.push(this.state.isSelected5)
  ans.push(this.state.isSelected6)
  ans.push(this.state.isSelected7)
  ans.push(this.state.isSelected8)
  ans.push(this.state.isSelected9)
  ans.push(this.state.isSelected10)
  ans.push(this.state.isSelected11)
  ans.push(this.state.isSelected12)
  ans.push(this.state.isSelected13)
  ans.push(this.state.isSelected14)
  ans.push(this.state.isSelected15)
  ans.push(this.state.isSelected16)
  ans.push(this.state.isSelected17)
  ans.push(this.state.isSelected18)
  ans.push(this.state.isSelected19)
  ans.push(this.state.isSelected20)
  ans.push(this.state.isSelected21)
  ans.push(this.state.isSelected22)
  ans.push(this.state.isSelected23)
  ans.push(this.state.isSelected26)
  ans.push(this.state.isSelected27)
  ans.push(this.state.isSelected28)

  //alert(ans)
}

    render(){
        
        return(
<ScrollView>

            
                
                <Content style={styles.content}>

                <Text style={styles.boldText2}>
                ශ්‍රී ලංකා ජාතික රුධිර පාරවිලයන සේවය​.{"\n"}
                රුධිර දායක ප්‍රකාශය හා වාර්තාව​.{"\n"}
                </Text>
                <Text style={styles.boldText3}>
                රුධිර පරිත්‍යාගශීලී හිතවත​,{"\n"}</Text>

                <View style={styles.container1}>
                <View style={styles.checkboxContainer}>
                <Text style={styles.label}>
                ලේ දන් දෙන ඔබේත් , ඔබේ ලේ ලබා ගන්නා රෝගීන් ගේත්, ආරක්‍ෂාව තහවුරු කිරීම සඳහා කරුණාකර මෙම විස්තර පත්‍රිකාව නිවැරැදි ව​, <Text style={styles.boldText4}>තනිවම </Text>පුරවන්න​.පත්‍රිකාව පිරවීමට පෙර , මුල් පිටුවෙහි සඳහන් "රුධිර දායක උපදෙස් මාලාව​" හොඳින් කියවා තේරුම් ගන්න​. ඒ සම්බන්ධයෙන් ගැටලුවක් ඇත්නම් කරුණාකර ජාතික රුධිර පාරවිලයන සේවයේ කාර්‍ය මණ්ඩලයෙන් විමසන්න​. {"\n"}
                </Text>
                </View></View>
                
                
                <Text style={styles.number}>(1)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>අ) ඔබ මීට පෙර ලේ දන් දී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected1}
                onValueChange={(value) => this.setState({ isSelected1: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected1 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                {this.abc()}

                <View style={styles.container1}>
                <Text style={styles.label}>ඊ) ලේ නොදෙන ලෙසට කෙදිනක හෝ ඔබට වෛද්‍ය උපදෙස් ලැබී තිබේද​?</Text>
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
                <Text style={styles.label}>උ) ඔබ අද දින ලැබුණු "රුධිර දායක උපදෙස් පත්‍රිකාව​" කියවා හොඳින් තේරුම් ගත්තෙහිද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected3}
                onValueChange={(value) => this.setState({ isSelected3: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected3 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <Text style={styles.number}>(2)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>අ) ඔබ දැනට හොඳ සෞඛය තත්ත්වයෙන් පසු වන්නේද​?</Text>
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
                <Text style={styles.label}>ආ) ඔබට පහත දැක්වෙන කවර හෝ රෝගී තත්ත්වයක් වැළඳී හෝ ඒ සඳහා ප්‍රතිකාර ගෙන තිබේද​?එසේ නම් අදාළ රෝගය ඉදිරියෙන් (√) ලකුණ යොදන්න​.</Text>
                </View>
                
                {this.renderFruits()}

                <View style={styles.container1}>
                <Text style={styles.label}>ඇ) ඔබ දැනට කවර හෝ ඹෟෂධයක්/ප්‍රතිකාරයක් ලබා ගන්නේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected5}
                onValueChange={(value) => this.setState({ isSelected5: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected5 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඈ) ඔබ ශල්‍ය කර්මයකට භාජනය වී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected6}
                onValueChange={(value) => this.setState({ isSelected6: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected6 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඉ) ලේ දීමෙන් පසු අද දින ඔබට බර වැඩවල යෙදීමට හෝ මගී ප්‍රවාහන වාහන පැදවීම,උස් ගොඩනැගිලි මත වැඩ කිරීම , කඳු නැගීම , විශාල යන්ත්‍රෝපකරණ ක්‍රියා කරවීම වැනි දේවල යෙදීමට සිදුව තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected7}
                onValueChange={(value) => this.setState({ isSelected7: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected7 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඊ) ඔබ දැනට ගර්භණීව සිටීද​? මව් කිරි දීමෙහි යෙදෙන්නේද​? පසුගිය මාස 12 තුළ දරු ප්‍රසූතියකට හෝ ගබ්සා වීමකට ලක් වූයේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected8}
                onValueChange={(value) => this.setState({ isSelected8: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected8 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <Text style={styles.number}>(3)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>අ) කෙදිනක හෝ ඔබට කහ උණ/සෙංගමාලය(Hepatitis) රෝගය වැළඳි තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected9}
                onValueChange={(value) => this.setState({ isSelected9: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected9 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ආ) පසුගිය වසර 2 තුළ -ක්‍ෂය රෝගය හෝ උණ සන්නිපාතය (Typhoid) වැළඳී තිබේ ද​? ඊට ප්‍රතිකාර ගෙන තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected10}
                onValueChange={(value) => this.setState({ isSelected10: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected10 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <Text style={styles.number}>(4)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>පසුගිය මාස 12 තුළ,{"\n"}{"\n"}අ)ඔබ ප්‍රතිශක්තීකරණ හෝ වෙනත් එන්නතක් ලබා ගෙන තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected11}
                onValueChange={(value) => this.setState({ isSelected11: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected11 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ආ)කන් විදීමක්,පච්චා කෙටීමක් හෝ කටු චිකිත්සා ප්‍රතිකාරයක් සිදු කර තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected12}
                onValueChange={(value) => this.setState({ isSelected12: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected12 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඇ)බන්ධනාගාරගත වී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected13}
                onValueChange={(value) => this.setState({ isSelected13: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected13 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඈ)ඔබ හෝ ඔබගේ සහකරු /සහකාරිය විදේශගත වී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected14}
                onValueChange={(value) => this.setState({ isSelected14: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected14 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඉ)ඔබට හෝ ඔබගේ සහකරු/සහකාරියට රුධිරය හෝ රුධිර කොටස් ලබා දී තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected15}
                onValueChange={(value) => this.setState({ isSelected15: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected15 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඊ)ඔබට මැලේරියාව වැළඳී හෝ ඊට ප්‍රතිකාර ගෙන තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected16}
                onValueChange={(value) => this.setState({ isSelected16: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected16 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <Text style={styles.number}>(5)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>අ) පසුගිය මාස 6 තුළ ඔබට ඩෙංගු වැළඳී හෝ ඊට ප්‍රතිකාර ගෙන තිබේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected17}
                onValueChange={(value) => this.setState({ isSelected17: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected17 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ආ)පසුගිය මාසය තුළ -පැපොළ​, සරම්ප​, කම්මුල්ගාය, රුබෙල්ලා උණ (ජර්මන් සරම්ප​) පාචනය හෝ වෙනත් කල් පවත්නා (සතියකට වැඩි) උණකින් පෙළුනේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected18}
                onValueChange={(value) => this.setState({ isSelected18: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected18 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඇ)පසුගිය සතිය තුළ - ඔබේ දත් ගැලවීමක් සිදු කර තිබේ ද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected19}
                onValueChange={(value) => this.setState({ isSelected19: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected19 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඈ)පසුගිය සතිය තුළ - ඔබ ප්‍රතිජීවක(Antibiotics) හෝ ඇස්ප්‍රීන්(Aspirin) හෝ(වෙනත්) ඖෂධ කිසිවක් භාවිතා කළේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected20}
                onValueChange={(value) => this.setState({ isSelected20: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected20 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.six}>

                <Text style={styles.number}>(6)</Text>
                <View style={styles.container1}>
                <Text style={styles.label}>අ)පහත දැක්වෙන කවර හෝ කාණ්ඩයකට ඔබ අයත් වේ නම් ලේ දන් දීම සුදුසු නොවන බව දන්නෙහිද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected21}
                onValueChange={(value) => this.setState({ isSelected21: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected21 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>


                <View style={styles.container1}>
                <Text style={styles.label2}>
                -ඔබ ඒඩ්ස්(HIV/AIDS) හෝ සෙංගමාල(Hepatitis B/C) ආසාදනයට ලක් වූවකු නම්{"\n"}{"\n"}
                -ඔබේ ලිංගික සබඳතා එක් අයෙකුට සීමා වී නොමැති නම්{"\n"}{"\n"}
                -ඔබ වෙනත් පිරිමියකු සමග සමලිංගික ඇසුරක යෙදී ඇති පිරිමියකු නම්{"\n"}{"\n"}
                -ඔබ කෙදිනක හෝ මත් ද්‍රව්‍යයන් ශරීරයට එන්නත් කොට ගෙන තිබේ නම්{"\n"}{"\n"}
                -ඔබ කෙදිනක හෝ ගණිකා වෘත්තියෙහි යෙදී තිබේ නම්{"\n"}{"\n"}
                -ඔබ පසුගිය මාස 12 තුළ කෙදිනක හෝ ගණිකා ඇසුරක යෙදී තිබේ නම්{"\n"}{"\n"}
                -ඔබට හෝ ඔබේ සහකරු/සහකාරියට ඒඩ්ස්(HIV/AIDS) හෝ වෙනත් ලිංගික රෝග ආසාදනයක් තිබේදැයි සැකයක් ඇත්නම්,{"\n"}{"\n"}
                </Text>
                </View>


                <View style={styles.container1}>
                <Text style={styles.label}>ආ)ඔබ හෝ ඔබේ සහකරු/සහකාරිය ඉහත සඳහන් කවර හෝ කාණ්ඩයකට අයත් වේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected22}
                onValueChange={(value) => this.setState({ isSelected22: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected22 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <Text style={styles.label}>ඇ)ඔබ සිරුරේ බර අඩු වීමකින්, කුද්දැටි (වසා ග්‍රන්ථි) ඉදිමීමකින් ,කල් පවත්නා උණකින් හෝ පාචනයෙන් පෙළේද​?</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected23}
                onValueChange={(value) => this.setState({ isSelected23: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected23 ? "ඔව්" : "නැත"}</Text>
                </View>
                </View>

                </View>

                <View style={styles.last}>
                <Text>
                {"\n"}සම්පූර්ණ නම​:(ජාතික හැඳුනුම්පතට අනුව​)  {"\n"}
                <FormItem style={styles.formItemStyle}>
                <Input placeholder={this.state.Name} />
                </FormItem>
                {"\n"}{"\n"}
        
        
        
                <View style={styles.container1}>
                <View style={styles.checkboxContainer}>
                <CheckBox
                style={styles.checkbox}
                />
                <Text style={styles.label1}>පුරුෂ</Text>
                </View>
                </View>

                <View style={styles.container1}>
                <View style={styles.checkboxContainer}>
                <CheckBox
                style={styles.checkbox}
                />
                <Text style={styles.label1}>ස්ත්‍රී</Text>
                </View>
                </View>    
        

            {"\n"} ජාතික හැඳුනුම්පත් අංකය:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder={this.props.idNumber} />
            </FormItem>
            {"\n"}{"\n"}                     
            
          වයස​:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder={this.props.Age} />
            </FormItem>
            {"\n"}{"\n"}

          නිවසේ ලිපිනය(ස්ථීර/තාවකාලික​):{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder={this.props.Address} />
            </FormItem>
            {"\n"}{"\n"}

          විද්‍යුත් තැපෑල:  {"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder={this.props.Email} />
            </FormItem>
            {"\n"}{"\n"}                              
            
          රුධිර වර්ගය​:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="O+" />
            </FormItem>
            {"\n"}{"\n"}

          කාර්‍යාලයීය ලිපිනය​:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}

          දුරකථන අංක | නිවස: {"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}         
            කාර්‍යාලය​:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}                   
             ජංගම​:{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="0773365940" />
            </FormItem>
            {"\n"}{"\n"}


          <Text style={styles.lasttext}>රුධිර දායකයාගේ ප්‍රකාශය​</Text>{"\n"}{"\n"}
          <Text style={styles.para}>

        - කිසිඳු පුද්ගලික ලාභයක් අපේක්‍ෂාවෙන් තොරව​,ස්වේච්ඡාවෙන් අද දින මා පරිත්‍යාග කරන රුධිරය අසරණ රෝගීන්ගේ යහපත වෙනුවෙන් ශ්‍රී ලංකා ජාතික රුධිර පාරවිලයන සේවයට අවශ්‍ය අයුරින් යොදා ගැනීමට එකඟතාවය පළ කරමි.{"\n"}{"\n"}

        - ලේ දන්දීමේදී මෙන්ම ඉන් පසුවත් ඒ පිළිබඳ ජාතික රුධිර පාරවිලයන සේවයේ උපදෙස් අනුව ක්‍රියා කරන අතර එසේ නොකිරීමෙන් සිදු විය හැකි හානි පිළිබඳ වගකීම මම බාර ගනිමි.{"\n"}{"\n"}

        - තවද මා පරිත්‍යාග කරන රුධිරය ඒඩ්ස්(HIV/AIDS),හෙපටයිටිස් බී සහ සී(Hepatitis B & C) ,උපදංශය(Syphilis) ,මැලේරියාව(Malaria) යන රෝග ආසාදනයන් සඳහා හෝ ජා.රු.පා. සේවයට අවශ්‍ය වෙනත් පරීක්‍ෂණයක් සඳහා පරීක්‍ෂාවට ලක් කිරීමට මාගේ එකඟතාවය පළකරමි.{"\n"}{"\n"}

        - එසේම ඉහත පරීක්‍ෂණවල ප්‍රතිඵල ජාතික රුධිර පාරවිලයන සේවයට අවශ්‍ය අවස්ථාවල දී මා වෙත දන්වනු ලැබීමටත්, එවන් අවස්ථාවලදී ජාතික රුධිර පාරවිලයන සේවය මගින් දෙනු ලබන වැඩි දුර උපදෙස් අනුව ක්‍රියා කිරීමටත් මාගේ කැමැත්ත හා එකඟතාව පළ කරමි.{"\n"}{"\n"}

        - මෙම පත්‍රිකාව කියවා හොඳින් වටහා ගත් අතර ඉහත ප්‍රශ්නවලට මා විසින් සපයන ලද පිළිතුරු වල සත්‍යතාවය ගැන අවංකව සහතික වෙමි.{"\n"}{"\n"}

        - දණ්ඩ නීති සංග්‍රහයේ 262,263 වගන්ති අනුව දැනුවත්ව රෝගයක් පැතිරවීමට කටයුතු කිරීම දඬුවම් ලැබිය හැකි වරදක් බව පිළිගනිමි.{"\n"}{"\n"}

        - යාවජීව / නිරන්තර රුධිර දායකයකු වශයෙන් අසරණ රෝගීන් වෙනුවෙන් ඉදිරියටත් රුධිරය පරිත්‍යාග කිරීමට කැමැත්තෙමි.{"\n"}{"\n"}

          </Text>
          {"\n"}

        

                <View style={styles.container1}>
                <Text style={styles.label}>මාස 4 කට වරක්</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected26}
                onValueChange={(value) => this.setState({ isSelected26: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected26 ? "√" : "x"}</Text>
                </View>
                </View>   
                {"\n"}
                <View style={styles.container1}>
                <Text style={styles.label}>මාස 6 කට වරක්</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected27}
                onValueChange={(value) => this.setState({ isSelected27: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected27 ? "√" : "x"}</Text>
                </View>
                </View>
                {"\n"}
                <View style={styles.container1}>
                <Text style={styles.label}>වසරකට වරක්</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={this.state.isSelected28}
                onValueChange={(value) => this.setState({ isSelected28: value })}
                style={styles.checkbox}
                />
                <Text style={styles.label1}>{this.state.isSelected28 ? "√" : "x"}</Text>
                </View>
                </View>               
                {"\n"}

        රුධිර දායකයාගේ නම {"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Nadisha Madhushanie" />
            </FormItem>
            {"\n"}{"\n"} 

        අත්සන​ {"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}          
            
        දිනය{"\n"}
           <FormItem style={styles.formItemStyle}>
            <Input placeholder="Enter infomation" />
            </FormItem>
            {"\n"}{"\n"}
        </Text>      
        </View>
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

export default Report;
//export answers();
//export default {answers};

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
