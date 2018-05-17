import React, { Component } from 'react';
import { TouchableHighlight, Image, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
  Quiz Button
**/
class AnswerButton extends Component {
  static propTypes = {
    textDisplay: PropTypes.string.isRequired,
    textData: PropTypes.object,
    selected: PropTypes.bool,
    id: PropTypes.string,
    isCorrect: PropTypes.number
  };

  constructor(props) {
      super(props);

  }

    _renderIcon(){
      let iconName = '';
      console.log(this.props.isCorrect);
      switch (this.props.isCorrect) {
        case 1:
          iconName = 'circle-o';
          break;
        
        case 0:
          iconName = 'times';
          break;
      
        default:
          return null;
          break;
      }

      return(
        <View style={[ styles.quizBtnIconWrapper, this.props.isCorrect ? styles.quizBtnIconCorrect : styles.quizBtnIconWrong  ]}>
          <Icon name={ iconName }  style={ [ styles.quizBtnIcon ] } />
        </View>
      );
      
    }

    render(){
      
      return (
        <View style={ this.quizBtnContainer }>
          { this._renderIcon() }
          <TouchableHighlight 
            style={ [styles.quizBtn, styles.shadow, this.props.selected && styles.quizBtnPress ] } 
            onPress={() =>  this.onSelectAnswer() }
            >
                <Text 
                  style={ [styles.quizBtnTextBig, this.props.selected && styles.quizBtnTextPress] }>
                    { this.props.textDisplay }
                </Text>
          </TouchableHighlight>   
        </View>   
      );
    }

    onSelectAnswer(){
      this.props.onSelectAnswer(this.props.id);
    }
  
    
}
module.exports = AnswerButton;

const styles = require('../styles/style');