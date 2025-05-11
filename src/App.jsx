import { useEffect, useState } from 'react'
import ProfilePage from './Test'

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const [count, setCount] = useState(0)

  const toggleMenu = () => {
    setHamburgerMenu(!hamburgerMenu)
  }

  return (
    <div className='home'>
      <nav>
        <h1>Hello</h1>
        <ul className='menu'>
          <li>Subarashi</li>
          <li>Subarashi</li>
          <li>Subarashi</li>
          <li>Subarashi</li>
        </ul>
        <div className="icon" onClick={toggleMenu}>
          <span></span><span></span>
        </div>
        <ul className={`hamburger-menu ${hamburgerMenu ? "show" : ""}`}>
          <li onClick={toggleMenu}>Subarashi</li>
          <li onClick={toggleMenu}>Subarashi</li>
          <li onClick={toggleMenu}>Subarashi</li>
          <li onClick={toggleMenu}>Subarashi</li>
        </ul>
      </nav>
      <main>
        <ProfilePage />
      </main>
    </div>
  )
}

export default App
