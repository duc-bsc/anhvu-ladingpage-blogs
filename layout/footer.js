const Footer = () => {
    return (
        <div id="footer">
            <div className="row container">
                <div className="col-img">
                    <img src="./footer-img.jpg" />
                </div>
                <div className="col-logo">
                    <img src="/footer-logo.jpg" />
                    <div className="footer-links">
                        <a href="#">CITY OF TEMPLETON</a>
                        <a href="#">ABOUT TEMPLETON</a>
                        <a href="#">TEMPLETON AREA DEVELOPMENT CORP</a>
                        <a href="#">TEMPLETON COMMUNITY BETTERMENT ASSN</a>
                    </div>
                    <div className="footer-links">
                        <a href="#">CITY OF TEMPLETON</a>
                        <a href="#">ABOUT TEMPLETON</a>
                        <a href="#">TEMPLETON AREA DEVELOPMENT CORP</a>
                        <a href="#">TEMPLETON COMMUNITY BETTERMENT ASSN</a>
                    </div>

                    <div className="footer-copy">
                        {' '}
                        Copyright © 2022 City of Templeton. All rights reserved.
                        | Website development by bluespace creative, In
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
