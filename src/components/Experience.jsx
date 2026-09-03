import meadowImage from '../assets/meadow.jpg'

function Experience() {

    return (
        <section className="experience" id="walk">
            <div className="experience-image">
                <img
                src={meadowImage}
                alt="Meadow and forest edge in the Wienerwald"
                />
            </div>

            <div className="experience-content">
                <p className="section-label">The experience</p>

                <h2>Experiencing the Wienerwald</h2>

                <p>
                    Over roughly two to two and a half hours, we move through woodland,
                    forest edges and meadow habitats while stopping to look more closely
                    at the plants, fungi and ecological relationships we encounter.
                </p>

                <p>
                    The route is designed to be accessible and relaxed. The focus is not
                    on covering distance, but on noticing what changes as we move through
                    different parts of the landscape.
                </p>

                <a href="#book" className="text-link">
                    Learn more and book here
                </a>
            </div>
        </section>
        )
    }
export default Experience