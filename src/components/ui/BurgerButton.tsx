const BurgerButton = () => {
    return (
        <button
            className="header__burger-button burger-button visible-mobile"
            type="button"
            title="Open menu"
        >
            <span className="burger-button-line"></span>
            <span className="burger-button-line"></span>
            <span className="burger-button-line"></span>
        </button>
    )
}

export default BurgerButton;