import React from 'react'
import Router from 'next/router'
import Loading from './Loading'
import Firebase from './Firebase'
import Menu from './Menu'
import User from './User'
import NavBar from '../components/NavBar'
import { colors, sizes } from '../constants'

const redirectToLanding = () => {
  Router.router.replace('/index', '/')
  return null
}

const menuData = [
  { label: 'All', value: 'all' },
  { label: 'Watching', value: 'watching' },
  { label: 'Plan to Watch', value: 'ptw' },
  { label: 'On-Hold', value: 'onhold' },
  { label: 'Dropped', value: 'dropped' },
  { label: 'Complete', value: 'complete' }
]

export default (props) => (
  <Firebase>
    { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user ? (
      <div className='wrapper app fade-in'>
        <div className='sidebar'>
          <User user={fb.user} />
          <Menu items={menuData} />
        </div>
        <div className='main'>
          <NavBar logout={logout} />
          <div className='content'>
            { props.children }
          </div>
        </div>
        <style jsx>{`
          .app {
            display: flex;
          }
          .app .sidebar {
            max-width: 250px;
            flex: 1;
            background: ${colors.gray.dark}
          }
          .app .main {
            flex: 1;
            background: #fff;
          }
          .app .content {
            padding: ${sizes.padding}px;
          }
        `}</style>
      </div>
    ) : redirectToLanding() }
  </Firebase>
)
