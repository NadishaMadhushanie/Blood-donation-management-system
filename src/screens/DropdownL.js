import React,{Component} from 'react';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left,Right,Body,Icon,Text,Item as FormItem,Input} from 'native-base';
import { TouchableOpacity , CheckBox,ScrollView,KeyboardAvoidingView,StyleSheet,View,TouchableWithoutFeedback,Keyboard,TextInput,Picker,Item} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const items = ['2020-01-11','2020-01-13','2020-01-15','2020-01-17','2020-01-19','2020-01-20','2020-01-21','2020-01-22'];
const items1 = ['2020-01-10','2020-01-11','2020-01-12','2020-01-13','2020-01-19','2020-01-20','2020-01-21','2020-01-22'];
const items2 = ['2020-01-12','2020-01-16','2020-01-17','2020-01-18','2020-01-19','2020-01-20','2020-01-21','2020-01-22'];
const items3 = ['2020-01-15','2020-01-16','2020-01-17','2020-01-18','2020-01-19','2020-01-20','2020-01-21','2020-01-22'];
const items4 = ['2020-01-9','2020-01-15','2020-01-17','2020-01-18','2020-01-19','2020-01-20','2020-01-21','2020-01-22'];

const times = ['9.30 a.m.','10.00 a.m.','10.30 a.m.','11.00 a.m.','11.30 a.m.','13.00 p.m.','13.30p.m.','14.00 p.m.'];
const times1 = ['9.45 a.m.','10.00 a.m.','10.30 a.m.','11.00 a.m.','11.30 a.m.','13.00 p.m.','13.30p.m.','14.00 p.m.'];
const times2 = ['9.10 a.m.','10.00 a.m.','10.30 a.m.','11.00 a.m.','11.30 a.m.','13.00 p.m.','13.30p.m.','14.00 p.m.'];
const times3 = ['9.15 a.m.','10.00 a.m.','10.30 a.m.','11.00 a.m.','11.30 a.m.','13.00 p.m.','13.30p.m.','14.00 p.m.'];
const times4 = ['9.40 a.m.','10.00 a.m.','10.30 a.m.','11.00 a.m.','11.30 a.m.','13.00 p.m.','13.30p.m.','14.00 p.m.'];

var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];

export default class DropdownL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: 'key1'
    }
  }
  getItems(val) {
    if (val === 'key0') {
      return items;
    }
    if (val === 'key1') {
      return items1;
    }
    if (val === 'key2') {
      return items2;
    }
    if (val === 'key3') {
      return items3;
    }
    if (val === 'key4') {
      return items4;
    }
   /* else {
      return BUTTONS;
    }*/
  }
  getItems1(val1) {
    if (val1 === 'key0') {
      return times;
    }
    if (val1 === 'key1') {
      return times1;
    }
    if (val1 === 'key2') {
      return times2;
    }
    if (val1 === 'key3') {
      return times3;
    }
    if (val1 === 'key4') {
      return times4;
    }
   /* else {
      return BUTTONS;
    }*/
  }
  onValueChange (value) {
   this.setState({
     selected1 : value
   });
 }
 onValueChange2 (value) {
  this.setState({
    selected2 : value
  });
}
onValueChange3 (value) {
  this.setState({
    selected3 : value
  });
}
  render() {
    return (
        <Container>
          
          <Content padder>
            <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Embilipitiya hospital" value="key0" />
                <Item label="Rathnapura hospital" value="key1" />
                <Item label="Karapitiya hospital" value="key2" />
                <Item label="Matara hospital" value="key3" />
                <Item label="Narahenpita hospital" value="key4" />
           </Picker>
           <Picker
               iosHeader="Select one"
               mode="dropdown"
               defaultLabel={"waiting"}
               selectedValue={this.state.selected2}
               onValueChange={this.onValueChange2.bind(this)}>
               {this.getItems(this.state.selected1).map((item, i) => {
                 console.log('item', item);
                return <Item label={item} key={`${i}+1`} value={i} />
               })}
            
          </Picker>
          
          <Picker
               iosHeader="Select one"
               mode="dropdown"
               defaultLabel={"waiting"}
               selectedValue={this.state.selected3}
               onValueChange={this.onValueChange3.bind(this)}>
               {this.getItems1(this.state.selected1).map((item, i) => {
                 console.log('item', item);
                return <Item label={item} key={`${i}+1`} value={i} />
               })}
               
          </Picker>
          </Content>
        </Container>
    );
  }
}
