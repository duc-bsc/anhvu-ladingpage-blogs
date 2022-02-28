import { AiOutlineClose } from 'react-icons/ai';
const Menu = (props) => {
    const { isMenu, handleCloseMenu } = props;
    return (
        <div id="menu" className={isMenu ? 'menu-active' : ''}>
            <div className="menu-top">
                {/* <img className="menu-top-logo" src="./menu-logo.jpg" /> */}
                <button className="close" onClick={handleCloseMenu}>
                    X
                </button>
            </div>
            <ul>
                <li>
                    <a href="#">
                        menu item
                        <ul class="sub-menu">
                            <li>
                                <a href="#">sub menu item</a>
                            </li>
                            <li>
                                <a href="#">sub menu item</a>
                            </li>
                            <li>
                                <a href="#">sub menu item</a>
                            </li>
                            <li>
                                <a href="#">sub menu item</a>
                            </li>
                        </ul>
                    </a>
                </li>
                <li>
                    <a href="#">menu item</a>
                </li>
                <li>
                    <a href="#">menu item</a>
                </li>
                <li>
                    <a href="#">menu item</a>
                </li>
            </ul>
        </div>
    );
};
export default Menu;
