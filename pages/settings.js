import React from 'react'
import Layout from '../app/common/Layout'
import SettingsContainer from '../app/containers/SettingsContainer'

export default () => (
  <Layout>
    {(fb, i18n) => (
      <SettingsContainer fb={fb} i18n={i18n} />
    )}
  </Layout>
)
