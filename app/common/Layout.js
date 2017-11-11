import React from 'react'
import Router from 'next/router'
import Loading from './Loading'
import Firebase from './Firebase'
import I18n from './I18n'
import Menu from './Menu'
import User from './User'
import NavBar from '../components/NavBar'
import { colors, sizes } from '../constants'

const redirectToLanding = () => {
  Router.router.replace('/index', '/')
  return null
}

export default (props) => (
  <Firebase>
    { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user ? (
      <I18n fb={fb}>
        { (i18n) => (
          <div className='wrapper app fade-in'>
            <div className='sidebar'>
              <User user={fb.user} />
              <Menu items={i18n.data.shows.tags} />
            </div>
            <div className='main'>
              <NavBar logout={logout} />
              <div className='content'>
                { props.children(fb, i18n) }
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
                display: flex;
                flex-direction: column;
                flex: 1;
                background: #fff;
              }
              .app .content {
                flex: 1;
                height: 100%;
                min-height: 0;
                overflow: auto;
                padding: ${sizes.padding}px;
              }
            `}</style>
          </div>
        ) }
      </I18n>
    ) : redirectToLanding() }
  </Firebase>
)
