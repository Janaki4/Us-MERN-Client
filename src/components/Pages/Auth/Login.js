// import React, { useEffect } from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '../Helpers/Alert';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../Button/Button';
import { changeGlobalState, changeUserState } from '../../../store';
// import { ResetError } from '../Helpers/ResetError';
import axios from 'axios';
import { addUserToLocalStorage, removeUserFromLocalStorage } from '../Helpers/localStorage';
// import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailId, setEmail_id] = useState("");
  const [password, setPassword] = useState("");
  const {
    global: { showAlert, alertType, alertText },
    user: { userName, token } } = useSelector(state => {
      return state
    })

  // dispatch(changeGlobalState())
  const submitHandler = async (e) => {
    e.preventDefault()

    const loginObj = {
      email_id: emailId,
      password
    }
    if (!loginObj.email_id || !loginObj.password) {
      dispatch(changeGlobalState({
        showAlert: true,
        alertType: "error",
        alertText: "Please enter all values"
      }))
      setTimeout(() => {
        dispatch(changeGlobalState({ showAlert: false, alertText: "", alertType: "" }))
      }, 3000)
    }
    else {
      try {
        const response = await axios.post("/user/login", loginObj)
        const result = await response.data
        console.log(result)
        dispatch(changeGlobalState({
          showAlert: true,
          alertText: result.status,
          alertType: result.status
        }))
        dispatch(changeUserState({
          emailId: result.data.email_id,
          token: result.data.token,
          userId: result.data.user_id,
          userName: result.data.username
        }))
        addUserToLocalStorage(
          result.data.user_id, result.data.token,
          result.data.username, result.data.email_id)

        // setTimeout(() => { 
        //   navigate("/")
        // },3000)
      }
      catch (error) {
        console.log(error)
        dispatch(changeGlobalState({
          showAlert: true,
          alertText: error.response.data.data,
          alertType: error.response.data.status
        }))
      }

    }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])


  const formDivClass =
    "flex flex-col py-0.5 [&>*]:text-lg [&>label]:pb-1 [&>label]:text-gray-600 ";
  const inputStyle = "outline-0 rounded-md border-indigo-600 border bg-gray-200";
  return (
    <div className="flex flex-col justify-center items-center py-2 bg-gray-300/50 w-full h-screen">
      {/* <Toaster position="top-center" reverseOrder={true}></Toaster> */}
      <h3 className="font-bold text-xl p-1.5 text-blue-600/100">Hey There!</h3>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center bg-white px-6 py-3 w-auto rounded-lg "
      >
        {showAlert ? <Alert className="bg-green-300" /> : null}
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
        <Button primary rounded className="py-1 my-3" >
          Login
        </Button>
        <div className="flex flex-row space-x-3">
          <h3>New user ?</h3>
          <Link to={"/register"} className="text-blue-400 font-medium underline-offset-1">Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
