import toast from "react-hot-toast"

const signUpValidate = (values) => { 
    let error = {}
    if (!values.firstName) {
        error.firstName = toast.error("First Name Required..!")
    }
    else if (values.firstName === " ") { 
        error.firstName = toast.error('Invalid First Name')
    }

    if (!values.lastName) {
        error.lastName = toast.error("Last Name Required..!")
    }
    else if (values.lastName === " ") { 
        error.lastName = toast.error('Invalid Last Name')
    }

    if (!values.username) {
        error.username = toast.error("Username Required..!")
    }
    else if (values.username === " ") { 
        error.username = toast.error('Invalid username')
    }

    if (!values.email_id) {
        error.email_id = toast.error("email_id Required..!")
    }
    else if (values.email_id === " ") { 
        error.email_id = toast.error('Invalid email_id')
    }

    if (!values.password) {
        error.password = toast.error("password Required..!")
    }
    else if (values.password.length < 4) { 
        error.password = toast.error('Password length should be 8 with alpha numerics')
    }
    if (!values.contact_no) {
        error.contact_no = toast.error("contact_no Required..!")
    }
    else if (values.contact_no.toString().length < 10) { 
        error.contact_no = toast.error('Invalid contact_no')
    }

    return error
}

export default signUpValidate

// lastName: "",
//             username: "",
//             email_id: "",
//             password: "",
//             contact_no:""