import { Outlet } from "react-router-dom";
import DefaultLayout from "../layout/default-layout/DefaultLayout";

export default function Home() {
    return (
        <DefaultLayout>
            <Outlet />
        </DefaultLayout>
    )
}