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
                    <div className="text-center">
                        <img
                            style={{ maxWidth: 500 }}
                            className="m-auto d-block"
                            src="/images/Homepage-Welcome.svg"
                        />
                    </div>
                    <div className="logo">
                        <img src="/images/Homepage-MainLogo.svg" />
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
