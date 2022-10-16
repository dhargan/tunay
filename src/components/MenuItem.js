const MenuItem = ({ label, onClick, isSelected = false }) => {
    return (
        <div
            onClick={onClick}
            className={`flex-1 text-dark-purple text-2xl cursor-default hover:text-yellow ${
                isSelected && "font-bold"
            } `}
        >
            {label}
        </div>
    );
};

export default MenuItem;
