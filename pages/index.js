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
  <Firebase>
    { (fb, { login, logout }) => fb.isLoading ? <Loading /> : fb.user
      ? <Welcome user={fb.user} />
      : <Login login={login} error={fb.error} />
    }
  </Firebase>
)
