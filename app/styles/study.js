'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

let englishFont = 'Roboto-Regular';
let japaneseFont = 'NotoSansJP-Regular';
let primaryColor = '#45b4e7'; // blue
let secondaryColor = '#d2f9fc';
let textColor = '#333';
let textSecondary = '#566d97';
let grayColor = '#ccc';

module.exports = StyleSheet.create({

  container: { 
    flex: 1, 
  },

  containerCentered: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  },

  containerBetween: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },

  cardBox: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    alignItems: 'stretch',
    position: 'relative'
  },
  
  cardImg: {
    backgroundColor: 'steelblue',
    flex: 1,
    width: '100%', 
    height: 180,
    alignItems: 'stretch', 
  },
  
  cardBoxDisabled: {
    position: 'relative', 
  },
  
  cardImgDisabled: {
    position: 'absolute',
    top:  0,
    left: 0,
    width: '100%', 
    height: '100%', 
    zIndex: 2, 
    backgroundColor: 'dimgrey', 
    opacity: 0.8,
    justifyContent: 'center',
  },
  
  borderBox: {
    borderWidth: 1,
    borderColor: primaryColor,
  },

  textLg: {
    fontSize: 28,
  }, 

  text32: {
    fontSize: 32,
  }, 

  textMd: {
    fontSize: 22,
  }, 

  textCenter: {
    textAlign: 'center', 
  }, 

  textBold: {
    fontWeight: 'bold', 
  }, 

  p3: {
    padding: '3%', 
  },

  p8: {
    padding: '8%', 
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between' 
  }, 

  button: {
    backgroundColor: '#45B5E7',
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems:'center', 
    width: '40%',
    height: 50,
    borderRadius: 4,  
    padding: 0, 
  },
  
  mR10: {
    marginRight: 10, 
  }, 

  mB10: {
    marginBottom: 10, 
  },
  mB20: {
    marginBottom: 20, 
  }, 

  textBlack: {
    color: 'black',
  }, 

  textWhite: {
    color: 'white', 
  },

  title :{
    textAlign: 'center',
    fontSize: 25,
    paddingTop: 5,
    paddingBottom : 5,
    fontWeight: 'bold',
    borderColor: primaryColor,
    borderWidth: 1,
    borderTopWidth : 0, 
  },
  lockButton : {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left : 0,
    zIndex : 2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems:'flex-end', 
    padding: 15,
  },
  NotlockButton : {
    display : 'none',
  },
  StudyContainer : {
    padding: '2%',
    paddingBottom: 200,
    backgroundColor: 'white',
  },
  titleContainer : {
    
  },
  titleListContainer : {
    marginBottom:20
  },
  height40 : {
    height : 40,
  },
  btnLearn : {
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems : 'center',
    borderColor: primaryColor,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    shadowColor: "#000",
		shadowOpacity: 0.5,
		elevation: 2
  },
  btnLearnText : {
    fontSize:20,
  },
  summaryLearn : {
    width: '100%',
    height: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems : 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },
  summaryTitle : {
    flex: 2,
  },
  summaryDetail : {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
  },
  buttonContainerTopic: {
    flex: 1,
    height : 100,
    paddingTop : 10,
    paddingBottom : 10,
    flexDirection: 'row',    
  },
  buttonTopic: {
    height: 90,
    width : '48%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#96d6f7',
    borderWidth: 1,
    borderRadius: 5,
    margin:'1%'
  },buttonTopicText:{
    color : '#000000', 
    fontSize : 20,
  },
  ScrollViewColor : {
    backgroundColor: '#d2fafc',
  },
  buttonContainerTopicNext: {
    flex: 1,
    height : 150,
    paddingTop : 10,
    paddingBottom : 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextTopic: {
    height: 60,
    width : '98%',
    backgroundColor: primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonTopicNextText:{
    color : '#ffffff', 
    fontSize : 18,
  },
  bgWhite : {
    backgroundColor: '#fff',
  },

flipCard: {
  width: '80%', 
  height: '80%', 
  alignItems: 'center', 
  justifyContent: 'center',
  backgroundColor: 'white', 
  backfaceVisibility: 'hidden', 
}, 

flipCardBack: {
  backgroundColor: 'white', 
  position: 'absolute', 
  top: 0, 
}, 
fontBold:{
  fontWeight: 'bold',
},
cardIcon: {
  alignItems: 'flex-start', 
  justifyContent: 'flex-start', 
}, 

cardText: {
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100%'
}, 

backgroundImg: {
  flex: 1,
  width: null,
  height: null,
}, 

roundButton: {
    backgroundColor:'#45B3EB',
    borderRadius:50,
    padding: '5%', 
    overflow: 'hidden', 
}, 

roundButtonText: {
  backgroundColor:'#45B3EB',
  borderRadius:50,
  paddingLeft: '3%',
  paddingRight: '3%',
  paddingBottom: '6%',
  paddingTop: '6%',  
  overflow: 'hidden',
}, 

boxButton: {
  flex: 0.225,
  borderWidth: 1,
  borderColor: 'lightgray',
  backgroundColor: "white",
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 5, 
}, 

cardContainer: { 
  width: '100%', 
  height: '80%', 
  backgroundColor: 'white', 
  borderRadius: 10, 
}, 

containerTopRel: {
  flex: 0.8, 
  width: '100%', 
  position: 'relative'
}, 

containerBottom: {
  flex: 0.2, 
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between' ,
  flexDirection: 'row', 
  flexWrap: 'wrap', 
}, 

iconContainer: {
  position: 'absolute', 
  top:  0,
  left: 0,
  zIndex: 2, 
}, 
HL2Font: {
  fontSize: 15,
},
HL2img : {
  marginTop:10,
  height: 60,
  width:  250,
},
tableContainer : {
  width: '100%',
}, 

table: {
  flex: 1, 
  flexDirection: 'row', 
  justifyContent: 'space-between',
  alignItems: 'center',
}, 

tableRow: {
  justifyContent: 'space-between',
  alignItems: 'center',
}, 

tableHeader : {
  backgroundColor: '#45B3EB', 
},

tableBorder: {
  borderWidth: 1,
},
historyFlex: {
  flex: 1,
  flexDirection: 'row',
  paddingBottom:5,
  paddingTop: 5,
  borderBottomWidth: 1,
  borderBottomColor: '#ddd'
},
historyFlexRow1: {
  flex: 1,
},
historyFlexRow2: {
  flex: 2,
},
historyFont: {
  fontSize: 20
},
styleButon :{
  padding:5,
  height: 40,
  width:40,
  backgroundColor: '#45B3EB',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 20
}
});

