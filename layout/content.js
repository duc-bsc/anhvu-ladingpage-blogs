const Content = () => {
    return (
        <div className="content">
            <div className="content-box">
                <h3 className="content-box-title">
                    A message from Mayor Ken Behrens
                </h3>
                <div className="row">
                    <div className="col">
                        <span>
                            Welcome to the City of Templeton’s official website.
                            Whether you are a resident of Templeton or a visitor
                            to our fine City, we are glad you are interested in
                            all we have to offer.
                        </span>
                    </div>
                    <div className="col">
                        <img src="/blog-img.jpg" />
                    </div>
                </div>
                <p>
                    The City of Templeton has partnered with the Templeton
                    Community Betterment Association and Templeton Area
                    Development Corporation on this website to provide you with
                    the information you need to enjoy all that Templeton has to
                    offer. We are deeply proud of our heritage, colorful
                    history, strong achievements, and potential for the future.
                    This pride is evident in our community and we hope you will
                    find it throughout this website as well
                </p>
                <p>
                    This site will be regularly updated and we encourage you to
                    check back on a regular basis for the most current
                    information on what is going on in Templeton. We also
                    encourage you to provide feedback on the site, and if you
                    have any questions please contact me, our City Staff, or a
                    member of our City Council. I look forward to seeing you
                    around our wonderful community!
                </p>
                <div className="author">
                    <span className="author-sub-title">Regards,</span>
                    <span className="author-title">Ken Behrens</span>
                </div>
            </div>
        </div>
    );
};
export default Content;
