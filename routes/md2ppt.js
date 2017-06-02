var express = require('express');
var router = express.Router();
var md2ppt = require('../api/md2ppt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var url = req.query.url
  var theme = req.query.theme || 'league'
  var trans = req.query.trans || 'slide'

  md2ppt(url, (html) => {
    var data = {
      html: html,
      transition: trans,
      theme: theme,
      align: 'align-center' //内容是不是居中
    }

    res.render('ppt', data)
  })
})

module.exports = router;
