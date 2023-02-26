import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGlobalState } from "../../../store";



const ResetError = () => {
    const dispatch = useDispatch()
    // const { showAlert , alertType, alertText} = useSelector((state) => { 
    //     return state.global
    // })
    setTimeout(() => {
        dispatch(changeGlobalState({ showAlert: false, alertText: "", alertType: "" }))
    }, 3000)
}


export { ResetError }
