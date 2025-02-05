import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    showMenu:false,
    showModal:false,
    project:{}
 };

const globalSlice = createSlice({
    name:'globalState',
    initialState,
    reducers:{
        showMenu:(state)=>{
            state.showMenu=true;   
        },
        hideMenu: (state)=>{
            state.showMenu = false;
        },
        hideModal: (state)=>{
            state.showModal = false;
            state.project = {};
        },
        setProject:(state,action)=>{
            state.project=action.payload;
            state.showModal=true;
        }
    }
});

export default globalSlice.reducer;
 export const {hideMenu,showMenu,hideModal,setProject} = globalSlice.actions;