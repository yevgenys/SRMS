import './App.css';
import {RouterComponent} from "./router";
import {MenuComponent} from "./menu";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App" style={{display: 'flex', alignContent: "center", justifyContent: "center"}}>
                <MenuComponent/>
                <RouterComponent/>
            </div>
        </LocalizationProvider>
    );
}

export default App;
