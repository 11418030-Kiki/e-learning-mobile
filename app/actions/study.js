import { START_TIME_LEARN, END_TIME_LEARN ,LEARN_FAILED , TAKE_QUIZ  }  from '../lib/constants';
import { AsyncStorage } from 'react-native';


async function saveJWT(token){ 
  try {
    await AsyncStorage.setItem('@MySuperStore:jwtToken', token);
  } catch (error) {
    console.log(error);
  }
   
};

async function getJWT(){ 
    return  await AsyncStorage.getItem('@MySuperStore:jwtToken');
}
//================================   API FETCH ===================================

export function startLearn(studyType, startLearn, studyID, quizSize){
    return (dispatch) => {
      dispatch(startLearnDispatch(studyType, startLearn, studyID, quizSize))
    };        
}

export function endLearn(postValue){  
  console.log( JSON.stringify(postValue),'sending study');
  return (dispatch) => {
    getJWT().then( JWT => {
      fetch('https://e-learning-backend.herokuapp.com/api/v1/activities',{
        method: 'POST',
        headers: {
          'Authorization' : JWT,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postValue)
      }).then(data => data.json())
      .then(json => {
        dispatch(endLearnDispatch(postValue, json))
      })
      .catch(err => dispatch(endLearnFailedDispatch(err)))
    });
  };              
}
export function takeQuiz(studyData){
  return (dispatch) => {
    dispatch(takeQuizDispatch(studyData))
  };        
}

// export function getMistakes(topicId){
//   return (dispatch) => {
//       getJWT().then( JWT => {
//           fetch('https://e-learning-backend.herokuapp.com/api/v1/mistakes?' + topicId
//           ,{
//             method: 'GET',
//             headers: {
//               'Authorization' : JWT,
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//             },
//           }).then(data => data.json())
//           .then(json => {
//               if(type == 'QUIZ'){
//                   dispatch(summaryRecordQuizDispatch(json, type))
//               }else{
//                   dispatch(summaryRecordTestDispatch(json, type))            
//               }
//           })
//           .catch(err => dispatch(failedSummary(err)))
//       })
//   };    
  
   
// }


// ===================================== ACTION SENDING DATA TO REDUCER =================================================
export function startLearnDispatch(studyType, startLearn, studyID, quizSize) {
  return {
    type: START_TIME_LEARN,
    startLearn : startLearn,
    studyType: studyType,
    studyID: studyID,
    quizSize: quizSize
  }
}

export function endLearnDispatch(studyType, json) {
  console.log(studyType,'dadasd');
  return {
     type: END_TIME_LEARN,
     endTime: studyType.endTime
  }
}
export function endLearnFailedDispatch(err) {
  return {
    type: LEARN_FAILED,
    err: err
  }
}  
export function takeQuizDispatch(studyData) {
  return {
    type: TAKE_QUIZ,
    studyRecord: studyData
  }
}