import React from 'react'

const Header = () => {
  return (
    <div>
      Header
      <ul style={{ display: 'flex', gap: "20px", listStyleType: 'none' }}>
        <li>Home</li>
        <li>Recipe List</li>
        <li>Comments</li>
      </ul>
    </div>
  )
}

export default Header