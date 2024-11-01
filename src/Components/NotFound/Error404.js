import React from 'react'
import { Link } from 'react-router-dom'
const Error404 = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <Link to="/recipe-list">Go to recipe list page</Link>
    </div>
  )
}

export default Error404