import './About.css'
import classNames from 'classnames';

// interface aboutProps {
  // pageShowing: string,
// }

function About() {
  const aboutClass = classNames('site-section', 'about')
  return (
    <div className={aboutClass}>
      <h1>Larger Text</h1>
      <div>
        <p>Behold, the land of Eccentrica: Gigglemire Gallery, where squishy heartbeats syncopate in laughter symphonies. Founded on a whim of whimsy, amidst the doodle dawns of yesteryears, our mission: to splatter joy across the canvas of life.</p>
        <p>Meet our merry band of frolicknarts and jollymuffs, guardians of the giggle, purveyors of the silly. From the first chucklewave to the latest snickerstorm, our tale is one of mirthful meanders and bonhomous ballyhoos.</p>
        <p>Step through our doors into a kaleidospiral of jollity and jape, where every nook is a narrative of nifty nuttiness, and every cranny, a cradle of chucklethump. Our abode is not merely an assemblage of art; it is a rendezvous of rascals, a vortex of vivaciousness, a congregation of the carefree.</p>
      </div>
    </div>
  )
}

export default About;