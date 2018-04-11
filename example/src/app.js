import Emitter from 'emitter'

const emitter = new Emitter()

/* eslint-disable-next-line no-console */
const handler = () => console.log('emitted')

emitter.on('event', handler)
emitter.emit('event')
emitter.off('event', handler)
emitter.emit('event')