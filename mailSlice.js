import {createSlice} from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name:"mail",
    selectedMail:null,
    initialState:{
        sendMsgIsOpen:false,
    },
    reducers: {
      selectMail:( state,action ) => {
         state.selectedMail= action.payload;
      },
        openSendMsg:(state) => {
          state.sendMsgIsOpen = true;
        },
        closeSendMsg:(state) => {
            state.sendMsgIsOpen = false;
          },
    },
});

export const {openSendMsg,closeSendMsg,selectMail} = mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectsendMsgIsOpen = (state) => state.mail.sendMsgIsOpen;

export default mailSlice.reducer;


    
     
  


