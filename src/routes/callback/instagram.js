const https = require('https')
const fetchAccessToken = require('../../../lib/instagram/fetch-access-token')

module.exports = (req, res) => {
  const renderUsers = (users) => {
    res.render('identified-users')
  }
  fetchIdendifiedUsers(req.query.code, renderUsers)
}

const fetchIdendifiedUsers = (code, renderUsers) => {
  let users = []
  const onDone = (json) => {
    console.log(json)
    renderUsers(users)
  }
  fetchAccessToken(code, onDone)
}

