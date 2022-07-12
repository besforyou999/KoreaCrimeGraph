import { configureStore } from '@reduxjs/toolkit';
import csvDataReducer from '../features/csvData/csvDataSlice';

export default configureStore({
  reducer: {
    csvData: csvDataReducer
  }
})