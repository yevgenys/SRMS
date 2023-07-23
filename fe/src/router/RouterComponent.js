import {Route, Routes} from "react-router-dom";
import {HomeComponent} from "../home";


export const routes = [
    {
        path: "/",
        element: HomeComponent,
        navname: "Home",
    },
];


export default function RouterComponent(props) {
    return (
        <Routes>
            {routes.map(prop => (
                <Route path={prop.path} element={<prop.element/>}/>
            ))}
        </Routes>
    );
}