const log = require('winston')
const db = require('./db').db

const insert = (doc, id) => {
  return new Promise((resolve, reject) => {
    db.insert(doc, id, (err, body) => {
      if(err) return reject(err)
      resolve(body)
    })
  })
}

const view = (design, name, params = {}) => (
  new Promise((resolve, reject) => {
    log.debug('[view]: %s - %j', name, params)
    db.view(design, name, params, (err, body) => {
      if(err) return reject(err)
      resolve(body)
    })
  })
)

const get = id => (
  new Promise((resolve, reject) => {
    db.get(id, (err, body) => {
      if(err) return reject(err)
      resolve(body)
    })
  })
)

const bulk = docs => {
  new Promise((resolve, reject) => {
    db.bulk({ docs }, (err, body) => {
      if(err) return reject(err)
      resolve(body)
    })
  })
}

module.exports = {
  insert,
  view,
  get,
  bulk
}
