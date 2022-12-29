import HomePage from "./Components/pages/HomePage";
import { WindowContextProvider } from "./Contexts/WindowContext";

function App() {
    return (
        <WindowContextProvider>
            <HomePage/>
        </WindowContextProvider>
    )
}

export default App;