function Footer() {
    return (
        <footer className="bg-dark text-center text-white text-lg-start fixed-bottom">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5>Get in Touch</h5>
                        <p>
                        I'm Bryan Bickel, A UI/UX Designer with Fullstack Development skills building intuitive, user-friendly websites and applications. Reach out to discuss opportunities or collaborations!
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5>Where to Find me</h5>
                        <ul className="list-unstyled mb-0">
                            <li><a href="https://github.com/briimcfly" className="text-primary">Check out my Github</a></li>
                            <li><a href="https://dribbble.com/omgbgb" className="text-primary">Follow me on Dribble</a></li>
                            <li><a href="https://www.linkedin.com/in/briimcfly/" className="text-primary">Connect with me on LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3 bg-dark">
                © 2023 Bryan Bickel
            </div>
        </footer>
    );
}

export default Footer;
