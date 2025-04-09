import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const err= useRouteError();
    console.log(err)
  return (
    <div>
        <h1>OOPS..</h1>
      <h2>{err.data}</h2>
      <h3>Status : {err.status}</h3>
    </div>
  )
}

export default Error


