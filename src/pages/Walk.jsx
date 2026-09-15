import walkPath from '../assets/walk-path.jpg'
import beechForest from '../assets/beech-forest.jpg'
import mushroom from '../assets/mushroom.jpg'
import meadow from '../assets/meadow_2.jpg'
import wildOnion from '../assets/wild-onion.jpg'
import BookingCTA from '../components/BookingCTA'

function Walk() {
  return (
    <main className="walk-page">

<section
  className="walk-hero"
  style={{ backgroundImage: `url(${walkPath})` }}
>
  <div className="walk-hero-overlay"></div>

  <div className="walk-hero-content">
    <p className="section-label">The Wild Roots walk</p>

    <h1>
      A slower way to experience the Wienerwald and learn more about
      what, when and how to forage.
    </h1>

    <p>
      Over roughly two to two and a half hours, we move through
      woodland, forest edges and meadow habitats while stopping
      to look more closely at the plants, fungi and ecological
      relationships we encounter.
    </p>
  </div>
</section>

      <section className="walk-expect">
        <div>
          <p className="section-label">What to expect</p>

          <h2>
            Not a lecture. Not a hike. A guided discovery.
          </h2>
        </div>

        <div>
          <p>
            The route is designed to be accessible and relaxed.
            Along the way, I will explain, for example, which plants are edible,
            which ones are definitely not, and share interesting facts and
            anecdotes about their history and traditional uses in our region.
          </p>

          <p>
            This tour aims to help you discover more about our local flora and
            fauna, especially the little greens, roots and flowers you might
            usually pass by without a second thought. Many of us have become
            disconnected from our local environment, while just a few generations
            ago, knowledge of the land around us was much more widespread.
          </p>

          <p>
            This is not New Age or alternative medicine. It is about observing
            what is right in our backyard and discovering the richness that
            surrounds us every day.
          </p>
        </div>
      </section>

<section className="walk-route">

  <div className="walk-route-header">
    <p className="section-label">The route</p>

    <h2>From woodland to meadow.</h2>

    <p>
      The walk begins near the Schwarzenbergallee and continues toward
      the forest before moving through woodland paths, along roadsides
      and eventually into open meadow habitat.
    </p>
  </div>


  <div className="route-habitat">

    <div className="route-landscape">
      <img
        src={beechForest}
        alt="Beech woodland in the Wienerwald"
      />

      <div className="route-landscape-text">
        <p className="section-label">Woodland</p>
        <h3>Beneath the canopy</h3>
      </div>
    </div>


    <div className="route-discovery">
      <img
        src={mushroom}
        alt="Mushroom growing on the forest floor"
      />

      <div>
        <p className="section-label">Look closer</p>
        <h3>Life beneath the trees</h3>

        <p>
          The forest floor reveals another layer of the woodland:
          fungi, plants and the ecological relationships that connect
          them with the trees above.
        </p>
      </div>
    </div>

  </div>


  <div className="route-habitat route-habitat-reverse">

    <div className="route-landscape">
      <img
        src={meadow}
        alt="Open meadow in the Wienerwald"
      />

      <div className="route-landscape-text">
        <p className="section-label">Meadow</p>
        <h3>Out into the light</h3>
      </div>
    </div>


    <div className="route-discovery">
      <img
        src={wildOnion}
        alt="Wild Crow garlic growing in a meadow"
      />

      <div>
        <p className="section-label">Look closer</p>
        <h3>A different habitat</h3>

        <p>
          Leaving the shade changes what grows around us.
          Meadow plants, flowers and insects thrive in conditions
          very different from those beneath the forest canopy.
        </p>
      </div>
    </div>

  </div>

</section>

      <section className="walk-details">
        <div>
          <h3>Duration</h3>
          <p>Approximately 2–2.5 hours</p>
        </div>

        <div>
          <h3>Difficulty</h3>
          <p>Easy to moderate, with gentle inclines</p>
        </div>

        <div>
          <h3>Meeting point</h3>
          <p>Schwarzenbergallee, Vienna</p>
        </div>
      </section>
      <BookingCTA />

    </main>
  )
}

export default Walk