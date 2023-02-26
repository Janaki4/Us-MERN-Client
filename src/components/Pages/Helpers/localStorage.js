const addUserToLocalStorage = (userId, token, userName, emailId) => {
    localStorage.setItem("userId", userId)
    localStorage.setItem("token", token)
    localStorage.setItem("userName",userName)
    localStorage.setItem("emailId",emailId)
}
 
const removeUserFromLocalStorage = (userId, token, userName, emailId) => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("emailId")
    localStorage.removeItem("userName")
}
 
export { addUserToLocalStorage , removeUserFromLocalStorage}