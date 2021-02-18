var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log('Autenticando', req.body.username, req.body.password);
  const user = authenticate(req.body.username, req.body.password)
  if (user) {
    res.send(user);
  } else {
    res.status(400).json({
      status: 'error',
      message: 'Usuário não encontrado!'
    });
  }
});

function authenticate(username, password) {
  if (username === 'admin' && password === '123456')
    return {username: 'admin'};
  return false;
}

module.exports = router;
