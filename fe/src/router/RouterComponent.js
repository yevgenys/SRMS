import {Route, Routes} from "react-router-dom";
import {HomeComponent} from "../home";
import StudentListComponent from "../students/StudentListComponent";
import {STUDENT_ADD_NAVNAME, STUDENT_LIST_NAVNAME} from "../_common/constants";


export const routes = [
    {
        path: "/",
        element: HomeComponent,
        navname: "Home",
    },
    {
        path: "/students",
        element: StudentListComponent,
        navname: STUDENT_LIST_NAVNAME,
    },
    {
        path: "/student",
        element: StudentListComponent,
        navname: STUDENT_ADD_NAVNAME,
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