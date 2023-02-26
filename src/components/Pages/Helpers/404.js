import { Link } from "react-router-dom"
import img from "../../../Assets/images/PageNotFound.jpg"

const PageNotFound = () => {
    return (
        <div className="relative">
            <img className="h-screen w-full " src={img} alt="page not found"></img>
            <Link to="/" className="absolute top-1/3 left-1/2 text-xl font-extrabold">
                <h2>
                    Back to home
                </h2>
            </Link>
        </div>
    )
}

export default PageNotFound
