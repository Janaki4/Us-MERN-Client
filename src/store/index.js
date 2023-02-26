import { configureStore } from "@reduxjs/toolkit";
import { globalReducer,changeGlobalState } from "./slices/globalStateSlice";
// import { globalReducer, changeLoadingState, changeAlertState, updateAlertText, updateAlertType ,changeGlobalState } from "./slices/globalStateSlice";
import {userReducer ,changeUserState} from "./slices/userSlice"

const store = configureStore({
    reducer: {
        global: globalReducer,
        user:userReducer
    }
})

export { store, changeGlobalState, changeUserState }
