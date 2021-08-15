import { createSlice } from '@reduxjs/toolkit';
// createSlice 簡化 createReducer 應用

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  // 定義 action type 與對應的更新 state 方法，CRUD 都寫在這
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }, 
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// 匯出 action
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
// counterSlice.actions.increment() returns an Object of this shape > { type: 'auto-generated unique identifier' }

//  reducer
export default counterSlice.reducer;
