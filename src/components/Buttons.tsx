type ButtonProps = {
    label: string;
    onClick?: () => void;
    addClasses?: string;
    disabled?: boolean;
}

const Buttons = ({label, onClick, addClasses, disabled = false}: ButtonProps) => {
    return (
        <>
            <div className={`flex  items-center justify-center w-full ${addClasses}`}>
                <button
                onClick={onClick}
                disabled={disabled}
                className="w-full block"
                >{label}
                </button>
            </div>
        </>
    )
}
export default Buttons;