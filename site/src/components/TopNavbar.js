import { useState, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import { debounce } from '../utilities/Helper';
import './Navbar.css'

const TopNavbar = () => {
  const [state, setState] = useState(false)

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll]);

  const handleClick = (e) => {
    e.preventDefault()
    setState(!state)
  }

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor: '#0a1325',
    textAlign: 'center',
    transition: 'top 0.6s'
  }

  return (
    <nav className="NavbarItems" style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>
      <a href="#">
        <i className="fab fa-jenkins" />
      </a>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={state ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}

      </ul>
    </nav>
  )
}

export default TopNavbar
