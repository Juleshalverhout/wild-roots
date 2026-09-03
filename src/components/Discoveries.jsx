import snailEatingMushroom from '../assets/snail-mushroom.jpg'
import yarrow from '../assets/yarrow.jpg'
import fireSalamander from '../assets/fire-salamander.jpg'

function Discoveries() {
    return (
        <section className="discoveries">
            <div className="discoveries-header">
                <p className="section-label">Seasonal discoveries</p>

                <h2>What is currently out there to discover</h2>

                <p>The Wienerwald changes every season, and within every season every
                    week can be different. The environment is shaped by what is present
                    at the moment. Every season has its own collection of flora, fauna and fungi.
                </p>
            </div>

            <div className="discoveries-grid">

                <article className="discovery-card">
                    <img
                    src={snailEatingMushroom}
                    alt="A slug enjoying its meal, a whole suede bolete"
                    />
                    <h3>The forest floor</h3>
                    <p>
                        Beneath the forest floor, mycorrhizal fungi form intricate relationships with
                        the roots of plants and trees, exchanging nutrients and water. The mushrooms we
                        see above ground are only the fruiting bodies of much larger fungal organisms.
                    </p>
                </article>

                    <article className="discovery-card">
                        <img
                        src={yarrow}
                        alt="A very common plant on our meadows, with a rich history: Yarrow"
                        />
                        <h3>The open meadows</h3>
                        <p>
                            Exposed to the sunlight, meadows are their own biosphere in the forests.
                            In the meadows, herbs, flowers and other plants grow that would not thrive
                            beneath the tree canopy.
                        </p>
                    </article>

                        <article className="discovery-card">
                            <img
                            src={fireSalamander}
                            alt="The fire salamander is a local that likes to 'dance in the rain'"
                            />
                            <h3>The inhabitants</h3>
                            <p>
                                Adapted to the local environment, the the forests harbour more life
                                than you might expect. Fire salamanders can be seen traversing
                                the forest especially after a good rain.
                            </p>
                        </article>

            </div>
        </section>


        )
    }
export default Discoveries