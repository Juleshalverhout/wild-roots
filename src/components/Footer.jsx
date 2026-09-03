
function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-brand">
                <h2>Wild Roots</h2>
                <p>Explore the wild side of Vienna</p>
            </div>

            <div className="footer-navigation">
                <p className="footer-label">Explore</p>

                <a href="#walk">The walk</a>
                <a href="#about">About</a>
                <a href="#field-notes">Field notes</a>
                <a href="#faq">FAQ</a>
            </div>

            <div className="footer-contact">
                <p className="footer-label">Get in touch</p>

                <a href="mailto:halverhout.jules@gmail.com">
                    halverhout.jules@gmail.com
                </a>
                <p>Vienna, Austria</p>

            </div>
        </footer>
        )
    }
export default Footer