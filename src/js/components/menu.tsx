import "../../scss/components/menu.scss";
const Menu = () => {
    return (
        <div className="menu-wrapper">
            <div className="menu">
                <img src={'/healthy-food.png'} className={'menu__logo'} alt={'Zoie Health'} />
                <div className={'menu__title'}>Zoie Health</div>
            </div>
        </div>

    );
};

export default Menu;
