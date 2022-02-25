import { AiOutlineMenu } from 'react-icons/ai';
import React from 'react';

const Header = (props) => {
    const { handleOpenMenu } = props;
    return (
        <div id="header">
            <div className="header-main">
                <div className="container">
                    <div className="icon-menu">
                        <button onClick={handleOpenMenu}>
                            <AiOutlineMenu />
                        </button>
                    </div>
                    <div className="logo">
                        <img src="/header-logo.jpg" />
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <img src="/header-bottom.jpg" />
            </div>
        </div>
    );
};
export default Header;
