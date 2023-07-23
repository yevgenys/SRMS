import {Route, Routes} from "react-router-dom";


const routes = [];


export default function RouterComponent(props) {
    return (
        <Routes>
            {routes.map(prop => (
                <Route path={prop.path} element={<prop.element/>}/>
            ))}
        </Routes>
    );
}