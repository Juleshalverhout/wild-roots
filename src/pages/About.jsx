import BookingCTA from '../components/BookingCTA'
import aboutJules from '../assets/about-jules.jpg'
import springImage from '../assets/about-spring.jpg'
import summerImage from '../assets/about-summer.jpg'
import autumnImage from '../assets/about-autumn.jpg'
import winterImage from '../assets/about-winter.jpg'
import forestImage from '../assets/about-forest.jpg'
import knowledgeImage from '../assets/about-chicken-of-the-woods.jpg'
import salamanderImage from '../assets/about-salamander.jpg'

function About() {
  return (
    <main className="about-page">

      {/* =========================
          INTRO
          ========================= */}

      <section className="about-intro">
        <div className="about-intro-content">
          <p className="section-label">About Wild Roots</p>

          <h1>Curiosity for local habitat</h1>

          <p>
            Wild Roots grew out of a passion for nature: watching winter
            slowly recede and observing the first greens appear, turning
            into an abundance of flowers in summer, wave after wave,
            through autumn until everything settles again for winter.
            And even in winter, the forest is alive for those who look
            closer, it is an ongoing show of nature.
          </p>
        </div>

        <div className="about-intro-image">
          <img
          src={forestImage}
          alt="Spring woodland in the wienerwald"
          />
        </div>
      </section>


      {/* =========================
          FORAGING
          ========================= */}

<section className="about-foraging">

  <div className="about-foraging-content">
    <p>
      Learning to forage means learning what grows where and in
      which season. What is edible, and what is definitely not?
      What was used in the past, perhaps as a now 'forgotten'
      vegetable or herb?
    </p>

    <p>
      Wild Roots grew out of years spent exploring the Wienerwald
      and spending time in the countryside of Slovakia.
    </p>
  </div>

</section>


      {/* =========================
          IDEA
          ========================= */}

      <section className="about-idea">
        <div className="about-idea-content">
          <p>
            The idea is simple: to share some of that curiosity with
            other people, because many of the plants you walk past every
            day have properties, uses and histories that go far beyond
            what you might expect.
          </p>
        </div>
      </section>

      <section className="about-seasons">

              <div className="about-seasons-header">
                <p className="section-label">Through the seasons</p>
                <h2>The Wienerwald never stays the same for long.</h2>
                <p>
                  Every season changes what there is to notice — from the first
                  edible greens of spring to fungi emerging among autumn leaves,
                  and the bare structure of the forest in winter.
                </p>
              </div>

              <div className="about-seasons-grid">

                <article className="season-card season-spring">
                  <img
                    src={springImage}
                    alt="Garlic mustard flowering in the Wienerwald"
                  />
                  <p className="season-name">Spring</p>
                  <p>
                    The forest floor wakes up — fresh greens, flowers and familiar
                    plants returning.
                  </p>
                </article>

                <article className="season-card season-summer">
                  <img
                    src={summerImage}
                    alt="Summer meadow at the edge of the Wienerwald"
                  />
                  <p className="season-name">Summer</p>
                  <p>
                    Meadows change almost week by week as one wave of plants
                    replaces another.
                  </p>
                </article>

                <article className="season-card season-autumn">
                  <img
                    src={autumnImage}
                    alt="Coral fungus growing on deadwood in the Wienerwald"
                  />
                  <p className="season-name">Autumn</p>
                  <p>
                    Fungi appear among fallen leaves and deadwood, revealing
                    another side of the forest.
                  </p>
                </article>

                <article className="season-card season-winter">
                  <img
                    src={winterImage}
                    alt="Bare tree canopy in the Wienerwald during winter"
                  />
                  <p className="season-name">Winter</p>
                  <p>
                    With the leaves gone, the structure of the forest suddenly
                    becomes visible.
                  </p>
                </article>

              </div>

            </section>

      {/* =========================
          JULES
          ========================= */}

      <section className="about-jules">
        <div className="about-jules-image">
          <img
          src={aboutJules}
          alt="Jules exploring the Wienerwald"
          />
        </div>

        <div className="about-jules-content">
          <p className="section-label">Hi, I'm Jules</p>

          <h2>
            The more I learned, the harder it became to simply walk
            through a forest.
          </h2>

          <p>
            I am originally from the Netherlands and have called Vienna
            home for more than 11 years. Over those years, I have also
            lived in Slovakia at intervals and spent many weekends and
            longer periods there. It has become something of a second
            home to me, and both Austria and Slovakia have shaped my
            appreciation for Central European nature.
          </p>

          <p>
            Somewhere along the way, the Wienerwald became one of the
            places where I found my true passion for our local plants,
            fungi and ecosystems.
          </p>
        </div>
      </section>


      {/* =========================
          CURIOSITY
          ========================= */}

      <section className="about-curiosity">
        <div className="about-curiosity-content">
          <p>
            I have always been an outdoor person and have always walked
            with my nose to the ground, so to speak. But a few years ago,
            while watching the first greens appear during my regular
            walks in the forest, I thought: <em>How many of these plants
            are actually edible?</em>
          </p>

          <p>
            I started identifying and researching them, and Pandora's
            box was opened. What fascinated me especially were their
            traditional uses, the folk tales surrounding certain plants
            and herbs, and their actual properties.
          </p>
        </div>
      </section>


      {/* =========================
          TRADITIONAL KNOWLEDGE
          ========================= */}

      <section className="about-knowledge">
        <div className="about-knowledge-image">
            <img
              src={knowledgeImage}
              alt="Chicken of the Woods growing on a tree"
            />
        </div>

        <div className="about-knowledge-content">
          <p>
            People in the past had extensive knowledge of plants because
            they were part of so many day-to-day activities, from using
            certain flowers to dye hair, to burning herbs to drive
            insects from the home, or even using a particular mushroom
            to add a spicy flavour to food.
          </p>
        </div>
      </section>


      {/* =========================
          CONNECTIONS
          ========================= */}

      <section className="about-connections">
        <div className="about-connections-content">
          <p>
            What began with an interest in edible plants and fungi
            gradually expanded into something much broader: ecology,
            native plants, traditional uses, geology, and the
            relationships between the species sharing the same landscape.
          </p>
        </div>

          <div className="about-connections-image">
            <img
              src={salamanderImage}
              alt="Fire salamander on the forest floor"
            />
          </div>

      </section>

      {/* =========================
          CLOSING
          ========================= */}

      <section className="about-closing">
        <p>
          The more I learned, the harder it became to simply walk through
          a forest without stopping to look at something, to discover
          something new every season and to apply this knowledge directly.
        </p>

        <h2>I am now here to share it with you.</h2>
      </section>


      <BookingCTA />

    </main>
  )
}

export default About