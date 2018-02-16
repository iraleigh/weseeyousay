module.exports = (req, res) => {
  res.render('home', { 
    instagramLoginUrl: `https://api.instagram.com/oauth/authorize/?client_id=f76f61f397944fe6811dbacc70aaaeba&redirect_uri=${process.env.INSTAGRAM_REDIRECT_URI}&response_type=code` 
  })
}