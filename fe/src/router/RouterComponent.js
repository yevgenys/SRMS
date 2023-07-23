import {Route, Routes} from "react-router-dom";
import {HomeComponent} from "../home";
import StudentListComponent from "../students/StudentListComponent";
import {
    COURSE_ADD_NAVNAME,
    COURSE_LIST_NAVNAME,
    RESULT_ADD_NAVNAME,
    RESULT_LIST_NAVNAME,
    STUDENT_ADD_NAVNAME,
    STUDENT_LIST_NAVNAME
} from "../_common/constants";
import StudentComponent from "../student/StudentComponent";
import CourseComponent from "../course/CourseComponent";
import CoursesComponent from "../courses/CoursesComponent";
import ResultsComponent from "../results/ResultsComponent";
import {ResultComponent} from "../result";

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
        element: StudentComponent,
        navname: STUDENT_ADD_NAVNAME,
    },
    {
        path: "/courses",
        element: CoursesComponent,
        navname: COURSE_LIST_NAVNAME,
    },
    {
        path: "/course",
        element: CourseComponent,
        navname: COURSE_ADD_NAVNAME,
    },
    {
        path: "/results",
        element: ResultsComponent,
        navname: RESULT_LIST_NAVNAME,
    },
    {
        path: "/result",
        element: ResultComponent,
        navname: RESULT_ADD_NAVNAME,
    },
];

export default function RouterComponent() {
    return (
        <Routes>
            {routes.map(prop => (
                <Route path={prop.path} element={<prop.element/>}/>
            ))}
        </Routes>
    );
}