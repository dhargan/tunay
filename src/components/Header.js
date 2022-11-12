import logo from "../images/logo.png";

const Header = (props) => {
    return (
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
                    <span className="text-lg sm:text-lg md:text-xl xl:text-3xl 2xl:text-3xl">
                        <span className="font-thin text-white">A. TEOMAN</span>
                        <span className="font-bold text-yellow"> UNAY</span>
                    </span>
                </div>
                <div className="flex-row">
                    <span className="font-bold text-white text-lg sm:text-lg md:text-2xl xl:text-4xl 2xl:text-4xl">
                        Software Engineer
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
