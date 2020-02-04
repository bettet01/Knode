import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Home = props => {
  return (
    <div>
      <NavLink to={'/createknode'}>Goto Knode Creation</NavLink>
    </div>
  )
}

Home.propTypes = {

}

export default Home
