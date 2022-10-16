import "./App.css";
import About from "./components/About";
import Menu from "./components/Menu";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import Work from "./components/Work";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";

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
            <Menu />
            {renderContent(currentContent)}
        </>
    );
}

export default App;
