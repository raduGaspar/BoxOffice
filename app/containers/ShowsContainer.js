import React, { Component } from 'react'

class ShowsContainer extends Component {
  constructor (props) {
    super()
    const { db, user } = props.fb

    this.state = {
      shows: null
    }

    this.showsRef = db.ref(`users/${user.uid}/shows`)
    this.onShows = this.onShows.bind(this)
    this.getShowsList = this.getShowsList.bind(this)
  }

  componentWillMount () {
    this.showsRef.on('value', this.onShows)
  }

  onShows (snap) {
    const shows = snap.val()
    this.setState({
      shows
    })
  }

  getShowsList (shows) {
    return shows ? Object.keys(shows).map((showId) => (
      <div
        key={showId}
      >
        { shows[showId].name }
      </div>
    )) : null
  }

  render () {
    const { shows } = this.state

    return (
      <div>
        { this.getShowsList(shows) }
      </div>
    )
  }
}

export default ShowsContainer
