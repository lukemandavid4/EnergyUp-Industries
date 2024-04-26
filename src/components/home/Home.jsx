import { useState } from 'react';
import './home.css'
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const [isOpenOne, SetIsOpenOne] = useState(false)
  const [isOpenTwo, SetIsOpenTwo] = useState(false)
  const [isOpenThree, SetIsOpenThree] = useState(false)
  const [isOpenFour, SetIsOpenFour] = useState(false)

  const [rotateOne, SetRotateOne] = useState(false)
  const [rotateTwo, SetRotateTwo] = useState(false)
  const [rotateThree, SetRotateThree] = useState(false)
  const [rotateFour, SetRotateFour] = useState(false)
  const handleClickOne = () =>{
    SetIsOpenOne(!isOpenOne)
    SetRotateOne(!rotateOne)
  }
  const handleClickTwo = () =>{
    SetIsOpenTwo(!isOpenTwo)
    SetRotateTwo(!rotateTwo)
  }
  const handleClickThree = () =>{
    SetIsOpenThree(!isOpenThree)
    SetRotateThree(!rotateThree)
  }
  const handleClickFour = () =>{
    SetIsOpenFour(!isOpenFour)
    SetRotateFour(!rotateFour)
  }

  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className='home'>
      <div className="home__header">
        <h1>Power Your Future <br className='home__header--break
        '/>with <span>Clean Energy</span></h1>
        <p>Our cutting-edge solutions bring sunlight directly to your doorstep, <br className='home__header--break
        '/>providing sustainable power for your home. Experience the future.</p>
        <a href="#contact">Get in Touch</a>
      </div>
      <div className="home__middle" id='solutions'>
        <div className="home__middle--top">
          <h1>Sustainable Solutions</h1>
          <p>From solar energy to energy-efficient products, we&apos;ve got what you need to reduce your <br />footprint and embrace a greener lifestyle. Join us in building a sustainable future</p>
        </div>
        <div className="home__middle--bottom">
          <div className='middle__bottom one'></div>
          <div className='middle__bottom two'>
            <h2>Solar Energy Solutions</h2>
            <div>
              <p>Discover our innovative solar energy solutions designed to power your home sustainably</p>
              <a href="#contact">Learn More</a>
            </div>
          </div>
          <div className='middle__bottom three'></div>
          <div className='middle__bottom four'>
            <h2>Smart Home Integration</h2>
            <div>
              <p>Seamlessly integrate renewable energy solutions into your smart home ecosystem.</p>
              <a href="#contact">Learn More</a>
            </div>
          </div>
          <div className='middle__bottom five'>
            <h2>Eco-Friendly Products</h2>
            <div>
              <p>Explore our range of eco-friendly products designed to enhance sustainability in your home</p>
              <a href="#contact" id='fiv'>Learn More</a>
            </div>
          </div>
          <div className='middle__bottom six'></div>
          <div className='middle__bottom seven'>
            <h2>Energy Services</h2>
            <div>
              <p>Optimize your energy usage and reduce costs with our energy efficiency services</p>
              <a href="#contact">Learn More</a>
            </div>
          </div>
          <div className='middle__bottom eight'></div>
        </div>
      </div>
      <div className="home__center" id='about'>
        <div className="home__center--left">
          <div className='center__left'></div>
          <div className='center__right'></div>
        </div>
        <div className="home__center--right">
          <h1>Revolutionizing Energy for a Sustainable Future</h1>
          <p>We&apos;re dedicated to revolutionizing the way you power your home. With a commitment to sustainability and innovation, we&apos;re leading the charge towards a cleaner, brighter future.</p>
          <a href="#contact">Discover the Future</a>
        </div>
      </div>
      <div className="home__bottom">
        <div className="home__bottom--left">
          <h1>Empower Yourself with Sustainable Solutions</h1>
          <p>With a focus on sustainability and innovation, we&apos;re committed to leading the charge towards a cleaner, brighter future.</p>
          <a href="#contact">Discover our Solutions</a>
        </div>
        <div className="home__bottom--right">
          <div className="bottom__left"></div>
          <div className="bottom__right"></div>
        </div>
      </div>
      <div className="home__faq" id='faq'>
        <div className="home__faq--left">
          <h1>FAQ</h1>
          <p>Get answers to commonly asked questions about sustainable living and our eco-friendly solutions.</p>
        </div>
        <div className="home__faq--right">
          <div className='faq__accordion'>
            <div className="faq__accordion--btn" onClick={handleClickOne}><span>What are the benefits of using solar energy?</span> <FaPlus className={`icon ${rotateOne ? 'rotate' : ''} `} /></div>
            <div className={`faq__accordion--accordions ${isOpenOne ? 'open' : ''} `}>Solar energy reduces electricity bills, decreases carbon emissions, and provides a reliable and sustainable power source.</div>
          </div>
          <div className='faq__accordion'>
            <div className="faq__accordion--btn" onClick={handleClickTwo}><span>How do energy-efficient products help save money?</span> <FaPlus className={`icon ${rotateTwo ? 'rotate' : ''} `}/></div>
            <div className={`faq__accordion--accordions ${isOpenTwo ? 'open' : ''} `}>Energy-efficient products consume less energy, resulting in lower utility bills over time.</div>
          </div>
          <div className='faq__accordion'>
            <div className="faq__accordion--btn" onClick={handleClickThree}><span>What is smart home integration, and how does it work? </span><FaPlus className={`icon ${rotateThree ? 'rotate' : ''} `}/></div>
            <div className={`faq__accordion--accordions ${isOpenThree ? 'open' : ''} `}>Smart home integration allows you to control and monitor your home&apos;s energy usage through connected devices, optimizing efficiency and reducing waste.</div>
          </div>
          <div className='faq__accordion'>
            <div className="faq__accordion--btn" onClick={handleClickFour}><span>Are eco-friendly products more expensive than traditional ones?</span> <FaPlus className={`icon ${rotateFour ? 'rotate' : ''} `}/></div>
            <div className={`faq__accordion--accordions ${isOpenFour ? 'open' : ''} `}>While initial costs may be higher, eco-friendly products often provide long-term savings through reduced energy consumption and lower maintenance requirements.</div>        
          </div>
        </div>
      </div>
      <div className="home__footer" id='contact'>
        <div className="home__footer--top">
          <form>
            <h1>Get In Touch</h1>
            <p>Fill out the form below to schedule a consultation with one of our experts and learn how our eco-friendly solutions can transform your home.</p>
            <div className="footer__top--name">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder='Name'/>
            </div>
            <div className="footer__top--email">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" placeholder='Email'/>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="home__footer--bottom">
          <div className="navbar__logo">
              <img src="https://assets-global.website-files.com/65f17f4e78adc80dfbcad3be/65f9572115526bc0854a4386_EnergyUp-Logo-Nav.svg" alt="logo" />
              <a href="#">EnergyUp</a>
          </div>
          <div className="footer__bottom--copyright">
            <p>&copy; {year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
