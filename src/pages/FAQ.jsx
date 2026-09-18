import { useState } from 'react'

const faqItems = [
  {
    question: 'Do I need to know anything about plants or fungi?',
    answer:
      'Not at all. Wild Roots is designed for curious people, whether you already know a few species or are starting from scratch. The idea is to slow down, look closer and discover what is growing around us.'
  },
  {
    question: 'How long is the walk?',
    answer:
      'Usually around 2–2.5 hours. The exact duration can vary slightly depending on what we encounter along the way — an interesting plant, fungus or other discovery is often worth stopping for.'
  },
  {
    question: 'How difficult is the route?',
    answer:
      'The walk follows woodland paths and meadow areas with mostly gentle inclines. It is not intended as a strenuous hike, but you should be comfortable walking outdoors on natural and sometimes uneven surfaces for a few hours.'
  },
  {
    question: 'Where does the walk start?',
    answer:
      'The meeting point is at Schwarzenbergallee in Vienna, close to public transport and with parking available nearby. Exact meeting details are provided when booking.'
  },
  {
    question: 'Do we actually forage during the walk?',
    answer:
      'Foraging is part of Wild Roots, but it isn’t the whole story. We identify edible plants and fungi and discuss their uses, while also looking at native species, ecology, habitats and the relationships between the organisms around us. What we find depends strongly on the season.'
  },
  {
    question: 'Can I eat the plants and mushrooms we find?',
    answer:
      'We may taste or discuss edible species during a walk where appropriate, but identifying something on a Wild Roots walk should not be treated as a general guarantee that it is safe to collect or eat independently. Never eat a wild plant or fungus unless you are certain of its identification and suitability for consumption.'
  },
  {
    question: 'What should I bring?',
    answer:
      'Comfortable shoes, weather-appropriate clothing and some water are usually all you need. Rain protection is a good idea when the forecast is uncertain. No specialist outdoor equipment is required.'
  },
  {
    question: 'What happens if the weather is bad?',
    answer:
      'A little rain doesn’t necessarily stop a Wild Roots walk. If conditions remain safe, the walk can still take place. In severe or unsafe weather, such as thunderstorms, hail or strong winds, the walk will be postponed. Wild Roots will contact booked participants directly to arrange another date. If you are unable to attend a replacement date, you can choose to receive a full refund.'
  },
  {
    question: 'What happens if Wild Roots has to cancel a walk?',
    answer:
      'Occasionally, unforeseen circumstances such as illness may make it impossible for a scheduled walk to take place. If this happens, booked participants will be contacted directly. You can either move your booking to another available date or receive a full refund.'
  },
  {
    question: 'Can children join?',
    answer:
      'Yes. There is no specific age requirement, but children should be comfortable spending around 2–3 hours outdoors and walking on woodland paths with mild inclines. Parents or guardians are best placed to decide whether the walk is suitable for their child.'
  },
  {
    question: 'Can I bring my dog?',
    answer:
      'Yes, dogs are welcome. If you’re joining a group walk, please make sure your dog is comfortable around other people and dogs, as there may be several dogs in the group.'
  },
  {
    question: 'Can I book a private walk or bring a larger group?',
    answer:
      'Yes. Regular Wild Roots walks are intentionally kept small, but private walks can also be arranged for larger groups, families, friends, companies or team events. Group size, date and other details can be discussed individually. Get in touch if you have something particular in mind.'
  },
  {
    question: 'Is every Wild Roots walk the same?',
    answer:
      'Not at all. The Wienerwald changes constantly throughout the year. Spring greens and flowers give way to summer meadows, autumn fungi and eventually the open structure of the winter forest. The route may be familiar, but what we stop to investigate depends on what nature has to show us that day.'
  }
]

function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const toggleQuestion = (questionNumber) => {
    setOpenQuestion(
      openQuestion === questionNumber ? null : questionNumber
    )
  }

  return (
    <main className="faq-page">

      <section className="faq-intro">
        <p className="section-label">FAQ</p>

        <h1>Before we head into the forest.</h1>

        <p>
          A few practical things to know before joining a Wild Roots walk.
        </p>
      </section>

      <section className="faq-list">

        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>
              <span>{openQuestion === index ? '−' : '+'}</span>
            </button>

            {openQuestion === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </section>

    </main>
  )
}

export default FAQ