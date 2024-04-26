import './navbar.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, SetIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`} >
        <div className="navbar__logo">
            <img src="https://assets-global.website-files.com/65f17f4e78adc80dfbcad3be/65f9572115526bc0854a4386_EnergyUp-Logo-Nav.svg" alt="logo" />
            <a href="#">EnergyUp</a>
        </div>
        <div className={`navbar__links ${isOpen ? 'open' : ''}`} >
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
        </div>
        <div className="navbar__contact">
            <a href="#contact">Contact Us</a>
        </div>
        <div className="navbar__hamburger" onClick={() =>SetIsOpen(!isOpen)}>
          <RxHamburgerMenu className='icon'/>
        </div>
    </div>
  )
}

export default Navbar
