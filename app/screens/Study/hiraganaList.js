import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View, 
    ToolbarAndroid, 
    Image, 
    ScrollView, 
    Text, 
    TouchableOpacity, 
} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import  { strings }   from '../../config/localization';
// import * as Actions from '../../../actions/Quiz'; //Import your actions
import { ImageData } from '../../config/image_list';

class HiraganaListScreen extends Component {

  static navigationOptions = ({ navigation }) =>{
    //header: null,
    const {state} = navigation;
    return {
      title: `${strings[state.params.headerTitle]}`,
    };
  };
  state = {
    title:"",
    img: "",
  }
  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      title: navigation.getParam('title', null),
      img: navigation.getParam('img', null),
      type: navigation.getParam('type', null),
      headerTitle : navigation.getParam('headerTitle', null),
      studyType : navigation.getParam('studyType', null)
    });
    //Console.log(navigation.getParam('userName', null),"NIAMAK");
  }

  navigateToLearn=(type)=>{
    if(type == 'Learn'){
      this.props.navigation.navigate('LearnListScreen',(
        {
          type : type,
          title : this.state.title,
          studyType: this.state.studyType
        }
      ));
    }else   if(type == 'Quiz'){
      this.props.navigation.navigate('QuizFlash',(
        {
          type : type,
          title : this.state.title,
          studyType: this.state.studyType
        }
      ));
    }else{
      this.props.navigation.navigate('TopicList',(
        item
      ));
    }
  }
  render() {
    return (
      <ScrollView>
        <View style={study.StudyContainer}>
          <View style={[study.titleContainer , study.bgWhite]}>
            <Image 
              style={ study.cardImg }
              source= { this.state.img ? ( ImageData[this.state.img] ) :   ImageData['loading'] }
              resizeMode="stretch"  
            />
            <Text style={study.title}> { strings[this.state.title] } </Text>
          </View>
          <View style={[study.cardBox, study.borderBox, study.p3]}>
            <Text style={[study.textLg, study.textBlack]}>Learn</Text>
            <View style={study.buttonContainer}>
              <TouchableOpacity style={[study.button, study.mR10]} onPress={this.navigateToLearn.bind(this, 'Learn')}>
                <Icon name='play-arrow'   color='#fff'/>
                <Text style={[study.textWhite, study.textMd]} > Start</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[study.cardBox, study.borderBox, study.p3]}>
            <Text style={[study.textLg, study.textBlack]}>Quiz</Text>
            <Text style={[study.textLg, study.textCenter, study.textBold, study.textBlack]}>80/100</Text>
            <View style={study.buttonContainer}>
<<<<<<< HEAD
              <TouchableOpacity style={[study.button, study.mR10]} onPress={ this.takeQuiz }>
=======
              <TouchableOpacity style={[study.button, study.mR10]}  onPress={this.navigateToLearn.bind(this, 'Quiz')}>
>>>>>>> 74c5ea3404127e35f47de6fbe18cb904cbc6d538
                <Icon name='play-arrow'   color='#fff'/>
                <Text style={[study.textWhite, study.textMd]} > Start</Text>
              </TouchableOpacity>
              <TouchableOpacity style={study.button}>
                <Icon name='search'   color='#fff'/>
                <Text style={[study.textWhite, study.textMd]} > Review</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[study.cardBox, study.borderBox, study.p3]}>
            <Text style={[study.textLg, study.textBlack]}>Test</Text>
            <Text style={[study.textLg, study.textCenter, study.textBold, study.textBlack]}>80/100</Text>
            <View style={study.buttonContainer}>
              <TouchableOpacity style={[study.button, study.mR10]}>
                <Icon name='play-arrow'   color='#fff'/>
                <Text style={[study.textWhite, study.textMd]} > Start</Text>
              </TouchableOpacity>
              <TouchableOpacity style={study.button}>
                <Icon name='search'   color='#fff'/>
                <Text style={[study.textWhite, study.textMd]} > Review</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    );
  }

  //createGuest = async () => {
  createGuest = () => {
    //await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('NameIn');
  };

  quiz = () => {
    this.props.navigation.navigate('QuizMain');
  };
}

const styles = require('../../styles/style');
const study = require('../../styles/study');

export default HiraganaListScreen;