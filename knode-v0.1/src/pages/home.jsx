import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <NavLink to={'/create'}>Goto Knode Creation</NavLink>
      <br/>
      <NavLink to={'/profile'}>Profile</NavLink>
    </div>
  )
}

Home.propTypes = {

}

export default Home
