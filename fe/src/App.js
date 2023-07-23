import './App.css';
import {RouterComponent} from "./router";
import MenuComponent from "./menu/MenuComponent";

function App() {
    return (
        <div className="App">
            <MenuComponent/>
            <RouterComponent/>
        </div>
    );
}

export default App;
