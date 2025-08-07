// const surveyResult = createSlice({
//   initialState: [],
//   name: "surveyResult",
//   reducers: {
//     addSurveyResult: (state, action) => {
//       state.push({
//         id: Date.now(),
//         judul: action.payload.judul,
//         status: false,
//       });
//     },
//     removeSurveyResult: (state, action) => {
//       return state.filter((t) => t.id === action.payload.id);
//     },
//     editSurveyResult: (state, action) => {
//       const survey = state.find((s) => s.id === action.payload.id);
//       if (survey) {
//         survey.judul = action.payload.judul;
//         survey.status = action.payload.status;
//       }
//     },
//   },
// });

// export const { addSurveyResult, removeSurveyResult, editSurveyResult } =
//   surveyResult.actions;
// export default surveyResult.reducer;
import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {
    addData: (state, action) => {
      state.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    removeData: (state, action) => {
      return state.filter((survey) => survey.id !== action.payload.id);
    },
  },
});

export const { addData, removeData } = surveySlice.actions;
export default surveySlice.reducer;
