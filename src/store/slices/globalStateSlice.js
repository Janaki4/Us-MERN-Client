import { createSlice } from "@reduxjs/toolkit";

const globalStateSlice = createSlice({
    name: "global",
    initialState: {
        isLoading: false,
        showAlert: false,
        alertType: "",
        alertText: ""
    },
    reducers: {
        // changeLoadingState(state, action) {
        //     state.isLoading = action.payload
        // },
        // changeAlertState(state, action) {
        //     state.showAlert = action.payload
        // },
        // updateAlertType(state, action) {
        //     state.alertType = action.payload
        // },
        // updateAlertText(state, action) {
        //     state.alertText = action.payload
        // }
        changeGlobalState(state, action) {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})


export const {  changeGlobalState } = globalStateSlice.actions
// export const { changeLoadingState, changeAlertState, updateAlertType, updateAlertText , updateGlobalState } = globalStateSlice.actions
export const globalReducer = globalStateSlice.reducer





// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const carsSlice = createSlice({
//     name: "car",
//     initialState: {
//         searchTerm: "",
//         cars: []
//     },
//     reducers: {
//         changeSearchTerm(state, action) {
//             state.searchTerm = action.payload
//         },
//         addCar(state, action) {
//             state.cars.push({
//                 id: nanoid(),
//                 name: action.payload.name,
//                 cost: action.payload.cost
//             })
//         },
//         deleteCar(state, action) {
//             const updatedCarsList = state.cars.filter((car) => {
//                 return car.id !== action.payload
//             })
//             state.cars = updatedCarsList
//         }

//     }
// })

// export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions
// export const carsReducer = carsSlice.reducer