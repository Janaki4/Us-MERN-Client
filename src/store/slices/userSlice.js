import { createSlice } from "@reduxjs/toolkit";


const token = localStorage.getItem("token")
const emailId = localStorage.getItem("emailId")
const userId = localStorage.getItem("userId")
const userName = localStorage.getItem("userName")

const userSlice = createSlice({
    name: "user",
    initialState: {
        userId: userId || "",
        emailId: emailId ||  "",
        userName: userName ||  "",
        token: token || ""
    },
    reducers: {
        changeUserState(state, action) { 
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export const { changeUserState } = userSlice.actions
export const userReducer = userSlice.reducer