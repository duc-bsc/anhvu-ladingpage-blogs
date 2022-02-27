const Footer = () => {
    return (
        <div id="footer">
            <div className="row container">
                <div className="col-img">
                    <img
                        width="200"
                        src="/images/Homepage-FooterLogoImage.svg"
                    />
                </div>
                <div className="col-logo">
                    <img src="/images/Homepage-FooterLogo.svg" />
                    <div className="footer-links">
                        <a href="#">CITY OF TEMPLETON</a>
                        <a href="#">ABOUT TEMPLETON</a>
                        <a href="#">TEMPLETON AREA DEVELOPMENT CORP</a>
                        <a href="#">TEMPLETON COMMUNITY BETTERMENT ASSN</a>
                    </div>
                    {/* <div className="footer-links">
                        <a href="#">CITY OF TEMPLETON</a>
                        <a href="#">ABOUT TEMPLETON</a>
                        <a href="#">TEMPLETON AREA DEVELOPMENT CORP</a>
                        <a href="#">TEMPLETON COMMUNITY BETTERMENT ASSN</a>
                    </div> */}

                    <div className="footer-copy ">
                        <small className="text-white d-inline-block">
                            Copyright © 2022 City of Templeton. All rights
                            reserved.
                        </small>{' '}
                        <small className="text-white divider">|</small>{' '}
                        <small className="text-white d-inline-block">
                            Website development by bluespace creative, Inc.
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
