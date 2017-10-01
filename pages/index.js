import React from 'react'
import Firebase from '../app/common/Firebase'
import Loading from '../app/common/Loading'
import Login from '../app/common/Login'
import Welcome from '../app/components/Welcome'

// get data and bind to changes
// firebase.database().ref('statuses').on('value', (snap) => {
//   this.setState({
//     statuses: snap.val()
//   })
// })

// add new show
// firebase.database().ref(`users/${user.uid}/shows`).push({
//   name: 'Test show',
//   rating: 5,
//   tags: ['pow', 'another', 'third']
// })

export default () => (
  <div className='wrapper'>
    <div className='status'>
      <Firebase>
        { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user ? (
          <div>
            <Welcome user={fb.user} />
            <button onClick={() => logout()}>Sign Out</button>
          </div>
        ) : <Login login={login} error={fb.error} /> }
      </Firebase>
    </div>

    <style jsx>{`
      .wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
      }
      .status {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
    `}</style>
  </div>
)
