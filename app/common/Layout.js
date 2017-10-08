import React from 'react'
import Router from 'next/router'
import Loading from './Loading'
import Firebase from './Firebase'

const redirectToLanding = () => {
  Router.router.replace('/index', '/')
  return null
}

export default (props) => (
  <Firebase>
    { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user ? (
      <div className='fade-in'>
        <button onClick={() => logout()}>Sign Out</button>
        { props.children }
      </div>
    ) : redirectToLanding() }
  </Firebase>
)
