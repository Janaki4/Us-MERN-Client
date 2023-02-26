import React from "react";
import Button from "../../Button/Button";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Helpers/Alert";
import { useSelector, useDispatch } from "react-redux";
import { changeGlobalState } from "../../../store";


const Register = () => {
    const dispatch = useDispatch()
    const { showAlert, isLoading } = useSelector(state => {
        return state.global
    })
    // console.log(showAlert)
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [emailId, setEmail_id] = useState("");
    const [password, setPassword] = useState("");
    const [contactNo, setContact_no] = useState("");
    // const [alert, setAlert] = useState(true)
    /**
     * dispatch(changeAlertState(true))
     * dispatch(updateAlertType)
     * dispatch(updateAlertText)
     */
    const submitHandler = async (e) => {
        e.preventDefault();
        const userObj = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email_id: emailId,
            password: password,
            contact_no: contactNo,
        };
        if (!userObj.first_name || !userObj.last_name || !userObj.username || !userObj.email_id || !userObj.password || !userObj.contact_no) {
            dispatch(changeGlobalState({
                showAlert: true,
                alertType: "error",
                alertText: "Pls enter all values"
            }))
        }
        else {
            dispatch(changeGlobalState({
                isLoading: true,
                showAlert: false
            }))
            try {
                const response = await axios.post("/user/register", userObj)
                const result = await response.data
                console.log(result.data.email_id)
                dispatch(changeGlobalState({
                    showAlert: true,
                    alertType: "success",
                    alertText: "Registered Successfully . Redirecting to login..."
                }))
                navigate("/login")
            } catch (error) {
                dispatch(changeGlobalState({
                    showAlert: true,
                    alertType: "error",
                    alertText: error.response.data.data.errors[0].message
                }))
            }
        }
    };
    useEffect(() => {
        dispatch(changeGlobalState({ showAlert: false }))
    }, [])
    const formDivClass =
        "flex flex-col py-0.5 [&>*]:text-lg [&>label]:pb-1 [&>label]:text-gray-600 ";
    const inputStyle = "outline-0 rounded-md border-indigo-600 border bg-gray-200";
    return (
        <div className="flex flex-col justify-center items-center py-2 bg-gray-300/50 w-full h-screen">
            <Toaster position="top-center" reverseOrder={true}></Toaster>
            <h3 className="font-bold text-xl p-1.5 text-blue-600/100">Hey There!</h3>
            <form
                onSubmit={submitHandler}
                className="flex flex-col justify-center items-center bg-white px-6 py-3 w-auto rounded-lg "
            >
                {showAlert ? <Alert className="bg-green-300" /> : null}

                <div className={formDivClass}>
                    <label>First Name</label>
                    <input
                        type="text" value={firstName}
                        className={inputStyle}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className={formDivClass}>
                    <label>Last Name</label>
                    <input
                        type="text" value={lastName}
                        className={inputStyle}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className={formDivClass}>
                    <label>Username</label>
                    <input
                        type="text" value={username}
                        className={inputStyle}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={formDivClass}>
                    <label>Email ID </label>
                    <input
                        className={inputStyle} value={emailId} type="email"
                        onChange={(e) => setEmail_id(e.target.value)}
                    />
                </div>
                <div className={formDivClass}>
                    <label>Password</label>
                    <input
                        className={inputStyle} type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={formDivClass}>
                    <label>Contact Number</label>
                    <input
                        type="number" value={contactNo}
                        className={inputStyle}
                        onChange={(e) => setContact_no(e.target.value)}
                    />
                </div>
                <Button primary rounded className="py-1 my-3" >
                    Register
                </Button>
                <div className="flex flex-row space-x-3">
                    <h3>Already a member?</h3>
                    <Link to={"/login"} className="text-blue-400 font-medium underline-offset-1">Login</Link>
                </div>
            </form>
        </div>
    );
};
// axios
// .post("/update-profile", formData, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// })

// {
//     "first_name":"Janakiraman",
//     "last_name":"Nandhakumar",
//     "username":"Janakiraman",
//     "email_id":"janakiraman@gmail.com",
//     "password":"Janakiraman781...",
//     "contact_no":"12476164714"
// }

export default Register;

// const formik = useFormik({
//     initialValues: {
//         firstName: "",
//         lastName: "",
//         username: "",
//         email_id: "",
//         password: "",
//         contact_no:""
//     },
//     validate:signUpValidate,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit: async values => {
//         // console.log(values)
//     }
// })
