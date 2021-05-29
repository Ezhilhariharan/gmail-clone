import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
        initialState:{
       user:null
    },
    reducers: {
      login:( state,action ) => {
         state.selectedMail= action.payload;
      },
        logout:(state) => {
          state.sendMsgIsOpen = true;
        },
        
    },
});

export const {login,logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
