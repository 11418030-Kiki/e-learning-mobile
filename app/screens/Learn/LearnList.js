import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity, 
} from 'react-native';
import { Icon } from 'react-native-elements';
import  { strings }   from '../../config/localization';
import { LearnListData } from '../../config/studyList';
import style from 'react-native-datepicker/style';

class LearnListScreen extends Component {
  constructor() {
    super();
    this._onSetLanguageTo('en');
  }
  _onSetLanguageTo(value) {
    strings.setLanguage(value);
  } 
  static navigationOptions = {
    title: 'Learn',
  };
  state = {
    title:"",
    type: "",
    arrList : []
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      title: navigation.getParam('title', null),
      type: navigation.getParam('type', null),
      item: LearnListData[navigation.getParam('title', null)],
    });
  }
  navigateToPage=(item, index)=>{
    console.log(item);
    if(item.type == 'Initial'){
      this.props.navigation.navigate('LearnHiraganaModule',(
        item
      ));
    }else{
      this.props.navigation.navigate('LearnHiraganaModule',(
        item
      ));
    }
  }

  render() {
    if(this.state.item){
      return (
        <ScrollView style={study.StudyContainer}>
         { this.state.item.map((item, key)=>(
          <TouchableOpacity key={key} style={study.btnLearn} onPress={this.navigateToPage.bind(this, item, key)}>
              <Text>{item.title}</Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      );
    }else{
      return (
        <Text></Text>
      );
    }
  }

  //createGuest = async () => {
  selectList = () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('HiraganaList');
  };
}

const styles = require('../../styles/style');
const study = require('../../styles/study');

export default LearnListScreen;