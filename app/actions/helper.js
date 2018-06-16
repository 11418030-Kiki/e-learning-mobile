import { pointsList } from '../config/quizFormat';

export function countScore(studyRecord,quizItems = 0) {    
    let score = 0;
    let countQuest = 0;
    var correct = 0;
    for(var i = 0; i < studyRecord.length; ++i) {
        if(studyRecord[i].correct == '1'){      
            if(studyRecord[i].type){
                correct += pointsList[studyRecord[i].type];
            }else{
                console.log('run this');
                correct += pointsList['initial'];
            }
        }        
        if(studyRecord[i].type ){
            countQuest += pointsList[studyRecord[i].type];
        }else{
            countQuest += pointsList['initial'];            
        }
    }
    
    if(quizItems){
        countQuest = 100;
    }

    if(countQuest !== 0 && correct !== 0){
        score = Math.floor(( correct / countQuest) * 100 );
    }

    return score;
}