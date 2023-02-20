import { configureStore } from "@reduxjs/toolkit";
import { globalReducer, changeLoadingState, changeAlertState, updateAlertText, updateAlertType } from "./slices/globalStateSlice";

const store = configureStore({
    reducer: {
        global:globalReducer
    }
})

export { store, changeLoadingState, changeAlertState, updateAlertText, updateAlertType }
