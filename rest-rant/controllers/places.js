const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
  name: 'H-Thai-ML',
  city: 'Seattle',
  state: 'WA',
  cuisines: 'Thai, Pan-Asian',
  pic: '/images/koreanrest.jpg'
}, {
  name: 'Coding Cat Cafe',
  city: 'Phoenix',
  state: 'AZ',
  cuisines: 'Coffee, Seafood',
  pic: '/images/seafoodrest.jpg'
}]

    res.render('places/index', {places})
})

module.exports = router
