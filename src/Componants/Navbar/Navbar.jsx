import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className='navbar1'>
          <h3> <span>NEW</span> MOVIE </h3>

        </div>

        <div className='navbar2'>
          <ul>
            <li>New Movie</li>
            <li>Genre</li>
            <li>Country</li>
            <li>Movie</li>
            <li>TV Series</li>
          </ul>
        </div>

        <div className='navbar4'>
          <p>|</p>

        </div>

        <div className='navbar3'>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-line-icon.svg" />
        </div>
      </div>
    </>
  )
}

export default Navbar