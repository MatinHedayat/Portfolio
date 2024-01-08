import { configureStore } from '@reduxjs/toolkit';
import matchDataReducer from './features/quiz/matchDataSlice';
import historyReducer from './features/quiz/historySlice';
import characterReducer from './features/quiz/characterSlice';
import settingReducer from './features/quiz/settingSlice';

export const core = configureStore({
  reducer: {
    matchData: matchDataReducer,
    history: historyReducer,
    character: characterReducer,
    setting: settingReducer,
  },
});
