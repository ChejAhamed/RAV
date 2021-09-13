import actionTypes from "../actions/actionTypes";

export default function scoreQuizReducer(score = 0, action) {
    let updatedScore = score;
    switch (action.type) {
      case actionTypes.SCORE_QUIZ:
        updatedScore = action.data;
        break;
      default:
        break;
    }
    return updatedScore;
  }
  
  