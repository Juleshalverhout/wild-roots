import heroForest from '../assets/hero-forest.jpg'

function Hero() {
    return (
        <section
        className= "hero"
        style={{ backgroundImage: `url(${heroForest})` }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="hero-label">Guided walking tours in the Wienerwald
                    </p>

                <h1>Wild Roots</h1>

                <p className="hero-tagline">
                    Explore the wild side of Vienna
                </p>

                <a href="#walk" className="hero-button">
                    Explore a walk
                </a>
            </div>
        </section>
        )
    }

export default Hero