import actionTypes from "../actions/actionTypes";



export default function totalScoreReducer(totalScore = 0, action) {
    let updatedtotalScore = totalScore;

    switch (action.type) {
      case actionTypes.TOTAL_SCORE:
       
       
        updatedtotalScore = action.data.totalScore;
        
        break;
      default:
        break;
    }
    return updatedtotalScore;
  }
  
  