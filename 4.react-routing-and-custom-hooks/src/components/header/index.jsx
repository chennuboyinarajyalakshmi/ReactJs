import React from 'react'

function Header() {
  return (
    <header>
        <div>
      <h1>Welcome to Home Page</h1>
      <ul style={{display:'flex',gap:'20px', listStyle:'none'}} >
        <li>Recipes</li>
        <li>Comments</li>
      </ul>
    </div>
    </header>
  )
}


export default Header;