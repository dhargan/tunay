import MenuItem from "./MenuItem";

const Menu = (props) => {
    return (
        <div class="flex items-center justify-center text-center h-12 bg-gray">
            <div class="contents">
                <MenuItem label="ABOUT" isSelected={true} />
                <MenuItem label="EDUCATION" />
                <MenuItem label="WORK" />
                <MenuItem label="HOBBIES" />
            </div>
        </div>
    );
};

export default Menu;
