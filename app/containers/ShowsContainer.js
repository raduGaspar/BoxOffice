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
    this.getEpisode = this.getEpisode.bind(this)
    this.getShowsList = this.getShowsList.bind(this)
  }

  componentWillMount () {
    this.showsRef.on('value', this.onShows)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.filters !== this.props.filters) {
      const query = nextProps.filters ? nextProps.filters.toLowerCase() : null
      this.showsRef
        .orderByChild('nameQuery')
        .startAt(query)
        .endAt(`${query}\uf8ff`)
        .once('value', this.onShows)
    }
  }

  onShows (snap) {
    const shows = snap.val()

    // watching
    this.setState({
      shows
    })
  }

  getEpisode (show) {
    if (show.onlyEps) {
      return `0${show.episode}`.slice(-2)
    } else {
      return `s${`0${show.season}`.slice(-2)}e${`0${show.episode}`.slice(-2)}`
    }
  }

  getShowsList (shows) {
    const { i18n } = this.props
    return shows ? Object.keys(shows).map((showId, idx) => (
      <div
        className={`show ${idx % 2 === 0 ? 'even' : 'odd'}`}
        key={showId}
      >
        { this.getEpisode(shows[showId]) }&nbsp;
        { shows[showId].name }&nbsp;
        { i18n.data.weekdays[shows[showId].airsOn] }
        <style jsx>{`
          .show {
            padding: 5px;
          }
          .show.odd {
            background: #ededed;
          }
        `}</style>
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
