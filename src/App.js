import "./App.css";
import logo from "./images/logo.png";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
    return (
        <>
            <div className="flex items-center justify-center text-center h-40 bg-light-purple">
                <div className="flex-col">
                    <img
                        className="shadow rounded-full border-2 border-yellow shadow-black"
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="flex-col ml-4">
                    <div className="flex-row mb-2 mt-3">
                        <span className="text-5xl">
                            <span className="font-thin text-white">
                                A. TEOMAN
                            </span>
                            <span className="font-bold text-yellow"> UNAY</span>
                        </span>
                    </div>
                    <div className="flex-row">
                        <span className="font-bold text-white text-4xl">
                            Software Engineer
                        </span>
                    </div>
                </div>
            </div>
            <Menu />
            <About />
        </>
    );
}

export default App;
