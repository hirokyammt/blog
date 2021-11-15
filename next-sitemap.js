import { HOME_URL } from './lib/constants'

module.exports = {
  siteUrl: process.env.SITE_URL || {HOME_URL},
  generateRobotsTxt: true,
}
