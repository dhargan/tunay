import "./App.css";
import About from "./components/About";
import Work from "./components/Work";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Header from "./components/Header";
import { useSelector } from "react-redux";

function App() {
    const currentContent = useSelector((state) => state.navigation.value);

    function renderContent(contentSlug) {
        switch (contentSlug) {
            case "about":
                return <About />;
            case "work":
                return <Work />;
            case "education":
                return <Education />;
            case "hobbies":
                return <Hobbies />;
            default:
                return <About />;
        }
    }

    return (
        <>
            <Header />
            {renderContent(currentContent)}
        </>
    );
}

export default App;
