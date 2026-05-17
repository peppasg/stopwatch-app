type ButtonProps = {
    label: string;
    onClick?: () => void;
    addClasses?: string;

}

const Buttons = ({label, onClick, addClasses}: ButtonProps) => {
    return (
        <>
            <div className={`flex items-center justify-center w-full ${addClasses}`}>
                <button
                onClick={onClick}

                >{label}
                </button>
            </div>
        </>
    )
}
export default Buttons;