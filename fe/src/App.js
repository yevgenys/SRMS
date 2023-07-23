import './App.css';
import {RouterComponent} from "./router";
import {MenuComponent} from "./menu";

function App() {
    return (
        <div className="App" style={{display: 'flex'}}>
            <MenuComponent/>
            <RouterComponent/>
        </div>
    );
}

export default App;
