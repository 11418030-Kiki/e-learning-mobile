/*
Author : andy william
Page : Testing for remove signout Screen 
Comment : Testing for remove signout screen for srudy aplicaion
*/
import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
  } from 'react-native';
  import { List, ListItem } from 'react-native-elements';

  
  class OtherScreen extends Component {
    static navigationOptions = {
      title: 'Lots of features here',
    };
  
    render() {
      return (
        <View style={styles.container}>
          <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
  }
  const styles = require('../style/style');
export default OtherScreen;
