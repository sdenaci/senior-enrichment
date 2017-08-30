'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = db.model('campus')
const User = db.model('user')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/campuses', (req, res, next) => {
  Campus.findAll({})
    .then(campuses => res.json(campuses))
    .catch(next)
})

api.param('/campuses/campusId', (req, res, next, id) => {
  Campus.findById(id)
    .then(campus => {
      req.campus = campus;
      next();
      return null;
      })
  .catch(next);
})

api.get('/students', (req, res, next) => {
  User.findAll({})
    .then(users => res.json(users))
    .catch(next)
})

api.param('/students/studentId', (req, res, next, id) => {
  User.findById(id)
    .then(user => {
      req.user = user;
      next();
      return null;
      })
  .catch(next);
})

api.post('/campuses', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next)
})

api.post('/students', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).json(user))
    .catch(next)
})

api.put('campuses/:campusId', (req, res, next) => {
  req.campus.update(req.body)
    .then(campus => res.status(200).json(campus))
    .catch(next);
})

api.put('students/:studentId', (req, res, next) => {
  req.user.update(req.body)
    .then(user => res.status(200).json(user))
    .catch(next);
})

api.get('campuses/:campusId/delete', (req, res, next) => {
    Campus.destroy({
            where: {
                id: req.params.campusId
            }
        })
        .then(function () {
            res.redirect('/campuses');
        })
        .catch(next);

});

api.get('students/:studentId/delete', (req, res, next) => {
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
