import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
  } from 'react-native';

import { katakanaList } from '../../config/data';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox'; 
  
  class QuizKatakanaListScreen extends Component {
  
    static navigationOptions = {
      header: null,
      title: 'Katakana',
    };

    state = {
        checkAllText: "Check All",
        statusCheckAll: false,
        stsList : false,
        statusPerRow: false,
    }

    constructor(props){
        super(props);
        this.checkItems = [katakanaList.map.length];
    }
  
    render() {
      return (
        <ScrollView style={quizStyles.container}>
             <View style={quizStyles.containerWhiteTop}>
                <View style={quizStyles.menuContainer} >
                    <TouchableOpacity style={quizStyles.menuButton}  
                        onPress={()=> { this.checkAll() }}
                    >
                        <Text style={quizStyles.buttonText}>{this.state.checkAllText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={quizStyles.menuButton}>
                        <Text style={quizStyles.buttonText}>Proceed ></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    {katakanaList.map((item, key)=>(
                        <View key={key} style={(key + 1) % 5 == 0 ? ( quizStyles.listContainerRow2  ) : ( quizStyles.listContainerRow )}>
                            <View style={quizStyles.rowButton}>
                                <TouchableOpacity
                                style={[quizStyles.hiraganaList,this.state.stsList[key] && quizStyles.hiraganaListActive]}
                                    onPress={()=> { this.checkSingle(key) }}
                                >
                                    <Text style={[quizStyles.hiraganaListText, this.state.stsList[key] 
                                        && quizStyles.hiraganaListTextActive]}> {item.katakana}
                                    </Text>
                                    <Text style={[quizStyles.hiraganaListRomaji, this.state.stsList[key] 
                                        && quizStyles.hiraganaListRomajiActive]}> {item.romaji}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            { (key + 1) % 5 == 0 ? (
                            <View style={quizStyles.rowButtonRadio}>
                                <CircleCheckBox
                                    checked={this.state.statusPerRow[key]}
                                    onToggle={(checked) => this.checkRow(key)}
                                    outerColor ={"#ec6f86"}
                                    innerColor ={"#ec6f86"}
                                /> 
                            </View>      
                            ) : (
                                <Text style={quizStyles.displayNone}>None </Text>
                            ) }
 
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
      );
    }

    checkSingle(key) {
        if(this.checkItems[key]){
            this.checkItems[key] = false;
            this.setState({ stsList: this.checkItems });
        }
        else{
            this.checkItems[key] = true;
            this.setState({ stsList: this.checkItems });
        }
    };
    checkAll(){
        this.setState({statusCheckAll: !this.state.statusCheckAll})
        if(this.state.statusCheckAll){
            {katakanaList.map((item, key)=>(
                this.checkItems[key] = false,
                this.setState({ stsList: this.checkItems })
            ))};  
            this.setState({ checkAllText: "Check All" })     
        }else{
            {katakanaList.map((item, key)=>(
                this.checkItems[key] = true,
                this.setState({ stsList: this.checkItems })
            ))};  
            this.setState({ checkAllText: "Uncheck All" })    
        }
    };
    checkRow(key){
        if(this.checkItems[key]){
            this.checkItems[key] = false,
            this.setState({ statusPerRow: this.checkItems })
            for(x=0;x<5;x++){
                this.checkItems[key] = false,
                this.setState({ stsList: this.checkItems })
                key=key-1
            }     
        }else{
            this.checkItems[key] = true,
            this.setState({ statusPerRow: this.checkItems })
            for(x=0;x<5;x++){
                this.checkItems[key] = true,
                this.setState({ stsList: this.checkItems })
                key=key-1
            }    
        }
    }
  }

  const quizStyles = require('../../styles/quizStyle');
  const styles = require('../../styles/style');
export default QuizKatakanaListScreen;