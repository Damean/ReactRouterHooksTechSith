import React from 'react'
import {useHistory, useLocation} from 'react-router'

function About() {

  const location = useLocation()
  const history = useHistory()

  return (
    <>
    <div>About</div>
    <div>pathname: {location.pathname}</div>
    <div>state: {JSON.stringify(location.state)}</div>
    <button onClick={() => history.goBack()}>Go Back</button>
    </>
  )
}

export default About
