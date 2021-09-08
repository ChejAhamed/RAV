
export default function scoreQuiz(Score = [], action) {
    let updatedScore = Score;
    switch (action.type) {
      case actionTypes.LOAD_ALL_Score:
        nextScore = action.data;
        break;
      default:
        break;
    }
    return updatedScore;
  }
  
  