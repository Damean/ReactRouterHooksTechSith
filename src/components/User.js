import React from 'react'
import {useParams} from 'react-router'

function User() {
  const {firstname, lastname} = useParams()
  return (
    <div>
      User firstname: {firstname}, lastname {lastname}
    </div>
  )
}

export default User
