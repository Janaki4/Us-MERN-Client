import { Outlet, Navigate, Link } from "react-router-dom"
import { SideBar } from "./SideBar"
import { NavBar } from "./NavBar"
const SharedLayout = () => {
  return (
    <div className="relative overflow-hidden w-screen h-screen">
      < div className="absolute bg-gray-200 w-36 h-screen z-10">
        <SideBar />
      </div>
      <div className="absolute top-0 left-0 bg-gray-200 w-screen h-20 item-center justify-center flex p-8 ">
        <NavBar />
      </div>
      <div className="absolute left-36 top-20  w-screen h-screen ">
        <Outlet />
      </div>
    </div>
  )
}

export default SharedLayout
