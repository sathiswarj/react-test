import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      Header
      <ul style={{ display: 'flex', gap: "20px", listStyleType: 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipe/recipe-list">Recipe List</Link></li>
        <li><Link to="/recipe/comments">Comments</Link></li>
      </ul>
    </div>
  )
}

export default Header