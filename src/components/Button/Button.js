import classnames from "classnames"

function Button({
    children,
    primary,
    secondary,
    success,
    danger,
    outline,
    rounded,
    ...rest
}) {
    const classes = classnames(rest.className,'px-3 py-1.5 border m-1  items-center flex',({
        "bg-blue-400 text-white border-blue-500": primary,
        "bg-amber-400 text-white  border-amber-500": secondary,
        "bg-green-400 text-white  border-green-500": success,
        "bg-red-400 text-white  border-red-500": danger,
        "bg-white": outline,
        "rounded-full": rounded,
        "text-blue-500": outline && primary,
        "text-amber-500": outline && secondary,
        "text-green-500": outline && success,
        "text-red-500":outline && danger,
    }))
    return (<button {...rest}  className={classes}>{children}</button>)
}

export default Button


// Button.propTypes = {
//     checkButtonVariation: (primary, secondary, success, danger) => { 
//         const sum = +(!!primary) + +(!!secondary) + +(!!success) + +(!!danger)
//         if (sum > 1) { 
//             return new Error( "Only one among primary , secondary, success, danger can be true" )
//         }
//     }
// }