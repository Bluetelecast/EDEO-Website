import { createSlice } from "@reduxjs/toolkit";

const initialState = { showMenu:false };

const globalSlice = createSlice({
    name:'globalState',
    initialState,
    reducers:{
        showMenu:(state)=>{
            state.showMenu=true;   
        },
        hideMenu: (state)=>{
            state.showMenu = false;
        }
    }
});

export default globalSlice.reducer;
 export const {hideMenu,showMenu} = globalSlice.actions;