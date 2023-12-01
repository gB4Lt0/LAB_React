import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Main() {
    return (
        <div>
            <Header />
            <div /*className="max-w-screen-lg mx-auto mt-4"*/ className="" >
                <Outlet />
            </div>
        </div>
    )
}