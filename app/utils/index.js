const increaseEpisode = (show, increaseSeason) => {
  const update = {}
  if (increaseSeason && !show.onlyEps) {
    update.season = show.season + 1
    update.episode = 1
  } else {
    update.episode = show.episode + 1
  }

  return update
}

const decreaseEpisode = (show) => {
  const update = {}
  if (show.episode > 1) {
    update.episode = show.episode - 1
  } else {
    update.season = show.season - 1
    update.episode = 1
  }

  return update
}

const formatEpisode = (show) => {
  const { episode, season } = show
  const ep = episode < 10 ? `0${episode}` : episode
  const se = season < 10 ? `0${season}` : season

  return show.onlyEps ? ep : `s${se}e${ep}`
}

export {
  increaseEpisode,
  decreaseEpisode,
  formatEpisode
}
