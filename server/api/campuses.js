'use strict'
const api = require('express').Router()
const db = require('../../db')
const Campus = db.model('campus')


api.get('/', (req, res, next) => {
  Campus.findAll({})
    .then(campuses => res.json(campuses))
    .catch(next)
})

api.get('/:campusId', function(req, res, next){
  Campus.findById(req.params.campusId)
    .then(campus => res.send(campus))
  .catch(next);
})

api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.status(201).json(campus))
    .catch(next)
})
api.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: {
      id: req.params.campusId
    }
  })
  .then(() => res.send('successful'))
})

api.delete('/:campusId/delete', (req, res, next) => {
    Campus.findOne({
            where: {
                id: req.params.campusId
            }
        })
        .then((result) => {
          return Campus.destroy({
            where: {
              id: req.params.campusId
            }
          })
          .then((u) => {res.send(result)})
        .catch(next);
      })
      });

module.exports = api
