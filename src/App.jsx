import { useEffect, useState } from 'react'
import './App.css'
import ProfilePage from './Test'

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const [count, setCount] = useState(0)
  // const [gender, setGender] = useState('')

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

      {/* <main>
        <div className="card">
          <h1>{count}</h1>
          <button onClick={() => { if (count < 10) setCount(count + 1) }}>Increase</button>
          <button onClick={() => { if (count > 0) setCount(count - 1) }}>Decrease</button>
        </div>
        <div className="profile">
          <p> {gender ? gender : "loading"}</p>
        </div>
      </main> */}
      <main>
        <ProfilePage />
      </main>
    </div>
  )
}

export default App
