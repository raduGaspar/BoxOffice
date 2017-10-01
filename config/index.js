'use strict'

const ENV = (process.env.NODE_ENV || 'development').trim()
console.log(`loading ui config ${ENV}`)
const config = require(`./environments/${ENV.toLowerCase()}`)

module.exports = config
