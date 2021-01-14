
import React,{Component} from 'react';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left,Right,Body,Icon,Text,Item as FormItem,Input} from 'native-base';
import { TouchableOpacity , CheckBox,ScrollView,KeyboardAvoidingView,StyleSheet,View,TouchableWithoutFeedback,Keyboard,TextInput} from 'react-native';

import Appoint from "./Appoint";
import * as Report1 from  "./Report";
import Report from "./Report";
//import {answers} from "./Report";
//import DateAndTime from "./DateAndTime";
import Corona from "./Corona";
//import DateAndTime1 from "./DateAndTime1";
//import DateAndTime2 from "./DateAndTime2";
import DropdownL from "./DropdownL";

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

const buttonTextStyle = {
  //color: '#393939'
  display: 'none'
};

class ExampleOne1 extends Component {
  static navigationOptions = {
    header: null
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center'
    }
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onNextStep1=() =>{
    //Report1.answers();
  };

  onPaymentStepComplete = () => {
    //alert('Reading instructions step completed!');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps(){
    console.log('called on submit step.');
    //alert("submitted your appointment successfully")
   
  };
  

  render() {
    
    return (
      <View style={{ flex: 1, marginTop: 5 }}>
       
        <ProgressSteps>
          <ProgressStep
            label="Read Instructions."
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Appoint></Appoint>
          </ProgressStep>
          <ProgressStep
            label="Fill Application Form."
            onNext={this.onNextStep1}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Report></Report>
          </ProgressStep>
          <ProgressStep
            label="Fill Covide-19 Form."
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <Corona></Corona>
          </ProgressStep>
          
          <ProgressStep
            label="Decide donation location, date and time."
            nextBtnTextStyle={buttonTextStyle}
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
          >
            <DropdownL></DropdownL>
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
                            onPress={() => this.props.navigation.navigate("Home")}
                            //onPress={()=>this.answers()}
                        >
                            <Text style={{
                                fontSize: 22, textAlign: "center", color: "#EF5350", letterSpacing: 3
                            }}>Submit </Text>
            </TouchableOpacity>
            
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default ExampleOne1;
