import React, { Component } from 'react'
import firebase from 'firebase'
import config from '../../config'

class Firebase extends Component {
  state = {
    isLoading: true,
    error: null,
    user: null
  }

  handleError = (err) => {
    this.setState({
      isLoading: false,
      error: err.message
    })
  }

  handleLogin = () => {
    this.setState({ isLoading: true })
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(this.handleError)
  }

  handleLogout = () => {
    this.setState({ isLoading: true })
    firebase.auth().signOut()
  }

  updateUser = (user) => {
    const newState = {
      isLoading: false,
      error: null,
      user
    }
    if (user) {
      newState.auth = firebase.auth()
      newState.db = firebase.database()
    }
    this.setState(newState)
  }

  componentDidMount () {
    firebase.initializeApp(config.firebase)
    firebase.auth().onAuthStateChanged(this.updateUser)
  }

  render () {
    return (
      <div>
        {this.props.children(this.state, {
          login: this.handleLogin,
          logout: this.handleLogout,
        })}
      </div>
    )
  }
}

export default Firebase
