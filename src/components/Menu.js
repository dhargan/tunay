import MenuItem from "./MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { about, work, education, hobbies } from "../features/navigationSlice";

const Menu = () => {
    const currentContent = useSelector((state) => state.navigation.value);
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-center text-center h-12 bg-gray">
            <div className="contents">
                <MenuItem
                    label="ABOUT"
                    isSelected={currentContent === "about"}
                    onClick={() => dispatch(about())}
                />
                <MenuItem
                    label="EDUCATION"
                    isSelected={currentContent === "education"}
                    onClick={() => dispatch(education())}
                />
                <MenuItem
                    label="WORK"
                    onClick={() => dispatch(work())}
                    isSelected={currentContent === "work"}
                />
                <MenuItem
                    label="HOBBIES"
                    onClick={() => dispatch(hobbies())}
                    isSelected={currentContent === "hobbies"}
                />
            </div>
        </div>
    );
};

export default Menu;
