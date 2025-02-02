import React from 'react'
import { Link, Outlet } from 'react-router-dom';
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page</p>

      {/* Link to Info Page */}
      <Link to="info">Go to Info</Link>

      {/* This will render the nested Info page when navigated */}
      <Outlet />
    </div>
  )
}
