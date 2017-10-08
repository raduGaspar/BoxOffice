import React from 'react'

import { sizes } from '../constants'

export default (props) => (
  <div className='text-center fade-in'>
    <p className='app-title'>
      <img className='logo' height={60} src='/static/assets/logo.svg' alt='logo' />
      BoxOffice
    </p>
    <button
      className='btn-login google'
      onClick={() => props.login()}
    >
      Login with Google
    </button>
    <div className='error'>{ props.error }</div>

    { /* language=CSS */ }
    <style>{`
      .error {
        color: #f00;
      }
      .app-title {
        color: #fff;
        display: flex;
        font-size: 80px;
        font-weight: bold;
        margin: 10px 0;
        align-items: center;
        justify-content: center;
      }
      .app-title .logo {
        border-radius: ${sizes.borderRadius}px;
      }
    `}</style>
  </div>
)
