import { Link } from "react-router-dom"
const SideBar = () => {
    return (
        <div>
            <div >
                <nav className="flex flex-col [&>*]:px-3 [&>*]:py-2 [&>*]:items-start">
                    <Link to="create-org" >Create Org</Link>
                    <Link to="invite-employee">Invite Employee</Link>
                </nav>
            </div>
        </div>
    )
}

export { SideBar }
