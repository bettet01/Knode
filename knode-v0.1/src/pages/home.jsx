import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <NavLink to={'/createKnode'}>Goto Knode Creation</NavLink>
      <br/>
      <NavLink to={'/profile'}>Profile</NavLink>
    </div>
  )
}

Home.propTypes = {

}

export default Home
