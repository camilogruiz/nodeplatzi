'use strict'

const agent = {
  id: 1,
  uuid: 'xxx-xx-xxxx',
  name: 'fixture',
  username: 'platzi',
  hotsname: 'test-host',
  pid: 0,
  connected: true,
  createdAt: new Date(),
  updatedAt: new Date()
}

const agents = [
  agent,
  extend(agent, {id: 2, uuid: 'xxx-xx-xxxy', username: 'test', connected: false}),
  extend(agent, {id: 3, uuid: 'xxx-xx-xxxz'}),
  extend(agent, {id: 4, uuid: 'xxx-xx-xxxw', username: 'test'})
]

// Clonamos el objeto y agregamos nuevos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: agent,
  all: agents,
  connected: agents.filter(a => a.connected),
  platzi: agents.filter(a => a.username === 'platzi'),
  byUuid: id => agents.filter(a => a.uuid === id).shift(),
  byId: id => agents.filter(a => a.id === id).shift()
}
