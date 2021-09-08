import actionTypes from "../actions/actionTypes";

export default function totalScoreReducer(totalScore = [], action) {
    let updatedtotalScore = totalScore;
    switch (action.type) {
      case actionTypes.TOTAL_SCORE:
        updatedtotalScore = action.data;
        break;
      default:
        break;
    }
    return updatedtotalScore;
  }
  
  