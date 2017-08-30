'use strict'
const api = require('express').Router()
const db = require('../../db')
const User = db.model('user')


api.get('/', (req, res, next) => {
  User.findAll({})
    .then(users => res.json(users))
    .catch(next)
})

api.get('/:studentId', function(req, res, next){
  User.findById(req.params.studentId)
    .then(student => res.send(student))
  .catch(next);
})
api.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
})



api.put('/:studentId', (req, res, next) => {
  req.user.update(req.body)
    .then(user => res.status(200).json(user))
    .catch(next);
})

api.get('/:studentId/delete', (req, res, next) => {
    User.destroy({
            where: {
                id: req.params.studentId
            }
        })
        .then(function () {
            res.redirect('/students');
        })
        .catch(next);

});

module.exports = api
