import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../Global_feature/GlobalSlice";


const Store = configureStore({
    reducer:{
        globalState:globalSlice
    }
});

export default Store;