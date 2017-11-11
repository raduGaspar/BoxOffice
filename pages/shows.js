import React from 'react'
import Layout from '../app/common/Layout'
import ShowsContainer from '../app/containers/ShowsContainer'

export default () => (
  <Layout>
    {(fb, i18n, filters) => (
      <ShowsContainer
        fb={fb}
        i18n={i18n}
        filters={filters}
      />
    )}
  </Layout>
)
