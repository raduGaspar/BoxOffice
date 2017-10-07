import React from 'react'

export default (props) => (
  <div className='text-center fade-in'>
    <p className='app-title'>
      <img className='logo' src='/static/assets/favicon.png' alt='logo' />
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
        font-size: 100px;
        font-weight: bold;
        margin: 10px 0;
        align-items: center;
        justify-content: center;
      }
      .app-title .logo {
        margin-right: 2.5rem;
      }
    `}</style>
  </div>
)
