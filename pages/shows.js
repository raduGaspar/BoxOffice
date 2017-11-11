import React from 'react'
import Layout from '../app/common/Layout'
import ShowsContainer from '../app/containers/ShowsContainer'

export default () => (
  <Layout>
    {(fb, i18n) => (
      <ShowsContainer fb={fb} i18n={i18n} />
    )}
  </Layout>
)
