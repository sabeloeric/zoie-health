import "../../scss/components/menu.scss";
const Menu = () => {

    const handleClick = () => {
        window.location.href = '/';
    };

    return (
        <div className="menu-wrapper">
            <div className="menu">
                <img src={'/healthy-food.png'}
                     onClick={handleClick}
                     className={'menu__logo'}
                     alt={'Zoie Health'} />
                <div className={'menu__title'}
                     onClick={handleClick}>
                    Zoie Health
                </div>
            </div>
        </div>

    );
};

export default Menu;
